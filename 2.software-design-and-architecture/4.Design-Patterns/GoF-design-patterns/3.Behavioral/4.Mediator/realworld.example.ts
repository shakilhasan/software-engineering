interface Mediator {
    notify(sender: object, event: string, payload?: string): void;
}
class User {
    constructor(public name: string, private mediator: Mediator) {
        this.mediator.notify(this, 'subscribe');
    }
    receiveMessage(message: string) {
        console.log(`Message received by ${this.name}: ${message}`);
    }
    publishMessage(message: string) {
        this.mediator.notify(this, 'publish', message);
    }
}
class ChatAppMediator implements Mediator {
    private users: User[] = [];
    public notify(sender: object, event: string, payload?: string): void {
        if (event === 'subscribe') {
            const user = sender as User;
            console.log(`Subscribing ${user.name}`);
            this.users.push(user);
        }
        if (event === 'publish' && payload) {
            console.log(`Publishing message "${payload}" to the group`);
            const usersExcludingSender = this.users.filter(u => u !== sender);
            for (const user of usersExcludingSender) {
                user.receiveMessage(payload);
            }
        }
    }
}

// The client code
const chatAppMediator = new ChatAppMediator();
const user1 = new User('Lightning', chatAppMediator);
const user2 = new User('Doc', chatAppMediator);
const user3 = new User('Mater', chatAppMediator);

user1.publishMessage('Catchaw');
user2.publishMessage('Ey kid');
user3.publishMessage('Tomato');
