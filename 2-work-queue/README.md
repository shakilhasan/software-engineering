# 2. Work queues

a Work Queue that will be used to distribute time-consuming tasks among multiple workers.
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
node new_task "A very hard task which takes two seconds.."
node worker
```