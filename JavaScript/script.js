let items=0;
document.querySelector('h1').innerHTML=`<h1>Your Bag has ${items} Items.`
function oneplus()
{
    items++;
    document.querySelector('h1').innerHTML=`<h1>Your Bag has ${items} Items.`    
}

function twoplus()
{
    items =items+2;
    document.querySelector('h1').innerHTML=`<h1>Your Bag has ${items} Items.`
}

function minusone()
{
    items--;
    document.querySelector('h1').innerHTML=`<h1>Your Bag has ${items} Items.`
}