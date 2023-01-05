const p1 = new person();
let p2, p3;

function LoadPersons()
{
    p1.name = "John";
    p1.name = "Smith";
    p1.age = 26;
    p2 = new Person("Kate", "Brown", 15);
    p3 = new Client("Samanta", "Stone", 26, 76548);
    document.getElementById("idSubject").innerHTML = Person.Subject;
    document.getElementById("ClientId").hidden=true;
}

function PersonCheck(pic)
{
    document.getElementById("ClientId").hidden=true;
    switch(pic.id)
    {
        case "person1":
            {
                LoadPerson(p1);
                break;
            }
        case "person2":
            {
                LoadPerson(p2);
                break;
            }
        case "person3":
            {
                LoadPerson(p3);
                document.getElementById("ClientId").hidden = false;
                document.getElementById("cId").innerHTML = p3.clientId + p3.isSenior;
                break;
            }
        default:
            {
                LoadPerson();
                break;
            }
    }
}

function LoadPerson(p)
{
    document.getElementById("pName").innerHTML = p.name;
    document.getElementById("pSurname").innerHTML = p.surname;
    document.getElementById("pBorn").innerHTML = p.birthYear + Person.checkAge (p.age);
}
