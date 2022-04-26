# rabbitmq-examples: Node.js code for RabbitMQ tutorials

### RabbitMQ is a message broker that allows you to publish messages to a queue and consume them from a queue.

Here you can find JavaScript (Node) code examples from [RabbitMQ
tutorials](https://www.rabbitmq.com/getstarted.html).

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
