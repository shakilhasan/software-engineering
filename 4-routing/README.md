# 3. Publish/Subscribe
### to subscribe only to a subset of the messages, selectively receiving
## Topics cover here:
- Bindings
- Direct exchange
- Emitting logs
- Subscribing

#### For details [here](https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html)


## Commands:
assumes RabbitMQ is installed and running on localhost on the standard port (5672)
```sh
cd 4-routing
node emit_log_direct info #or warning or error
node receive_logs_direct info "The message"
```

* to save only 'warning' and 'error' messages to a file:
```sh
node receive_logs_direct warning error > logs_from_rabbit.log
```

* see all the log messages on your screen
```sh
node receive_logs_direct info warning error
```

## Limitations:
-  it can't do routing based on multiple criteria
