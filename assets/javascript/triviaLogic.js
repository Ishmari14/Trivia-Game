//All elements first/// not to get confused/// again...

const start = document.getElementById("start-btn");
const trivia = document.getElementById("trivia");
const qImg = document.getElementById("question-img");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const scoreContainer = ("scoreContainer");

///questions and answers array///

var questions = [
    {
        question: "Who is the Avatar of Nyx",
        imgSrc: "assets/images/dark hour.jpg",
        choiceA: "Ryoji",
        choiceB: "Yukari",
        choiceC: "Minato",
        choiceD: "Shinjiro",
        correct: "A"

    },

    {
        question: "Who is the ruler of the Velvet Room?",
        imgSrc: "assets/images/velvet room.jpg",
        choiceA: "Philemon",
        choiceB: "Nyarleothep",
        choiceC: "Igor",
        choiceD: "Nyx",
        correct: "C"

    },

    {
        question: "Where can Mementos be found?",
        imgSrc: "assets/images/Mementos_Dungeon_Art_P5.png",
        choiceA: "Shibuya Station",
        choiceB: "Nagoya Station",
        choiceC: "Inaba",
        choiceD: "Xibalba",
        correct: "A"

    },

    {
        question: "What does S.E.E.S stand for?",
        imgSrc: "assets/images/SEES_Badge.jpg",
        choiceA: "Sacred Execution Excurstion Seed",
        choiceB: "Special Extra Excution Squad",
        choiceC: "Silver Extraction Edition Section",
        choiceD: "Specialized Extracurricular Execution Squad",
        correct: "D"

    },

    {
        question: "What is the date for the final battle in Persona 5?",
        imgSrc: "assets/images/satanael.jpg",
        choiceA: "New Years Day",
        choiceB: "Halloween",
        choiceC: "Christmas Eve",
        choiceD: "Girls Day",
        correct: "C"

    },

    {
        question: "What tarot card is repreentative of the main character in Persona 2: Innocent Sin?",
        imgSrc: "assets/images/Tatsuya.png",
        choiceA: "Moon",
        choiceB: "Death",
        choiceC: "Fool",
        choiceD: "Sun",
        correct: "D"

    },

];

//render for questions///

var lastquestionind = questions.length - 1;
var runningquestion = 0;

function renderquestions() {
    var q = questions[runningquestion];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    CountDown = setInterval(counterrnder, 1000);
}

///render counter///

const timequestion = 30; //30 seconds
const gaugewth = 200;
var count = 30;
const gaugeProgress = gaugewth / timequestion;
var CountDown;
var score = 0;

function counterrnder() {
    if (count <= timequestion) {
        counter.innerHTML = count;
        //timeGauge.style.width = count * gaugeProgress + "px";//
        count--;
    }

    else {
        count = 0;
        answerwrong();

        if (runningquestion < lastquestionind) {
            runningquestion++;
            renderquestions();
        }

    }
};

///start game///

start.onclick = function startGame() {
    start.style.display = "none";
    counterrnder();
    renderquestions();
    trivia.style.display = "block";
    console.log("start")


}


function checkAnswer(answer) {
    if (questions[runningquestion].correct == answer) {
        score++;
        console.log("something wrong");
        whatever();




    }
    if (runningquestion < lastquestionind) {
        count = 0;
        runningquestion++;
        whatever();
        renderquestions();


    }
    else {
        whatever();
        scorernder();
    }
}

function whatever() {

    clearInterval(CountDown);
    count = 30;

}

///render score///

function scorernder() {
    scoreContainer.style.display = "block";
    var scoreper = Math.round(100 * score / questions.length);
    var img = (scoreper >= 90) ? "assets/images/Mona Excited Face.png" :
        (scoreper >= 70) ? "assets/images/Mona Standard.png" :
            (scoreper >= 50) ? "assets/images/Mona Standard.png" :
                (scoreper >= 30) ? "" :
                    (scoreper >= 10) ? "" : "";

    scoreContainer.innerHTML = "<img src=" + img + "><p>" + scoreper + "%</p>";

}




