#!/usr/bin/env node
// https://github.com/rabbitmq/rabbitmq-tutorials/blob/master/javascript-nodejs/src/rpc_server.js
const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'rpc_queue';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.prefetch(1);
        console.log(' [x] Awaiting RPC requests');
        channel.consume(queue, function reply(msg) {
            const n = parseInt(msg.content.toString());

            console.log(" [.] fib(%d)", n);

            const r = fibonacci(n);

            channel.sendToQueue(msg.properties.replyTo,
                Buffer.from(r.toString()), {
                    correlationId: msg.properties.correlationId
                });

            channel.ack(msg);
        });
    });
});

function fibonacci(n) {
    if (n === 0 || n === 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}
