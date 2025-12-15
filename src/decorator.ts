import { ISmartDevice } from "./devices";

// Decorator: agrega logging sin modificar la clase concreta.
// Envuelve cualquier ISmartDevice y le suma comportamiento antes/después.
export class LoggingDecorator implements ISmartDevice {
  constructor(private wrapped: ISmartDevice) {}

  turnOn(): void {
    console.log("LOG: Encendiendo dispositivo...");
    this.wrapped.turnOn();
  }

  turnOff(): void {
    console.log("LOG: Apagando dispositivo...");
    this.wrapped.turnOff();
  }
}
