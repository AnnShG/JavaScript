//Public Class Method
class cars {
    constructor (mark, model, year, colour, engineType) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.colour = colour;
        this.engineType = engineType;
    }
    ShowInfo() {
        return this.mark + '<br>' + this.model +
        '<br>' + this.year + '<br>' + this.colour + 
        '<br>' + this.engineType;
    }
}

//Extend Class Method
class ExtendedCar extends cars {
    constructor (mark, model, year, colour, engineType, odometr) {
        super (mark, model, year, colour, engineType);
        this.odometr = odometr;
    }
    ShowExtendedInfo() {
        if (this.odometr > 2000) {
            this.odometrState = 'Used';
        } else {
            this.odometrState = 'New';
        }
        return super.ShowInfo() + '<br>' + this.odometrState + '<br>' + this.odometr; 
    }
}

//Private Class Method return
class privateCars {
    #mark
    #model
    #year
    #colour
    #engineType

    constructor (mark, model, year, colour, engineType) {
        this.#mark = mark;
        this.#model = model;
        this.#year = year;
        this.#colour = colour;
        this.#engineType = engineType;
    }
    ShowInfo() {
        return this.#mark + '<br>' + this.#model +
        '<br>' + this.#year + '<br>' + this.#colour + 
        '<br>' + this.#engineType;
    }
    getAllCars() {
        return this.ShowInfo();
    }
}

//Static Method Return
class staticCars {
    static mark = 'BMW';
    static model = 'X7';
    static year = 2021;
    static colour = 'red';
    static engineType = 'Petrol';

    ShowInfo() {
        return staticCars.mark + '<br>' + staticCars.model +
        '<br>' + staticCars.year + '<br>' + staticCars.colour +
        '<br>' + staticCars.engineType;
    }
}

//More car classes instances
var FirstCar = new cars ('Mercedes', 'Z6L', 2019, 'Grey', 'Petrol');
var SecondCar = new ExtendedCar ('Toyota', 'Giant', 2018, 'Blue', 'Petrol');
var ThirdCar = new privateCars ('Volkswagen', 'Luxury', 2019, 'Red', 'Diesel');
var FourthCar = new staticCars ();

//Calls on mouse over, with object ("element (this)") providing
function getCarDetails(element) {
    element.innerHTML = FirstCar.ShowInfo();
}

function getExtendedCarInfo(element) {
    element.innerHTML = SecondCar.ShowExtendedInfo();
}

function getPrivateCars(element) {
    element.innerHTML = ThirdCar.getAllCars();
}

function getStaticCars(element) {
    element.innerHTML = FourthCar.ShowInfo();
}