import React from "react";

function Boton (props) {

    return (
        <button onClick={props.comprar} disabled={props.disabled}>
            {props.disabled
            ?
                <p> SIN STOCK </p>
            :
                <p> COMPRAR </p>
            }
        </button>
    )
}

export default Boton