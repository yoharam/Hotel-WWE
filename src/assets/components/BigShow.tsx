import Bg from '../images/BigShow.png';

function BigShow() {
  return (
    <div className=''>
      <picture className='flex justify-center'>
        <img src={Bg} alt="" className='h-[700px] w-auto' />
      </picture>
    </div>
  )
}

export default BigShow
