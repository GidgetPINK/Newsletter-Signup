const buttonClick = document.querySelector("#dismissButton");
buttonClick.addEventListener("mouseover", theHover);
buttonClick.addEventListener("mouseout", theRelease);

function theHover(){
    buttonClick.style.background = "linear-gradient(88deg, rgba(255,245,244,1) 0%, rgba(255,80,118,1) 0%, rgba(240,85,42,1) 68%)";
    buttonClick.style.boxShadow = "14px 17px 43px 6px rgba(240,85,42,0.51)";
}

function theRelease(){
    buttonClick.style.background = "hsl(234, 29%, 20%)";
    buttonClick.style.boxShadow = "none";
}


//when Dismiss Message button is clicked the form should reload
buttonClick.addEventListener("click", backToForm);
function backToForm(){
    location.href="../index.html";
}


