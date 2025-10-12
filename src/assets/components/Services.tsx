import Masajista from "../images/masajista.jpeg";
import Cocinando from "../images/cocinando.jpg";
import Gym from "../images/gym.jpeg";
import Room_Service from "../images/room_service.jpg";
import Spa from "../images/spa.jpeg";
import Transporte from "../images/transporte.jpg";

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  image: string;
  duracion: string;
}

export default function Services() {
  const servicios: Servicio[] = [
    {
      id: 1,
      nombre: "Masaje Relajante",
      descripcion :
        "Masaje de cuerpo completo para recuperarte después de un día intenso en el ring",
      precio: 850,
      image: Masajista,
      duracion: "60 min",
    },
    {
      id: 2,
      nombre: "Comida Gourmet",
      descripcion :
        "Menú especial preparado por chefs profesionales con ingredientes premium",
      precio: 450,
      image: Cocinando,
      duracion: "45 min",
    },
    {
      id: 3,
      nombre: "Gimnasio Premium",
      descripcion :
        "Acceso al gimnasio de alto rendimiento estilo WWE con equipo profesional",
      precio: 300,
      image: Gym,
      duracion: "2 hrs",
    },
    {
      id: 4,
      nombre: "Servicio a la Habitación",
      descripcion :
        "Comida y bebidas entregadas directamente a tu habitación 24/7",
      precio: 200,
      image: Room_Service,
      duracion: "30 min",
    },
    {
      id: 5,
      nombre: "Spa Deluxe",
      descripcion :
        "Tratamiento completo de spa con jacuzzi y aromaterapia",
      precio: 1200,
      image: Spa,
      duracion: "90 min",
    },
    {
      id: 6,
      nombre: "Transporte VIP",
      descripcion :
        "Traslado en limusina desde/hacia el aeropuerto con chofer personal",
      precio: 950,
      image: Transporte,
      duracion: "Variable",
    },
  ];

  return (
    <div className="pb-20 bg-[#fafaf8]">
      {/* Hero Section */}
      <div className="flex flex-col justify-center bg-wrestlers text-center mb-16 h-[500px]">
        <h1 className="mb-6 text-6xl font-black text-white">Servicios Premium</h1>
        <p className="text-white max-w-3xl mx-auto text-xl leading-relaxed text-shadow-sky-300 font-bold">
          Experimenta servicios de clase mundial diseñados para hacer tu estadía inolvidable
        </p>
      </div>

      {/* Services Grid */}
      <div className="px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow relative transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            >
              <div className="relative h-150 overflow-hidden">
                <img
                  src={servicio.image}
                  alt={servicio.nombre }
                  className="w-full h-full object-fill"
                />
              </div>

              <div className="p-7">
                <h3 className="mb-2 font-bold text-2xl text-gray-900">
                  {servicio.nombre}
                </h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed min-h-[72px]">
                  {servicio.descripcion }
                </p>

                <div className="flex items-center text-gray-700 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <p>{servicio.duracion}</p>
                </div>

                <button
                  className="w-full px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg text-center hover:bg-red-700 transition-colors"
                >
                  Agregar Servicio
                </button>

                <div className="absolute top-0 right-0 bg-black text-white p-2 rounded-lg m-4">
                  <span>${servicio.precio} MXN</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
