$(document).ready(function () {

    $("#start").on('click', 'option', trivia.GameStart);
    $("#remaining-time").hide();
    $(document).on('click', 'option', trivia.Checker);
})

var triviaquest = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    answered: 0,

    time: 30,
    timeOn: false,
    timeId: '',

    //questions & answers///
}

var question = [{
    q1: "Who is the Avatar of Nyx?",
    q2: "Who is the ruler of the Velvet Room?",
    q3: "Where can Mementos be found?",
    q4: "What does S.E.E.S stand for?",
    q5: "Who is the serial killer in Persona 4?",
    q6: "How do you access the Metaverse in Persona 5?",
    q7: "What causes the strange occurences in Persona 2?",
    q8: "What is the ultimate personafication of death in Persona 3?",
    q9: "What is the date for the final battle in Persona 5?",
    q10: "What tarot card is repreentative of the main character in Persona 2: Innocent Sin?",

}];

var option = [{
    q1: []
}]

var choices = {
    q1: ['Ryoji', 'Minato', 'Yukari', 'Ken'],
}


///start game///



///render questions///

function renderQuestion() {

    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
}

//button hide//

$("#start").hide();


