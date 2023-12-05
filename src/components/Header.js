import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='text-[#000] bg-[#56828fa0] font-bold '>
        <ul className='flex p-2 ml-10 justify-center'>
            <Link to="/"><li className='p-1 cursor-pointer hover:bg-[#8ed3e8] rounded-lg'>Home</li></Link>
            <Link to="/about"><li className='p-1 ml-16 cursor-pointer hover:bg-[#8ed3e8] rounded-lg'>About</li></Link>
        </ul>
    </div>
  )
}

export default Header