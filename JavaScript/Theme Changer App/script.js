let title_element=document.querySelector('#themeName');
let card_element=document.querySelector('.project-card');       //Inner Card Area
let box_element=document.querySelector('#themePreview');    //Center box element




//blue theme
function blue()
{
    card_element.style.backgroundColor="skyblue";
    title_element.innerText="Blue Theme";
    alert("Blue theme applied successfully")
}

//red theme
function pink()
{
    title_element.innerText="Pink Theme";
    card_element.style.backgroundColor="lightpink";
    alert("Pink theme applied successfully")
}

//Green theme
function green()
{
    title_element.innerText="Green Theme";
    card_element.style.backgroundColor="lightgreen";
    alert("Green theme applied successfully")
}

//Dark theme
function dark()
{
    title_element.innerHTML="Dark Theme";
    card_element.style.backgroundColor="black";
    document.querySelector('.titlebar').style.color="white";
     document.querySelector('.project-desc').style.color="white";
    alert("Dark theme applied successfully")

}