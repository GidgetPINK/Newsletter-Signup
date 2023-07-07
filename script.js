document.getElementById("button").addEventListener("mouseover", myFunction);
document.getElementById("button").addEventListener("mouseout", mouseOut);






function myFunction(){
    document.getElementById("button").style.background = "linear-gradient(88deg, rgba(255,245,244,1) 0%, rgba(255,80,118,1) 0%, rgba(240,85,42,1) 68%)";
    document.getElementById("button").style.boxShadow = "14px 17px 43px 6px rgba(240,85,42,0.51)";
}

function mouseOut(){
    document.getElementById("button").style.background = "hsl(234, 29%, 20%)";
    document.getElementById("button").style.boxShadow = "none";
}



//check for button press. If button has been pressed check for valid email address on button press and display success screen

document.getElementById("button").addEventListener('click', validateEmail);
document.getElementById("email").addEventListener("keyup", function(event){
    if(event.key === 'Enter'){
        validateEmail();
    }
});




function validateEmail(){
    
    const emailInput = document.getElementById("email").value;
    let mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailInput.match(mailformat)){
       location.href="Validation/subscribe.html";
       
    }else{
        document.getElementById("emailWarning").innerHTML = "Valid email required";
        document.getElementById("email").style.backgroundColor = "rgb(255, 204, 204)";
        document.getElementById("email").style.borderColor = "red";
    }
    
}


