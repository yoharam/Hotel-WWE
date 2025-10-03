import Logo from '../images/Logo.png'
import { Link } from "react-router-dom"

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
        <h1 className="text-2xl lg:text-3xl text-red-800 font-black">Hotel WWE</h1>
      </Link>
      
      {/* Enlaces de navegación */}
      <nav className='flex flex-col lg:flex-row gap-4 lg:gap-6 items-center'>
        <Link to="/habitaciones" className="text-white font-bold hover:text-red-600 transition-colors">
          Habitaciones
        </Link>
        <Link to="/reservar" className='text-white font-bold hover:text-red-600 transition-colors'>
          Reservaciones
        </Link>
        <Link to="/servicios" className='text-white font-bold hover:text-red-600 transition-colors'>
          Servicios
        </Link>
        <Link to="/contacto" className='text-white font-bold hover:text-red-600 transition-colors'>
          Contacto
        </Link>
      </nav>

      {/* Botón de reserva */}
      <Link to="/reservar" className="bg-red-800 text-white px-6 py-2 rounded font-bold hover:bg-red-700 transition-colors">
        Reservar Ahora
      </Link>
    </div>
  )
}