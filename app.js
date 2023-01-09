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
const startBtn = document.getElementById("startBtn");
const questionElem = document.getElementById("question");
const choicesElem = document.getElementById("choices");
const submitBtn = document.getElementById("submitBtn");

let randomQuestion = 0;
let correctAnswer = [];

startBtn.addEventListener('click', () => {
    randomQuestion = Math.random() * questions.length | 0;
    questionElem.innerHTML = questions[randomQuestion].question;

    correctAnswer = Object.values(questions[randomQuestion].answer);

    let output = '';
    const choicesArr = getRandomisedOrderArray();

    choicesArr.forEach(choice => {
        output += `<button class="choiceBtns">${choice}</button>`;
    })

    choicesElem.innerHTML = output;

    //Starts timer on loading with a 4 second delay
    setTimeout(() => {
        if (int !== null) {
            clearInterval(int);
        }

        int = setInterval(displayTimer, 10);
    }, 3000);
});

function getRandomisedOrderArray() {
    let randomOrderArr = [];
    let choice;

    for (let index = 0; index < 4; index++) {

        do {
            let randomPropNumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1; //MIN 1, MAX 4
            choice = questions[randomQuestion].answer[randomPropNumber];
        } while (randomOrderArr.includes(choice))

        randomOrderArr.push(choice);
    }

    return randomOrderArr;
}

choicesElem.addEventListener("click", getAnswer);

let userAnswer = [];

function getAnswer(event) {

    const clicked = event.target;
    if (clicked.tagName === "BUTTON") {
        clicked.style.backgroundColor = 'rgb(58, 144, 26)';
        answer = clicked.textContent;
        //answer = answer.slice(0, 10);

        userAnswer.push(answer);
    }
}

submitBtn.addEventListener("click", () => {
    if (userAnswer.toString() == correctAnswer.toString()) {
        alert(`Correct! ${displayTimer()}`);
    } else {
        alert('Try again!');
    }

    window.location.href = window.location.href;
    clearInterval(int);

});

//TIMER
let [milliseconds, seconds] = [0, 0];
let timerRef = document.getElementById("timerDisplay");
let int = null;

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
    }

    let s = 0;
    let ms = 0;

    s = seconds < 10 ? "0" + seconds : seconds;
    ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    return timerRef.innerHTML = `${s} : ${ms}`;
}

