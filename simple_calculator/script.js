console.log('Hello');
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let answer = document.getElementById('answer');


function add()
{
    let add = document.querySelectorAll('input');
    document.addEventListener("click",function(){
        result = (add[0].value-(-add[1].value)).toFixed(4); 
        answer.innerHTML = result;
    });   
}

function sub()
{
    let sub = document.querySelectorAll('input');
    document.addEventListener("click",function(){
        result = (sub[0].value-sub[1].value).toFixed(4); 
        answer.innerHTML = result;
    });  
}

function mul()
{
    let mul = document.querySelectorAll('input');
    document.addEventListener("click",function(){
        result = (mul[0].value*mul[1].value).toFixed(4); 
        answer.innerHTML = result;
    }); 
}

function div()
{
    let div = document.querySelectorAll('input');
    document.addEventListener("click",function(){
        result =( div[0].value/div[1].value).toFixed(4); 
        answer.innerHTML = result;
    });  
}


