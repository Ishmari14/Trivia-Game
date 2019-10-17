///click event : start///
$(document).ready(function () {

    $("#start").on('click', items.start);
    $(document).on('click', '.options', trivia.guesses);









    var items = {

        //variables for the starting functions//
        correct = 0,
        wrong = 0,
        current = 0,
        counter = 30,
        counterID = '',
        counterON = false,

        ///start function///

        start: function () {

            items.correct = 0;
            items.wrong = 0;
            items.current = 0;

            //clear///
            clearInterval(items.counterID);



        }

//questions///
        question: {
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

        },

        choices: {
            q1: ['Ryoji', 'Minato', 'Yukari', 'Ken'],
            q2: ['Philemon', 'Nyarleothep', 'Igor', 'Nyx'],
            q3: ['Shibuya Station', 'Nagoya Station', 'Inaba', 'Xibailba'],
        },

        answer: {
            q1: "Ryoji",
            q2: "Igor",
            q3: "Shibuya Station",
        },


    }