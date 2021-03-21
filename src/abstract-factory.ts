interface AbstractFactory {
    createSedan(): AbstractSedan;
    createUniversal(): AbstractUniversal;
    createHatchback(): AbstractHatchback;
}

interface AbstractSedan {
    carry(): void;
    getLaggage(laggage?: unknown): void;
}

interface AbstractUniversal {
    carry(): void;
    getLaggage(laggage?: unknown): void;
}

interface AbstractHatchback {
    carry(): void;
}

class HyundayAccentSedan implements AbstractSedan {
    carry() {
        console.log('run on accent sedan');
    }
    getLaggage(laggage?: unknown) {
        console.log(`load ${laggage ?? 'nothing'} to the accent sedan`);
    };
}

class HyundayAccentUniversal implements AbstractUniversal {
    carry() {
        console.log('run on universal');
    }
    getLaggage(laggage?: unknown) {
        console.log(`load ${laggage ?? 'nothing'} to the accent universal`);
    };
}

class HyundayAccentHatchback implements AbstractHatchback {
    carry() {
        console.log('run on accent hatchback');
    }
}

class HyundayAccentFactory implements AbstractFactory {
    createSedan() {
        return new HyundayAccentSedan();
    }
    createUniversal() {
        return new HyundayAccentUniversal();
    }
    createHatchback() {
        return new HyundayAccentHatchback();
    }
}

const factory = new HyundayAccentFactory();

const sedan = factory.createSedan();
const hatchback = factory.createHatchback();
const universal = factory.createUniversal();

sedan.carry();
hatchback.carry();
universal.getLaggage();
