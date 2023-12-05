import React from 'react'
import home_img from '../assets/home2.jpg'
import Header from './Header'
import logo from '../assets/logo.png'
import chacha from '../assets/chacha.jpg'
const Home = () => {
    return (
        <div>
            
            <div className=' w-full h-full' style={{
                position: 'fixed',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${home_img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}>
                <h1 className='text-slate-300 absolute font-semibold text-4xl bg-[rgba(0,0,0,0.5)] left-60 top-56 w-2/5 text-center rounded'> National Mission for Clean Ganga </h1>
                <p className='text-slate-300 absolute font-semibold text-xl bg-[rgba(0,0,0,0.7)] left-60 top-80 w-2/5 text-center rounded'>Let us embody the spirit of <span className='text-[yellow] text-[23px]'>'Namami Gange'</span> in our hearts ans restore glory of <span className='text-[yellow] text-[23px]'>Maa Ganga</span> </p>
                <div className='absolute -right-56  top-4'>
                    <img src={logo} alt="logo" className='w-3/4' />
                </div>
                <div className='absolute right-28 top-44'>
                    <img src={chacha} alt="chacha chaudhari" className='' />
                </div>
            </div>
            
        </div>
    )
}

export default Home