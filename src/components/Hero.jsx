import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'
import { ScrollParallax } from "react-just-parallax";
const Hero = () => {
  return (
    <div id='hero' className='relative w-full min-h-screen flex flex-col items-center justify-start text-center pt-28 pb-16'>
        <div className="z-0 inset-0 absolute overflow-hidden"><img src={assets.hero_bg} className="w-full h-full object-cover opacity-[0.7]" width={1440} height={1400} />
        <div className="absolute inset-0 -z-10 bg-black" />
        </div>
        <div className="h-12 z-10 border bg-white/10 flex items-center justify-center shadow-white rounded-full w-fit mb-6">
                  <p className='text-white text-center px-4 text-sm md:text-xl'>Choose smarter with <span className='text-primary'>CounselX</span></p>
                </div>
        <div className="relative z-10 px-4 max-w-6xl mx-auto">
                <h1 className="text-4xl text-white text-center sm:text-5xl md:text-5xl xl:text-[72px] font-medium">Unlock Your Full Potential with 
          <span className="bg-linear-to-r from-soft via-primary to-secondary bg-clip-text text-transparent"> Career Counseling — </span>Today.
        </h1> 
        <p className="text-sm text-soft mt-6 max-w-2xl mx-auto">
            At our career counseling platform, we are dedicated to helping individuals discover their true potential and achieve their professional goal. Our mission to provide comprehensive guidance and resources to support your career development journey.
        </p>
        </div>
        <div className="relative z-10 mt-14 ">
          <Link to="/signup" className="bg-primary text-white px-8 py-3 h-12 rounded-full hover:bg-white hover:text-primary transition-colors font-bold text-2xl">
            Get Started
          </Link>
        </div>
        <div className="relative z-20 w-full">
          <ScrollParallax strength={0.05} isAbsolutelyPositioned={false}>
            <div className="flex justify-center mt-16 gap-10">
                <div className="h-fit w-fit bg-white rounded-2xl shadow-lg shadow-white -mt-14 pr-6 pt-3">
                <h1 className="mt-1 text-black text-2xl px-6 font-extrabold max-w-70 text-left">Discover Your True Potential with <span className='text-primary'> Career Assessment</span>
                </h1>
                <p className="text-left px-6 text-sm font-bold text-black/60">1000+ career choices</p>
                <h1 className='text-purple-800 text-4xl px-6 font-extrabold pt-4 text-left'>98%</h1>
                <p className="text-left px-6 text-xl -mt-2 font-bold text-purple-900/70">Success Rate</p>
                <div className='h-fit w-fit px-6 py-2 mt-6 ml-6 mb-6 rounded-full flex items-left bg-primary text-white'>
                <p className='text-left text-xl font-bold pr-4'>Take Quiz</p>
                <img src={assets.arrow_icon} width={16} alt=''/>
                </div>
                </div>

                <div className="h-fit w-120 bg-white rounded-2xl shadow-lg shadow-black/20 flex flex-col cols-1 items-center justify-center">
                  <div className="h-10 bg-soft/20 shadow-xl shadow-black/20 flex items-center justify-center rounded-full w-fit mt-6 mb-4">
                      <p className='text-black text-center font-semibold px-4 text-sm md:text-sm'>Explore with <span className='text-secondary'> Smart Search</span></p>
                    </div>
                <h1 className="text-black text-3xl px-6 max-w-80 text-left">Choose from <span className='text-primary font-semibold'>India's Top</span> Counsellors
                </h1>
                <p className="px-6 text-sm font-bold text-black/60 mt-4 pl-20 pr-20 text-justify">
                  Complete career guidance at your fingertips
                </p>
                <div className="p-6">
                  <img src={assets.counsellor} className="rounded-2xl w-full" alt="" />
                </div>
                </div>

                <div className="h-fit w-fit backdrop-blur-xs bg-linear-to-b from-primary/60 to-white/10 border border-white rounded-2xl shadow-lg shadow-white -mt-14">
                <div className="h-10 bg-white/20 shadow-xl shadow-black/20 flex items-center justify-center rounded-full w-fit mt-10 mb-4 px-6 ml-4">
                      <p className='text-white text-center font-semibold px-4 text-sm md:text-sm'>Explore Job Opportunities</p>
                      <img src={assets.arrow_icon} width={16} alt=''/>
                    </div>
                <h1 className="mt-6 text-white text-2xl px-6 max-w-80 text-left mb-4">Ace Your Job Interviews with <span className="font-semibold">Confidence</span>
                </h1>
                <h1 className='text-white text-3xl font-bold px-6 max-w-80 text-left mb-10'>Get Started @199 only -</h1>
                <div className="bg-secondary w-fit h-fit p-4 rounded-full m-6"> <img src={assets.arrow_icon} width={20} alt=''/></div>
                </div>
            </div>
          </ScrollParallax>
        </div>
      
    </div>
  )
}

export default Hero
