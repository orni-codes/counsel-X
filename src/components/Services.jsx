import React from 'react'
import assets from '../assets/assets';
import {
  Radar,
  Blocks,
  ArrowUpRight,
} from "lucide-react";

const Services = () => {
    const services = [
  {
    id: "0",
    icon: Blocks,
    title: "Unlock Your Career Potential",
    text: "Discover your true strengths and find the perfect career path. Our expert counsellors provide personalized guidance to help you achieve your professional goals.",
  },
  {
    id: "1",
    icon: ArrowUpRight,
    title: "Get Noticed by Employers",
    text: "Our professional resume writing service wil help you stand out from the competition. Our expert writers will craft a customized resume that highlights your skills and achievements.",
    light: true,
  },
  {
    id: "2",
    icon: Radar,
    title: "Customized for Your Needs",
    text: "Whether you're a student, professional, or looking for a career change, we have the perfect solution for you. Our services are tailored to meet your unique needs and goals.",
  }
];
  return (
    <div id='services' className='relative flex flex-col items-center gap-5 px-4 sm:px-12 lg:px-18 -mt-40 text-black bg-slate-100 pt-30 '>
        <h1 className='text-4xl mt-10 text-black text-center sm:text-3xl md:text-4xl xl:text-[48px] font-medium'>Comprehensive Career Assessment<br/> Service for Individuals</h1>
        <p className='text-sm text-black/80 mb-6 max-w-2xl mx-auto text-center'>At our career counseling platform, we are dedicated to helping individuals discover their true potential and achieve their professional goal. Our mission to provide comprehensive guidance and resources to support your career development journey.</p>
        <div className="grid gap-10 sm:gap-5 mb-10 lg:pl-20 lg:pr-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
            <div
                key={item.id}
                className="flex items-center lg:m-2 min-h-55 bg-white rounded-4xl transition-all duration-300 hover:bg-secondary/70 group">
                <div className="px-6 py-6">
                {/* icon */}
                <div
                className="flex items-center justify-center w-18 h-18 rounded-full bg-primary/10 group-hover:shadow-lg shrink-0 group-hover:bg-primary mb-4"
                >
                    <item.icon className="w-10 h-10 text-black group-hover:text-white" />
                </div>
                <div className="">
                    <h2 className="text-[1.5rem] mb-2 font-extrabold text-black tracking-tight leading-snug group-hover:text-white">
                    {item.title}
                    </h2>

                    <p className="text-sm text-black/75 group-hover:text-white/75">
                    {item.text}
                    </p>
                </div>
            </div>

            </div>
            ))}
        </div>
        <div className="grid gap-10 sm:gap-7 mb-10 lg:pl-20 lg:pr-20 grid-cols-1 sm:grid-cols-2">
            <div className="mt-8">
            <h1 className='text-2xl mt-10 text-primary text-center sm:text-2xl md:text-2xl xl:text-[34px] leading-8 font-semibold'>Why Choose Our Career<br/> Assessment Service ?</h1>
            <p className='text-sm text-black/80 mb-6 max-w-100 mx-auto mt-3 text-center'>Accurate and personalized assessment tailored to your unique strengths, interests, and career goals.</p>
            <h1 className='text-2xl mt-12 text-primary text-center sm:text-2xl md:text-2xl xl:text-[34px] leading-8 font-semibold'>Expert Guidance and <br/>Actionable Insights</h1>
            <p className='text-sm text-black/80 mb-6 max-w-100 mx-auto mt-3 text-center'>Our experienced career counselors provide valuable guidance and actionable insights to help you make the most of your assessment results.</p>
            <h1 className='text-2xl mt-12 text-primary text-center sm:text-2xl md:text-2xl xl:text-[34px] leading-8 font-semibold'>Unlock Your Full Potential</h1>
            <p className='text-sm text-black/80 mb-6 max-w-100 mx-auto mt-3 text-center'>Discover new career paths and opportunities that align with your skil interests and asirations.</p>
        </div>
        <div className="p-10">
            <img src={assets.service} alt="" className="rounded-3xl shadow-lg shadow-black"/>
        </div>
        </div>
    </div>
  )
}

export default Services
