import Masajista from "../images/masajista.jpeg";
import Cocinando from "../images/cocinando.jpg";
import Gym from "../images/gym.jpeg";
import Room_Service from "../images/room_service.jpg";
import Spa from "../images/spa.jpeg";
import Transporte from "../images/transporte.jpg";

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  duration: string;
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      name: "Masaje Relajante",
      description:
        "Masaje de cuerpo completo para recuperarte después de un día intenso en el ring",
      price: 850,
      image: Masajista,
      duration: "60 min",
    },
    {
      id: 2,
      name: "Comida Gourmet",
      description:
        "Menú especial preparado por chefs profesionales con ingredientes premium",
      price: 450,
      image: Cocinando,
      duration: "45 min",
    },
    {
      id: 3,
      name: "Gimnasio Premium",
      description:
        "Acceso al gimnasio de alto rendimiento estilo WWE con equipo profesional",
      price: 300,
      image: Gym,
      duration: "2 hrs",
    },
    {
      id: 4,
      name: "Servicio a la Habitación",
      description:
        "Comida y bebidas entregadas directamente a tu habitación 24/7",
      price: 200,
      image: Room_Service,
      duration: "30 min",
    },
    {
      id: 5,
      name: "Spa Deluxe",
      description:
        "Tratamiento completo de spa con jacuzzi y aromaterapia",
      price: 1200,
      image: Spa,
      duration: "90 min",
    },
    {
      id: 6,
      name: "Transporte VIP",
      description:
        "Traslado en limusina desde/hacia el aeropuerto con chofer personal",
      price: 950,
      image: Transporte,
      duration: "Variable",
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
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow relative transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="mb-2 font-bold text-2xl text-gray-900">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed min-h-[72px]">
                  {service.description}
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
                  <p>{service.duration}</p>
                </div>

                <button
                  className="w-full px-8 py-4 bg-red-800 text-white rounded-xl font-bold text-lg text-center hover:bg-red-700 transition-colors"
                >
                  Agregar Servicio
                </button>

                <div className="absolute top-0 right-0 bg-black text-white p-2 rounded-lg m-4">
                  <span>${service.price} MXN</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
