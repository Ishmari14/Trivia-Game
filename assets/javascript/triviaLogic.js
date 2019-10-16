///click event : start///


$(document).on('click', '#start', function (e) {
    start();
});

$(document).on('click', '#done', function (e) {
    done();
});

var contain = $('#area');

//questions///

var questions = [{
    qUEStions: "Who is the Avatar of Nyx?",
    choices: ['Ryoji', 'Minato', 'Yukari', 'Ken'],
    correctANswer: "Ryoji"
},

{
    qUEStions: "Who is the ruler of the Velvet Room?",
    choices: ['Philemon', 'Nyarleothep', 'Igor', 'Nyx'],
    correctANswer: "Igor"

},

{
    qUEStions: "Where can Mementos be found?",
    choices: ['Shibuya Station', 'Nagoya Station', 'Inaba', 'Xibailba'],
    correctANswer: "Shibuya Station"




}];

///variablesfor counter//

var correct = 0;
var incorrect = 0;
var counter = 30;

//start counter///

function start() {
    timer = setInterval(countingdown(),
        1000);

    $('#area').prepend('<h2>Remaining Time: <span id="counter-number">30</span> Seconds</h2>');
    $('#start').remove();
}

for (var i = 0; i < questions.length; i++) {
    contain.append('<h2>' + questions[i].qUEStions + '</h2>');

    for (var j = 0; j < questions[i].correctANswer.length; j++) {
        if ($(this).val() == questions[i].correctANswer) {
            correct++;
        }

        else {
            incorrect++;
        }
    }
}