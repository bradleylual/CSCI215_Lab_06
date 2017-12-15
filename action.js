function checkEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email").value;
    return re.test(email);

}

function validate() {
    if(checkEmail()) {
        myAjaxFunction();
    }
    else {
        alert("Subscription could not be processed. Please check your entered info.");
    }
}

function myAjaxFunction() {
    alert("The AJAX has been made!");
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
}

function checkAge() {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    var age = document.getElementById("age");
    
    if(!regEx.test(age) || age.length > 3) {
        document.getElementById("age").style.backgroundColor = "red";
       
    } else {
       document.getElementById("age").style.backgroundColor = "white";
    }
}

function checkName() {
    var name = document.getElementById("name").value;
    var regEx = new RegExp("<");
    if (regEx.test(name)) {
        document.getElementById("name").style.backgroundColor = "red";
    }
    else {
        document.getElementById("name").style.backgroundColor = "white";
    }

}
