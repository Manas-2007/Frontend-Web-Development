//Add student function
function addstudent()
{
    let sname=document.querySelector('#studentName').value;
    let sno=document.querySelector('#rollNumber').value;
    let scourse=document.querySelector('#courseName').value;
    let smarks=document.querySelector('#marks').value;
    let sattend=document.querySelector('#attendance').value;
    let student_data={
    name:sname,
    roll:sno,
    course:scourse,
    marks:smarks,
    attendance:sattend,
    };
    localStorage.setItem("Student 1",JSON.stringify(student_data))
    alert("Student Successfully Added");   
    document.querySelector('#studentName').value = "";
    document.querySelector('#rollNumber').value = "";
    document.querySelector('#courseName').value = "";
    document.querySelector('#marks').value = "";
    document.querySelector('#attendance').value = "";
}

//Display record function
function displaystudent()
{
    let student_details=JSON.parse(localStorage.getItem("Student 1"));
    document.querySelector('#displayName').innerText=student_details.name;
    document.querySelector('#displayRoll').innerText=student_details.roll;
    document.querySelector('#displayCourse').innerText=student_details.course;
    document.querySelector('#displayMarks').innerText=student_details.marks;
    document.querySelector('#displayAttendance').innerText=student_details.attendance;

   
}

//Delete Record Function
function removestudent()
{
    JSON.parse(localStorage.getItem("Student 1"));
    localStorage.removeItem("Student 1");
    alert("Student Successfully Removed");
    document.querySelector('#displayName').innerText = "Not Available";
    document.querySelector('#displayRoll').innerText = "Not Available";
    document.querySelector('#displayCourse').innerText = "Not Available";
    document.querySelector('#displayMarks').innerText = "Not Available";
    document.querySelector('#displayAttendance').innerText = "Not Available";
    document.querySelector('#displayResult').innerText="Not Available";  
         
         
}
//Result function
function resultstudent()
{
    alert("Result is available below");
    displaystudent();
    let student_details=JSON.parse(localStorage.getItem("Student 1"))
     if(student_details.marks>=33)
    {
        document.querySelector('#displayResult').innerText="PASS";
    }
    else{
         document.querySelector('#displayResult').innerText="FAIL";
        }
}