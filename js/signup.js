// signup logic
// store form input using local Storage
// const userName = document.querySelector(".user-name")
const userEmail = document.querySelector(".user-email");
const userPassword = document.querySelector(".password")
const submitBtn = document.querySelector("#submit");

const cont = document.querySelector('#text');

// on btn click save user details and redirect to sign up
submitBtn.addEventListener('click', function(event) {
    "use strict";
    // prevent default action 
    event.preventDefault();

    // store user input data
    let key = userEmail.value;
    let password = userPassword.value;

    // store default user
    function store() {
        let testMail = localStorage.setItem("email", "test@example.com");
        let passcode = localStorage.setItem("passcode1", "1234");
    }


    // console.log(key);
    // console.log(password);


    // validate no empty dat submit
    if(key && password) {
        localStorage.setItem(key, password);
        location.replace("/pages/profile.html")
    }

});

