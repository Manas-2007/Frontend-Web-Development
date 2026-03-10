let nameElement=document.querySelector('#name');
let rollElement=document.querySelector('#roll'); 
let classElement=document.querySelector('#class');
let sub1Element=document.querySelector('#sub1');
let sub2Element=document.querySelector('#sub2');
let sub3Element=document.querySelector('#sub3');
let sub4Element=document.querySelector('#sub4');
let sub5Element=document.querySelector('#sub5');

let total_pass=0,total_fail=0,highest_marks,total_students=0;
let students=[];

//add function
function adddata()
{
    total_students++;
    let nameValue=nameElement.value;
    let rollValue=rollElement.value;
    let classValue=classElement.value;
    let sub1Value = Number(sub1Element.value);
let sub2Value = Number(sub2Element.value);
let sub3Value = Number(sub3Element.value);
let sub4Value = Number(sub4Element.value);
let sub5Value = Number(sub5Element.value);

    let totalMarks=(sub1Value+sub2Value+sub3Value+sub4Value+sub5Value);
    let percent=(totalMarks/500)*100;

    //Passing cateogory
    let result_status;
    if(sub1Value>=33 && sub2Value>=33&&sub3Value>=33 && sub4Value>=33&&sub5Value>=33)
    {
        total_pass++;
        result_status="PASS";
        
    }
    else{
        total_fail++;
        result_status="FAIL";
    }

    //Object record
    let data={
        name:nameValue,
        roll:rollValue,
        classes:classValue,
        total:totalMarks,
        percentage:percent,
        Result:result_status,
    };

    students.push(data);

alert("DATA SUCCESSFULLY ADDED")
sub1Element.value="";
sub2Element.value="";
sub3Element.value="";
sub4Element.value="";
sub5Element.value="";
classElement.value="";
nameElement.value="";
rollElement.value="";

//Displaying the records
let totalStudentElement=document.querySelector('.total_count');
totalStudentElement.innerText=total_students;

let failElement=document.querySelector('.fail_count');
failElement.innerText=total_fail;

let passElement=document.querySelector('.pass_count');
passElement.innerText=total_pass;




}
 