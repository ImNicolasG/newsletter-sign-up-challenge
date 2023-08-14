




// submit function for email validation
function validateEmail() {
    const x = document.forms["emailForm"]["email"].value;
    
    if (x.includes("@") && x.includes(".com")) {
        
        window.open("success.html");
        return x;
    } else {
        document.querySelector(".inputemail").style.borderColor = "red"
        document.querySelector(".inputemail").style.color = "red"
        document.querySelector(".inputemail").style.backgroundColor = "rgb(255, 236, 240)"
        document.querySelector(".label2").style.visibility = "visible"
        return false;

    };
    
};
