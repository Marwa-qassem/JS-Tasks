var emailLogin = document.getElementById("emailLogin");
var passwordLogin = document.getElementById("passwordLogin");
var nameSignUp = document.getElementById("nameSignUp");
var emailSignUp = document.getElementById("emailSignUp");
var passwordSignUp = document.getElementById("passwordSignUp");
var requirment = document.getElementById("requirment");
var incorrect = document.getElementById("incorrect");
let listSignUpLocaStorageKey = 'list'
let userNameLocalStrageKey = 'userName'
var signUpList = [];

if (localStorage.getItem(listSignUpLocaStorageKey) == null) {
    signUpList = []
} else {
    signUpList = JSON.parse(localStorage.getItem(listSignUpLocaStorageKey) )
}

if (getLocalStorage(userNameLocalStrageKey) != null && document.getElementById("userName") != null) {
    document.getElementById("userName").innerHTML = "Welcome " + getLocalStorage(userNameLocalStrageKey) 
}

function isUserExist(){
    for (var i = 0; i < signUpList.length; i++) {
        if ( signUpList[i].email.toLowerCase() ==  emailSignUp.value.toLowerCase()) {
            return false
        }
    }
}

function isSignUpEmpty() {
    if (nameSignUp.value == "" || emailSignUp.value == "" || passwordSignUp.value == "" ) {
        return false  
    } else {
        return true; 
    }
}


function signUp() {
    if (isSignUpEmpty() == false ) {
        requirment.innerHTML = ` <span class="text-danger">All inputs are required</span>`
        return false  
    }
    var user = {
        name : nameSignUp.value,
        email : emailSignUp.value,
        password : passwordSignUp.value
    }
    if (signUpList.length == 0) {      
        signUpList.push(user);
        setLocalStorage("list" , JSON.stringify(signUpList));
        requirment.innerHTML = `<span class="text-success">Success</span> `
        return true
    }
    else if (isUserExist() == false) {
        requirment.innerHTML = `<span class="text-danger">This Email already exists</span>`
    }else{
        signUpList.push(user);
        setLocalStorage(listSignUpLocaStorageKey, user);
    }
}

function isLoginEmpty(emailLogin , passwordLogin) {
    if (emailLogin.value == "" || passwordLogin.value == "") {
        return false  
    }
}

function checkValidUser(email, password) {
    for (var i = 0; signUpList < signUpList.length; i++) {
        if (signUpList[i].email.toLowerCase() == email.toLowerCase() && signUpList[i].password.toLowerCase() == password.toLowerCase()) {
            setLocalStorage(userNameLocalStrageKey, signUpList[i].name)
            return true
        }
        else {
            return false
        }
    }
}

function login(){
    if (isLoginEmpty()) {
        incorrect.innerHTML = `<span class="text-danger">All inputs are required</span>`
        return false  
    }
    
    if (checkValidUser(emailLogin.value , passwordLogin.value) ){
        window.location = "./home.html"
    } else {
        incorrect.innerHTML = `<span class="text-danger">Email or password is inncorect</span>`
    }
}


function logout() {
    removeItemLocalStorage(userNameLocalStrageKey)
    window.location = "./index.html"
}


function setLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
}
function getLocalStorage(key) {
    return localStorage.getItem(key)
}
function removeItemLocalStorage(key) {
    console.log(key)
    return localStorage.removeItem(key)
}