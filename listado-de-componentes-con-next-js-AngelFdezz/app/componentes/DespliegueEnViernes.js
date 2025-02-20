"use client";
import React, { useState } from "react";

export default function DespliegueEnViernes() {
  const [texto, setTexto] = useState("");

  const contienePalabrasClave = (texto) => {
    const lowerText = texto.toLowerCase();
    return (
      (lowerText.includes("despliegue") || lowerText.includes("deploy")) &&
      lowerText.includes("viernes")
    );
  };

  const esRojo = contienePalabrasClave(texto);

  return (
    <div>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe aquí..."
        style={{
          color: esRojo ? "red" : "white", 
        }}
      />
      {esRojo && (
        <p>
          Cuidado con los despliegues en viernes:{" "}
          <a href="https://youtu.be/Vhmek8362Fc" target="_blank" rel="noopener noreferrer">
            Ver video
          </a>
        </p>
      )}
    </div>
  );
}
