const passwordBox = document.getElementById("password");
const length = 10;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqurstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*(){}[]=-_/|+=~";
const allChars = UpperCase + lowerCase + number + symbols;

function createPassword(){
    let password = "";
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length> password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}