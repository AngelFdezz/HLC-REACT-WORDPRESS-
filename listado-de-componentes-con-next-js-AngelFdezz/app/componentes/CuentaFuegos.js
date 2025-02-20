'use client';
import React, { useState } from 'react';

export default function CuentaFuegos() {
    const [contador, setContador] = useState(0);
  
    const incrementarContador = () => {
      setContador(contador + 1);
    };
  
    const renderizarFuegos = () => {
      return Array.from({ length: contador }, (_, index) => (
        <img key={index} src="../img/fuego.png" alt={`Fuego ${index + 1}`} />
      ));
    };
  
    return (
      <div>
        <h2>Número de Fuegos: {contador}</h2>
        <button onClick={incrementarContador}>Sumar Fuego</button>
        {contador > 0 && (
          <div>
            {renderizarFuegos()}
          </div>
        )}
        {contador === 0 && <p>No hay fuegos aún.</p>}
      </div>
    );
  }
