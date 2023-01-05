class Client extends Person {
    constructor(name, surname, age, Id)
    {
        super(name, surname, age);
        this.clientId = Id;
    }

    get isSenior()
    {
        var by = super.birthYear;
        if (by < 1980)
        {
            return "(Senior)";
        }

        else {return "(Customer)"}
    }
}