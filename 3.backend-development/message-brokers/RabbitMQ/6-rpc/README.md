# 6. Remote procedure call (RPC)
##### - Run a function on a remote computer and wait for the result.
In the second tutorial we learned how to use Work Queues to distribute time-consuming tasks among multiple workers.

But what if we need to run a function on a remote computer and wait for the result? Well, that's a different story. This pattern is commonly known as Remote Procedure Call or RPC.

In this tutorial we're going to use RabbitMQ to build an RPC system: a client and a scalable RPC server. As we don't have any time-consuming tasks that are worth distributing, we're going to create a dummy RPC service that returns Fibonacci numbers.



> ##### A note on RPC
> Although RPC is a pretty common pattern in computing, it's often criticised. The problems arise when a programmer is not aware whether a function call is local or if it's a slow RPC. Confusions like that result in an unpredictable system and adds unnecessary complexity to debugging. Instead of simplifying software, misused RPC can result in unmaintainable spaghetti code.
>
> Bearing that in mind, consider the following advice:
>- Make sure it's obvious which function call is local and which is remote.
>- Document your system. Make the dependencies between components clear.
>- Handle error cases. How should the client react when the RPC server is down for a long time?
>
> When in doubt avoid RPC. If you can, you should use an asynchronous pipeline - instead of RPC-like blocking, results are asynchronously pushed to a next computation stage.

For details [here](https://www.rabbitmq.com/tutorials/tutorial-six-javascript.html)

## Topics cover here:
1. Callback queue 
2. Correlation Id

### 1. Callback queue

In general doing RPC over RabbitMQ is easy. A client sends a request message and a server replies with a response message. In order to receive a response we need to send a 'callback' queue address with the request. We can use the default exchange. Let's try it:
```javascript
channel.assertQueue('', {
exclusive: true
});

channel.sendToQueue('rpc_queue', Buffer.from('10'), {
replyTo: queue_name
});

// ... then code to read a response message from the callback queue ...
```
>#### Message properties
> The AMQP 0-9-1 protocol predefines a set of 14 properties that go with a message. Most of the properties are rarely used, with the exception of the following:
>- persistent: Marks a message as persistent (with a value of true) or transient (false). You may remember this property from the second tutorial.
>- content_type: Used to describe the mime-type of the encoding. For example for the often used JSON encoding it is a good practice to set this property to: application/json.
>- reply_to: Commonly used to name a callback queue.
>- correlation_id: Useful to correlate RPC responses with requests.

### 2. Correlation Id

In the method presented above we suggest creating a callback queue for every RPC request. That's pretty inefficient, but fortunately there is a better way - let's create a single callback queue per client.

That raises a new issue, having received a response in that queue it's not clear to which request the response belongs. That's when the correlation_id property is used. We're going to set it to a unique value for every request. Later, when we receive a message in the callback queue we'll look at this property, and based on that we'll be able to match a response with a request. If we see an unknown correlation_id value, we may safely discard the message - it doesn't belong to our requests.

You may ask, why should we ignore unknown messages in the callback queue, rather than failing with an error? It's due to a possibility of a race condition on the server side. Although unlikely, it is possible that the RPC server will die just after sending us the answer, but before sending an acknowledgment message for the request. If that happens, the restarted RPC server will process the request again. That's why on the client we must handle the duplicate responses gracefully, and the RPC should ideally be idempotent.

## Summary
![RPC](https://www.rabbitmq.com/img/tutorials/python-six.png)
Our RPC will work like this:
- When the Client starts up, it creates an anonymous exclusive callback queue.
- For an RPC request, the Client sends a message with two properties: reply_to, which is set to the callback queue and correlation_id, which is set to a unique value for every request.
- The request is sent to an rpc_queue queue.
- The RPC worker (aka: server) is waiting for requests on that queue. When a request appears, it does the job and sends a message with the result back to the Client, using the queue from the reply_to field.
- The client waits for data on the callback queue. When a message appears, it checks the correlation_id property. If it matches the value from the request it returns the response to the application.

## Putting it all together

The Fibonacci function:
```
function fibonacci(n) {
if (n == 0 || n == 1)
return n;
else
return fibonacci(n - 1) + fibonacci(n - 2);
}
```
We declare our fibonacci function. It assumes only valid positive integer input. (Don't expect this one to work for big numbers, and it's probably the slowest recursive implementation possible).

The code for our RPC server [rpc_server.js](rpc_server.js) looks like this.

The server code is rather straightforward:
- As usual we start by establishing the connection, channel and declaring the queue.
- We might want to run more than one server process. In order to spread the load equally over multiple servers we need to set the prefetch setting on channel.
- We use Channel.consume to consume messages from the queue. Then we enter the callback function where we do the work and send the response back.

The code for our RPC client [rpc_client.js](rpc_client.js)

Now is a good time to take a look at our full example source code for rpc_client.js and rpc_server.js.

Our RPC service is now ready. We can start the server:
```shell
node rpc_server
# => [x] Awaiting RPC requests
```
To request a fibonacci number run the client:
```shell
node rpc_client 30
# => [x] Requesting fib(30)
```
The design presented here is not the only possible implementation of a RPC service, but it has some important **advantages**:
- If the RPC server is too slow, you can scale up by just running another one. Try running a second rpc_server.js in a new console.
- On the client side, the RPC requires sending and receiving only one message. As a result the RPC client needs only one network round trip for a single RPC request.

Our code is still pretty simplistic and doesn't try to solve more complex (but important) **problems**, like:
- How should the client react if there are no servers running?
- Should a client have some kind of timeout for the RPC?
- If the server malfunctions and raises an exception, should it be forwarded to the client?
- Protecting against invalid incoming messages (eg checking bounds, type) before processing.
