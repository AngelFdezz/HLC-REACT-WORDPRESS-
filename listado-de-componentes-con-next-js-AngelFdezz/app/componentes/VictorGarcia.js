'use client';
import React, { useState } from 'react';

let colores = [
    'color1', 'color2', 'color3', 'color4', 'color5',
    'color6', 'color7', 'color8', 'color9', 'color10'
];

export default function VictorGarcia() {
    let [color, setColor] = useState(colores[0]);

    function cambiarColor() {
        let nuevosColores = colores.filter(function(c) {
            return c !== color;
        });
        let indiceAleatorio = Math.floor(Math.random() * nuevosColores.length);
        setColor(nuevosColores[indiceAleatorio]);
    }

    return (
        <div
            className={'victorGarcia ' + color}
            onMouseEnter={cambiarColor}>
            <h1 className={color}>Victor Garcia</h1>
            <p className={color}>Nombre: Victor</p>
            <p className={color}>Apellidos: Garcia Baez</p>
            <p className={color}>
                Red Social: <a href="https://github.com/vgb65" className={color}>Github</a>
            </p>
        </div>

        
    );
}
