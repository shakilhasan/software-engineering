# rabbitmq-examples
### RabbitMQ is a message broker that allows you to publish messages to a queue and consume them from a queue.
#### These tutorials cover the basics of creating messaging applications using RabbitMQ
 
We'll use the  [amqp.node](http://www.squaremobius.net/amqp.node) client in this tutorial.

## Commands:
Installing RabbitMQ: Try the community Docker image or install from [here](https://www.rabbitmq.com/download.html)
```
# for RabbitMQ 3.9, the latest series
docker run -d -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
```
First, install amqp.node  using npm:
```sh
npm install amqplib
#Or install from the package.json file
npm install
```

## Examples:
goto a directory and run the example:
- 1-hello-world
- 2-world-queue


#### For details [here](https://www.rabbitmq.com/getstarted.html)
