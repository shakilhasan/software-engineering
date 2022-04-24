# 6. RPC
### Run a function on a remote computer and wait for the result.
## Topics cover here:
- Callback queue
- Correlation Id

#### For details [here](https://www.rabbitmq.com/tutorials/tutorial-six-javascript.html)


## Commands:
assumes RabbitMQ is installed and running on localhost on the standard port (5672)
```sh
cd 6-rpc
node rpc_server
node rpc_client 30
```
## Advantages:
- If the RPC server is too slow, you can scale up by just running another one. Try running a second rpc_server.js in a new console. 
- On the client side, the RPC requires sending and receiving only one message. As a result the RPC client needs only one network round trip for a single RPC request.


## Limitations:
doesn't try to solve more complex (but important) problems, like:
- How should the client react if there are no servers running?
- Should a client have some kind of timeout for the RPC?
- If the server malfunctions and raises an exception, should it be forwarded to the client?
- Protecting against invalid incoming messages (eg checking bounds, type) before processing.

