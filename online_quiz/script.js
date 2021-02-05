const quizData = [
    {
        question : "Which of the following is not JavaScript Data Types?",
        a: "Undefined",
        b: "Number",
        c: "Boolean",
        d: "Float",
        correct: "d",
    },
    {
        question : "Which company developed JavaScript?",
        a: "Netscape",
        b: "Bell Labs",
        c: "Sun Microsystems",
        d: "IBM",
        correct: "a",
    },
    {
        question : "Which of the following is correct about features of JavaScript?",
        a: "It can not Handling dates and time.",
        b: "JavaScript is a object-based scripting language.",
        c: "JavaScript is not interpreter based scripting language.",
        d: "All of the above",
        correct: "b",
    },
    {
        question : "Which of the following is not Javascript frameworks or libraries?",
        a: "Polymer",
        b: "Meteor",
        c: "Cassandra",
        d: "jQuery",
        correct: "c",
    },
    {
        question : "What is the original name of JavaScript?",
        a: "LiveScript",
        b: "EScript",
        c: "Mocha",
        d: "JavaScript",
        correct: "c",
    }
];


const questionEl = document.getElementById('question');
const option_a = document.getElementById('a_text');
const option_b = document.getElementById('b_text');
const option_c = document.getElementById('c_text');
const option_d = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

const result = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz(){
    deSelect();

    let currentQuizData =quizData[currentQuiz];
    questionEl.innerHTML = (currentQuiz+1)+'. '+currentQuizData.question;
    option_a.innerText = currentQuizData.a;
    option_b.innerText = currentQuizData.b;
    option_c.innerText = currentQuizData.c;
    option_d.innerText = currentQuizData.d;
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelect(){
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) => {
        answerEl.checked = false; 
    });
}


submitBtn.addEventListener("click",() => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct)   score++;
        
        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else{
            if(score < 3 )
                quiz.innerHTML = `<h1>You Failed <br> Your score is ${score} out of ${quizData.length}</h1>
                <button onclick="location.reload()">Reload</button>`;
            else
                quiz.innerHTML = `<h1> You Passed <br> Your score is ${score} out of ${quizData.length}</h1>
                <button onclick="location.reload()">Reload</button>`;
        }
    }
});