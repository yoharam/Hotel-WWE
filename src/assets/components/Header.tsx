import Logo from '../images/Logo.png'
import { Link } from "react-router-dom"
import KO from "../images/KO_fin_fondo.png"
import React, { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);
    setShowModal(true);
    
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <div className="bg-black w-full flex flex-col lg:flex-row justify-between items-center gap-4 px-4 sm:px-8 lg:px-16 xl:px-32 py-4">
      {/* Modal de notificación */}
      <div
        className={`fixed top-20 left-0 z-50 transform transition-transform duration-500 ease-in-out ${
          showModal ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-green-600 text-white px-6 py-4 rounded-r-lg shadow-lg flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="font-bold">¡Producto agregado!</p>
            <p className="text-sm">Se ha agregado correctamente al carrito</p>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="ml-4 hover:bg-green-700 rounded-full p-1 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

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
        <Link to="/home" className='text-white font-bold hover:text-red-600 transition-colors whitespace-nowrap'>
          Inicio          
        </Link>
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
      <div className='flex gap-3 items-center'>
        <button 
          className='hover:cursor-pointer relative' 
          onClick={handleAddToCart}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="size-9 text-red-800 hover:scale-110 transition-transform"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {count}
            </span>
          )}
        </button>

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
    </div>
  )
}