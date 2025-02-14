//Wishimg Good luck to the user
let username = localStorage.getItem('username');
var gl=document.getElementById("Glucks");
gl.innerText=username + "!";



//Timer
let Timer=document.getElementById("timer");
function SetTimer(){
    let count=0;
    setInterval(function(){
     if(count<60){
    if(count<10)
        Timer.innerText="00:0" +count;
      else{
          Timer.innerText="00:" +count;
      }
      count++;  
   }
   else{
    clearInterval(this); 
    Timer.innerText="00:00"
    CalculateProgress();
   }

    },1000);
};
SetTimer();



//Question Class
class Question{
  
    #id;
    constructor(id,title,image,choices,answer){
        this.#id=id,
        this.title=title,
        this.image=image,
        this.choices=choices,
        this.answer=answer
    }

 
}



// Quiz Questions Array using Question class
const examQuestions = [
    new Question(
        1, 
        "What is the name of this animal?", 
        "whale.jpg", 
        ["Blue Whale", "Humpback Whale", "Sperm Whale"], 
        "Blue Whale"
    ),
    new Question(
        2, 
        "Which country's flag is this?", 
        "japan-flag.jpg", 
        ["China", "South Korea", "Japan"], 
        "Japan"
    ),
    new Question(
        3, 
        "What city is shown in this image?", 
        "barcelona.jpg", 
        ["Madrid", "Barcelona", "Valencia"], 
        "Barcelona"
    ),
    new Question(
        4, 
        "What type of animal is this?", 
        "lion.jpg", 
        ["Tiger", "Lion", "Leopard"], 
        "Lion"
    ),
    new Question(
        5, 
        "What type of landmark is this?", 
        "pyramid.jpg", 
        ["Castle", "Pyramid", "Tower"], 
        "Pyramid"
    ),
    new Question(
        6, 
        "What planet is this?", 
        "mars.jpeg", 
        ["Jupiter", "Mars", "Venus"], 
        "Mars"
    ),
    new Question(
        7, 
        "What is this country?", 
        "eiffel_tower.jpeg", 
         ["Germany", "France", "Italy"],
        "France"
    ),
    new Question(
        8, 
       "What is this a popular type of?",
        "Taco.jpeg", 
        ["Burger", "Taco", "Pizza"],
        "Taco"
        ),
    new Question(
        9, 
        "What is this an example of?",
        "sunflower.jpeg", 
        ["Tree", "Flower", "Grass"],
        "Flower"
    ),
    new Question(
        10, 
        "What mountain is this?", 
        "everest.jpeg", 
        ["K2", "Mount Everest", "Mount Kilimanjaro"], 
        "Mount Everest"
    )
];

let nxtbtn=document.getElementById("next");
let Qtitle=document.getElementById("Qtitle")
let Qimg=document.getElementById("Qimg")
let Qchoice1=document.getElementById("c1")
let Qchoice2=document.getElementById("c2")
let Qchoice3=document.getElementById("c3")



nxtbtn.onclick=nextQuestion;
let Qnum=1;
let used=[]; //1,2,3,4
let examUserAns=[];
let correctAnswers = []; 

//to move to the next question or finish the exam
function nextQuestion()
{
    UserChoice();
  
    var Qindex=Math.floor(Math.random() * 10) ;
   
    //let n = used.at(used.indexOf(Qindex)-1);
    if(!used.includes(Qindex)){
        let correct=examQuestions[Qindex].answer;
       
       // console.log(user)
       
        if(Qnum<11){           
            used.push(Qindex);
            Qtitle.innerHTML=Qnum+"-"+examQuestions[Qindex].title;
            Qimg.src = "../images/"+examQuestions[Qindex].image; 
            Qchoice1.innerHTML=examQuestions[Qindex].choices[0];
            Qchoice2.innerHTML=examQuestions[Qindex].choices[1];
            Qchoice3.innerHTML=examQuestions[Qindex].choices[2];
            correctAnswers.push(examQuestions[Qindex].answer);
          
            Qnum++;
            Qchoice1.style.backgroundColor="white"
            Qchoice2.style.backgroundColor="white"
            Qchoice3.style.backgroundColor="white"
            if(Qnum===11) {

                nxtbtn.innerText="Finish";
                Qnum=1; 
                nxtbtn.onclick=CalculateProgress;
                  
                
            }
        }
    }else
    {
        nextQuestion();
    }
    
};
nextQuestion();

//To take the user's answer
let userAns;
function UserChoice(){
   
    Qchoice1.onclick=function(){
        userAns=Qchoice1.innerText;
        Qchoice1.style.backgroundColor="#536889"
        Qchoice2.style.backgroundColor="white"
        Qchoice3.style.backgroundColor="white"
        examUserAns[used.length - 1] = userAns;
    }
    Qchoice2.onclick=function(){
        userAns=Qchoice2.innerText;
        Qchoice2.style.backgroundColor="#536889"
        Qchoice1.style.backgroundColor="white"
        Qchoice3.style.backgroundColor="white"
        examUserAns[used.length - 1] = userAns;
    }
    Qchoice3.onclick=function(){
        userAns=Qchoice3.innerText;
        Qchoice3.style.backgroundColor="#536889"
        Qchoice2.style.backgroundColor="white"
        Qchoice1.style.backgroundColor="white"
        examUserAns[used.length - 1] = userAns;
    }   
   
}
//Calculate Progress
function CalculateProgress(){
     
     let score=0;
     for (let i = 0; i < examUserAns.length; i++) {
      if (examUserAns[i] === correctAnswers[i]) {
          score++;
      }
  }
  localStorage.setItem('score', score);  

  window.location.href = "progress.html"; 
 
}

