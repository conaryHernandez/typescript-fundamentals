class Vehicule {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  // constructor(public color: string) {}

  protected honk(): void {
    console.log('beeb!!!!');
  }
}

class Car extends Vehicule {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('rum rum!!!!!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const carrito = new Car(4, 'red');
const vehicule = new Vehicule('orange');

carrito.startDrivingProcess();
// vehicule.honk();
