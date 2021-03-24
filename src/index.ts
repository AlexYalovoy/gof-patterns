import { Device, Remote } from "./bridge";

// Bridge
const tv = new Device(false, 1);
const remote = new Remote(tv);

remote.togglePower();
remote.channelUp();
remote.togglePower();