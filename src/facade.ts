import { ISmartDevice, SmartTV, AudioSystem } from "./devices";

// Facade: expone operaciones de alto nivel para escenarios complejos.
// Oculta los detalles de coordinación entre varios dispositivos.
export class SmartHomeFacade {
  constructor(
    private light: ISmartDevice,
    private tv: SmartTV,
    private audio: AudioSystem
  ) {}

  startMovieMode(): void {
    console.log("\n--- Activando MODO CINE ---");
    this.light.turnOff();
    this.tv.turnOn();
    this.tv.setChannel(101); // Ej: Netflix
    this.audio.turnOn();
    this.audio.setVolume(50);
    console.log("¡Disfruta la película!");
  }
}
