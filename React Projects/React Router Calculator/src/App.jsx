import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
//Addition function
function Add()
{
    const [input1,setinput1]=useState("");
    const [input2,setinput2]=useState("");
    const [result,setresult]=useState(0);
    function In1(e)
    {
        setinput1(e.target.value);
    }
    function In2(e)
    {
        setinput2(e.target.value);
    } 

    function display()
    {
        let result=Number(input1)+Number(input2);
        setresult(result);
    }

    return <>
        <center>
            <h3>Addition of Two Numbers</h3>

            <div>
                <input type="text" onChange={In1} placeholder="Enter First Number" />
                <input type="text" onChange={In2} placeholder="Enter Second Number" /><br/>
                <button onClick={display}>RESULT</button>
                <h2>The sum of {input1} & {input2} is {result}</h2>
            </div>
        </center>
    
    </>
}

//Subtration function
function Sub()
{
    const [input1,setinput1]=useState("");
    const [input2,setinput2]=useState("");
    const [result,setresult]=useState(0);
    function In1(e)
    {
        setinput1(e.target.value);
    }
    function In2(e)
    {
        setinput2(e.target.value);
    }

    function display()
    {
        let result=Number(input1)-Number(input2);
        setresult(result);
    }

    return <>
        <center>
            <h3>Subtraction of Two Numbers</h3>

            <div>
                <input type="text" onChange={In1} placeholder="Enter First Number" />
                <input type="text" onChange={In2} placeholder="Enter Second Number" /><br/>
                <button onClick={display}>RESULT</button>
                <h2>The Difference of {input1} & {input2} is {result}</h2>
            </div>
        </center>
    
    </>
}

//Multiplication function
 function Multi()
{
    const [input1,setinput1]=useState("");
    const [input2,setinput2]=useState("");
    const [result,setresult]=useState(0);
    function In1(e)
    {
        setinput1(e.target.value);
    }
    function In2(e)
    {
        setinput2(e.target.value);
    }

    function display()
    {
        let result=Number(input1)*Number(input2);
        setresult(result);
    }

    return <>
        <center>
            <h3>Multiplication of Two Numbers</h3>

            <div>
                <input type="text" onChange={In1} placeholder="Enter First Number" />
                <input type="text" onChange={In2} placeholder="Enter Second Number" /><br/>
                <button onClick={display}>RESULT</button>
                <h2>The Product of {input1} & {input2} is {result}</h2>
            </div>
        </center>
    
    </>
}

//Division function
 function Div()
{
    const [input1,setinput1]=useState("");
    const [input2,setinput2]=useState("");
    const [result,setresult]=useState(0);
    function In1(e)
    {
        setinput1(e.target.value);
    }
    function In2(e)
    {
        setinput2(e.target.value);
    }

    function display()
    {
        let result=Number(input1)/Number(input2);
        setresult(result);
    }

    return <>
        <center>
            <h3>Addition of Two Numbers</h3>

            <div>
                <input type="text" onChange={In1} placeholder="Enter First Number" />
                <input type="text" onChange={In2} placeholder="Enter Second Number" /><br/>
                <button onClick={display}>RESULT</button>
                <h2>The Division of {input1} & {input2} is {result}</h2>
            </div>
        </center>
    
    </>
}

//Square function
function Square()
{
    const [input1,setinput1]=useState("");
    const [result,setresult]=useState(0);
    function In1(e)
    {
        setinput1(e.target.value);
    }

    function display()
    {
        let result=Number(input1)*Number(input1);
        setresult(result);
    }

    return <>
        <center>
            <h3>Addition of Two Numbers</h3>

            <div>
                <input type="text" onChange={In1} placeholder="Enter First Number" />
                <button onClick={display}>RESULT</button>
                <h2>The Square of {input1} is {result}</h2>
            </div>
        </center>
    
    </>
}

export default function App() {
  return (<>
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">
            <span className="text-white">Smart</span>Calc
          </Link>

          <div className="d-flex justify-content-between w-100 ms-lg-5">
            <div className="navbar-nav d-flex flex-row justify-content-evenly w-100">
              <Link className="nav-link fw-semibold px-3" to="/home">Home</Link>
              <Link className="nav-link fw-semibold px-3" to="/addition">Addition</Link>
              <Link className="nav-link fw-semibold px-3" to="/subtraction">Subtraction</Link>
              <Link className="nav-link fw-semibold px-3" to="/multiplication">Multiplication</Link>
              <Link className="nav-link fw-semibold px-3" to="/division">Division</Link>
              <Link className="nav-link fw-semibold px-3" to="/square">Square</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-5 pt-5 text-center">
        {/* THIS IS THE FIX: The Routes container */}
        <Routes>
          
          {/* HOME ROUTE: Only shows the Welcome message at "/" */}
          <Route path="/home" element={
            <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold text-dark">Welcome to RouterCalc</h1>
                <p className="col-md-8 fs-4 mx-auto text-muted">
                  Select a mathematical operation from the navbar above to start your calculation.
                </p>
              </div>
            </div>
          } />

          <Route path="/addition" element={<Add />} />
          <Route path="/subtraction" element={<Sub/>} />
          <Route path="/multiplication" element={<Multi/>} />
          <Route path="/division" element={<Div/>} />
          <Route path="/square" element={<Square/>} />

        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}