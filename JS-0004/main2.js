//function onLoad()
//{
    //0, 1, 2, 3, 4,... array counts from zero
    //cars=["BMW", "Volvo", "Saab", "Ford", "Opel"];
    //for (var i=0; i<cars.length ;i++)
    //{
        //if (cars[i]=="BMW")
    //{
        //allert("Found");
    //}
        
    //}
    //document.write("Array has finished to check!")
//}
function onLoad()
{
    //grepExample();
}
//function grepExample()

//function exampleSwitch()
//var x;
//var d=new Date().getDay();


var dummyArray =  [{
    "name": "Janis",
    "surname": "Berzs",
    "age":18
}, {
    "name": "Inga",
    "surname": "Liepa",
    "age":22
}, {
    "name": "Samanta",
    "surname": "Ozola",
    "age":29
}, {
    "name": "Samanta",
    "surname": "Egle",
    "age":25
}, {
    "name": "Zane",
    "surname": "Priede",
    "age":21
}]
var resultArray =  jQuery.grep(dummyArray, function(dt) {
    return (dt.name== 'Samanta' && dt.age>20);
});
for (var i=0;i<resultArray.length ;i++)
{
document.write(resultArray[i].name + " "+resultArray[i].surname+"<br>");
}
