//function myButton(){
   // let name,exampleInputEmail1,exampleInputPassword1,exampleInputPassword2;
   // fullName = document.querySelector("#fullname").value;
    //myEmail = document.querySelector("#email").value;
   // password1 = document.querySelector("#password1").value;
    //password2 = document.querySelector("#password2").value;


    //if (password1 != password2){
      //  alert("password didn't match");
    //}console.log(password1)}
   
   // myEmail=document.querySelector("#name");//
   
   
   
    // exampleInputEmail1=document.querySelector(".email");
    // exampleInputPassword1=document.querySelector(".password");
    // exampleInputPassword2=document.querySelector(".confirmPassword");

    // assign form values to localStorage
    // g = localStorage.setItem("fullName", fullname)
    // localStorage.setItem("exampleInputEmail1",email)
    // localStorage.setItem("exampleInputPassword1",password)
    // localStorage.setItem("exampleInputPassword2",confirmPassword)
    

// Name and Password from the register-form

function myButton(){
    var fullname = document.getElementById('fullname');
var email = document.getElementById('email');
var password1= document.getElementById('password1');
var password2=document.getElementById('password2');


// storing input from register-form
function store() {
    localStorage.setItem('fullname', fullname.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password1' , password1.value);
    localStorage.setItem('password2' ,password2.value)
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('fullname');
    var storedEmail = localStorage.getItem('email');
    var storedPassword1=localStorage.getItem('password1');
   // var storedPassword2=localStorage.getItem('password2.value');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userEmail= document.getElementById('userEmail');
    var userPassword1=document.getElementById('userPassword1');
   // var userPassword2=document.getElementById('userPassword2');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPassword1.value == storedPassword1) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
    
}
};