let num1 = null;
let num2 = null;
const newNum = document.querySelectorAll(".number");
const deletebutt = document.getElementById("delete")
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
    else if (num2 === null){num2 = this.id; console.log(num2)}
    else{console.log('only two nums!')}  
}

function deleteNum(){
    if (num2 != null)
    {
        num2 = null;
    }
    else if (num1 != null)
    {
        num1 = null;
    }
    else{ console.log('nothing to delete')}
}
