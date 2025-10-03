
import Room1 from '../../assets/images/habitacion1.jpg';
import Room2 from '../../assets/images/habitacion2.jpg'
import Room3 from '../../assets/images/habitacion3.webp'
import Room4 from '../../assets/images/habitacion4.jpg'
import Room5 from '../../assets/images/habitacion5.jpg'
import Room6 from '../../assets/images/habitacion6.jpg'
import '../../index.css'


function Room() {
  return (
    <div className=" pb-20">
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
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow">
            <div className="relative h-72">
              <img src={Room1} alt="Standard Room" className="w-full h-full object-cover" />
            </div>
            <div className="p-7 ">
              <h3 className="mb-4 font-bold text-2xl text-gray-900">SmackDown Room</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Habitacion smack down azul
              </p>
              <div className="w-full px-8 py-4 bg-red-800 text-white text-center rounded-xl font-bold text-lg">
                Reserva ahora
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[8px] overflow-hi  dden border border-gray-100 shadow">
            <div className="relative h-72">
              <img src={Room2} alt="Deluxe Room" className="w-full h-full object-cover" />
        
            </div>
            <div className="p-7">
              <h3 className="mb-4 font-bold text-2xl text-gray-900">Habitacion Superstars</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Habitacion maint evente superstar
              </p>
              <div className="w-full px-8 py-4 bg-red-800 text-white text-center rounded-xl font-bold text-lg">
                Reserva Ahora
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow">
            <div className="relative h-72">
              <img src={Room3} alt="Premium Room" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="mb-4 font-bold text-2xl text-gray-900">Cody Rhodes</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                American Nightmare cody rhodes
              </p>
              <div className="w-full  text-center px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg">
                Reserva Ahora
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow">
            <div className="relative h-72">
              <img src={Room4} alt="Executive Suite" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="mb-4 font-bold text-2xl text-gray-900">Habitacion estandar</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                
              </p>
              <div className="w-full px-8 py-4 text-center bg-red-800 text-white rounded-xl font-bold text-lg">
                Reserva Ahora
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow">
            <div className="relative h-72">
              <img src={Room5} alt="Family Suite" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="mb-4 font-bold text-2xl text-gray-900">habitacion estandar</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                
              </p>
              <div className="w-full text-center px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg">
                Reserva Ahora
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow">
            <div className="relative h-72">
              <img src={Room6} alt="Presidential Suite" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="mb-4 font-bold text-2xl text-gray-900">habitacin estandar</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                
              </p>
              <div className="w-full text-center px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg">
                Reserva Ahora
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
