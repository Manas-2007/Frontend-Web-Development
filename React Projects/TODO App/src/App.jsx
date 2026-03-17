import React, { useState } from "react";
import Title from "./Components/Title";
import Input from "./Components/Input";
import Task from "./Components/Task";
import Counter from "./Components/Counter";

function App() {
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  function addItem() {
    if (item && date) {
      setTasks([...tasks, { id: Date.now(), item, date }]);
      setItem("");
      setDate("");
    } else {
      alert("Please enter both todo and date");
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    /* h-screen + overflow-hidden prevents the whole page from scrolling */
    <div className="h-screen w-full bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] flex flex-col items-center overflow-hidden">
      
      {/* --- FIXED TOP SECTION --- */}
      <div className="w-full max-w-[1000px] flex flex-col items-center pt-[10px] px-[20px] flex-shrink-0">
        <div className="mb-[30px]">
          <Title />
        </div>

        {/* Main Header Container (Input + Counter) */}
        <div className="w-full bg-[#ffffff] border-[3px] border-[lightblue] p-[10px] rounded-t-[32px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
          
          {/* Input Section */}
          <div className="mb-[25px] bg-[#f8fafc] border-[2px] border-[#e2e8f0] p-[20px] rounded-[20px]">
            <Input
              item={item}
              date={date}
              onItemChange={setItem}
              onDateChange={setDate}
              onAdd={addItem}
            />
          </div>

          {/* Counter Section */}
          <div className="flex flex-col md:flex-row justify-between items-center px-[8px] gap-[15px]">
            <h2 className="text-[#0f172a] font-[700] text-[25px] tracking-tight">
              My Schedule
            </h2>
            <Counter count={tasks.length} />
          </div>
        </div>
      </div>

      {/* --- SCROLLABLE TASK AREA --- */}
      <div className="w-full max-w-[1000px] flex-grow overflow-y-auto px-[20px] mb-[40px]">
        {/* The tasks wrapper inside the scrollable div */}
        <div className="bg-[#ffffff] border-x-[2px] border-b-[2px] border-[#cbd5e1] p-[20px] rounded-b-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] min-h-full">
          
          <div className="space-y-[12px]">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  item={task.item}
                  date={task.date}
                  onDelete={() => deleteTask(task.id)}
                />
              ))
            ) : (
              <div className="py-[100px] text-center border-[2px] border-dashed border-[#cbd5e1] rounded-[24px] bg-[#fdfdfd]">
                 <p className="text-[#94a3b8] font-[600] text-[16px]">
                  No pending tasks. Relax!
                 </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;