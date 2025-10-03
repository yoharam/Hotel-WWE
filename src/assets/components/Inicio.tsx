import Luchadores from "../images/Luchadores.jpeg"
export default function Inicio() {
  return (
    <div className='h-full w-full flex bg-no-repeat justify-center items-center bg-[#000000]'>
        <img src={Luchadores} alt="3 Luchadores" />
        <h1 className="text-9xl text-red-800 font-bold p-2">Bienvenido al Hotel WWE</h1>
        
    </div>
  )
}
