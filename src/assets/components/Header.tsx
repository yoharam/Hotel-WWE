import Logo from '../images/Logo.png'
import { Link } from "react-router-dom"
import KO from "../images/KO_fin_fondo.png"

export default function Header() {
  return (
    <div className="bg-black w-full flex flex-col lg:flex-row justify-between items-center gap-4 px-4 sm:px-8 lg:px-16 xl:px-32 py-4">
      {/* Logo y título */}
      <Link to="/home" className='flex items-center gap-2 hover:opacity-90 transition-opacity'>
        <img
          className="h-16 lg:h-20"
          src={Logo}
          alt="Logo Hotel WWE"
        />
        <h1 className="text-2xl lg:text-3xl text-red-800 font-black whitespace-nowrap">Hotel WWE</h1>
      </Link>
      
      {/* Enlaces de navegación */}
      <nav className='flex flex-col lg:flex-row gap-4 lg:gap-6 items-center'>
        <Link to="/habitaciones" className="text-white font-bold hover:text-red-600 transition-colors whitespace-nowrap">
          Habitaciones
        </Link>
        <Link to="/reservar" className='text-white font-bold hover:text-red-600 transition-colors whitespace-nowrap'>
          Reservaciones
        </Link>
        <Link to="/servicios" className='text-white font-bold hover:text-red-600 transition-colors whitespace-nowrap'>
          Servicios
        </Link>
        <Link to="/contacto" className='text-white font-bold hover:text-red-600 transition-colors whitespace-nowrap'>
          Contacto
        </Link>
      </nav>

      {/* Botón de reserva con imagen KO */}
      <Link 
        to="/reservar" 
        className="flex items-center justify-center hover:scale-110 transition-transform duration-200"
      >
        <img 
          src={KO} 
          alt="Reservar Ahora" 
          className="h-12 lg:h-16 w-auto object-contain"
        />
      </Link>
    </div>
  )
}