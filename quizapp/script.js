const questions = [
{
question:"What does HTML stand for?",
answers:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyperlink Markup Language",
"Home Tool Markup Language"
],
correct:0
},
{
question:"Which language is used for styling web pages?",
answers:[
"Python",
"Java",
"CSS",
"C"
],
correct:2
},
{
question:"Which language is used to make web pages interactive?",
answers:[
"HTML",
"JavaScript",
"CSS",
"SQL"
],
correct:1
},
{
question:"Which Bootstrap class creates a button?",
answers:[
".btn",
".button",
".btn-primary()",
".primary-btn"
],
correct:0
},
{
question:"Which tag is used to create a hyperlink?",
answers:[
"<img>",
"<a>",
"<div>",
"<link>"
],
correct:1
}
];

const question=document.getElementById("question");
const answerButtons=document.getElementById("answerButtons");
const nextBtn=document.getElementById("nextBtn");
const previousBtn=document.getElementById("previousBtn");
const restartBtn=document.getElementById("restartBtn");
const score=document.getElementById("score");
const questionNumber=document.getElementById("questionNumber");

let currentQuestion=0;
let scoreCount=0;
let answered=[];

showQuestion();

function showQuestion(){

answerButtons.innerHTML="";

questionNumber.innerText=`Question ${currentQuestion+1} of ${questions.length}`;

question.innerText=questions[currentQuestion].question;

questions[currentQuestion].answers.forEach((answer,index)=>{
	const button=document.createElement("button");
	// Use Bootstrap button classes for a light, basic look
	button.className="btn btn-outline-primary answer-btn";
	button.type = 'button';
	button.innerText=answer;
	button.addEventListener("click",function(){
		selectAnswer(index,button);
	});
	answerButtons.appendChild(button);
});

previousBtn.disabled=currentQuestion===0;

if(currentQuestion===questions.length-1){
nextBtn.innerText="Finish";
}
else{
nextBtn.innerText="Next";
}

}

function selectAnswer(index,button){

if(answered[currentQuestion]) return;

answered[currentQuestion]=true;

const buttons=answerButtons.children;

for(let i=0;i<buttons.length;i++){

buttons[i].disabled=true;

		if(i===questions[currentQuestion].correct){
			buttons[i].classList.add("correct");
			buttons[i].classList.remove('btn-outline-primary');
		}

}

	if(index===questions[currentQuestion].correct){
		button.classList.add("correct");
		button.classList.remove('btn-outline-primary');
		scoreCount++;
		score.innerText="Score : "+scoreCount;
	} else {
		button.classList.add("wrong");
		button.classList.remove('btn-outline-primary');
	}

}

nextBtn.addEventListener("click",function(){

if(currentQuestion<questions.length-1){

currentQuestion++;

showQuestion();

}
else{

showResult();

}

});

previousBtn.addEventListener("click",function(){

if(currentQuestion>0){

currentQuestion--;

showQuestion();

}

});

function showResult(){

question.innerHTML=`🎉 Quiz Completed!<br>Your Score : ${scoreCount} / ${questions.length}`;

questionNumber.innerText="";

answerButtons.innerHTML="";

nextBtn.style.display="none";

previousBtn.style.display="none";

restartBtn.style.display="inline-block";

}

restartBtn.addEventListener("click",function(){

currentQuestion=0;

scoreCount=0;

answered=[];

score.innerText="Score : 0";

restartBtn.style.display="none";

nextBtn.style.display="inline-block";

previousBtn.style.display="inline-block";

showQuestion();

});