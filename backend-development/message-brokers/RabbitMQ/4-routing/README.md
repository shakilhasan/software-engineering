# 4. Routing
#### -to subscribe only to a subset of the messages, selectively receiving
In the previous tutorial we built a simple logging system. We were able to broadcast log messages to many receivers.

In this tutorial we're going to add a feature to it - we're going to make it possible to subscribe only to a subset of the messages. For example, we will be able to direct only critical error messages to the log file (to save disk space), while still being able to print all of the log messages on the console.

For details [here](https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html)

## Topics cover here:
1. Bindings
2. Multiple bindings
3. Direct exchange
4. Emitting logs
5. Subscribing

### 1. Bindings

In previous examples we were already creating bindings. You may recall code like:

```channel.bindQueue(q.queue, exchange, '');```

A binding is a relationship between an exchange and a queue. This can be simply read as: the queue is interested in messages from this exchange.

Bindings can take an extra binding key parameter (the empty string in the code above). This is how we could create a binding with a key:

```channel.bindQueue(queue_name, exchange_name, 'black');```

The meaning of a binding key depends on the exchange type. The fanout exchanges, which we used previously, simply ignored its value.


### 2. Direct exchange

Our logging system from the previous tutorial broadcasts all messages to all consumers. We want to extend that to allow filtering messages based on their severity. For example we may want the script which is writing log messages to the disk to only receive critical errors, and not waste disk space on warning or info log messages.

We were using a fanout exchange, which doesn't give us much flexibility - it's only capable of mindless broadcasting.

We will use a direct exchange instead. The routing algorithm behind a direct exchange is simple - a message goes to the queues whose binding key exactly matches the routing key of the message.

To illustrate that, consider the following setup:
![](https://www.rabbitmq.com/img/tutorials/direct-exchange.png)

In this setup, we can see the direct exchange X with two queues bound to it. The first queue is bound with binding key orange, and the second has two bindings, one with binding key black and the other one with green.

In such a setup a message published to the exchange with a routing key orange will be routed to queue Q1. Messages with a routing key of black or green will go to Q2. All other messages will be discarded.


### 3. Multiple bindings
![Multiple Bindings](https://www.rabbitmq.com/img/tutorials/direct-exchange-multiple.png)

It is perfectly legal to bind multiple queues with the same binding key. In our example we could add a binding between X and Q1 with binding key black. In that case, the direct exchange will behave like fanout and will broadcast the message to all the matching queues. A message with routing key black will be delivered to both Q1 and Q2.


### 4. Emitting logs

We'll use this model for our logging system. Instead of fanout we'll send messages to a direct exchange. We will supply the log severity as a routing key. That way the receiving script will be able to select the severity it wants to receive. Let's focus on emitting logs first.

As always, we need to create an exchange first:
```javascript
var exchange = 'direct_logs';

channel.assertExchange(exchange, 'direct', {
durable: false
});
```
And we're ready to send a message:
```javascript
var exchange = 'direct_logs';

channel.assertExchange(exchange, 'direct', {
durable: false
});
channel.publish(exchange, severity, Buffer.from(msg));
```
To simplify things we will assume that 'severity' can be one of 'info', 'warning', 'error'.


### 5. Subscribing

Receiving messages will work just like in the previous tutorial, with one exception - we're going to create a new binding for each severity we're interested in.
```javascript
args.forEach(function(severity) {
channel.bindQueue(q.queue, exchange, severity);
});
```

## Putting it all together
![](https://www.rabbitmq.com/img/tutorials/python-four.png)
The code for [emit_log_direct.js](emit_log_direct.js) script.
The code for [receive_logs_direct.js](receive_logs_direct.js).

If you want to save only 'warning' and 'error' (and not 'info') log messages to a file, just open a console and type:

```shell
 node receive_logs_direct.js warning error > logs_from_rabbit.log 
 ```

If you'd like to see all the log messages on your screen, open a new terminal and do:
```shell
node receive_logs_direct.js info warning error #-1
node receive_logs_direct.js info #or warning or error #-2
# => [*] Waiting for logs. To exit press CTRL+C
```
And, for example, to emit an error log message just type:
```shell
node emit_log_direct.js error "Run. Run. Or it will explode."
# => [x] Sent 'error':'Run. Run. Or it will explode.'
```

## Limitations:
-  it can't do routing based on multiple criteria
