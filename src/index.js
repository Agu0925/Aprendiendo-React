import React from 'react';
import { createRoot } from 'react-dom/client';
import "./App.css";
import { App3 } from './componentes';
import { App4 } from './componentes';
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
const root = createRoot(document.getElementById("root"));
root.render(<AppReact />);