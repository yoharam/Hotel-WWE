export default function Inicio() {
  return (
    <div className='inicio w-full flex flex-col bg-no-repeat justify-center items-center bg-[#000000] h-screen bg-cover bg-center'>
      
      {/* Contenedor de texto con fondo semi-transparente */}
      <div className='flex flex-col items-center gap-6 px-6 py-8 bg-black/70 rounded-lg max-w-4xl mx-4 backdrop-blur-sm'>
        
        {/* Título principal */}
        <h1 className='text-4xl sm:text-5xl lg:text-7xl font-black text-red-800 text-center leading-tight'>
          BIENVENIDO AL HOTEL WWE
        </h1>
        
        {/* Subtítulo */}
        <p className='text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center'>
          Donde cada noche es una experiencia <span className='text-red-800'>LEGENDARIA</span>
        </p>
        
        {/* Descripción */}
        <p className='text-base sm:text-lg text-gray-300 text-center max-w-2xl'>
          Vive la emoción del entretenimiento deportivo más grande del mundo. 
          Lujo, comodidad y adrenalina en cada rincón.
        </p>
      </div>
      
    </div>
  )
} 