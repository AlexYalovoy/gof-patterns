namespace Factory_Method {

    interface Transport {
        carry: (laggage?: unknown) => void
    }

    abstract class Creator {
        public abstract createTransport() : Transport;

        public handleTransport() {
            const transport = this.createTransport();
            transport.carry();
        }
    }

    export class CarCreator extends Creator {
        public createTransport(): Car {
            return new Car();
        }
    }

    export class ShipCreator extends Creator {
        public createTransport(): Ship {
            return new Ship();
        }
    }

    class Car implements Transport {
        public carry(laggage: unknown): void {
            console.log(`Перевожу груз ${laggage ?? ''} по суше`);
        };
    }

    class Ship implements Transport {
        public carry(laggage: unknown): void {
            console.log(`Перевожу груз ${laggage ?? ''} по морю`);
        };
    }
}


namespace ClientCode {
    const creator = new Factory_Method.CarCreator();

    creator.handleTransport();
}