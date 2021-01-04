const quizData = [
    {
        question: 'The language of Lakshadweep. a Union Territory of India, is',
        a: "Tamil",
        b: "Hindi",
        c: "Malayalam",
        d: "Telugu",
        correct: 'c'
    },
    {
        question: "In which group of places the Kumbha Mela is held every twelve years?",
        a:"Ujjain. Purl; Prayag. Haridwar",
        b:"Prayag. Haridwar, Ujjain,. Nasik",
        c:"Rameshwaram. Purl, Badrinath. Dwarika",
        d:"Chittakoot, Ujjain, Prayag,'Haridwar",
        correct: "b"
    },
    {
        question: "Which day is observed as the World Standards  Day?",
        a:"June 26",
        b:"Oct 14",
        c:"Nov 15",
        d:"Dec 2",
        correct: "b"
    },
    {
        question: "Who is the president of USA",
        a:"Ameya kherodkar",
        b:"Donald Trump",
        c:"Narendra Modi",
        d:"Joe Biden",
        correct: "d"
    },
    {
        question:"September 27 is celebrated every year as",
        a:"Teachers' Day",
        b:"National Integration Day",
        c:"World Tourism Day",
        d:"International Literacy Day",
        correct:"c"
    },
    {
        question:"'Good Friday' is observed to commemorate the event of",
        a:"birth of Jesus Christ",
        b:"birth of St. Peter",
        c:"crucification of Jesus Christ",
        d:"rebirth of Jesus Christ",
        correct:"c"
    },
    {
        question:" World Health Day is observed on",
        a:"April 7",
        b:"March 6",
        c:"March 15",
        d:"April 28",
        correct:"a"
    },
    {
        question:"Pongal is a popular festival of which state?",
        a:"Karnataka",
        b:"Kerala",
        c:"Tamil Nadu",
        d:"Andhra Pradesh",
        correct:"c"
    },
]

let currentQuiz = 0 ;
const quiz = document.getElementById('quiz');
const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('Submit');
var currentQuizData= null;
var score = 0 ;


loadQuiz();

function loadQuiz(){
    if(currentQuiz !=0)
        deSelectAnswer();
    currentQuizData = quizData[currentQuiz];
    questionEL.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected(){
    return document.querySelector("input[name=answer]:checked").id;
}

function deSelectAnswer(){
    const id = document.querySelector("input[name=answer]:checked").id;
    const element = document.getElementById(id);
    element.checked =false;
}

submitBtn.addEventListener("click",()=>{
    const getAnswer = getSelected();

    if(getAnswer.toString() == currentQuizData.correct.toString()){
        score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2> 
        <button onclick="location.reload()">Reload</button>`
    }
    
});
