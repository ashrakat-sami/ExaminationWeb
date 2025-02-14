history.pushState(null, "", location.href);
window.onpopstate = function () {
  history.go(1);
};

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
        "What planet is shown in this image?", 
        "mercury.jpg", 
        ["Mercury", "Venus", "Mars"], 
        "Mercury"
    ),

    new Question(
        2, 
        "What planet is shown in this image?", 
        "venus.jpeg", 
        ["Venus", "Earth", "Mars"], 
        "Venus"
    ),

    new Question(
        3, 
        "What planet is shown in this image?", 
        "earth.jpg", 
        ["Earth", "Mars", "Jupiter"], 
        "Earth"
    ),

    new Question(
        4, 
        "What planet is shown in this image?", 
        "mars.jpeg", 
        ["Mars", "Saturn", "Jupiter"], 
        "Mars"
    ),

    new Question(
        5, 
        "What planet is shown in this image?", 
        "jupiter.jpeg", 
        ["Jupiter", "Uranus", "Neptune"], 
        "Jupiter"
    ),

    new Question(
        6, 
        "What planet is shown in this image?", 
        "saturn.jpeg", 
        ["Saturn", "Neptune", "Uranus"], 
        "Saturn"
    ),

    new Question(
        7, 
        "What planet is shown in this image?", 
        "uranus.jpg", 
        ["Uranus", "Saturn", "Neptune"], 
        "Uranus"
    ),

    new Question(
        8, 
        "What planet is shown in this image?", 
        "neptune.jpeg", 
        ["Neptune", "Mars", "Venus"], 
        "Neptune"
    ), 
    new Question(
        9, 
        "What is the name of this moon?", 
        "titan.jpeg", 
        ["Titan", "Europa", "Io"], 
        "Titan"
    ),
    new Question(
        9, 
        "What type of celestial body is this?", 
        "black_hole.jpg", 
        ["Planet", "Star", "Black Hole"], 
        "Black Hole"
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

            let used2=[]; //array to store choice index to randomize showing choices

           /* var Cindex=Math.floor(Math.random() * 3) ;
            used2.push(Cindex);
            Qchoice1.innerHTML=examQuestions[Qindex].choices[Cindex];
            do {
                Cindex = Math.floor(Math.random() * 3);
            } while (used2.includes(Cindex));
            used2.push(Cindex);
            Qchoice2.innerHTML=examQuestions[Qindex].choices[Cindex];
            do {
                Cindex = Math.floor(Math.random() * 3);
            } while (used2.includes(Cindex));
            Qchoice3.innerHTML=examQuestions[Qindex].choices[Cindex];*/

            for (let i = 0; i < 3; i++) {
                let Cindex;
                do {
                    Cindex = Math.floor(Math.random() * 3);
                } while (used2.includes(Cindex));

                used2.push(Cindex);
                document.getElementById(`c${i + 1}`).innerHTML = examQuestions[Qindex].choices[Cindex];
            }



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
    nxtbtn.setAttribute("disabled",true);
    
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
        nxtbtn.removeAttribute("disabled");
    }
    Qchoice2.onclick=function(){
        userAns=Qchoice2.innerText;
        Qchoice2.style.backgroundColor="#536889"
        Qchoice1.style.backgroundColor="white"
        Qchoice3.style.backgroundColor="white"
        examUserAns[used.length - 1] = userAns;
        nxtbtn.removeAttribute("disabled");

    }
    Qchoice3.onclick=function(){
        userAns=Qchoice3.innerText;
        Qchoice3.style.backgroundColor="#536889"
        Qchoice2.style.backgroundColor="white"
        Qchoice1.style.backgroundColor="white"
        examUserAns[used.length - 1] = userAns;
        nxtbtn.removeAttribute("disabled");

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

