// Questions that will be asked
const Questions = [{
    q: "Which movie did Jake Gyllenhaal NOT cast in?",
    a: [{ text: "Nightcrawler", isCorrect: false },
    { text: "Demolition", isCorrect: false },
    { text: "Wolf of Wall Street", isCorrect: true },
    { text: "Prisoners", isCorrect: false }
    ]
 
},
{
    q: "Which movie out of the following did Jake and his sister Maggie star in together?",
    a: [{ text: "Moonlight Mile", isCorrect: false, isSelected: false },
    { text: "Stranger than Fiction", isCorrect: false },
    { text: "Secretary", isCorrect: false },
    { text: "Donnie Darko", isCorrect: true }
    ]
 
},
{
    q: "What is Jake Gyllenhaal's character's name in the 1999 film 'October Sky'?",
    a: [{ text: "Riley", isCorrect: false },
    { text: "Joe", isCorrect: false },
    { text: "Homer", isCorrect: true },
    { text: "Cooper", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}