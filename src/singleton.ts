class Singleton {
    private constructor() {

    }

    private static instance: Singleton;

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return this.instance;
    }
}

const singletonInstance = Singleton.getInstance();