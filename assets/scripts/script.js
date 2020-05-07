let question_placeholder;
let pos = 0;
let correct = 0;
let question, optA, optB, optC, optD;

const questions = [
    ["What is my name?","iLizzie","Something","Indaboski","LOL"],
    ["What is my age?", "21","26","34","28"],
    ["Where is my dream country?", "America","England","Germany","Finland"],
    ["What is my favorite color?", "Teal","Black","Purple","White"],
    ["My second career choice?", "Drawing","Interior","Fashion","Modelling"],
    ["My Last name?", "Damilola","Damola","Demola","Deola"]
];
const answers = ["iLizzie", "21", "Germany", "Black", "Interior","Damilola"];

const getElementAttr = (x) => document.querySelector(x);

const questionStatus = () => {
    question_placeholder = getElementAttr("#question-placeholder");
    let test_status = getElementAttr("#questionProgress");
    let opt_group = getElementAttr(".opt_group");
    if (pos >= questions.length) {
        question_placeholder.innerHTML = `You answered ${correct} questions correctly out of ${questions.length}`;
        test_status.innerHTML = "Quiz Completed";
        opt_group.innerHTML = `<button class="p-2 bg-teal-300 rounded-lg font-semibold hover:bg-teal-500" onclick="location.reload()">Retake Quiz?</button>`;
        pos = 0; correct = 0;

        return;
    }
    test_status.innerHTML = `Question ${pos+1} of ${questions.length}`;

    question = questions[pos][0];
    optA = questions[pos][1];
    optB = questions[pos][2];
    optC = questions[pos][3];
    optD = questions[pos][4];
    
  question_placeholder.innerHTML = `${question}`;

  opt_group.innerHTML = `<button class="p-2 bg-teal-300 rounded-full font-semibold hover:bg-teal-500" onclick=getAnswer("${optA}")>${optA}</button> <button class="p-2 bg-teal-300 rounded-full font-semibold hover:bg-teal-500" onclick=getAnswer("${optB}")>${optB}</button><button class="p-2 bg-teal-300 rounded-full font-semibold hover:bg-teal-500" onclick=getAnswer("${optC}")>${optC}</button><button class="p-2 bg-teal-300 rounded-full font-semibold hover:bg-teal-500" onclick=getAnswer("${optD}")>${optD}</button>`;
}

const getAnswer = (answer) =>{
    if(answer == answers[pos]) correct++;

    pos++;
    
    questionStatus();

}

questionStatus();