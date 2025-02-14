
history.pushState(null, "", location.href);
window.onpopstate = function () {
  history.go(1);
};

let startbtn = document.getElementById("startbtn");
let user = document.getElementById("username");
let noname=document.getElementById("noNameLbl");

user.addEventListener("input",function(){
    if(user.value.length>0){
        startbtn.removeAttribute("disabled");
    }else{
        startbtn.setAttribute("disabled",true);
    }
});

startbtn.onclick = function() {
    
    let username = user.value;
    if (username.length > 3) {
        
        localStorage.setItem('username', username);  
        window.location.href = "index.html";
    
    } else {
        noname.innerText="Enter a valid name";
        user.style.border = "1px solid red";
        
    
    }
};
