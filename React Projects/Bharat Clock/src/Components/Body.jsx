//Main part of bharat clock
function Main()
{
    let now=new Date();
    let time=now.toLocaleTimeString("en-US");

    let day=now.getDate();
    let month=now.getMonth()+1;
    let year=now.getFullYear();

    return <div className="text-center fs-3 text-success fw-semibold">
    <p>This is the clock shows the time in Bharat at all times</p>
    <p>This is the current time : {day}/{month}/{year} - {time}</p>
    </div>
}
export default Main;