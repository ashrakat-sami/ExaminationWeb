window.onload = function () {
    let score = localStorage.getItem('score') || 0;
    let Congrats = document.getElementById("state");
    let percentage = (score / 10) * 100;
    let percent = document.getElementById("number");
    let circle = document.querySelector("circle"); 
    let finalScore=document.getElementById("finalScore")
   /* if (score >= 5) {
        Congrats.innerText = "You got it🎉";
        Congrats.style.color = "Green";
    } else {
        Congrats.innerText = "Almost there! Try again";
        Congrats.style.color = "red";
    }*/
    finalScore.innerHTML=`You've got ${score} out of 10`;
    let counter = 0;
    let interval = setInterval(() => {
        if (counter >= percentage) {
            clearInterval(interval);
        } else {
            counter++;
            percent.innerHTML = `${counter}%`;

            let offset = 450 * (1 - counter / 100);
            circle.style.strokeDashoffset = offset;
        }
    }, 25);
};