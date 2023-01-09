let questions = [
    {
        question: "Poredajte međunarodne organizacije prema broju članica, počevši s onom koja ih ima najviše!",
        answer:
        {
            1: 'UN',
            2: 'NATO',
            3: 'EU',
            4: 'G7'
        }
    },
    {
        question: "Poredajte riječi tako da tvore poznatu jezikolomku!",
        answer:
        {
            1: 'Petar',
            2: 'Petru',
            3: 'Plete',
            4: 'Petlju'
        }
    }
]

const questionElem = document.getElementById("question");
const choicesElem = document.getElementById("choices");
const submitBtn = document.getElementById("submitBtn");


let randomQuestion = Math.random() * questions.length | 0;
questionElem.innerHTML = questions[randomQuestion].question;

const NR_OF_CHOICES = 4;

function getChoices() {
    let output = '';
    const choicesArr = getRandomisedOrderArray();

    choicesArr.forEach(choice => {
        output += `<button class="choiceBtns">&#x2666; ${choice}</button>`;
    })

    choicesElem.innerHTML = output;
}

function getRandomisedOrderArray() {
    let randomOrderArr = [];
    let choice;

    for (let index = 0; index < NR_OF_CHOICES; index++) {

        do {
            let randomPropNumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1; //MIN 1, MAX 4
            choice = questions[randomQuestion].answer[randomPropNumber];
        } while (randomOrderArr.includes(choice))

        randomOrderArr.push(choice);
    }

    return randomOrderArr;
}

getChoices();

const correctAnswer = Object.values(questions[randomQuestion].answer);
console.log(correctAnswer);

choicesElem.addEventListener("click", getAnswer);
let chosenAnswer = [];

function getAnswer(event) {
    const clicked = event.target;
    if (clicked.tagName === "BUTTON") {
        clicked.style.backgroundColor = 'rgb(58, 144, 26)';
        answer = clicked.textContent;
        answer = answer.slice(0, 10);
        
        chosenAnswer.push(answer);
    }
}

console.log(chosenAnswer);

//TIMER

let [milliseconds, seconds] = [0, 0];
let timerRef = document.getElementById("timerDisplay");
let int = null;

//Starts timer on loading with a 4 second delay
window.addEventListener("load", () => {
    setTimeout(() => {
        if (int !== null) {
            clearInterval(int);
        }

        int = setInterval(displayTimer, 10);
    }, 4000)
});

let s = 0;
let ms = 0;

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
    }

    s = seconds < 10 ? "0" + seconds : seconds;
    ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${s} : ${ms}`;
}

submitBtn.addEventListener("click", () => {
    if (chosenAnswer.toString() == correctAnswer) {
        alert(`Correct! ${s}:${ms}`);
    } else {
        alert('Try again!');
    }

    window.location.href = window.location.href;
    clearInterval(int);

});