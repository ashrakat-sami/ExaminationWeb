window.onload = function () {
    let score = localStorage.getItem('score') || 0;
    let Congrats = document.getElementById("Gluckh");
    let percentage = (score / 10) * 100; // نسبة النجاح بناءً على الدرجة
    let percent = document.getElementById("number");
    let circle = document.querySelector("circle"); // احصل على العنصر الصحيح

    if (score >= 5) {
        Congrats.innerText = "Congratulations!";
        Congrats.style.color = "Green";
    } else {
        Congrats.innerText = "Hard Luck!";
        Congrats.style.color = "red";
    }

    let counter = 0;
    let interval = setInterval(() => {
        if (counter >= percentage) {
            clearInterval(interval);
        } else {
            counter++;
            percent.innerHTML = `${counter}%`;

            let offset = 450 * (1 - counter / 100); // تحديث القيمة بناءً على النسبة
            circle.style.strokeDashoffset = offset;
        }
    }, 25);
};