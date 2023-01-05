// class is a template for JS objects
//constructor() is a class method
// name and year are - class properties
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

/* when you have a class, you can use the class
            to create objects
*/

const myCar = new Car("Ford", 2014);
document.getElementById("car") = myCar.name + " " + myCar.year;
