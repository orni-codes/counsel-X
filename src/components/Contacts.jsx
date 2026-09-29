import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contacts = () => {
  return (
    <div id='contact' className='px-4 sm:px-12 lg:px-24 py-10 bg-soft/50'>
      <div className='mb-16'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-black mb-4'>
          Contact Information
        </h1>
        <p className='text-gray-600 text-lg'>
          Reach out to us for any inquiries or assistance
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-16 lg:gap-8'>
        {/* Left Col: Contact Info */}
        <div className='w-full lg:w-[35%] flex flex-col gap-12'>
          
          {/* Email block */}
          <div className='flex flex-col-2 gap-4'>
            <div className='p-2 rounded-xl w-fit mb-4 items-center justify-center'>
              <Mail className='text-primary w-18 h-18' />
            </div>
            <div className='space-y-1.5'>
              <p className='font-medium text-black text-xl'>Email</p>
              <p className='text-sm text-gray-500 mt-5'>Email Us</p>
              <p className='text-lg text-gray-800 -mt-2 font-bold'>careercounseller@gmail.com</p>
            </div>
          </div>

          {/* Phone block */}
           <div className='flex flex-col-2 gap-4'>
            <div className=' p-2 rounded-xl w-fit mb-4 items-center justify-center'>
              <Phone className='text-primary w-18 h-18' />
            </div>
            <div className='space-y-1.5'>
              <p className='font-medium text-black text-xl'>Phone</p>
              <p className='text-sm text-gray-500 mt-5'>Call Us</p>
              <p className='text-lg text-gray-800 -mt-2 font-bold'>+911234567890</p>
            </div>
          </div>

          {/* Office block */}
           <div className='flex flex-col-2 gap-4'>
            <div className='p-2 rounded-xl w-fit mb-4 items-center justify-center'>
              <MapPin className='text-primary w-18 h-18' />
            </div>
            <div className='space-y-1.5'>
              <p className='font-medium text-black text-xl'>Office</p>
              <p className='text-sm text-gray-500 mt-5'>Kolkata,West Bengal</p>
              <a href="#" className='text-lg text-gray-800 hover:text-primary font-bold -mt-2 flex items-center gap-1'>
                Get Directions <span className='text-lg leading-none'>›</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Col: Map */}
        <div className='w-full lg:w-[65%]'>
          <div className='w-full h-full min-h-[450px] border-[12px] border-white rounded-2xl shadow-sm'>
            <iframe
              title="Google Maps UEM Kolkata"
              src="https://www.google.com/maps?q=University+of+Engineering+%26+Management,+Kolkata+(UEM)&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
