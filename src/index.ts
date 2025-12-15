import { ISmartDevice, ModernLight, OldVintageLamp, SmartTV, AudioSystem } from "./devices";
import { OldVintageLampAdapter } from "./adapter";
import { LoggingDecorator } from "./decorator";
import { SmartHomeFacade } from "./facade";

// 1) Uso de Adapter para unificar interfaces.
console.log("--- Encendiendo todo con Adapter ---");

const devices: ISmartDevice[] = [
  new ModernLight(),
  new OldVintageLampAdapter(new OldVintageLamp())
];

devices.forEach(d => d.turnOn());

// 2) Uso de Decorator para agregar logging sin ensuciar la clase base.
console.log("\n--- Usando Decorator para Logging ---");
const plainLight = new ModernLight();
const loggedLight = new LoggingDecorator(plainLight);

loggedLight.turnOn();
loggedLight.turnOff();

// 3) Uso de Facade para simplificar el modo cine.
console.log("\n--- Usando Facade para Modo Cine ---");
const facade = new SmartHomeFacade(
  new ModernLight(),
  new SmartTV(),
  new AudioSystem()
);

facade.startMovieMode();
