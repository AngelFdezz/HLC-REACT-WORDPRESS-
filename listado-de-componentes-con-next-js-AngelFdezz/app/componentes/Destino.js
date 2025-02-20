'use client';
import React, { useState } from "react";
import ImagenCiudad from "./ImagenCiudad";

export default function Destino() {
  const [ciudad, setCiudad] = useState("");

  const handleChangeCiudad = (event) => {
    setCiudad(event.target.value);
  };

  return (
    <div className="destino-container">
      <h2>Selecciona un destino</h2>
      <select value={ciudad} onChange={handleChangeCiudad}>
        <option value="">Selecciona una ciudad</option>
        <option value="boston">Boston</option>
        <option value="buenosaires">Buenos Aires</option>
        <option value="praga">Praga</option>
        <option value="tokio">Tokio</option>
        <option value="sydney">Sydney</option>
      </select>
      {ciudad && <ImagenCiudad ciudad={ciudad} />}
    </div>
  );
}
