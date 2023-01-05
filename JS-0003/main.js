// //function onLoad()
// //{
//     //0, 1, 2, 3, 4,... array counts from zero
//     //cars=["BMW", "Volvo", "Saab", "Ford", "Opel"];
//     //for (var i=0; i<cars.length ;i++)
//     //{
//         //if (cars[i]=="BMW")
//     //{
//         //allert("Found");
//     //}
        
//     //}
//     //document.write("Array has finished to check!")
// //}
// function onLoad()
// {
//     //grepExample();
// }
// //function grepExample()

// //function exampleSwitch()
// //var x;
// //var d=new Date().getDay();

// document.getElemetaryById("formSelect").reset();

// $("#tb_reg_name").onkeyup(function(){
//     alert();
//     $("#name").blur();
//     $("name").focus();
// }

// //function CheckRegName(object){
//     //var name = object.value;
//     //if(name.lenght>10)
//     //{
//         //alert("Name " + " are to long");
//    // }
//    // else {

//    // }
// //}



// function onload() {
//     // grepExample();
//     exSwitch();
//   }
  
//   function exSwitch() {
//     try {
//       var x;
//       var d = new Date().getDay();
  
//       switch (d) {
//         case 0: {
//           x = "monday";
//           break;
//         }
  
//         case 1: {
//           x = "1";
//           break;
//         }
//         case 2: {
//           x = "2";
//           break;
//         }
//         case 3: {
//           x = "3";
//           break;
//         }
//         case 4: {
//           x = "4";
//           break;
//         }
//         case 5: {
//           x = "friday";
//           break;
//         }
//         case 6: {
//           x = "6";
//           break;
//         }
  
//         default: {
//           x = unknown;
//           break;
//         }
//       }
//     } catch (error) {
//       document.getElementById("demo").innerHTML = error;
//     }
//     document.getElementById("demo").innerHTML = x;
//   }
  
//   function grepExample() {
//     var dummyArray = [
//       {
//         name: "Janis",
//         surname: "Berzs",
//         age: 18,
//       },
//       {
//         name: "Inga",
//         surname: "Liepa",
//         age: 22,
//       },
//       {
//         name: "Samanta",
//         surname: "Ozola",
//         age: 29,
//       },
//       {
//         name: "Samanta",
//         surname: "Egle",
//         age: 25,
//       },
//       {
//         name: "Zane",
//         surname: "Priede",
//         age: 21,
//       },
//     ];
//     var res = jQuery.grep(dummyArray, function (dt) {
//       return dt.name == "Samanta" && dt.age > 20;
//     });
  
//     for (var i = 0; i < res.length; i++) {
//       document.write(res[i].name + res[i].surname + "<br>");
//     }
//   }
  
//   function arrExample() {
//     cars = ["bmw", "volvo", "audi", "opel"];
//     for (var i = 0; i < cars.length; i++) {
//       if (cars[i] === "volvo") {
//         alert("found");
//       }
//     }
//     document.write("arr has finished to check");
//   }
// var resultArray =  jQuery.grep(dummyArray, function(dt) {
//     return (dt.name== 'Samanta' && dt.age>20);
// });
// for (var i=0;i<resultArray.length ;i++)
// {
// document.write(resultArray[i].name + " "+resultArray[i].surname+"<br>");
// }
