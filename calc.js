let num1 = null;
let num2 = null;
let op =  null;
const newNum = document.querySelectorAll(".number");
const deletebutt = document.getElementById("delete")
const addbutt = document.getElementById("add")
const subbutt = document.getElementById("sub")
const divbutt = document.getElementById("divide")
const multbutt = document.getElementById("multiply")
const equalbutt = document.getElementById("equals")
const shownum1 = document.getElementById("num1")
const shownum2 = document.getElementById("num2")
const showanswer = document.getElementById("answer")
addbutt.addEventListener('click', operator)
subbutt.addEventListener('click', operator)
divbutt.addEventListener('click', operator)
multbutt.addEventListener('click', operator)
deletebutt.addEventListener('click', deleteNum)
equalbutt.addEventListener('click', equals)
newNum.forEach(number =>
    {
        number.addEventListener('click', setNum)
    })
function setNum(e){
    if (num1 === null)
    {
        num1 = this.id;
        console.log(num1);
        shownum1.textContent = num1;
        shownum2.textContent = '0';
        showanswer.textContent = '0';
    }
    else if (num1 !=  null && op === null)
    {
        num1 = num1+this.id
        console.log(num1)
        shownum1.textContent = num1;
    }
    else if (op != null && num2  === null)
    {
        num2 = this.id;
        console.log(num1 +'   '+num2)
        shownum2.textContent = num2;
    }
    else if (op != null && num2 != null)
    {
        num2 = num2 + this.id;
        console.log(num1 +'   '+num2)
        shownum2.textContent = num2;
    }
}

function deleteNum(){
    if (num2 != null)
    {
        num2 = null;
        shownum2.textContent = '0'
    }
    else if (op != null)
    {
        op = null;
    }
    else if (num1 != null)
    {
        num1 = null;
        shownum1.textContent = '0'
    }
    else{ 
        shownum1.textContent = '0'
        shownum2.textContent = '0'
        showanswer.textContent = '0'
        }
}
function operator(e)
{
    op = this.id;
    console.log(op);
}

function add(num1,num2){
    showanswer.textContent = parseInt(num1)+parseInt(num2);
}

function sub(num1,num2){
    showanswer.textContent = parseInt(num1)-parseInt(num2);
}

function div(num1,num2){
    showanswer.textContent = parseInt(num1)/parseInt(num2);
}

function mult(num1,num2){
    showanswer.textContent = parseInt(num1)*parseInt(num2);
}

function equals(){
    if (op === 'add')
    {
        add(num1,num2)
        num1=null;
        num2=null;
        op = null;
    }
    else if (op === 'sub')
    {
        sub(num1,num2)
        num1=null;
        num2=null;
        op = null;
    }
    else if (op === 'multiply')
    {
        mult(num1,num2)
        num1=null;
        num2=null;
        op = null;
    }
    else if (op === 'divide')
    {
        div(num1,num2)
        num1=null;
        num2=null;
        op = null;
    }
    else{showanswer.textContent = 'Error!'}
}