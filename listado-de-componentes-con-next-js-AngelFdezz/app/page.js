"use client";
import "./css/estilos.css";
import dynamic from "next/dynamic";

import CuentaFuegos from "./componentes/CuentaFuegos";
import DespliegueEnViernes from "./componentes/DespliegueEnViernes";
import ImagenCiudad from "./componentes/ImagenCiudad";
import Destino from "./componentes/Destino";
import Cliqueando from "./componentes/Cliqueando";
import Contando from "./componentes/Contando";
import Holi from "./componentes/Holi";
import Toggle from "./componentes/Toggle";
import VictorGarcia from "./componentes/VictorGarcia";
import AngelFernandez from "./componentes/AngelFernandez";

// Cargar Reloj de forma dinámica
const DynamicReloj = dynamic(() => import("./componentes/Reloj"), { ssr: false });

export default function Home() {
  return (
    <main>
      <h1>Listado de Componentes</h1>
      <section>
        <h2>Reloj en Vivo</h2>
        <DynamicReloj />
      </section>
      <section>
        <h2>MiNombre</h2>
        <VictorGarcia />
        <AngelFernandez/>
      </section>
      <section>
        <h2>Toggle</h2>
        <Toggle />
      </section>
      <section>
        <h2>Cliqueando</h2>
        <Cliqueando />
      </section>

      <section>
        <h2>Contando</h2>
        <Contando />
      </section>

      <section>
        <h2>Holi</h2>
        <Holi />
      </section>
      <section>
        <h2>Despliegue en Viernes</h2>
        <DespliegueEnViernes />
      </section>

      <section>
        <h2>Cuenta Fuegos</h2>
        <CuentaFuegos />
      </section>

      <section>
        <h2>Selecciona un Destino</h2>
        <Destino />
      </section>

      <section>
        <h2>Imagen de Ciudad</h2>
        <ImagenCiudad ciudad="tokio" />
        <ImagenCiudad ciudad="buenosaires" />
        <ImagenCiudad ciudad="sydney" />
        <ImagenCiudad ciudad="praga" />
        <ImagenCiudad ciudad="boston" />
      </section>


    </main>
  );
}
