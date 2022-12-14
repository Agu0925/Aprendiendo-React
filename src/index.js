import React from 'react';
import ReactDOM from "react-dom";
import "./App.css";
import {App3} from './componentes';
import {App4} from './componentes';
const AppReact = () => {
    return (
        <>
            <App3 />
            <div className='center'>
                <h2>Guardar en localStorage con ReactJS</h2>
                <App4 />
            </div>
        </>
    );
};
//Show the component on the element with id "root" in the HTML
ReactDOM.render(<AppReact />, document.getElementById("root"));
if (localStorage.getItem("react")){
    document.getElementById("nombre").value = localStorage.getItem("nombre");
    document.getElementById("apellido").value = localStorage.getItem("apellido");
    document.getElementById("mail").value = localStorage.getItem("mail");
}