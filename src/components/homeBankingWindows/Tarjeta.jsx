import "./tarjeta.css"
import React from "react";

function Tarjeta({user}) {
    
    return ( 
    <>
    <span className="plastico">

        <img className="logo" src="./src\assets\logo.svg" alt="" />

        <h2>Neko Bank</h2>

        <h1>1111 2222 3333 4444</h1>

        <div className="fechas">
            <div className="fecha-expiracion">
                <p>desde 05/23</p>
                
            </div>
            <div className="fecha-impresion">
                <p>hasta  07/27</p>
            </div>
        </div> 
        <div className="nombre">
            <h3>{user.name} {user.lastName}</h3>
        </div>
			
        
    </span>
    
    </>
        );
}

export default Tarjeta;