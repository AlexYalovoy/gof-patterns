export class Remote {
    constructor(private device: Device) {}

    channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
    }

    channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
    }

    togglePower() {
        this.device.togglePower();
    }
}

export class Device {
    constructor(private power: boolean, private chanel: number) {}

    togglePower(){
        this.power = !this.power;
    }

    isEnabled() {
        return this.power;
    }

    getChannel() {
        return this.chanel;
    }

    setChannel(channel: number) {
        if( this.power ) {
            this.chanel = channel;
        }
    }
}