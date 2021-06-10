import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/tiendas")
      .then((res) => res.json())
      .then((d) => setData(d.tiendas));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tiendas</h1>
        <p>
          {!data ? "Loading..." :
            data.map((d, i) => {
              return <p>
                <span>{i+1 + " "}</span>
                <span>{d.direccion + " "}</span>
                <span>{d.metodo_pago}</span>
              </p>
            })
          }</p>
      </header>
    </div>
  );
}

export default App;