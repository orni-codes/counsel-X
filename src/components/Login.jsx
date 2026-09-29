import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, AlertCircle, Loader } from 'lucide-react'
import assets from '../assets/assets'
import { useAuth } from '../context/AuthContext'


const Login = () => {
  const navigate = useNavigate()
  const { login, loading, error: authError } = useAuth()
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(formData)
      navigate('/quiz')
    } catch (err) {
      // Error handled by AuthContext
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-primary from-50% to-white to-50% flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/40 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-white rounded-full opacity-50 blur-3xl"></div>

      <div className="max-w-[1000px] w-full bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10 min-h-[600px]">
        
        {/* Left Side: Illustration / Brand */}
        <div className="hidden md:flex flex-col justify-center items-start w-1/2 p-12 relative bg-[#5B7BFE] overflow-hidden">
          <img 
            src={assets.signup_bg} 
            alt="Adventure starts here" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          
          <div className="relative z-10 text-white mt-10">
            <h1 className="text-7xl font-extrabold mb-4 leading-17 tracking-tight">
              Welcome <br/>
              Back!
            </h1>
            <p className="text-lg font-medium opacity-90 max-w-[280px]">
              Log in to your account and view your progress 
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-14 flex flex-col justify-center bg-[#FAFBFF] xl:bg-white text-center">
          
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white shadow-lg -p-2 shadow-black/10 rounded-2xl flex items-center justify-center">
              <img src={assets.logo_blue} alt="Logo" className="w-full h-auto object-contain" />
            </div>
          </div>
          
          <h2 className="text-2xl text-gray-800 font-semibold mb-6">Hello ! Welcome back</h2>

          {authError && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 flex items-center gap-3 text-red-700 text-sm rounded-r-lg animate-pulse">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}
          
          <form className="text-left space-y-5" onSubmit={handleLogin}>
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 pl-1">Email</label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address" 
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm bg-white" 
                />
              </div>
            </div>
            
            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 pl-1">Password</label>
              <div className="relative">
                <Lock className="w-5 h-5 text-blue-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input 
                  type="password" 
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••" 
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm bg-white tracking-widest" 
                />
              </div>
            </div>
            
            {/* Options */}
            <div className="flex items-center justify-between text-xs sm:text-sm pt-2 pb-2">
              <label className="flex items-center text-gray-500 gap-2 cursor-pointer font-medium hover:text-gray-700 transition">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                Remember me
              </label>
              <a href="#" className="text-primary font-medium hover:underline">Reset Password!</a>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-blue-500/20 text-sm flex items-center justify-center gap-2"
            >
                {loading ? <Loader className="w-5 h-5 animate-spin" /> : 'Login'}
            </button>
          </form>
          
          {/* Divider */}
          <div className="my-8 flex items-center gap-4 before:h-[1px] before:flex-1 before:bg-gray-200/80 after:h-[1px] after:flex-1 after:bg-gray-200/80">
            <span className="text-xs text-gray-400 font-medium">or</span>
          </div>
          
          {/* Social Logins */}
          <div className="flex justify-center gap-4 mb-8">
            
              {/* onClick={() => (window.location.href = 'https://counsel-x.onrender.com/api/auth/google')} */}
            {/* <button 
            type="button"
              onClick={() => navigate('/quiz')}
                className="w-12 h-12 flex items-center justify-center bg-white shadow-sm border border-gray-100 rounded-xl hover:bg-gray-50 transition-transform hover:-translate-y-0.5"
            >
            <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            alt="Google" 
            className="w-5 h-5" 
              />
            </button> */}
            <a
            href="/quiz"
            className="w-12 h-12 flex items-center justify-center bg-white shadow-sm border border-gray-100 rounded-xl hover:bg-gray-50 transition-transform hover:-translate-y-0.5"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
          </a>
            <button className="w-12 h-12 flex items-center justify-center bg-white shadow-sm border border-gray-100 rounded-xl hover:bg-gray-50 transition-transform hover:-translate-y-0.5">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-white shadow-sm border border-gray-100 rounded-xl hover:bg-gray-50 transition-transform hover:-translate-y-0.5">
              <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-sm text-gray-500 font-medium mt-auto md:mt-0">
            Dont Have an account? 
            <Link to="/signup" className="text-primary font-bold hover:underline ml-1">Create Account</Link>
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Login
