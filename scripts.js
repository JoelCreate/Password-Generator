const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("passwordOneEl")
let passwordTwo = document.getElementById("passwordTwoEl")
let generateBtn = document.getElementById("generateEl")

let reset = document.getElementById("resetEl")

function generate() {    

    for (i = 0; i < 15; i++) {

        let randomIndex = Math.floor( Math.random() * characters.length)      

        passwordOne.textContent += characters[randomIndex]          

    }

    for (i = 0; i < 15; i++) {

        let randomIndex = Math.floor( Math.random() * characters.length)      

        passwordTwo.textContent += characters[randomIndex]         

    }

    generateBtn.disabled = true


}

function resetbtn() {

    reset = " "

    passwordOne.textContent = reset
    passwordTwo.textContent = reset

    generateBtn.disabled = false

}