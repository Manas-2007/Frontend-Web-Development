let plus_element=document.querySelector('#increaseBtn');
let minus_element=document.querySelector('#decreaseBtn');
let reset_element=document.querySelector('#resetBtn');
let counter_element=document.querySelector('#counterValue');

let data_status={
    counter:0,
};
//Increase counter
function add()
{
    data_status.counter++;
    counter_element.style.color="green";
    
    counter_element.innerText=data_status.counter;
}

//Decrease counter
function sub()
{
    if(data_status.counter<=0)
    {
        alert("Counter cannot go below 0")
    }
    else
    {
    data_status.counter--;
    counter_element.style.color="red";
    counter_element.innerText=data_status.counter;
    }
}

//Reset counter
function reset()
{
    data_status.counter=0;
    counter_element.style.color="black";
    counter_element.innerText=data_status.counter;
}
