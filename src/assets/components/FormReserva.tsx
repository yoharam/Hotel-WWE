import React from 'react'

function FormReserva() {
    return (
        <div className='flex justify-center my-12 mx-5'>
            <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow p-5 md:p-12 w-230">
                
                <form action="">
                    <div className="md:flex justify-between gap-8">
                        <div className='w-full'>
                            <label htmlFor="" className='block mb-2 font-medium text-sm'>Fecha de entrada</label>
                            <input type="date" className='w-full rounded-lg bg-[#f9f7f3] h-10 mb-2 px-2' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='block mb-2 font-medium text-sm'>Fecha de salida</label>
                            <input type="date" className='w-full rounded-lg bg-[#f9f7f3] h-10 mb-2 px-2' />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className='block mb-2 font-medium'>Tipo de Habitacion</label>
                        <select name="" id="" className='w-full rounded-lg bg-[#f9f7f3] h-10 mb-2 px-2'>
                            <option value="">SmackDown Room</option>
                            <option value="">Habitacion Superstars</option>
                            <option value="">Cody Rhodes</option>
                            <option value="">Habitacion estandar</option>
                            <option value="">Habitacion estandar Elite</option>
                            <option value="">Habitacion estandar Maint Event</option>
                        </select>
                        <label htmlFor="telefono" className='block mb-2 font-medium'>Número de huéspedes</label>
                        <input type="phone" className='w-full rounded-lg bg-[#f9f7f3] h-10 mb-5 px-2' />

                        <button className='bg-red-800 h-15 rounded-lg text-white font-medium cursor-pointer hover:-translate-y-0.5 hover:scale-101 hover:font-bold'>Reservar ahora</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FormReserva
