"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_events_1 = require("node:events");
class VolumeControllerSubject extends node_events_1.EventEmitter {
    constructor() {
        super();
        this.on('newListener', (eventName) => {
            console.log(`Added a new listener to the '${eventName}' event`);
        });
        this.on('removeListener', (eventName) => {
            console.log(`Removed a listener of the ${eventName} event from the list`);
        });
    }
    _volume = 50;
    get volume() {
        return this._volume;
    }
    volumeUp() {
        this._volume += 5;
        this.emit('volumeUp', this._volume);
    }
    volumeDown() {
        this._volume -= 5;
        this.emit('volumeDown', this._volume);
    }
}
class LoggingObserver {
    volumeController;
    constructor(volumeController) {
        this.volumeController = volumeController;
        this.volumeController.on('volumeUp', this.volumeUpObserver);
        this.volumeController.on('volumeDown', this.volumeDownObserver);
    }
    stopObservingVolumeDown() {
        this.volumeController.removeListener('volumeDown', this.volumeDownObserver);
    }
    volumeUpObserver(volume) {
        console.log(`Volume up, now the volume value is ${volume}`);
    }
    volumeDownObserver(volume) {
        console.log(`Volume down, now the volume value is ${volume}`);
    }
}
//client code
const volumeController = new VolumeControllerSubject();
const loggingObserver = new LoggingObserver(volumeController);
volumeController.volumeUp();
volumeController.volumeDown();
volumeController.volumeUp();
volumeController.volumeDown();
loggingObserver.stopObservingVolumeDown();
volumeController.volumeUp();
volumeController.volumeDown();
volumeController.volumeUp();
volumeController.volumeDown();
