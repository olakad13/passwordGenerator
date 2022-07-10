let passwordOutputOne = document.getElementsByClassName("password-output")[0];
let passwordOutputTwo = document.getElementsByClassName("password-output")[1];
let number = 15;

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// A function that generates random index relative to the length of the characters array
function getRandomIndex() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return randomIndex;
}
console.log(getRandomIndex());

//A function that generates random passoword 
function randomPassword() {
    let firstPassword = "";
    let secondPassword = "";
    for (let i = 0; i < 15; i++) {
        firstPassword += characters[getRandomIndex()];
        secondPassword += characters[getRandomIndex()];
    }
    passwordOutputOne.textContent = firstPassword;
    passwordOutputTwo.textContent = secondPassword;
}

