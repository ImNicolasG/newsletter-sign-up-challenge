


// submit function for email validation
function validateEmail() {
    let x = document.forms["emailForm"]["email"].value;
    if (x.includes("@") && x.includes(".com")) {
        alert("Success!")
    } else {

        document.querySelector(".inputemail").style.borderColor = "red"
        document.querySelector(".inputemail").style.backgroundColor = "rgb(255, 236, 240)"
        
        return false

    };
};

