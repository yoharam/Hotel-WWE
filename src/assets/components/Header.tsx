import Logo from '../images/Logo.png'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="bg-black w-full flex flex-col lg:flex-row justify-between items-center gap-3 px-4 sm:px-8 lg:px-16 xl:px-32 py-4">
      {/* Logo y título */}
      <div className='flex items-center gap-2'>
        <img
          className="h-16 lg:h-20 hover:cursor-pointer"
          src={Logo}
          alt="Logo Hotel WWE"
        />
        <h1 className="text-2xl lg:text-3xl text-red-800 font-black">Hotel WWE</h1>
      </div>

      {/* Enlaces de navegación */}
      <div className='flex flex-col lg:flex-row gap-3 justify-center items-center m-4'>
        <Link to="/habitaciones" className="text-white font-bold hover:text-red-600">
          Habitaciones
        </Link>
        <Link to="/reservar" className='text-white font-bold hover:text-red-600'>
          Reservaciones
        </Link>
        <Link to="/servicios" className='text-white font-bold hover:text-red-600'>
          Servicios
        </Link>
        <Link to="/contacto" className='text-white font-bold hover:text-red-600'>Contacto</Link>
      </div>

      {/* Botón de reserva */}
      <div className='flex items-start'>
        <Link to="/reservar" className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 hover:cursor-pointer">
          Reservar habitacion (KO)
        </Link>
      </div>
    </div>
  )
}
