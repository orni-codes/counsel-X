import React from 'react'
import assets from '../assets/assets'
import { Smartphone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-16 px-4 sm:px-12 lg:px-24 font-sans">
      
      {/* Top CTA Banner */}
      <div className="bg-primary rounded-[2.5rem] p-10 md:p-14 lg:p-20 flex flex-col md:flex-row items-center justify-between relative mb-24 max-w-[1400px] mx-auto">
        
        {/* Abstract Background Curves */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 hidden sm:block overflow-hidden rounded-[2.5rem]">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
             <path d="M0 50 C 30 -20 70 120 100 50" fill="none" stroke="white" strokeWidth="0.5" />
             <path d="M0 80 C 40 100 60 0 100 80" fill="none" stroke="white" strokeWidth="0.5" />
           </svg>
        </div>

        {/* Left Content */}
        <div className="relative z-10 max-w-xl text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Try our platform <br className="hidden sm:block" />
            for free for 14 days
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            The first step to a brighter future takes<br className="hidden sm:block"/> less than a minute.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {/* App Store Button */}
            <button className="bg-black text-white px-5 py-2.5 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform">
              <Smartphone className="w-7 h-7 text-white" />
              <div className="text-left flex flex-col justify-center">
                <span className="text-[10px] leading-tight font-medium text-gray-300">Download on the</span>
                <span className="text-base font-semibold leading-none mt-0.5">App Store</span>
              </div>
            </button>
            
            {/* Play Store Button */}
            <button className="bg-black text-white px-5 py-2.5 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform">
              {/* Custom triangle for play store feel */}
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent"></div>
              </div>
              <div className="text-left flex flex-col justify-center">
                <span className="text-[10px] leading-tight font-medium text-gray-300">GET IT ON</span>
                <span className="text-base font-semibold leading-none mt-0.5">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content / Illustration (Mockup style) */}
        <div className="hidden lg:flex relative z-10 w-5/12 justify-end right-0">
            {/* Visual element representing the illustration of the jumping girl/vegetables in the inspiration */}
            <div className="absolute w-100 mt-80 flex justify-center items-end">
               <img src={assets.footer_bg} className="h-100 absolute bottom-0 scale-125 origin-bottom" alt="Illustration" />
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mt-20">
        
        {/* Column 1: Logo & Copyright */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div className="w-fit h-fit px-6 py-2 bg-primary rounded-full flex items-center justify-center">
             {/* Using project's logo */}
            <img src={assets.logo} alt="CounselX" className="h-10 object-contain" />
          </div>
          
          <div className="text-xs text-gray-400 font-medium space-y-2 mt-auto">
            <p>©2026 CounselX by Team, Inc.</p>
            <p>
              <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a> | <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* Column 2: Products */}
        <div>
          <h4 className="font-extrabold text-gray-900 mb-6 text-sm">Products</h4>
          <ul className="space-y-4 text-xs font-semibold text-gray-400">
            <li><a href="#" className="hover:text-primary transition-colors">Product</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Log in</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Request access</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Partnerships</a></li>
          </ul>
        </div>

        {/* Column 3: About us */}
        <div>
          <h4 className="font-extrabold text-gray-900 mb-6 text-sm">About us</h4>
          <ul className="space-y-4 text-xs font-semibold text-gray-400">
            <li><a href="#" className="hover:text-primary transition-colors">About CounselX</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <h4 className="font-extrabold text-gray-900 mb-6 text-sm">Resources</h4>
          <ul className="space-y-4 text-xs font-semibold text-gray-400">
            <li><a href="#" className="hover:text-primary transition-colors">Help center</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Book a demo</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Server status</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Column 5: Get in touch */}
        <div>
          <h4 className="font-extrabold text-gray-900 mb-6 text-sm">Get in touch</h4>
          <p className="text-xs font-semibold text-gray-400 leading-relaxed mb-6 pe-4">
            Questions or feedback?<br />We'd love to hear from you.
          </p>
          
        </div>

      </div>
    </footer>
  )
}

export default Footer
