import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hola from "./pages/Hola";
import Habitaciones from "./pages/Habitaciones"
import Reservaciones from "./pages/Reservar";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />       {/* Página principal */}
        <Route path="/home" element={<Home />} />  {/* Otra ruta */}
        <Route path="/hola" element={<Hola />} />  {/* Ruta Hola */}
        <Route path="/habitaciones" element={<Habitaciones/>} />
        <Route path="/reservar" element={<Reservaciones />}/>
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
