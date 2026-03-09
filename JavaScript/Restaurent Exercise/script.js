const pizzaprice=200;
const chocolateprice=50;
const cakeprice=100;

let pitems=0;
let chocoitems=0;
let cakepitem=0;

document.querySelector('#pizza').innerText=`ITEMS : ${pitems}`;
document.querySelector('#Chocolates').innerText=`ITEMS : ${chocoitems}`;
document.querySelector('#cakes').innerText=`ITEMS : ${cakepitem}`;

function pizza()
{
    pitems++;
    document.querySelector('#pizza').innerText=`ITEMS : ${pitems}`;    
}
function chocolate()
{
    chocoitems++;
    document.querySelector('#Chocolates').innerText=`ITEMS : ${chocoitems}`;    
}
function cake()
{
    cakepitem++;
    document.querySelector('#cakes').innerText=`ITEMS : ${cakepitem}`;    
}


function ordernow()
{
   let result= (pitems*pizzaprice)+(chocoitems*chocolateprice)+(cakepitem*cakeprice);
   document.querySelector('.bill').innerText=`TOTAL BUDGET : ${result} Rupees `;
}