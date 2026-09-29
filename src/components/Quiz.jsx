import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Clock, CheckCircle2, ClipboardList, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import assets from '../assets/assets'
import MBTI_QUESTIONS from '../utils/questions'
import { calculateMBTI } from '../utils/mbtiCalculator'
import { useAuth } from '../context/AuthContext'
import MBTIResult from './MBTIResult'

const Quiz = () => {
  const navigate = useNavigate()
  const { user, updateUserData } = useAuth()
  
  const [sessionId, setSessionId] = useState(`local-${Date.now()}`)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)
  const [answeredCount, setAnsweredCount] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState('')

  // Timer
  useEffect(() => {
    if (!quizStarted || result) return
    const timer = setInterval(() => setTimeElapsed(t => t + 1), 1000)
    return () => clearInterval(timer)
  }, [quizStarted, result])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0')
    const secs = (seconds % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
  }

  const startTest = async () => {
    setLoading(true)
    setError(null)
    
    // Simulate a brief loading for UX
    setTimeout(() => {
      setQuestion(MBTI_QUESTIONS[0])
      setQuizStarted(true)
      setLoading(false)
    }, 800)
  }

  const handleAnswer = async (option) => {
    if (loading || isAnimating) return
    
    setSlideDirection('slide-out-left')
    setIsAnimating(true)

    const newAnswers = { ...answers, [question.id]: option }
    setAnswers(newAnswers)
    
    const nextIndex = currentQuestionIndex + 1
    const isFinished = nextIndex >= MBTI_QUESTIONS.length

    setTimeout(() => {
      if (isFinished) {
        setLoading(true)
        // Perform local calculation
        const mbtiResult = calculateMBTI(newAnswers)
        console.log('Quiz Complete! Calculated Result:', mbtiResult)
        
        // Brief artificial delay for UX feel
        setTimeout(() => {
          setResult(mbtiResult)
          setAnsweredCount(MBTI_QUESTIONS.length)
          
          // Store result in user profile
          if (user && user.updateUserData && mbtiResult) {
            user.updateUserData({ mbti: mbtiResult.type });
          }
          
          setLoading(false)
          setIsAnimating(false)
        }, 1000)
      } else {
        setCurrentQuestionIndex(nextIndex)
        setQuestion(MBTI_QUESTIONS[nextIndex])
        setAnsweredCount(nextIndex)
        setSlideDirection('slide-in-right')
        
        setTimeout(() => {
          setIsAnimating(false)
          setSlideDirection('')
        }, 300)
      }
    }, 250)
  }

  const TOTAL_QUESTIONS = MBTI_QUESTIONS.length
  const progress = Math.round((answeredCount / TOTAL_QUESTIONS) * 100)

  // Loading state
  if (loading && !quizStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-600/60" style={{ backgroundImage: `url(${assets.quiz_bg})`, backgroundSize: 'cover' }}>
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-white animate-spin" />
          <span className="text-white font-medium">Initializing your assessment...</span>
        </div>
      </div>
    )
  }

  // Final Results
  if (result) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 py-12 relative overflow-hidden" style={{ backgroundImage: `url(${assets.quiz_bg})`, backgroundSize: 'cover' }}>
        <div className="absolute inset-0 bg-blue-600/50"></div>
        <MBTIResult 
          result={result} 
          userName={user?.name || 'Explorer'} 
          onRestart={() => window.location.reload()}
          onGoDashboard={() => navigate('/dashboard')}
        />
      </div>
    )
  }

  // Pre-quiz intro screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4" style={{ backgroundImage: `url(${assets.quiz_bg})`, backgroundSize: 'cover' }}>
        <div className="absolute inset-0 bg-blue-600/60"></div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-16 max-w-2xl w-full mx-4 text-center relative z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600"></div>

          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <ClipboardList className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 tracking-tight">Personality Assessment</h1>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Discover your unique personality traits and career compatibility through our AI-powered MBTI analysis.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl flex items-center gap-2 justify-center">
              <AlertCircle className="w-4 h-4" /> {error}
            </div>
          )}

          <button
            onClick={startTest}
            disabled={loading}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-200"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Take Quiz'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4 sm:p-6" style={{ backgroundImage: `url(${assets.quiz_bg})`, backgroundSize: 'cover' }}>
      <div className="absolute inset-0 bg-blue-600/50"></div>

      <div className="max-w-[1100px] w-full bg-white rounded-3xl shadow-2xl relative z-10 overflow-hidden min-h-[600px] flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex-1 w-full max-w-sm">
            <div className="flex justify-between mb-2">
              <span className="text-xs font-bold text-blue-600">{progress}% Completed</span>
              <span className="text-xs text-gray-400 font-medium">Session: {sessionId?.slice(-6).toUpperCase()}</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 px-5 py-2.5 rounded-2xl border border-gray-100">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="font-mono font-bold text-gray-700">{formatTime(timeElapsed)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 sm:p-12 flex flex-col justify-center">
          <div className={`transition-all duration-300 transform ${slideDirection}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs rounded-full uppercase tracking-widest mb-4">
                Dimension: {question?.dimension}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                {question?.question}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <button
                onClick={() => handleAnswer('A')}
                disabled={loading}
                className="flex flex-col p-6 rounded-2xl border-2 border-gray-100 bg-white hover:border-blue-500 hover:bg-blue-50 transition-all group text-left"
              >
                <div className="w-8 h-8 rounded-full border-2 border-gray-200 group-hover:border-blue-500 flex items-center justify-center mb-4 transition-colors">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-blue-500">A</span>
                </div>
                <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">{question?.A}</span>
              </button>

              <button
                onClick={() => handleAnswer('B')}
                disabled={loading}
                className="flex flex-col p-6 rounded-2xl border-2 border-gray-100 bg-white hover:border-blue-500 hover:bg-blue-50 transition-all group text-left"
              >
                <div className="w-8 h-8 rounded-full border-2 border-gray-200 group-hover:border-blue-500 flex items-center justify-center mb-4 transition-colors">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-blue-500">B</span>
                </div>
                <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">{question?.B}</span>
              </button>
            </div>
          </div>
          
          {error && (
             <p className="text-red-500 text-sm mt-6 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> {error}
             </p>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400 font-medium">Click on the option that describes you best. Your answer is saved automatically.</p>
        </div>
      </div>

      <style>{`
        .slide-out-left { opacity: 0; transform: translateX(-40px); }
        .slide-in-right { animation: slideInRight 0.4s ease-out forwards; }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

export default Quiz
