let data='';
document.querySelector('input').value=data;

function operation1()
{
    data=data+ '1';
    document.querySelector('input').value=data;
}

function operation2()
{
    data=data+'2';
    document.querySelector('input').value=data;
}

function operation3()
{
    data=data+'3';
    document.querySelector('input').value=data;
}

function operation4()
{
    data=data+'4';
    document.querySelector('input').value=data;
}

function operation5()
{
    data=data+'5';
    document.querySelector('input').value=data;
}

function operation6()
{
    data=data+'6';
    document.querySelector('input').value=data;
}

function operation7()
{
    data=data+'7';
    document.querySelector('input').value=data;
}

function operation8()
{
    data=data+'8';
    document.querySelector('input').value=data;
}

function operation9()
{
    data=data+'9';
    document.querySelector('input').value=data;
}

function operation0()
{
    data=data+'0';
    document.querySelector('input').value=data;
}

function reset()
{
    data='';
    document.querySelector('input').value=data;
}

function add()
{
    data=data+'+';
    document.querySelector('input').value=data;
}

function subtract()
{
    data=data+'-';
    document.querySelector('input').value=data;
}

function product()
{
    data=data+'*';
    document.querySelector('input').value=data;
}

function division()
{
    data=data+'/';
    document.querySelector('input').value=data;
}

function decimal()
{
    data=data+'.';
    document.querySelector('input').value=data;
}

function result()
{
    data=eval(data);
    document.querySelector('input').value=data;
       
}