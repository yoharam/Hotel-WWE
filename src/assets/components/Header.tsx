import Logo from '../images/Logo.png'
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <>
      <div className="m-3 bg-[#000000] w-full  flex items-center gap-4 p-2">
        <img
          className="h-30 hover:cursor-pointer"
          src={Logo}
          alt="Logo Hotel WWE"
        />
        <h1 className="text-2xl text-red-800 font-black">Hotel WWE</h1>
        <Link to="/hola" ></Link>
        <button>Reserva una Habitacion (KO)</button>
      </div>
    </>
  )
}
