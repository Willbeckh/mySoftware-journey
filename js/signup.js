// signup logic
// store form input using local Storage
const userName = document.querySelector(".user-name")
const userEmail = document.querySelector(".user-email");
const password = document.querySelector(".password")
const submitBtn = document.querySelector("#submit");

const cont = document.querySelector('#text');

// on btn click save user details and redirect to sign up
submitBtn.addEventListener('click', function(event) {
    "use strict";
    // prevent default action 
    event.preventDefault();

    // store user input data
    let key = userName.value;
    // let email = userEmail.value;

    console.log(key);
    // console.log(email);
    // function to store data
    // function storeInput() {
    //     localStorage.setItem("username", userName.value);
    //     localStorage.setItem("email", userEmail.value);
    // }

    // console.log(storeInput());

});



// validate user input