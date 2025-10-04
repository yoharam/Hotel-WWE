
import Room1 from '../../assets/images/habitacion1.jpg';
import Room2 from '../../assets/images/habitacion2.jpg'
import Room3 from '../../assets/images/habitacion3.webp'
import Room4 from '../../assets/images/habitacion4.jpg'
import Room5 from '../../assets/images/habitacion5.jpg'
import Room6 from '../../assets/images/habitacion6.jpg'

import { Link } from "react-router-dom"
import '../../index.css'


function Room() {
  return (
    <div className=" pb-20 bg-[#fafaf8]">
      <div className="flex flex-col justify-center bg-wrestlers text-center mb-16 h-[500px]">
        <div>
          <h1 className="mb-6 text-6xl font-black text-white ">You Can't See Me </h1>
        </div>
        <div>
          <p className="text-white max-w-3xl mx-auto text-xl leading-relaxed text-shadow-sky-300 font-bold stroke-black stroke-7">
            Explora nuestras arenas y escenarios legendarios de WWE, donde cada combate es pura acción, fuerza y espectáculo.
          </p>
        </div>
      </div>
      <div className="px-15">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101">
            <div className="relative h-72">
              <img src={Room1} alt="Standard Room" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="mb-2 font-bold text-2xl text-gray-900">SmackDown Room</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Habitacion smack down azul
              </p>
              <div className="flex mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p className='mr-1.5'>2 Personas</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <p className='-1.5'>280 sq ft</p>
              </div>
              <div className="w-full px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg">
                <Link to="/reservar" className='block text-center'>Reserva ahora</Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-black text-white p-2 rounded-lg m-4">
              <span>$189/night</span>
            </div>
          </div>
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101">
            <div className="relative h-72">
              <img src={Room2} alt="Deluxe Room" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="mb-2 font-bold text-2xl text-gray-900">Habitacion Superstars</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Habitacion maint evente superstar
              </p>
              <div className="flex mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p>2 Personas</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <p>350 sq ft</p>
              </div>
              <div className="w-full px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg">
                <Link to="/reservar" className='block text-center'>Reserva ahora</Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-black text-white p-2 rounded-lg m-4">
              <span>$249/nightt</span>
            </div>
          </div>
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101">
            <div className="relative h-72">
              <img src={Room3} alt="Premium Room" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="mb-2 font-bold text-2xl text-gray-900">Cody Rhodes</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                American Nightmare cody rhodes
              </p>
              <div className="flex mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p>2 Personas</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <p>280 sq ft</p>
              </div>
              <div className="w-full px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg">
                <Link to="/reservar" className='block text-center'>Reserva ahora</Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-black text-white p-2 rounded-lg m-4">
              <span>$329/night</span>
            </div>
          </div>
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101">
            <div className="relative h-72">
              <img src={Room4} alt="Executive Suite" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="mb-2 font-bold text-2xl text-gray-900">Habitacion estandar</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Habitacion estandar normal
              </p>
              <div className="flex mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p>2 Personas</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <p>280 sq ft</p>
              </div>
              <div className="w-full px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg">
                <Link to="/reservar" className='text-center block'>Reserva ahora</Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-black text-white p-2 rounded-lg m-4">
              <span>$399/night</span>
            </div>
          </div>
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101">
            <div className="relative h-72">
              <img src={Room5} alt="Family Suite" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="mb-2 font-bold text-2xl text-gray-900">habitacion estandar</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                habitaion estandar elite
              </p>
              <div className="flex mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p>2 Personas</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <p>280 sq ft</p>
              </div>
              <div className="w-full px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg">
                <Link to="/reservar" className='text-center block'>Reserva ahora</Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-black text-white p-2 rounded-lg m-4">
              <span>$499/night</span>
            </div>
          </div>
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101">
            <div className="relative h-72">
              <img src={Room6} alt="Presidential Suite" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="mb-2 font-bold text-2xl text-gray-900">habitacin estandar</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                habitacion estandar maint event
              </p>
              <div className="flex mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p>2 Personas</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <p>280 sq ft</p>
              </div>
              <div className="w-full px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg">
                <Link to="/reservar" className='text-center block '>Reserva ahora</Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-black text-white p-2 rounded-lg m-4">
              <span>$799/night</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
