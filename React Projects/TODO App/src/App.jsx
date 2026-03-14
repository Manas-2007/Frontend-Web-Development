import Todo_title from "./Components/title";
import Todo_input from "./Components/input";
import Todo_list from "./Components/todolist";
import "./App.css";

function App()
{
    let task=[
      {todo:'Birthday of Ishanvi',duedate:'23/06/2020'},
      {todo:'Buy Gift',duedate:'03/03/2020'},
      {todo:'Recess',duedate:'29/06/2020'},
      {todo:'Sell Clothes',duedate:'09/03/2020'},
      {todo:'Buy medicines',duedate:'23/12/2020'},
    ]


  return <div>
   <Todo_title></Todo_title>
   <Todo_input></Todo_input>
    <Todo_list tasktodo={task}></Todo_list>
  </div>
}
export default App;
