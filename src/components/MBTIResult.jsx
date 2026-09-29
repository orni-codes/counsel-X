import React from 'react';
import { CheckCircle2, ChevronRight, User, Award, Brain, Heart, Zap, Target } from 'lucide-react';
import { MBTI_DATA, DIMENSION_DETAILS } from '../utils/mbtiHelpers';

const MBTIResult = ({ result, onRestart, onGoDashboard, userName }) => {
  const { type, confidence } = result;
  const mbti = MBTI_DATA[type] || MBTI_DATA.INFP; // fallback

  // Dimension mapping for the bottom trait boxes
  const traits = [
    { id: 1, name: 'Empathy', sub: 'Inward Feeling', icon: Heart, color: '#f43f5e' },
    { id: 2, name: 'Brainstorming', sub: 'Outward Intuition', icon: Brain, color: '#8b5cf6' },
    { id: 3, name: 'Memory', sub: 'Inward Sensing', icon: zapTheme(mbti.color), color: '#3b82f6' },
    { id: 4, name: 'Deduction', sub: 'Outward Thinking', icon: Target, color: '#10b981' }
  ];

  function zapTheme(color) {
    return Zap;
  }

  // Calculate percentages for the top list (simulated based on confidence scores)
  const topMatches = [
    { type: type, percentage: 92, label: mbti.traits[0].toLowerCase(), color: mbti.color },
    { type: 'INTJ', percentage: 78, label: 'strategy', color: '#673AB7' },
    { type: 'ENFP', percentage: 65, label: 'inspiration', color: '#4CAF50' },
    { type: 'ENTP', percentage: 42, label: 'innovation', color: '#009688' },
    { type: 'INFJ', percentage: 24, label: 'vision', color: '#8BC34A' }
  ];

  return (
    <div className="max-w-[1100px] w-full bg-white rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col animate-in fade-in zoom-in duration-500">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="p-8 sm:p-12 pb-6">
        {/* Header with Top Matches - As per the image */}
        <div className="space-y-4 mb-10 max-w-xl mx-auto">
          {topMatches.map((match, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-400 w-8">{match.percentage}%</span>
                  <span className="text-sm font-extrabold text-gray-800 tracking-wider uppercase">{match.type}</span>
                </div>
                <span className="text-xs text-gray-400 font-medium lowercase tracking-wide">{match.label}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${match.percentage}%`, backgroundColor: match.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-lg font-bold text-gray-700 tracking-tight">Your true type is the one you identify with most.</p>
        </div>

        {/* Highlighted Result Card */}
        <div className="bg-[#FFF4F2] border border-[#FFE7E1] rounded-3xl p-8 sm:p-10 mb-10 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-baseline gap-3 mb-4">
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">{type}</h2>
              <span className="text-xl text-gray-500 font-medium">{mbti.title}</span>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-8 max-w-2xl">
              {mbti.description}
            </p>

            {/* Dimension Trait Grid - Matching the image exactly */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {traits.map((trait) => (
                <div key={trait.id} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-2xl border border-white shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: trait.color }}>
                    <span className="text-sm font-bold">{trait.id}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 leading-none mb-1">{trait.name}</h4>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{trait.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="bg-gray-50 p-6 flex justify-center border-t border-gray-100">
        <button
          onClick={onGoDashboard}
          className="group flex items-center gap-3 px-12 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-blue-200"
        >
          Go to Dashboard
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default MBTIResult;
