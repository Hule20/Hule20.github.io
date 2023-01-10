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
        question: "Kronološki poredajte britanske premijere!:",
        answer: {
            1: "Winston Churchill",
            2: "John Major",
            3: "Tony Blair",
            4: "Boris Johnson"
        }
    },
    {
        question: "Poredaj kratice stručnih sprema počevši od najniže!",
        answer: {
            1: "NSS",
            2: "SSS",
            3: "VŠS",
            4: "VSS"
        }
    },
    {
        question: "Poredajte riječi Gibonnijeve pjesme!",
        answer: {
            1: "ja",
            2: "ću",
            3: "budan",
            4: "sanjati"
        }
    },
    {
        question: "Složite naslov znanog djela Simone de Beauvoir!",
        answer: {
            1: "uspomene",
            2: "dobro",
            3: "odgojene",
            4: "djevojke"
        }
    },
    {
        question: "Poredajte cvjetove od najmanjeg prema najvećem!",
        answer: {
            1: "tratinčica",
            2: "maslačak",
            3: "tulipan",
            4: "suncokret"
        }
    },
    {
        question: "Poredaj sljedeće korake u procesu disanja od udaha do izdaha:",
        answer: {
            1: "udah",
            2: "nakupljanje kisika u plućima",
            3: "izdah",
            4: "razmjena plinova u plućima"
        }
    },
    {
        question: "Poredaj sljedeće kontinente po veličini od najvećeg do najmanjeg:",
        answer: {
            1: "Azija",
            2: "Afrika",
            3: "Europa",
            4: "Antarktika"
        }
    },
    {
        question: "Poredaj sljedeće države po abecednom redu:",
        answer: {
            1: "Bosna i Hercegovina",
            2: "Hrvatska",
            3: "Slovenija",
            4: "Srbija"
        }
    },
    {
        question: "Poredaj sljedeće vrste ptica po veličini od najmanje do najveće:",
        answer: {
            1: "vrapče",
            2: "golub",
            3: "galeb",
            4: "orao"
        }
    },
    {
        question: "Poredaj sljedeće korake u procesu parenja životinja od početka do začeća:",
        answer: {
            1: "privlačenje",
            2: "ritualni ples",
            3: "parjenje",
            4: "začeće"
        }
    },
    {
        question: "Redoslijed procesa disanja od udaha do izdaha je: udah, nakupljanje kisika u plućima, izdah, razmjena plinova u plućima",
        answer: {
            1: "udah",
            2: "nakupljanje kisika u plućima",
            3: "izdah",
            4: "razmjena plinova u plućima"
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
    },
    {
        question: "Poredajte lektire od prvog osnovne do četvrtog srednje!",
        answer:
        {
            1: 'Crvenkapica',
            2: 'Junaci  Pavlove ulice',
            3: 'Antigona',
            4: 'Zločin i kazna'
        }
    },
    {
        question: "Sastavite rečenicu kojom Dinamovi kroničari opisuju partije Izeta Harjovića i Amera Gojaka!",
        answer:
        {
            1: 'nema',
            2: 'stranca',
            3: 'do',
            4: 'Bosanca'
        }
    },
    {
        question: "Poredajte hrvatske parkove prirode prema jugu!",
        answer:
        {
            1: 'Medvednica',
            2: 'Učka',
            3: 'Telašćica',
            4: 'Biokovo'
        }
    },
    {
        question: "Poredajte puhaće instrumente od najkraćeg prema najdužem!",
        answer:
        {
            1: 'pikolo',
            2: 'flauta',
            3: 'fagot',
            4: 'didžeridu'
        }
    },
    {
        question: "Složite nam dobru priču počevši od onoga što je uobičajeno prvo!",
        answer:
        {
            1: 'uvod',
            2: 'zaplet',
            3: 'vrhunac',
            4: 'rasplet'
        }
    },
    {
        question: "Poredajte književna djela prema broju riječi počevši od najsiromašnijeg po tom pitanju!",
        answer:
        {
            1: 'Mala sirena',
            2: 'Mali princ',
            3: 'Veliki Gatsby',
            4: 'Velika očekivanja'
        }
    },
    {
        question: "Krenuvši od one koja nikome ne stoji na leđima, poredajte životinje tako da tvore skulpturu bremenskih svirača!",
        answer:
        {
            1: 'magarac',
            2: 'pas',
            3: 'mačak',
            4: 'pijetao'
        }
    },
]

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const questionElem = document.getElementById("question");
const choicesElem = document.getElementById("choices");
const submitBtn = document.getElementById("submitBtn");

let randomQuestion = 0;
let correctAnswer = [];

let int = null;

startBtn.addEventListener('click', () => {
    startBtn.innerHTML = `Daj novo pitanje!`;
    submitBtn.style.visibility = 'visible';

    if (int !== null) {
        clearInterval(int);
        [milliseconds, seconds] = [0, 0];
        timerRef.innerHTML = `00 : 000`;
        
    }

    randomQuestion = Math.random() * questions.length | 0;
    questionElem.innerHTML = questions[randomQuestion].question;

    correctAnswer = Object.values(questions[randomQuestion].answer);

    let output = '';
    const choicesArr = getRandomisedOrderArray();
    const letters = ['A:', 'B:', 'C:', 'D:'];

    choicesArr.forEach((choice, index) => {
            output += `<button class="choiceBtns "><span id="answerLetter">${letters.at(index)}</span> ${choice}</button>`;
    })

    choicesElem.innerHTML = output;

    //Starts timer on loading with a 4 second delay
    setTimeout(() => {
        if (int !== null) {
            clearInterval(int);
        }

        int = setInterval(displayTimer, 10);
    }, 2000);
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
        answer = answer.slice(3);

        userAnswer.push(answer);
    }
}

console.log(userAnswer);

submitBtn.addEventListener("click", () => {
    if (userAnswer.toString() == correctAnswer.toString()) {
        alert(`Točno! Vrijeme: ${displayTimer()}`);
    } else {
        alert('Try again!');
    }

    window.location.href = window.location.href;
    clearInterval(int);
});

//TIMER
let [milliseconds, seconds] = [0, 0];
let timerRef = document.getElementById("timerDisplay");

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

    return timerRef.innerHTML = `${s}:${ms} s`;
}

