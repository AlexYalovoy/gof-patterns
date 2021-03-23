class Prototype {
    public primitive: number;
    public object: Date;
    public circularReference: ObjectWithCircularReference;

    public clone(): this {
        const clone = Object.create(this);
        clone.object = Object.create(this.object);
        clone.circularReference = {
            prototype: clone
        }

        return clone;
    }
}

class ObjectWithCircularReference {
    prototype: Prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

const p1 = new Prototype();
p1.primitive = 245;
p1.object = new Date();
p1.circularReference = new ObjectWithCircularReference(p1);

const p2 = p1.clone();
console.log(p2.circularReference.prototype === p2)