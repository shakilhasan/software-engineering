# rabbitmq-examples: Node.js code for RabbitMQ tutorials

##### - RabbitMQ is a message broker that allows you to publish messages to a queue and consume them from a queue.
RabbitMQ is a message broker: it accepts and forwards messages. You can think about it as a post office: when you put the mail that you want posting in a post box, you can be sure that the letter carrier will eventually deliver the mail to your recipient. In this analogy, RabbitMQ is a post box, a post office, and a letter carrier.

The major difference between RabbitMQ and the post office is that it doesn't deal with paper, instead it accepts, stores, and forwards binary blobs of data ‒ messages.

RabbitMQ, and messaging in general, uses some jargon.

- Producing means nothing more than sending. A program that sends messages is a producer :
    
    ![A producer sends messages to a queue.](https://www.rabbitmq.com/img/tutorials/producer.png)


- A queue is the name for the post box in RabbitMQ. Although messages flow through RabbitMQ and your applications, they can only be stored inside a queue. A queue is only bound by the host's memory & disk limits, it's essentially a large message buffer. Many producers can send messages that go to one queue, and many consumers can try to receive data from one queue. This is how we represent a queue:
   
    ![A queue is the name for the post box in RabbitMQ.](https://www.rabbitmq.com/img/tutorials/queue.png)


- Consuming has a similar meaning to receiving. A consumer is a program that mostly waits to receive messages:
    
    ![A consumer receives messages.](https://www.rabbitmq.com/img/tutorials/consumer.png)

Note that the producer, consumer, and broker do not have to reside on the same host; indeed in most applications they don't. An application can be both a producer and consumer, too.

For details [here](https://www.rabbitmq.com/getstarted.html)


## Requirements:
You need RabbitMQ, [Node.js](https://nodejs.org/en/download/) and [amqp.node](https://github.com/squaremo/amqp.node)
to run these tutorials.
## Commands:
* Installing RabbitMQ: Try the community Docker image or install from [here](https://www.rabbitmq.com/download.html)
```
# for RabbitMQ 3.9, the latest series
docker run -d -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
```
Now RabbitMQ management interface is available on port [15672](http://localhost:15672). 
* First, install amqp.node  using npm:
```sh
npm install amqplib
#Or install from the package.json file
npm install
```

## Examples:
goto a directory and run the example:
- 1-hello-world
- 2-world-queue
- 3-publish-subscribe
- 4-routing
- 5-topics
- 6-rpc
