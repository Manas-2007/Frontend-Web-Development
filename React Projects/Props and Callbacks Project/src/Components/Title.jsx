export function Title()
{
    return <h1>Props & Callbacks Test</h1>
}

export function Listcartoons({ Listdata, onDisplay }) {
  if (Listdata.length === 0) {
    return <h4>No Cartoons Available yet!</h4>;
  } else {
    return (
    
      <ul className="list-group">
        {Listdata.map((item) => (
          <li 
            key={item.Cartoon} 
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <strong>{item.Cartoon}</strong> — {item.Character}
            </span>
            {/* Using the callback function from props */}
            <button 
              className="btn btn-primary" 
              onClick={() => onDisplay(item.Character,item.Cartoon)}
            >
              Display
            </button>
          </li>
        ))}
      </ul>
    );
  }
}