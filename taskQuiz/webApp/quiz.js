
var dict = {
    "Q1": "A1",
    'Q2':"A2",
    'Q3': "A3",
    'Q4': "A4",
    'Q5': "A5",
    'Q6': "A6",
    'Q7': "A7",
    'Q8': "A8",
    'Q9': "A9",
    'Q10':"A10",
    'Q11':"A11",
    'Q12':"A12",
    'Q13':"A13",
    'Q14':"A14",
    "Q15":"A15"
};
function fillForm() {

}

function checkQuiz() {
    var counter = 0;
    for(var key in dict) {
        var correctAnswer = dict[key];
        if (correctAnswer === document.getElementById(key).value) {
            counter++;
        }
    }
    var counter_element = document.getElementById("counter");
    counter_element.value = counter;

    $.post(
        "../services/quiz.php",
        {
          name: document.getElementById("name").value,
          surname: document.getElementById("surname").value,
          grade: counter,
        },
        function (data) {
            
            window.location.reload();
            
          }
    );
}


