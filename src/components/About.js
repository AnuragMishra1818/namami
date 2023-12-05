import React, { useState } from 'react'
import vd1 from '../assets/vid1.mp4'
import vd2 from '../assets/vid2.mp4'
import vd3 from '../assets/vid3.mp4'
import vd4 from '../assets/vid4.mp4'
import vd5 from '../assets/vid5.mp4'
import home_img from '../assets/home2.jpg'
const About = () => {
    const [showVideo,setShowVideo] = useState(1);
    return (
        <div className='w-full h-[100vh] bg-[#8ed3e880]' >
            <h1 className='text-3xl text-center p-5 font-bold'>Key Points</h1>
            <div className='flex justify-evenly mt-16'>
                <button className=' border-2 border-black box-border w-28 rounded p-2 hover:bg-[#8ed3e8]' onClick={()=>{setShowVideo(1)}}>Pollution Mitigation</button>
                <button className=' border-2 border-black box-border w-28 rounded p-2 hover:bg-[#8ed3e8]' onClick={()=>{setShowVideo(2)}}>Infrastructure Enhancement</button>
                <button className=' border-2 border-black box-border w-28 rounded p-2 hover:bg-[#8ed3e8]' onClick={()=>{setShowVideo(3)}}>Biodiversity Conservation</button>
                <button className=' border-2 border-black box-border w-28 rounded p-2 hover:bg-[#8ed3e8]' onClick={()=>{setShowVideo(4)}}>Community Engagement</button>
                <button className=' border-2 border-black box-border w-28 rounded p-2 hover:bg-[#8ed3e8]' onClick={()=>{setShowVideo(5)}}>International Collaboration </button>
            </div>
            <div className='mt-24 flex justify-center'>
                <video className={showVideo===1?"block":"hidden"} src={vd1} controls="controls"  width="500px"/>
                <video className={showVideo===2?"block":"hidden"} src={vd2} controls="controls"  width="500px"/>
                <video className={showVideo===3?"block":"hidden"} src={vd3} controls="controls"  width="500px"/>
                <video className={showVideo===4?"block":"hidden"} src={vd4} controls="controls"  width="500px"/>
                <video className={showVideo===5?"block":"hidden"} src={vd5} controls="controls"  width="500px"/>
            </div>
        </div>
    )
}

export default About;