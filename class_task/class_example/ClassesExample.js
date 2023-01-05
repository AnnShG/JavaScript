class Person{
    #subjectType
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.#subjectType = "Client";
    }
    get birthYear()
    {
        return this.#getBirthYear(this.age);
    }
    #getBirthYear(age)
    {
        return new Date().getFullYear()-age;
    }
    static subject = "Client";
    static checkAge(age)
    {
        if (parseInt(age) >= 18)
        {return "(Adult)";}
        else {return "(Child)";}
    }
}