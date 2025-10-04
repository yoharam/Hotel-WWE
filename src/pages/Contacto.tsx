import React from 'react'
import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import FormContacto from '../assets/components/FormContacto';
import Info from '../assets/components/Info';
import BigShow from '../assets/components/BigShow';


export default function Contacto() {
  return (
    <>
      <Header />
      <div className='mt-10 '>
        <h1 className='text-center mb-2 text-6xl font-black'>Contactanos con Zero Miedo</h1>
        <p className='text-center'>i'm just a sexy boy</p>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-end pb-20 ">
          <BigShow />
        </div>
        <div className="lg:pr-30 p-10 pt-10 ">
          <FormContacto />
        </div>
      </div>
      <div className="lg:px-30  pb-24 ">
        <Info />
      </div>
      <Footer />
    </>
  )
}
