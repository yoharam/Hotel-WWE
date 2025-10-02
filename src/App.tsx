import { Route, Routes , } from "react-router-dom";
import Home from '/home/zaid/hotel_wwe/hotel_wwe/src/pages/Home'
import Hola from "/home/zaid/hotel_wwe/hotel_wwe/src/pages/Hola";
import "./App.css"

function App() {
  return (
  <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/hola" element={<Hola />} />
</Routes>
  );
}

export default App;