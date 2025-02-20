"use client";
import React from 'react';

export const Holi = ({ name }) => (
    <div>
        {name && <p>Hola {name}, ¿cómo estás?</p>}
        {!name && <p>Hola. No te conozco</p>}
    </div>
);

const App = () => (
    <div>
        <h2>Con nombre:</h2>
        <Holi name="Victor" />
        <Holi name="Angel" />

        <h2>Sin nombre:</h2>
        <Holi />
    </div>
);

export default App;