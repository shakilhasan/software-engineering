import {EventEmitter} from 'node:events';

class VolumeControllerSubject extends EventEmitter {
    constructor() {
        super();
        this.on('newListener', (eventName) => {
            console.log(`Added a new listener to the '${eventName}' event`);
        });
        this.on('removeListener', (eventName) => {
            console.log(`Removed a listener of the ${eventName} event from the list`);
        });
    }

    private _volume: number = 50;

    public get volume(): number {
        return this._volume;
    }

    volumeUp(): void {
        this._volume += 5;
        this.emit('volumeUp', this._volume);
    }

    volumeDown(): void {
        this._volume -= 5;
        this.emit('volumeDown', this._volume);
    }
}

class LoggingObserver {
    constructor(private volumeController: VolumeControllerSubject) {
        this.volumeController.on('volumeUp', this.volumeUpObserver);
        this.volumeController.on('volumeDown', this.volumeDownObserver);
    }

    public stopObservingVolumeDown() {
        this.volumeController.removeListener('volumeDown', this.volumeDownObserver);
    }

    private volumeUpObserver(volume:any) {
        console.log(`Volume up, now the volume value is ${volume}`);
    }

    private volumeDownObserver(volume:any) {
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
