import React from 'react'
import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import FormReserva from '../assets/components/FormReserva';

export default function Reservaciones() {
  return (
    <>
      <Header />
      <div className='mt-10 '>
        <h1 className='text-center mb-2 text-6xl font-black'>El ring del lujo te espera</h1>
      </div>
      <FormReserva />
      <Footer />
    </>
  )
}
