class Auto {
    constructor(brand, maxSpeed) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.engine = false;
        this.speed = 0;
    }

    startEngine() {
        this.engine = true;
        console.log('Engine start');
    }

    stopEngine() {
        this.engine = false;
        console.log('Engine stop');
    }

    speedUp(amount) {
        if (this.engine) {
            this.speed = Math.min(this.speed + amount, this.maxSpeed);
            console.log(`Your speed is ${this.speed}`)
        } else {
            console.log('Start engine first');
        }
    }

    slowDown(amount) {
        this.speed = Math.max(this.speed - amount, 0);
        console.log(`Your speed is ${this.speed}`)
    }
}

// const bmw = new Auto('bmw', '140');
// bmw.startEngine();
// bmw.speedUp(123);
// bmw.speedUp(123);
// bmw.stopEngine();
// bmw.slowDown(123);
// bmw.slowDown(300);


class Van extends Auto {
    constructor(brand, maxSpeed, seats) {
        super(brand, maxSpeed);
        this.seats = seats;
    }

    speedUp(amount) {
        super.speedUp(amount * 0.9);
    }

    emergencyStart() {
        this.startEngine();
    }

    stopEngine() {
        if (!this.speed) {
            super.stopEngine()
        } else {
            console.log('Slow Down first')
        }
    }
}

const bmw = new Van('Seria 2', 160, 7);
bmw.startEngine();
bmw.speedUp(123);
bmw.speedUp(123);
bmw.stopEngine();
bmw.slowDown(123);
bmw.slowDown(300);

// super wywołuje konstruktor klasy rodzica 

