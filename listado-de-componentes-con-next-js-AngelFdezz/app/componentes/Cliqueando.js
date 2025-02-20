"use client";
import { useState } from 'react';

export default function Cliqueando() {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    };

    const handleMouseEnter = () => {
        setContador(0);
    };

    const obtenerTextoYClase = () => {
        if (contador === 0) return { texto: "No has clickado aún", clase: "red" };
        if (contador === 1) return { texto: "Has clickado 1 vez", clase: "yellow" };
        return { texto: `Has clickado ${contador} veces`, clase: "green" };
    };

    const { texto, clase } = obtenerTextoYClase();

    return (
        <div className="container">
            <button onClick={handleClick}>Click aquí</button>
            <br /><br />
            <input
                type="text"
                readOnly
                value={texto}
                onMouseEnter={handleMouseEnter}
                className={`inputStyle ${clase}`}
            />
        </div>
    );
}
