import React from 'react';
import { useState } from 'react';
//Create a new component
const App = () => {
  return (
    <h1 id="title">Component with react</h1>
  );
};
const App2 = () => {
  return (
    <>
      <div className="redes">
        <p>G</p>
        <p>L</p>
        <p>I</p>
      </div>
      <div className="redes2">
        <p>G</p>
        <p>L</p>
        <p>I</p>
      </div>
    </>
  );
};
export const App3 = () => {
  return (
    <>
      <App />
      <App2 />
      <div id="container">
        <div id="medio">
          <h2>Mid</h2>
          <h2>Mid</h2>
          <h2>Mid</h2>
          <h2>Mid</h2>
          <h2>Mid</h2>
          <h2>Mid</h2>
        </div>
        <div id="mFlex">
          <h2 className="mf">Mid Flex</h2>
          <h2 className="mf">Mid Flex</h2>
          <h2 className="mf">Mid Flex</h2>
        </div>
      </div>
    </>
  );
};
export const App4 = () => {
  const [value, setValue] = useState(localStorage.getItem("nombre") || "");
  const [value2, setValue2] = useState(localStorage.getItem("apellido") || "");
  const [value3, setValue3] = useState(localStorage.getItem("mail") || "");
  const funcionGuardar = () => {
    if (value === "" || value2 === "" || value3 === "") {
      alert("Todos los campos son requeridos");
    } else {
      localStorage.setItem("nombre", value);
      localStorage.setItem("apellido", value2);
      localStorage.setItem("mail", value3);
      alert("Guardado Correctamente");
    }
  };
  return (
    <>
      <input id='nombre' type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Nombre'></input>
      <input id='apellido' type="text" value={value2} onChange={(e) => setValue2(e.target.value)} placeholder='Apellido'></input>
      <input id='mail' type="text" value={value3} onChange={(e) => setValue3(e.target.value)} placeholder='Email'></input>
      <button onClick={funcionGuardar}>
        Guardar Datos
      </button>
    </>
  )
};

