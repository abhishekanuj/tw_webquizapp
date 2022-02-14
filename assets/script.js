
const quest = document.getElementById('question');
const mainContent=document.getElementById("playground");
let questionIndex =0;
const time = document.getElementById("time"); 
const option=document.getElementsByClassName("options");
let timeINterval=10;
let points=0;
const highscores_name=[];





function startQuiz(){
  const name=document.getElementById("name").value;
  //console.log(typeof name);
  
  document.getElementById("your-name").innerHTML="player name:  "+name;
  console.log(document.getElementById("your-name").innerHTML);
  document.getElementById("intro").style.display="none";
  mainContent.style.display="block";
  time.innerHTML="Time: "+timeINterval; 
  timestart();
  quest.innerHTML=questions[questionIndex].questionText;

for(let i=0;i<questions.length;i++){
    for(let j=0;j<4;j++){
      document.getElementById(j+1).innerHTML=questions[questionIndex].options[j];
    }
 }

};

let check=false;
Array.from(option).forEach(function(element) {
  element.addEventListener('click', (e)=>{
   check = checkAnswer(e.target.innerText);
    console.log(e.target.innerText);
  });
});


function checkAnswer(user_answer){
  if(questions[questionIndex].answer===user_answer){
    //console.log("success");
    points+=10;

  }

  return true;

};

function changeQuestion(){
  console.log(questionIndex);
  if(questionIndex===questions.length-1){
    
    highscores();
   
  }
  else{
   
  
  //console.log(questionIndex);
  questionIndex++;
  quest.innerHTML=questions[questionIndex].questionText;

  for(let i=0;i<questions.length;i++){
      for(let j=0;j<4;j++){
        document.getElementById(j+1).innerHTML=questions[questionIndex].options[j];
      }
   }
  }
}

function timestart(){

  var x = setInterval(function(){
    timeINterval--;
    time.innerHTML = "Time: "+timeINterval;
   /*  if(questionIndex==questions.length-1)
    {
      highscores();
      clearInterval(x);
    } */


   if(timeINterval<=0 || check===true){
      console.log(check);
        check=false;
        clearInterval(x);
        changeQuestion();
        timestart();
    }
},1000);


};

function highscores(){
  console.log("ended");
  mainContent.style.display="none";
}


const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];
//console.log(questions[questionIndex].options[0]);