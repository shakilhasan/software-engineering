# 3. Publish/Subscribe
##### - Broadcast log messages to many receivers.
In the previous tutorial we created a work queue. The assumption behind a work queue is that each task is delivered to exactly one worker. In this part we'll do something completely different -- we'll deliver a message to multiple consumers. This pattern is known as "publish/subscribe".

To illustrate the pattern, we're going to build a simple logging system. It will consist of two programs -- the first will emit log messages and the second will receive and print them.

In our logging system every running copy of the receiver program will get the messages. That way we'll be able to run one receiver and direct the logs to disk; and at the same time we'll be able to run another receiver and see the logs on the screen.

Essentially, published log messages are going to be broadcast to all the receivers.

For details [here](https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html)

## Topics cover here:
1. [Exchanges](#1-exchanges)
2. [Temporary queues](#2-temporary-queues)
3. [Bindings](#3-bindings)

### 1. Exchanges:
In previous parts of the tutorial we sent and received messages to and from a queue. Now it's time to introduce the full messaging model in Rabbit.

#### Let's quickly go over what we covered in the previous tutorials:
- A producer is a user application that sends messages.
- A queue is a buffer that stores messages.
- A consumer is a user application that receives messages.

The core idea in the messaging model in RabbitMQ is that the producer never sends any messages directly to a queue. Actually, quite often the producer doesn't even know if a message will be delivered to any queue at all.

Instead, the producer can only send messages to an exchange. An exchange is a very simple thing. On one side it receives messages from producers and the other side it pushes them to queues. The exchange must know exactly what to do with a message it receives. Should it be appended to a particular queue? Should it be appended to many queues? Or should it get discarded. The rules for that are defined by the exchange type.
An exchange: The producer can only send messages to an exchange. One side of the exchange receives messages from producers and the other side pushes them to queues.

![exchange](https://www.rabbitmq.com/img/tutorials/exchanges.png)

There are a few exchange types available: direct, topic, headers and fanout. We'll focus on the last one -- the fanout. Let's create an exchange of this type, and call it logs:

```ch.assertExchange('logs', 'fanout', {durable: false})```

The fanout exchange is very simple. As you can probably guess from the name, it just broadcasts all the messages it receives to all the queues it knows. And that's exactly what we need for our logger.

#### * Listing exchanges

To list the exchanges on the server you can run the ever useful rabbitmqctl:

```sudo rabbitmqctl list_exchanges```

In this list there will be some amq.* exchanges and the default (unnamed) exchange. These are created by default, but it is unlikely you'll need to use them at the moment.

#### * The default exchange

In previous parts of the tutorial we knew nothing about exchanges, but still were able to send messages to queues. That was possible because we were using a default exchange, which is identified by the empty string ("").

Recall how we published a message before:

```channel.sendToQueue('hello', Buffer.from('Hello World!'));```

Here we use the default or nameless exchange: messages are routed to the queue with the name specified as first parameter, if it exists.

<br>  Now, we can publish to our named exchange instead:

```channel.publish('logs', '', Buffer.from('Hello World!'));```

The empty string as second parameter means that we don't want to send the message to any specific queue. We want only to publish it to our 'logs' exchange.

### 2. Temporary queues

As you may remember previously we were using queues that had specific names (remember hello and task_queue?). Being able to name a queue was crucial for us -- we needed to point the workers to the same queue. Giving a queue a name is important when you want to share the queue between producers and consumers.

But that's not the case for our logger. We want to hear about all log messages, not just a subset of them. We're also interested only in currently flowing messages not in the old ones. To solve that we need two things.

Firstly, whenever we connect to Rabbit we need a fresh, empty queue. To do this we could create a queue with a random name, or, even better - let the server choose a random queue name for us.

Secondly, once we disconnect the consumer the queue should be automatically deleted.

In the amqp.node client, when we supply queue name as an empty string, we create a non-durable queue with a generated name:

```
channel.assertQueue('', {
exclusive: true
});
```

When the method returns, the queue instance contains a random queue name generated by RabbitMQ. For example it may look like amq.gen-JzTY20BRgKO-HjmUJj0wLg.

When the connection that declared it closes, the queue will be deleted because it is declared as exclusive. You can learn more about the exclusive flag and other queue properties in the guide on queues.

### 3. Bindings
![](https://www.rabbitmq.com/img/tutorials/bindings.png)

The exchange sends messages to a queue. The relationship between the exchange and a queue is called a binding.

We've already created a fanout exchange and a queue. Now we need to tell the exchange to send messages to our queue. That relationship between exchange and a queue is called a binding.

```channel.bindQueue(queue_name, 'logs', '');```

From now on the logs exchange will append messages to our queue.

#### * Listing bindings

You can list existing bindings using, you guessed it,

```rabbitmqctl list_bindings```

## Putting it all together
![](https://www.rabbitmq.com/img/tutorials/python-three-overall.png)

The producer program, which emits log messages, doesn't look much different from the previous tutorial. The most important change is that we now want to publish messages to our logs exchange instead of the nameless one. We need to supply a routing key when sending, but its value is ignored for fanout exchanges. Here goes the code for [emit_log.js](emit_log.js) script.

As you see, after establishing the connection we declared the exchange. This step is necessary as publishing to a non-existing exchange is forbidden.

The messages will be lost if no queue is bound to the exchange yet, but that's okay for us; if no consumer is listening yet we can safely discard the message.

The code for [receive_logs.js](receive_logs.js).

If you want to save logs to a file, just open a console and type:
```shell
node receive_logs.js > logs_from_rabbit.log
 ```

If you wish to see the logs on your screen, spawn a new terminal and run:
```shell
node receive_logs #1
node receive_logs #2 
```

And of course, to emit logs type:
```shell
node emit_log "info: This is the log message"
```

Using rabbitmqctl list_bindings you can verify that the code actually creates bindings and queues as we want. With two receive_logs.js programs running you should see something like:
```shell
sudo rabbitmqctl list_bindings
# => Listing bindings ...
# => logs    exchange        amq.gen-JzTY20BRgKO-HjmUJj0wLg  queue           []
# => logs    exchange        amq.gen-vso0PVvyiRIL2WoV3i48Yg  queue           []
# => ...done.
```
The interpretation of the result is straightforward: data from exchange logs goes to two queues with server-assigned names. And that's exactly what we intended.


