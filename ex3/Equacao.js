export class Equacao {

    constructor(val1,val2,val3) {
        this.a = val1,
        this.b = val2,
        this.c = val3 
    }

    delta() {
        let deltaValue = (this.b**2) - 4 * this.a * this.c;
        return deltaValue
    }

    retornaX1() {
        let x1 = (-this.b + Math.sqrt(this.delta())) / 2 * this.a
        return x1;
    }

    retornaX2() {
        let x2 = (-this.b - Math.sqrt(this.delta())) / 2 * this.a
        return x2;
    }

}