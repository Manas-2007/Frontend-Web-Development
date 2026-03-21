import { Title,Listcartoons } from "./Components/Title";
export default function App() {
  let Listdata = [
    { Cartoon: 'Doraemon', Character: 'Nobita' },
    { Cartoon: 'Motu-Patlu', Character: 'Dr. Jhatka' },
    { Cartoon: 'BEN-10', Character: 'Van' },
    { Cartoon: 'Oggy & the Cockroaches', Character: 'Oggy' },
    { Cartoon: 'Badrinath & Budhdev', Character: 'Myra & Syra' },
  ];

  // The function that the Child will trigger
  const handleDisplay = (charName,cartoon) => {
    alert(`The main character of the ${cartoon} show  is ${charName}`);
    
  };

  return (
    <center>
    <div className="container mt-3">
      <Title />
      {/* 1. Pass the whole array to 'Listdata' prop 
        2. Pass the function to 'onDisplay' prop
      */}
      <Listcartoons Listdata={Listdata} onDisplay={handleDisplay} />
    </div>
    </center>
  );
  
}