# 5. Topics
### routing based on multiple criteria.
## Topics cover here:
- Topic exchange: 
    * routing_key: it must be a list of words, delimited by dots, like "quick.orange.rabbit".
    * binding key: \*(star) can substitute for exactly one word, # (hash) can substitute for zero or more words. like "\*.orange.*", "lazy.#" .


#### For details [here](https://www.rabbitmq.com/tutorials/tutorial-five-javascript.html)


## Commands:
assumes RabbitMQ is installed and running on localhost on the standard port (5672)
```sh
cd 5-topics
```
* Emit a log with a routing key "kern.critical" type:
```sh 
node emit_log_topic "kern.critical" "A critical kernel error"
```
* To receive all the logs:
```sh 
node receive_logs_topic "#"
```
* To receive all logs from the facility "kern":
```sh 
node receive_logs_topic "kern.*"
```
* To hear only about "critical" logs:
```sh 
node receive_logs_topic "*.critical"
```
* Can create multiple bindings:
```sh 
node receive_logs_topic "kern.*" "*.critical"
```
