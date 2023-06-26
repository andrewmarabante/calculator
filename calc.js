let num1 = null;
let num2 = null;
let op =  null;
const newNum = document.querySelectorAll(".number");
const deletebutt = document.getElementById("delete")
const addbutt = document.getElementById("add")
const subbutt = document.getElementById("sub")
const divbutt = document.getElementById("divide")
const multbutt = document.getElementById("multiply")
addbutt.addEventListener('click', operator)
subbutt.addEventListener('click', operator)
divbutt.addEventListener('click', operator)
multbutt.addEventListener('click', operator)
deletebutt.addEventListener('click', deleteNum)
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
    else if (num1 !=  null && op === null)
    {
        num1 = num1+this.id
        console.log(num1)
    }
    else if (op != null && num2  === null)
    {
        num2 = this.id;
        console.log(num1 +'   '+num2)
    }
    else if (op != null && num2 != null)
    {
        num2 = num2 + this.id;
        console.log(num1 +'   '+num2)
    }
    else{console.log('only two nums!')}  
}

function deleteNum(){
    if (num2 != null)
    {
        num2 = null;
    }
    else if (op != null)
    {
        op = null;
    }
    else if (num1 != null)
    {
        num1 = null;
    }
    else{ console.log('nothing to delete')}
}
function operator(e)
{
    op = this.id;
    console.log(op)
}

function Add(){
    console.log(parseInt(num1)+parseInt(num2))
}