import { ISmartDevice, OldVintageLamp } from "./devices";

// Adapter: hace que OldVintageLamp sea compatible con ISmartDevice.
// Aplica el patrón Adapter: traduce la interfaz vieja a la interfaz común.
export class OldVintageLampAdapter implements ISmartDevice {
  constructor(private oldLamp: OldVintageLamp) {}

  turnOn(): void {
    this.oldLamp.ignite();
  }

  turnOff(): void {
    this.oldLamp.extinguish();
  }
}
