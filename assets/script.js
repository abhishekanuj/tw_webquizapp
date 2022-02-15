
const quest = document.getElementById('question');
const mainContent=document.getElementById("playground");
let questionIndex =0;
const time = document.getElementById("time"); 
const option=document.getElementsByClassName("options");
let timeINterval=10;
let points=0;
const highscores_name=[];
let countTime=0;


let playerName="";
let intro = document.getElementById("intro");
let game_end=document.getElementById("game-end");




//function to start the quiz
function startQuiz(){
  const name=document.getElementById("name").value;
  playerName=name;
  //console.log(typeof name);
  if(validate(name)==false){
    return;
  }
  
  document.getElementById("your-name").innerHTML="player name:  "+name;
  console.log(document.getElementById("your-name").innerHTML);

  intro.style.display="none";
  mainContent.style.display="block";
  game_end.style.display="none";
  time.innerHTML="Time: "+timeINterval; 
  timestart();
  quest.innerHTML=questions[questionIndex].questionText;

for(let i=0;i<questions.length;i++){
    for(let j=0;j<4;j++){
      document.getElementById(j+1).innerHTML=questions[questionIndex].options[j];
    }
 }

};


//function to validate name
function validate(name){
  name=name.trim();
  if(name==""){
    alert("Please enter a valid name");
  }
  var regName = /^[a-zA-Z\s]+$/;
  
  if(!regName.test(name)){
      alert('Please enter a valid name');
      document.getElementById('name').focus();
      return false;
  }else{
      //alert('Valid name given.');
      return true;
  }
}

let check=false;




//to get which option was clicked
Array.from(option).forEach(function(element) {
  element.addEventListener('click', (e)=>{
   check = checkAnswer(e.target.innerText,e.target.id);
    console.log(e.target.innerText);
  });
});




//function to chech the answer
function checkAnswer(user_answer,id){
  if(questions[questionIndex].answer===user_answer ){
    //console.log("success");
    points+=10;
    document.getElementById(id).style="background-color:green";
  }
  else{
    document.getElementById(id).style="background-color:red";
  }
  return true;

};





//function to change the question
function changeQuestion(){
  
  var elems = document.querySelectorAll(".options");
  console.log(elems);
  var index = 0, length = elems.length;
  for ( ; index < length; index++) {
      elems[index].style="color:white";
      
  }
  
  console.log(questionIndex);
  if(questionIndex===questions.length-1){
    
   // highscores();
   
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



//function to start the time
function timestart(timeINterval=11){
  document.getElementById("score").innerHTML="your score "+points;

  countTime++;
  console.log(countTime);
  var x = setInterval(function(){
    
    timeINterval--;
    time.innerHTML = "Time: "+timeINterval;
    if(countTime==6){
    
     
     gameEnd();
     clearInterval(x);
    }
    else if(timeINterval<=0 || check===true){
      console.log(check);
        check=false;
        clearInterval(x);
        changeQuestion();
        timestart();
    }
},1000);


};



//function for game end
function gameEnd(){
  intro.style.display="none";
  mainContent.style.display="none";
  game_end.style.display="block";
  localStorage.setItem(playerName,points);

  document.querySelector(".header").style.display="none";
  document.getElementById("your-score").innerHTML+=points;
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