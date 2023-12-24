let bootcampQuiz = {
    difficultyLevels: [
        {
            difficultyName: "Novice",
            allowed: true,
            introMessage: "Okay, let’s put you through your paces! These questions I will be asking you will be relatively easy. That means I’m expecting a flawless run; just like I did when I was in your position. We at BOOTCAMP have high expectations soo get too many questions wrong and you fail. Good Luck!",
            passMessage: "Well done, I had my doubts but you’ve done great. Anyways, let's not sit and dwell. There are even harder challenges that await. Shall we?",
            failMessage: "Disappointment is an understatement. Ahh well… at least you tried. We at BOOTCAMP hate failure but we do admire a tryer.",
            questions: [
                {
                    text: "Who wrote “Romeo and Juliet”?",
                    answers: [
                        {
                            text: "Christopher Marlowe",
                            correct: false,
                        },
                        {
                            text: "William Shakespeare",
                            correct: true,
                        },
                        {
                            text: "John Donne",
                            correct: false,
                        },
                        {
                            text: "Thomas Kyd",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the largest mammal in the world?",
                    answers: [
                        {
                            text: "Giraffe",
                            correct: false,
                        },
                        {
                            text: "Hippopotamus",
                            correct: false,
                        },
                        {
                            text: "African Elephant",
                            correct: false,
                        },
                        {
                            text: "Blue Whale",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "What is the main ingredient in guacamole?",
                    answers: [
                        {
                            text: "onions",
                            correct: false,
                        },
                        {
                            text: "avocado",
                            correct: true,
                        },
                        {
                            text: "peppers",
                            correct: false,
                        },
                        {
                            text: "apples",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "In what year did World War I end ?",
                    answers: [
                        {
                            text: "1916",
                            correct: false,
                        },
                        {
                            text: "1917",
                            correct: false,
                        },
                        {
                            text: "1918",
                            correct: true,
                        },
                        {
                            text: "1919",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "How many continents are there in the world?",
                    answers: [
                        {
                            text: "5",
                            correct: false,
                        },
                        {
                            text: "6",
                            correct: false,
                        },
                        {
                            text: "7",
                            correct: true,
                        },
                        {
                            text: "8",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Who wrote “The Big Friendly Giant”?",
                    answers: [
                        {
                            text: "Roald Dahl",
                            correct: true,
                        },
                        {
                            text: "J K Rowling",
                            correct: false,
                        },
                        {
                            text: "Harper Lee",
                            correct: false,
                        },
                        {
                            text: "Anthony Horowitz",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Who was the first President of the United States?",
                    answers: [
                        {
                            text: "George Washington",
                            correct: true,
                        },
                        {
                            text: "Abraham Lincoln",
                            correct: false,
                        },
                        {
                            text: "Franklin Roosevelt",
                            correct: false,
                        },
                        {
                            text: "John F Kennedy",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the chemical symbol for gold?",
                    answers: [
                        {
                            text: "Ae",
                            correct: false,
                        },
                        {
                            text: "Gu",
                            correct: false,
                        },
                        {
                            text: "Ca",
                            correct: false,
                        },
                        {
                            text: "Au",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "What is the primary gas that makes up Earth’s atmosphere?",
                    answers: [
                        {
                            text: "Hydrogen",
                            correct: false,
                        },
                        {
                            text: "Nitrogen",
                            correct: true,
                        },
                        {
                            text: "Oxygen",
                            correct: false,
                        },
                        {
                            text: "Carbon dioxide",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What colour combination gives you the colour brown?",
                    answers: [
                        {
                            text: "blue orange black",
                            correct: false,
                        },
                        {
                            text: "blue green red",
                            correct: false,
                        },
                        {
                            text: "red blue yellow",
                            correct: true,
                        },
                        {
                            text: "red orange yellow",
                            correct: false,
                        },
                    ],
                },
            ],
        },
        {
            difficultyName: "Advanced",
            allowed: false,
            introMessage: "So you’re no longer a novice. Pat yourself on the back. Now let’s see if you’ve got bottle! Many have got to this position and failed! In my years, I’ve seen many come with so much expectation yet, we sent them packing. I don’t know what it is but I see something in you. Let’s go Spark",
            passMessage: "You did superb! Amazing effort! You showed that you’ve got what it takes to complete BOOTCAMP. Let’s keep it up. We are nearly at the finish line. Almost there!",
            failMessage: "So close but yet so far. What a shame. I thought I saw something in… ahh it doesn’t matter. Are you going to quit like the rest ? Decision is yours.",
            questions: [
                {
                    text: "In which country would you find the pyramids of Giza?",
                    answers: [
                        {
                            text: "Morocco",
                            correct: false,
                        },
                        {
                            text: "Sudan",
                            correct: false,
                        },
                        {
                            text: "Egypt",
                            correct: true,
                        },
                        {
                            text: "Kenya",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the capital of Canada?",
                    answers: [
                        {
                            text: "Victoria",
                            correct: false,
                        },
                        {
                            text: "Montreal",
                            correct: false,
                        },
                        {
                            text: "Vancouver",
                            correct: false,
                        },
                        {
                            text: "Ottawa",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "What is the only planet in the solar system to rotate clockwise?",
                    answers: [
                        {
                            text: "Mercury",
                            correct: false,
                        },
                        {
                            text: "Venus",
                            correct: true,
                        },
                        {
                            text: "Uranus",
                            correct: false,
                        },
                        {
                            text: "Jupiter",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What tennis player has the most grand slam titles?",
                    answers: [
                        {
                            text: "Novak Djokovic",
                            correct: true,
                        },
                        {
                            text: "Rafael Nadal",
                            correct: false,
                        },
                        {
                            text: "Roger Federer",
                            correct: false,
                        },
                        {
                            text: "Andy Murray",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What famous music group made “Here Comes The Sun?",
                    answers: [
                        {
                            text: "Queen",
                            correct: false,
                        },
                        {
                            text: "The Beatles",
                            correct: true,
                        },
                        {
                            text: "The Rolling Stones",
                            correct: false,
                        },
                        {
                            text: "U2",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "In what year did World War II end?",
                    answers: [
                        {
                            text: "1942",
                            correct: false,
                        },
                        {
                            text: "1943",
                            correct: false,
                        },
                        {
                            text: "1944",
                            correct: false,
                        },
                        {
                            text: "1945",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "What is the largest bone in the human body?",
                    answers: [
                        {
                            text: "Tibia",
                            correct: false,
                        },
                        {
                            text: "Femur",
                            correct: true,
                        },
                        {
                            text: "Scapula",
                            correct: false,
                        },
                        {
                            text: "Humerus",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "How old was Queen Elizabeth when she died in 2022?",
                    answers: [
                        {
                            text: "94",
                            correct: false,
                        },
                        {
                            text: "95",
                            correct: false,
                        },
                        {
                            text: "96",
                            correct: true,
                        },
                        {
                            text: "97",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What animal has the most teeth?",
                    answers: [
                        {
                            text: "Crocodile",
                            correct: false,
                        },
                        {
                            text: "Shark",
                            correct: false,
                        },
                        {
                            text: "Snail",
                            correct: true,
                        },
                        {
                            text: "Snake",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the name of the fourth Harry Potter Book?",
                    answers: [
                        {
                            text: "Harry Potter and the Chamber of Secrets",
                            correct: false,
                        },
                        {
                            text: "Harry Potter and the Goblet of Fire",
                            correct: true,
                        },
                        {
                            text: "Harry Potter and the Cursed Child",
                            correct: false,
                        },
                        {
                            text: "Harry Potter and the Prisoner of Azkaban",
                            correct: false,
                        },
                    ],
                },
            ],
        },
        {
            difficultyName: "Expert",
            allowed: false,
            introMessage: "You are everything I thought you would be. Determined, Proficient, Talented. But now this is where all of your credentials will be tested. To now be a seasoned expert and graduate from BOOTCAMP you have to get past this last hurdle. You’ve got this. C’mon champ",
            passMessage: "Congratulations. I feel like a proud father. You have shown yourself to be an elite soldier and have now graduated through BOOTCAMP. Drinks are on me tonight. Woo Hoo!",
            failMessage: "Ohh noo… you almost had it! Valiant effort but still not enough. You lacked the cutting edge. You looked nervous. Scared! Too scared to give it one more go?",
            questions: [
                {
                    text: "Who is currently the richest man in the world?",
                    answers: [
                        {
                            text: "Elon Musk",
                            correct: true,
                        },
                        {
                            text: "Bill Gates",
                            correct: false,
                        },
                        {
                            text: "Jeff Bezos",
                            correct: false,
                        },
                        {
                            text: "Warren Buffet",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the largest Desert in the world?",
                    answers: [
                        {
                            text: "Antarctica",
                            correct: true,
                        },
                        {
                            text: "Sahara",
                            correct: false,
                        },
                        {
                            text: "Gobi",
                            correct: false,
                        },
                        {
                            text: "Arabian",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the largest Ocean in the world?",
                    answers: [
                        {
                            text: "Mediterranean",
                            correct: false,
                        },
                        {
                            text: "Pacific",
                            correct: true,
                        },
                        {
                            text: "Atlantic",
                            correct: false,
                        },
                        {
                            text: "Antarctic",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Who developed the theory of relativity?",
                    answers: [
                        {
                            text: "Steven Hawking",
                            correct: false,
                        },
                        {
                            text: "Charles Darwin",
                            correct: false,
                        },
                        {
                            text: "Albert Einstein",
                            correct: true,
                        },
                        {
                            text: "Isaac Newton",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the capital of Australia?",
                    answers: [
                        {
                            text: "Canberra",
                            correct: true,
                        },
                        {
                            text: "Sydney",
                            correct: false,
                        },
                        {
                            text: "Brisbane",
                            correct: false,
                        },
                        {
                            text: "Perth",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the currency of Bulgaria?",
                    answers: [
                        {
                            text: "Kuna",
                            correct: false,
                        },
                        {
                            text: "Euro",
                            correct: false,
                        },
                        {
                            text: "Lev",
                            correct: true,
                        },
                        {
                            text: "Bulga",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Which of these words are spelt incorrectly?",
                    answers: [
                        {
                            text: "Conscientious",
                            correct: false,
                        },
                        {
                            text: "Bouillabaisse",
                            correct: false,
                        },
                        {
                            text: "Buraeucracy",
                            correct: true,
                        },
                        {
                            text: "Manoeuvre",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the only animal to fly backwards?",
                    answers: [
                        {
                            text: "Eagle",
                            correct: false,
                        },
                        {
                            text: "Blue Macaw",
                            correct: false,
                        },
                        {
                            text: "Hummingbird",
                            correct: true,
                        },
                        {
                            text: "Parrot",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "The Statue of Liberty was a gift to The United States from which country?",
                    answers: [
                        {
                            text: "England",
                            correct: false,
                        },
                        {
                            text: "France",
                            correct: true,
                        },
                        {
                            text: "Belgium",
                            correct: false,
                        },
                        {
                            text: "Spain",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Which country won the 2022 World Cup?",
                    answers: [
                        {
                            text: "Argentina",
                            correct: true,
                        },
                        {
                            text: "Brazil",
                            correct: false,
                        },
                        {
                            text: "England",
                            correct: false,
                        },
                        {
                            text: "France",
                            correct: false,
                        },
                    ],
                },
            ],
        },
    ],
};

let currentQuestionIndex = 0;
let currentDifficultyLevel = null;
let score = 0;

function changePage(pageId) {
    let page = document.getElementById(pageId);
    let pages = document.getElementsByClassName("gameplay");
    for (let i = 0; i < pages.length; i++) {
        let currentPage = pages[i];
        currentPage.classList.remove("active");
    }
    page.classList.add("active");
}

function setDifficultyLevel() {
    let difView = "";

    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        let difficultyLevel = bootcampQuiz.difficultyLevels[i];

        if (difficultyLevel.allowed === true) {
            difView = difView + `<button onclick = "showQuestion(0, '${difficultyLevel.difficultyName}')" class = "difficulty-lvl-Btn">${difficultyLevel.difficultyName}</button>`;
            document.getElementById("intro-lvl-mesg").innerHTML = difficultyLevel.introMessage;
        } else {
            difView = difView + `<button class = "difficulty-lvl-Btn" disabled>${difficultyLevel.difficultyName}</button>`;
        }
    }
    document.getElementById("difficulty-lvls").innerHTML = difView;
}

function showQuestion(questionIndex, difficultyLevelName) {
    changePage("page-3");
    document.getElementById("next-btn").classList.remove("active");
    let questions = [];

    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        if (
            bootcampQuiz.difficultyLevels[i].difficultyName === difficultyLevelName
        ) {
            questions = bootcampQuiz.difficultyLevels[i].questions;
        }
    }
    let question = questions[questionIndex];

    let answerView = ``;
    for (let i = 0; i < question.answers.length; i++) {
        let answer = question.answers[i];
        answerView += `<button onclick="selectAnswer(${questionIndex}, '${difficultyLevelName}', ${i})" class="answer-btns">${answer.text}</button>`;
    }
    let view = `<h2 class="question">${question.text}</h2>
		<div id="answers"> ${answerView} </div>
                </div>`;

    document.getElementById("questions").innerHTML = view;

    currentQuestionIndex = questionIndex;
    currentDifficultyLevel = difficultyLevelName;
}

function checkAnswer(questionIndex, difficultyLevelName, answerIndex) {
    let questions = [];
    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        if (
            bootcampQuiz.difficultyLevels[i].difficultyName === difficultyLevelName
        ) {
            questions = bootcampQuiz.difficultyLevels[i].questions;
        }
    }

    let question = questions[questionIndex];
    let answerSelected = question.answers[answerIndex];

    return answerSelected.correct;
}

function selectAnswer(questionIndex, difficultyLevelName, answerIndex) {
    let answerButtons = document.getElementsByClassName("answer-btns");

    for (let i = 0; i < answerButtons.length; i++) {
        let answerButton = answerButtons[i];

        if (i == answerIndex) {
            let isCorrect = checkAnswer(questionIndex, difficultyLevelName, i);

            if (isCorrect !== true) {
                answerButton.classList.add("wrong");
            } else {
                score++;
            }
        }
        answerButton.setAttribute("disabled", true);
    }

    let questions = [];
    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        if (
            bootcampQuiz.difficultyLevels[i].difficultyName === difficultyLevelName
        ) {
            questions = bootcampQuiz.difficultyLevels[i].questions;
        }
    }

    let answers = questions[questionIndex].answers;

    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        if (answer.correct === true) {
            answerButtons[i].classList.add("active");
        }
    }

    document.getElementById("next-btn").classList.add("active");
}

function nextQuestion() {
    let questions = [];
    let passMessage = '';
    let failMessage = '';
    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {

        if (bootcampQuiz.difficultyLevels[i].difficultyName === currentDifficultyLevel) {
            questions = bootcampQuiz.difficultyLevels[i].questions;
            passMessage = bootcampQuiz.difficultyLevels[i].passMessage;
            failMessage = bootcampQuiz.difficultyLevels[i].failMessage;
        }
    }

    if (currentQuestionIndex + 1 >= questions.length) {
        let view = `You scored ${score} out of ${questions.length}.`;
        document.getElementById('end-score').innerHTML = view;
        changePage('page-4');

        if (((score / questions.length) * 100) >= 80) {
            document.getElementById('end-review').innerHTML = passMessage;
            document.getElementById('playagain-nextlevel').innerHTML = 'NEXT LEVEL';
            unlockNextLevel();
        } else {
            document.getElementById('end-review').innerHTML = failMessage;
            document.getElementById('playagain-nextlevel').innerHTML = 'PLAY AGAIN';

        }
    }
    else {
        showQuestion(currentQuestionIndex + 1, currentDifficultyLevel);
    }

}

function playAgain() {
    currentQuestionIndex = 0;
    currentDifficultyLevel = null;
    score = 0;

    changePage('page-2');
    setDifficultyLevel();
}

function unlockNextLevel() {

    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        let level = bootcampQuiz.difficultyLevels[i];

        if (level.difficultyName === currentDifficultyLevel) {
            if (bootcampQuiz.difficultyLevels[i + 1] !== undefined) {
                bootcampQuiz.difficultyLevels[i + 1].allowed = true;
            }
        }
    }

}

changePage("page-1");
setDifficultyLevel();
