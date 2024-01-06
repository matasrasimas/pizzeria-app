import './styles.css'
import backgroundImg from '../../assets/home-background-img.jpg'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex flex-col relative items-center'>
      <div className='flex flex-col mx-5 gap-5 z-20 justify-center'>
        <h1 className='home-hdr text-white shadow-lg'>Welcome!</h1>
        <h2 className='home-dsc'>In this website, you are able to create and view pizza orders!</h2>
        <button className='btn-light self-center'>
            <Link to='/create-order'>Get Started</Link>
        </button>
      </div>
      <div className='fixed bg-black h-full w-full z-10 opacity-70'></div>
      <img src={backgroundImg} alt="home-img" className='fixed z-0 h-full w-full object-cover'/>
    </div>
  )
}

export default HomePage