# 2. Work queues

## Topics cover here:
- Round-robin dispatching
- Message acknowledgment
- Message durability
- Fair dispatch

#### For details [here](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html)

## Commands:
assumes RabbitMQ is installed and running on localhost on the standard port (5672)
```sh
cd 1-hello-world
node new_task
node worker
```