import Footer from '../assets/components/Footer';
import Header from '../assets/components/Header';
import Inicio from '../assets/components/Inicio';


function Home() {
  return (
    <>
      <div className='flex justify-start items-start h-full'>
        <Header/> 
      </div>
      <div className='h-full w-full'>
        <Inicio/>
      </div>
      <div className='flex justify-center items-center h-full'>
        <Footer/>
      </div>
    </>
  );
}

    
export default Home