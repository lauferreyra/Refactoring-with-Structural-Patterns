export interface ISmartDevice {
  turnOn(): void;
  turnOff(): void;
}

// Dispositivo moderno sin logging interno (candidato a usar Decorator)
export class ModernLight implements ISmartDevice {
  turnOn(): void {
    console.log("Luz moderna: Encendida e iluminando.");
  }
  turnOff(): void {
    console.log("Luz moderna: Apagada.");
  }
}

// Dispositivo legacy incompatible (no implementa ISmartDevice)
export class OldVintageLamp {
  ignite(): void {
    console.log("Lámpara vieja: ¡Fuego! (Encendida con aceite)");
  }
  extinguish(): void {
    console.log("Lámpara vieja: Extinguida.");
  }
}

export class SmartTV implements ISmartDevice {
  turnOn(): void {
    console.log("TV: Encendida.");
  }
  turnOff(): void {
    console.log("TV: Apagada.");
  }
  setChannel(channel: number): void {
    console.log(`TV: Canal puesto en ${channel}`);
  }
}

export class AudioSystem implements ISmartDevice {
  turnOn(): void {
    console.log("Audio: Encendido.");
  }
  turnOff(): void {
    console.log("Audio: Apagado.");
  }
  setVolume(vol: number): void {
    console.log(`Audio: Volumen al ${vol}%`);
  }
}
