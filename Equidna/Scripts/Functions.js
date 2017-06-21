function truncate(x) {
    return Math.floor(x * 100) / 100;
}

class ConstantFunction {
    constructor(a)
    {
        this.a = a;
    }

    derivate() {
        return new ConstantFunction(0);
    }

    evaluate(x) {
        return this.a;
    }

    integrate(Constant) {
        return new LinearFunction(this.a, Constant)
    }
}

class LinearFunction {
    constructor(a, b)
    {
        this.a = a;
        this.b = b;
    }

    derivate() {
        return new ConstantFunction(this.a);
    }

    evaluate(x) {
        return this.a * x + this.b;
    }

    ToString()
    {
        return truncate(this.a) + "x + " +  truncate(this.b);
    }

    integrate(Constant) {
        return new QuadraticFunction(this.a / 2, this.b, Constant);
    }
}

class QuadraticFunction {
    constructor(a, b, c)
    {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    derivate() {
        return new LinearFunction(2 * this.a, this.b);
    }

    integrate(Constant) {
        return new CubicFunction(this.a / 3, this.b / 2, this.c, Constant)
    }

    evaluate(x) {
        return this.a * x * x + this.b * x + this.c;
    }

    ToString() {
        return truncate(this.a) + "x^2 + " + truncate(this.b) + "x + " + truncate(this.c);
    }
}

class CubicFunction {
    constructor(a, b, c, d)
    {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    derivate() {
        return new QuadraticFunction(3 * this.a, 2 * this.b, this.c);
    }

    evaluate(x) {
        return this.a * x * x * x + this.b * x * x + this.c * x + this.d;
    }

    ToString() {
        return truncate(this.a) + "x^3 + " + truncate(this.b) + "x^2 + " + truncate(this.c) + "x + " + truncate(this.d);
    }
}