let btn = document.querySelectorAll(".btn")
let input = document.querySelector(".calculator__input")
let equation = document.getElementById("equation")
let clear = document.getElementById("delete")

for (let i = 0; i < btn.length; i++) {
    if (i != 15 && i != 16){
        btn[i].addEventListener("click",writer);
    }   
}
function writer () {
input.value = input.value + this.value;
}

equation.addEventListener("click", hesap)

function hesap() {
    input.value = eval(input.value)
}

clear.addEventListener("click", temiz);
 
function temiz() {
    input.value = "";
}







