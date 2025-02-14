let startbtn = document.getElementById("startbtn");
let user = document.getElementById("username");
let noname=document.getElementById("noNameLbl");

startbtn.onclick = function() {
    
    let username = user.value;
    if (username.length < 3) {
        noname.innerText="Enter a valid name";
        user.style.border = "1px solid red";
        event.preventDefault();
    
    } else {
        
        localStorage.setItem('username', username);  
        window.location.href = "index.html";
    
    }
};
