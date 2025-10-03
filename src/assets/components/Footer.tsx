import { Link } from 'react-router-dom';
import Logo from "../images/Logo.png"

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Clase Mundial Amenidades
            </h3>
            <p className="text-gray-300 mb-6">
              Todo lo que necesitas para una perfecta estadia, disfrutaras al maximo de ver a los luchadores de la WWE
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-red-800">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
</svg>
</div>
                <div>
                  <h4 className="font-bold text-red-600">Wifi 6E</h4>
                  <p className="text-sm text-gray-400">El mejor internet en Mexico</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg  xmlns="http://www.w3.org/2000/svg" width={36} className='text-red-800' height={36} 
fill={"currentColor"} viewBox="0 0 24 24">
{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M18 15c-1.24 0-1.91.34-2.45.61-.46.23-.79.39-1.56.39s-1.09-.17-1.55-.39c-.54-.27-1.21-.61-2.45-.61s-1.91.34-2.45.61c-.46.23-.79.39-1.55.39s-1.09-.17-1.55-.39C3.9 15.34 3.23 15 1.99 15v2c.76 0 1.09.17 1.55.39.54.27 1.21.61 2.45.61s1.91-.34 2.45-.61c.46-.23.79-.39 1.55-.39s1.09.17 1.55.39c.54.27 1.21.61 2.45.61s1.91-.34 2.45-.61c.46-.23.79-.39 1.56-.39s1.1.17 1.56.39c.54.27 1.21.61 2.45.61v-2c-.77 0-1.1-.17-1.56-.39-.54-.27-1.21-.61-2.45-.61M18 19c-1.24 0-1.91.34-2.45.61-.46.23-.79.39-1.56.39s-1.09-.17-1.55-.39c-.54-.27-1.21-.61-2.45-.61s-1.91.34-2.45.61c-.46.23-.79.39-1.55.39s-1.09-.17-1.55-.39C3.9 19.34 3.23 19 1.99 19v2c.76 0 1.09.17 1.55.39.54.27 1.21.61 2.45.61s1.91-.34 2.45-.61c.46-.23.79-.39 1.55-.39s1.09.17 1.55.39c.54.27 1.21.61 2.45.61s1.91-.34 2.45-.61c.46-.23.79-.39 1.56-.39s1.1.17 1.56.39c.54.27 1.21.61 2.45.61v-2c-.77 0-1.1-.17-1.56-.39-.54-.27-1.21-.61-2.45-.61M17 5c0-1.65-1.35-3-3-3s-3 1.35-3 3v1h2V5c0-.55.45-1 1-1s1 .45 1 1v2h-5V5c0-1.65-1.35-3-3-3S4 3.35 4 5v1h2V5c0-.55.45-1 1-1s1 .45 1 1v2H2v2h6v5h2V9h5v5h2V9h5V7h-5z"></path>
</svg>
                <div>
                  <h4 className="font-bold text-red-600">Piscina con Cuerdas de Ring</h4>
                  <p className="text-sm text-gray-400">Nadar mientras peleas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-red-600">Ring de Lucha</h4>
                  <p className="text-sm text-gray-400">Acceso 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-red-600">Cena Como Nacho Libre</h4>
                  <p className="text-sm text-gray-400">Cena Con Cena (Imitador)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-red-600">Desayuno de Campeones</h4>
                  <p className="text-sm text-gray-400">Lo que desayuna Roman Reigns cada Mañana</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-red-600">Servicio de Limpieza</h4>
                  <p className="text-sm text-gray-400">Cada mañana</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Tenemos Luchas 
            </h3>
            <p className="text-gray-300 mb-4">
              Frijolito vs Nacho Libre <br /> Esqueleto vs Zombie <br /> Randy Orton vs SuperPorky
            </p>
            <div className="space-y-2">
              <h4 className="font-bold text-red-600">Accesos Rapidos</h4>
              <div className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-400 hover:text-red-600 transition-colors">
                  Home
                </Link>
                <Link to="/habitaciones" className="text-gray-400 hover:text-red-600 transition-colors">
                  Habitaciones
                </Link>
                <Link to="/servicios" className="text-gray-400 hover:text-red-600 transition-colors">
                  Servicios
                </Link>
                <Link to="/contacto" className="text-gray-400 hover:text-red-600 transition-colors">
                  Contacto
                </Link>
                <Link to="/reservar" className="text-gray-400 hover:text-red-600 transition-colors">
                  Reservar
                </Link>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Contacto
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-red-600 mb-2">Locacion</h4>
                <p className="text-gray-400">
                  Arena Mexico <br />Dr. Lavista 189, Doctores, Cuauhtémoc, 06720 Ciudad de México, CDMX
                </p>
              </div>
              <div>
                <h4 className="font-bold text-red-600 mb-2">Telefono</h4>
                <p className="text-gray-400">+52 (33) 123-4567</p>
              </div>
              <div>
                <h4 className="font-bold text-red-600 mb-2">Email</h4>
                <p className="text-gray-400">info@hotelwwe.com</p>
              </div>
              <div>
                <h4 className="font-bold text-red-600 mb-2">Horario</h4>
                <div className="text-gray-400 text-sm">
                  <p>Check-in: 3:00 PM</p>
                  <p>Check-out: 12:00 PM</p>
                  <p>Ring de Luchas: 24/7</p>
                  <p>Servicio de Limpieza: 6 AM - 11 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center space-x-3">
              <img 
                src={Logo} 
                alt="Logo Hotel WWE" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-red-800">HOTEL WWE</span>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Hotel WWE. Todos los Derechos Reservados.</p>
              <p className="mt-1">Una Experiencia MuchaLucha Unica</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}