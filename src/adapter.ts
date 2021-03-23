class RoundHole {
    constructor(public radius: number) {}

    fits(peg: Round): boolean {
        return peg.getRadius() <= this.radius;
    }
}

interface Round {
    getRadius(): number;
}

class RoundPeg implements Round {
    constructor(public radius: number) {}

    getRadius() {
        return this.radius;
    }
}

class SquarePeg {
    constructor(public width: number) {}
}

class SquareRoundPegAdapter implements Round {
    constructor(public squarePeg: SquarePeg) {}

    public getRadius() {
        return Math.sqrt(2 * this.squarePeg.width ** 2)/2
    }
}

const roundPeg = new RoundPeg(2);
const roundHole = new RoundHole(2);
const squarePeg = new SquarePeg(1);
const squarePegAdapter = new SquareRoundPegAdapter(squarePeg);
console.log(roundHole.fits(squarePegAdapter))