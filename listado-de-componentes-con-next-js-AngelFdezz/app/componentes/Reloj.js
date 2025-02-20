'use client';
import { useState, useEffect } from 'react';

export default function Reloj() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
      const intervalID = setInterval(() => {
        setHora(new Date());
      }, 1000);

      return () => clearInterval(intervalID);
    }, []);

    const formatTime = (time) => {
      return time.toLocaleTimeString('es-ES', { hour12: false });
    };

    return (
      <div className="reloj-container">
        <h2>Hora actual: {formatTime(hora)}</h2>
      </div>
    );
}
