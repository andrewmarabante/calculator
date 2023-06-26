let num1 = null;
let num2 = null;
const newNum = document.querySelectorAll(".number");
newNum.forEach(number =>
    {
        number.addEventListener('click', setNum)
    })
function setNum(e){
    if (num1 === null)
    {
        num1 = this.id;
        console.log(num1)
    }
    else if (num2 === null){num2 = this.id; console.log(num2)}
    else{console.log('only two nums!')}  
}
