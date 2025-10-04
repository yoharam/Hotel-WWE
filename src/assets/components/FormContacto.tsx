import React from 'react'

function FormContacto() {
    return (
        <>
            <div className="bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow p-4 md:p-8">
                <h1 className='text-2xl font-medium mb-5'>Envianos tu mensaje</h1>
                <form action="">
                    <div className="md:flex justify-between gap-8">
                        <div className='w-full'>
                            <label htmlFor="nombre" className='block mb-2 font-medium text-sm'>Nombre</label>
                            <input type="text" className='w-full rounded-lg bg-[#f9f7f3] h-10 mb-2 focus:border-red-800' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="apellido" className='block mb-2 font-medium text-sm'>Apellidos</label>
                            <input type="text" className='w-full rounded-lg bg-[#f9f7f3] h-10 mb-2' />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="correo" className='block mb-2 font-medium'>Correo Electrico</label>
                        <input type="email" className='w-full rounded-lg bg-[#f9f7f3] h-10 mb-2' />
                        <label htmlFor="telefono" className='block mb-2 font-medium'>Telefono</label>
                        <input type="phone" className='w-full rounded-lg bg-[#f9f7f3] h-10 mb-2' />
                        <label htmlFor="asunto" className='block mb-2 font-medium'>Asunto</label>
                        <input type="text" className='w-full rounded-lg bg-[#f9f7f3] h-10 mb-2' />
                        <label htmlFor="mensaje" className='block mb-2 font-medium'>Mensaje</label>
                        <textarea name="mensaje" className='w-full rounded-lg bg-[#f9f7f3]  mb-5 h-30' id=""></textarea>
                        <button className='bg-red-800 h-15 rounded-lg text-white font-bold'>Enviar mensaje</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default FormContacto
