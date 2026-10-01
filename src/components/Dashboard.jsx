import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';
import {
  Home, BookOpen, Compass, Users, TrendingUp, MessageCircle,
  HelpCircle, Search, Bell, LogOut, ChevronRight, Plus, Check,
  Pencil, Brain, ClipboardList, Lightbulb, Star, Award,
  Code, Database, Palette, BarChart3, Target, Zap,
  MessageSquare, Trophy, FileQuestion, Headphones, Send,
  ChevronDown, Play, Calendar, Video, Phone, Mail,
  BookOpenCheck, GraduationCap, Briefcase, Heart, Globe,
  ArrowRight, Clock, CheckCircle2, AlertCircle, ThumbsUp,
  UserPlus, Settings, Filter, BarChart2, PieChart, Layers,
  Shield, Sparkles, Eye, MapPin, X, Bot, Mic, Sparkle,
  SlidersHorizontal, ChevronLeft
} from 'lucide-react';
import careerCoachImg from '../assets/career_coach.png';
import { MBTI_DATA } from '../utils/mbtiHelpers';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

/* ─── Sidebar Navigation ─── */
const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: ClipboardList, label: 'Assessments', id: 'assessments' },
  { icon: Compass, label: 'Career Paths', id: 'career' },
  { icon: Users, label: 'Counselling', id: 'counselling' },
  { icon: TrendingUp, label: 'Progress Tracker', id: 'progress' },
  { icon: MessageCircle, label: 'Community', id: 'community' },
  { icon: HelpCircle, label: 'Help & Support', id: 'help' },
];

/* ─── Page Titles ─── */
const pageTitles = {
  home: { title: 'Home', subtitle: 'Welcome back!' },
  assessments: { title: 'Assessments', subtitle: 'Take tests to discover your strengths' },
  career: { title: 'Career Paths', subtitle: 'Explore career paths matched to your profile' },
  counselling: { title: 'Counselling', subtitle: 'Connect with expert counsellors' },
  progress: { title: 'Progress Tracker', subtitle: 'Track your career readiness journey' },
  community: { title: 'Community', subtitle: 'Connect, learn, and grow together' },
  help: { title: 'Help & Support', subtitle: "We're here to help you" },
};

/* ─── Chart Data ─── */
const chartData = [
  { day: 'Mon', primary: 25, secondary: 15 },
  { day: 'Tue', primary: 40, secondary: 25 },
  { day: 'Wed', primary: 55, secondary: 35 },
  { day: 'Thu', primary: 90, secondary: 60 },
  { day: 'Fri', primary: 65, secondary: 45 },
  { day: 'Sat', primary: 35, secondary: 20 },
  { day: 'Sun', primary: 20, secondary: 10 },
];

/* ─── Counsellors Data ─── */
const counsellors = [
  { name: 'Career Coach', initials: 'CC', img: careerCoachImg, color: '#3B82F6', specialty: 'Career Planning & Strategy', rating: 4.9, sessions: 120 },
  { name: 'Psychologist', initials: 'PS', color: '#8B5CF6', specialty: 'Behavioral Assessment', rating: 4.8, sessions: 95 },
  { name: 'Industry Mentor', initials: 'IM', color: '#22C55E', specialty: 'Tech Industry Guidance', rating: 4.7, sessions: 78 },
  { name: 'HR Expert', initials: 'HR', color: '#F59E0B', specialty: 'Resume & Interview Prep', rating: 4.9, sessions: 110 },
];

/* ─── Top Career Matches for My Results ─── */
const topResults = [
  { title: 'Software Engineer', score: 68 },
  { title: 'Data Scientist', score: 59 },
  { title: 'Frontend Developer', score: 43 },
];

/* ─── Assessment Cards ─── */
const assessments = [
  {
    title: 'Aptitude Tests',
    desc: 'Evaluate your logical reasoning, numerical ability, and verbal skills',
    tags: ['Logical Reasoning', 'Numerical', 'Verbal'],
    iconType: 'blue',
    Icon: Brain,
    duration: '25 min',
    questions: 30,
    status: 'completed',
  },
  {
    title: 'Personality Test',
    desc: 'MBTI-style personality insights to discover your strengths & traits',
    tags: ['MBTI Insights', 'Strengths', 'Traits'],
    iconType: 'purple',
    Icon: Star,
    duration: '15 min',
    questions: 25,
    status: 'completed',
  },
  {
    title: 'Interest Inventory',
    desc: 'Identify your career preferences and passion areas',
    tags: ['Preferences', 'Career Path', 'Interests'],
    iconType: 'green',
    Icon: Lightbulb,
    duration: '20 min',
    questions: 40,
    status: 'pending',
  },
  {
    title: 'Emotional Intelligence',
    desc: 'Assess your EQ and interpersonal skills for workplace success',
    tags: ['EQ', 'Empathy', 'Social Skills'],
    iconType: 'blue',
    Icon: Heart,
    duration: '15 min',
    questions: 20,
    status: 'pending',
  },
  {
    title: 'Leadership Assessment',
    desc: 'Evaluate your leadership potential and management capabilities',
    tags: ['Leadership', 'Decision Making', 'Team'],
    iconType: 'purple',
    Icon: Shield,
    duration: '20 min',
    questions: 25,
    status: 'locked',
  },
  {
    title: 'Technical Skills',
    desc: 'Test your technical knowledge across various domains',
    tags: ['Coding', 'Analysis', 'Problem Solving'],
    iconType: 'green',
    Icon: Code,
    duration: '30 min',
    questions: 35,
    status: 'locked',
  },
];

/* ─── Career Recommendations ─── */
const recommendations = [
  { title: 'Software Engineer', match: 85, Icon: Code, desc: 'Design, develop, and maintain software systems', salary: '$90K - $150K', growth: 'High' },
  { title: 'Data Scientist', match: 78, Icon: Database, desc: 'Analyze complex data to drive business decisions', salary: '$95K - $160K', growth: 'Very High' },
  { title: 'UX Designer', match: 72, Icon: Palette, desc: 'Create intuitive and engaging user experiences', salary: '$75K - $130K', growth: 'High' },
  { title: 'Product Manager', match: 68, Icon: Briefcase, desc: 'Lead product strategy and development lifecycle', salary: '$100K - $170K', growth: 'High' },
  { title: 'AI/ML Engineer', match: 65, Icon: Sparkles, desc: 'Build intelligent systems and machine learning models', salary: '$110K - $180K', growth: 'Very High' },
  { title: 'Cloud Architect', match: 62, Icon: Globe, desc: 'Design and manage cloud infrastructure solutions', salary: '$120K - $190K', growth: 'Very High' },
];

/* ─── Skills ─── */
const skills = [
  { name: 'Problem Solving', pct: 80 },
  { name: 'Communication', pct: 65 },
  { name: 'Technical Skills', pct: 70 },
  { name: 'Leadership', pct: 55 },
  { name: 'Creativity', pct: 72 },
];

/* ─── Community Posts ─── */
const communityPosts = [
  { id: 1, category: 'Discussion', title: 'How to prepare for a tech career switch?', author: 'Priya M.', replies: 24, likes: 56, time: '2h ago' },
  { id: 2, category: 'Q&A', title: 'Best certifications for data science in 2026?', author: 'Rahul K.', replies: 18, likes: 42, time: '4h ago' },
  { id: 3, category: 'Success Story', title: 'From marketing to software engineering – my journey', author: 'Anita S.', replies: 31, likes: 89, time: '6h ago' },
  { id: 4, category: 'Discussion', title: 'Is an MBA worth it for product management?', author: 'Vikram J.', replies: 15, likes: 33, time: '8h ago' },
  { id: 5, category: 'Q&A', title: 'How to negotiate salary for a first job?', author: 'Sneha D.', replies: 22, likes: 67, time: '1d ago' },
];

/* ─── FAQ Data ─── */
const faqItems = [
  { q: 'How do I start my career assessment?', a: 'Navigate to the Assessments tab and click on any available test to begin. We recommend starting with the Aptitude Test.' },
  { q: 'How are career recommendations generated?', a: 'Our AI analyzes your assessment results, skills, interests, and personality traits to match you with suitable career paths.' },
  { q: 'Can I retake assessments?', a: 'Yes, you can retake any assessment after a 7-day cooldown period. Your latest results will be used for recommendations.' },
  { q: 'How do I book a counselling session?', a: 'Go to the Counselling tab, choose a counsellor, and select an available time slot. Sessions can be booked up to 2 weeks in advance.' },
  { q: 'Is my data private?', a: 'Absolutely. All your assessment data and personal information is encrypted and never shared with third parties.' },
];

/* ═══════════════════════════════════════
   CIRCULAR PROGRESS COMPONENT
   ═══════════════════════════════════════ */
const CircularProgress = ({ value, size = 72, strokeWidth = 5 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="dash-progress-circle" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle className="bg-ring" cx={size / 2} cy={size / 2} r={radius} />
        <circle
          className="progress-ring"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="dash-progress-value">{value}%</span>
    </div>
  );
};

/* ═══════════════════════════════════════
   MATCH SCORE BADGE (Reference Style Ring)
   ═══════════════════════════════════════ */
const MatchScoreBadge = ({ score, size = 36 }) => {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="dash-score-badge-wrap" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="dash-score-svg">
        <circle
          className="dash-score-bg-ring"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="dash-score-active-ring"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="dash-score-text">{score}</span>
    </div>
  );
};

/* ═══════════════════════════════════════
   SIDEBAR COMPONENT
   ═══════════════════════════════════════ */
const Sidebar = ({ activeNav, setActiveNav, isMobileOpen, setIsMobileOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const displayName = user?.name || 'Orni';
  const displayMbti = user?.mbti ? `Type: ${user.mbti}` : 'Type: ESFP';
  const initial = (displayName.charAt(0) || 'O').toUpperCase();

  return (
    <>
      {isMobileOpen && (
        <div className="dash-mobile-overlay" onClick={() => setIsMobileOpen(false)} />
      )}
      <aside className={`dash-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="dash-sidebar-logo" onClick={() => { setActiveNav('home'); setIsMobileOpen(false); }}>
          <div className="logo-icon">
            <img src={assets.logo_blue} alt="CounselX" />
          </div>
          <span className="logo-text">CounselX</span>
        </div>

        <nav className="dash-sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <a
                key={item.id}
                className={`dash-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveNav(item.id);
                  if (setIsMobileOpen) setIsMobileOpen(false);
                }}
              >
                <Icon className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="dash-sidebar-profile">
          <div className="dash-profile-card">
            <div className="dash-profile-avatar">
              <span>{initial}</span>
            </div>
            <div className="dash-profile-info">
              <div className="dash-profile-name">{displayName}</div>
              <div className="dash-profile-plan">{displayMbti}</div>
            </div>
          </div>
          <button className="dash-logout-btn" onClick={handleLogout}>
            <LogOut />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

/* ═══════════════════════════════════════
   PAGE HEADER (Clean pill search + toggles)
   ═══════════════════════════════════════ */
const PageHeader = ({ activeNav, isAiOpen, setIsAiOpen, setIsMobileOpen, searchQuery, setSearchQuery }) => {
  const { user } = useAuth();
  const info = pageTitles[activeNav] || pageTitles.home;
  const displayName = user?.name || 'Orni';
  const subtitle = activeNav === 'home' 
    ? `Welcome back! ${displayName}` 
    : info.subtitle;

  return (
    <div className="dash-header dash-animate-in">
      <div className="dash-header-left">
        <button 
          className="dash-mobile-menu-toggle"
          onClick={() => setIsMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
        <div>
          <h1 className="dash-header-title">{info.title}</h1>
          <p className="dash-header-sub">{subtitle}</p>
        </div>
      </div>

      <div className="dash-header-center">
        <div className="dash-search-pill">
          <Search className="dash-search-icon" />
          <input
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="dash-header-right">
        <button className="dash-icon-btn" aria-label="Notifications" title="Notifications">
          <Bell className="w-4 h-4" />
          <span className="dash-notification-dot" />
        </button>
        <button 
          className={`dash-ai-toggle-btn ${isAiOpen ? 'active' : ''}`}
          onClick={() => setIsAiOpen(prev => !prev)}
          title={isAiOpen ? 'Collapse AI Assistant' : 'Open AI Assistant'}
          aria-label="Toggle AI Assistant"
        >
          <Sparkles className="w-4 h-4" />
          <span className="dash-ai-toggle-label">{isAiOpen ? 'AI Active' : 'Ask AI'}</span>
        </button>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   HOME TAB CONTENT (Matches Reference Redesign)
   ═══════════════════════════════════════ */
const HomeContent = ({ setActiveNav }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const maxBarHeight = 110;

  // Resolve user's personality or fallback to ESTJ matching the reference image
  const mbtiType = user?.mbti || 'ESTJ';
  const mbtiDetails = MBTI_DATA[mbtiType] || MBTI_DATA.ESTJ;

  return (
    <div className="dash-home-container">
      {/* ─── SECTION 1: My Results & Personality Test Results ─── */}
      <section className="dash-results-section dash-animate-in dash-animate-in-1">
        <div className="dash-section-title-wrap">
          <h2 className="dash-section-title">My Results</h2>
          <span className="dash-section-sub">last checked 10 min ago</span>
        </div>

        <div className="dash-results-grid">
          {/* Left: 3 Top Careers Stack */}
          <div className="dash-career-results-col">
            {topResults.map((item) => (
              <div 
                className="dash-result-career-card" 
                key={item.title}
                onClick={() => setActiveNav('career')}
                title="Click to view career details"
              >
                <span className="dash-result-career-title">{item.title}</span>
                <MatchScoreBadge score={item.score} />
              </div>
            ))}
          </div>

          {/* Right: Personality Test Results Card */}
          <div className="dash-personality-card">
            <div className="dash-personality-decor-circle" />
            <div className="dash-personality-content">
              <span className="dash-personality-badge">Personality Test Results</span>
              <div className="dash-personality-title-row">
                <span className="dash-personality-type">{mbtiType}</span>
                <span className="dash-personality-role">{mbtiDetails.title}</span>
              </div>
              <p className="dash-personality-desc">
                {mbtiDetails.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: Your Counsellors ─── */}
      <section className="dash-counsellors-section dash-animate-in dash-animate-in-2">
        <div className="dash-section-header">
          <div>
            <h2 className="dash-section-title">Your Counsellors</h2>
            <span className="dash-section-sub">last session 3 days ago</span>
          </div>
          <button className="dash-see-all-btn" onClick={() => setActiveNav('counselling')}>
            See all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="dash-counsellors-row">
          {counsellors.map((c) => (
            <div 
              className="dash-counsellor-item" 
              key={c.name}
              onClick={() => setActiveNav('counselling')}
              title={`View ${c.name} profile`}
            >
              <div className="dash-counsellor-circle-avatar" style={!c.img ? { background: `${c.color}15` } : {}}>
                {c.img ? (
                  <img src={c.img} alt={c.name} />
                ) : (
                  <span className="dash-avatar-text" style={{ color: c.color }}>{c.initials}</span>
                )}
                <span className="dash-counsellor-status-dot" />
              </div>
              <span className="dash-counsellor-caption">{c.name}</span>
            </div>
          ))}

          {/* Add Counsellor Button */}
          <div 
            className="dash-counsellor-item"
            onClick={() => setActiveNav('counselling')}
            title="Add Counsellor"
          >
            <button className="dash-add-counsellor-circle" aria-label="Add Counsellor">
              <Plus className="w-5 h-5" />
            </button>
            <span className="dash-counsellor-caption">Add New</span>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Popular Assessments ─── */}
      <section className="dash-assessments-section dash-animate-in dash-animate-in-3">
        <div className="dash-section-header">
          <h2 className="dash-section-title">Popular Assessments</h2>
          <button className="dash-see-all-btn" onClick={() => setActiveNav('assessments')}>
            See all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="dash-popular-assessments-grid">
          {assessments.slice(0, 3).map((a) => {
            const Icon = a.Icon;
            return (
              <div 
                className="dash-assessment-modern-card" 
                key={a.title}
                onClick={() => {
                  if (a.title === 'Personality Test') {
                    navigate('/quiz');
                  } else {
                    setActiveNav('assessments');
                  }
                }}
              >
                <div className="dash-assessment-card-bg-accent" />
                <div className={`dash-assessment-icon-box ${a.iconType}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="dash-assessment-card-title">{a.title}</h3>
                <p className="dash-assessment-card-desc">{a.desc}</p>
                <div className="dash-assessment-tags-row">
                  {a.tags.map((t) => (
                    <span className="dash-modern-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── SECTION 4: Preserved Secondary Information (Activity & Snapshot) ─── */}
      <section className="dash-secondary-section dash-animate-in dash-animate-in-4">
        <div className="dash-section-header">
          <div>
            <h2 className="dash-section-title">Weekly Activity & Readiness</h2>
            <span className="dash-section-sub">Overview of your preparation this week</span>
          </div>
          <button className="dash-see-all-btn" onClick={() => setActiveNav('progress')}>
            View full tracker <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="dash-secondary-grid">
          {/* Weekly Chart */}
          <div className="dash-white-card dash-chart-card">
            <div className="dash-chart-container">
              <div className="dash-chart-y-axis">
                <span>4h</span><span>3h</span><span>2h</span><span>1h</span>
              </div>
              <div className="dash-chart">
                {chartData.map((d) => (
                  <div className="dash-chart-col" key={d.day}>
                    <div className="dash-chart-bar-group">
                      <div className="dash-chart-bar primary" style={{ height: `${(d.primary / 100) * maxBarHeight}px` }} />
                      <div className="dash-chart-bar secondary" style={{ height: `${(d.secondary / 100) * maxBarHeight}px` }} />
                    </div>
                    <span className={`dash-chart-label ${d.day === 'Thu' ? 'active' : ''}`}>{d.day}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="dash-chart-legend">
              <div className="dash-legend-item"><span className="legend-dot primary" /> Assessments</div>
              <div className="dash-legend-item"><span className="legend-dot secondary" /> Counselling</div>
            </div>
          </div>

          {/* Quick Readiness Snapshot */}
          <div className="dash-white-card dash-readiness-snapshot-card">
            <div className="dash-readiness-header">
              <CircularProgress value={68} size={68} strokeWidth={5} />
              <div>
                <h4 className="dash-readiness-title">68% Career Readiness</h4>
                <p className="dash-readiness-sub">Based on your assessments & skill progression</p>
              </div>
            </div>
            <div className="dash-activity-mini-list">
              <div className="dash-activity-mini-item">
                <span className="activity-badge blue">10:00 AM</span>
                <span className="activity-title">Aptitude Test Completed</span>
                <Check className="w-4 h-4 text-emerald-500 ml-auto" />
              </div>
              <div className="dash-activity-mini-item">
                <span className="activity-badge purple">12:30 PM</span>
                <span className="activity-title">Personality Profile Updated (ESTJ)</span>
                <Pencil className="w-4 h-4 text-indigo-500 ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ═══════════════════════════════════════
   AI ASSISTANT PANEL (Collapsible, reference design)
   ═══════════════════════════════════════ */
const CounselXAiAssistant = ({ isOpen, onClose, activeNav, setActiveNav }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showStatus, setShowStatus] = useState(true);
  const [isThinking, setIsThinking] = useState(false);

  const suggestedChips = [
    'Search counsellors near kolkata',
    'I want to switch careers what should i do',
    'Navigate to community page',
  ];

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMessage = { sender: 'user', text: query, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsThinking(true);

    // Context-aware CounselX AI responses
    setTimeout(() => {
      let replyText = '';
      const lower = query.toLowerCase();

      if (lower.includes('counsellor') || lower.includes('kolkata')) {
        replyText = "Here are top-rated counsellors available near Kolkata & virtually: Career Coach Alex (Strategy & Tech), Dr. PS (Psychological Assessment). Would you like to schedule a 1-on-1 strategy session?";
      } else if (lower.includes('switch') || lower.includes('career')) {
        replyText = "Switching careers starts with evaluating transferable skills. Based on your ESTJ profile and high problem-solving marks, top matches are Software Engineer (85%) and Data Scientist (78%). Explore Career Paths to check salary benchmarks and skills required!";
      } else if (lower.includes('community')) {
        replyText = "Taking you straight to the CounselX Community hub where 2.4K students and professionals discuss career transitions!";
        setActiveNav('community');
      } else if (lower.includes('assessment') || lower.includes('test')) {
        replyText = "Opening the Assessments center. You have 2 tests completed and 2 pending assessments ready to take.";
        setActiveNav('assessments');
      } else {
        replyText = `CounselX AI is analyzing your question: "${query}". Based on your assessment history and goals, our counsellors recommend completing the pending Interest Inventory to sharpen your recommendations!`;
      }

      setMessages(prev => [...prev, {
        sender: 'ai',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsThinking(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <aside className={`dash-ai-panel ${isOpen ? 'open' : 'closed'}`}>
      <div className="dash-ai-panel-inner">
        {/* Top Bar with Close Action */}
        <div className="dash-ai-topbar">
          <button 
            className="dash-ai-close-btn" 
            onClick={onClose}
            aria-label="Close AI Assistant"
            title="Collapse AI Panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* AI Brand & Greeting */}
        <div className="dash-ai-brand-header">
          <div className="dash-ai-logo-container">
            <img 
              src={assets.logo_blue} 
              alt="CounselX AI" 
              className="dash-ai-white-logo" 
            />
          </div>
          <h3 className="dash-ai-heading">Having doubts ?</h3>
          <p className="dash-ai-subheading">Our AI assistant is there to help you</p>
        </div>

        {/* Chat / Messages Area */}
        <div className="dash-ai-conversation-area">
          {messages.length === 0 ? (
            /* Suggested Prompt Chips (when no messages yet) */
            <div className="dash-ai-chips-list">
              {suggestedChips.map((chip) => (
                <button
                  key={chip}
                  className="dash-ai-chip-btn"
                  onClick={() => handleSendMessage(chip)}
                >
                  <Search className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{chip}</span>
                </button>
              ))}
            </div>
          ) : (
            /* Messages List */
            <div className="dash-ai-messages-scroll">
              {messages.map((m, idx) => (
                <div key={idx} className={`dash-ai-message-bubble ${m.sender}`}>
                  <div className="dash-ai-msg-body">{m.text}</div>
                  <span className="dash-ai-msg-time">{m.time}</span>
                </div>
              ))}
              {isThinking && (
                <div className="dash-ai-message-bubble ai thinking">
                  <div className="dash-ai-typing-indicator">
                    <span /><span /><span />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Floating Input Box at Bottom */}
        <div className="dash-ai-input-card">
          {showStatus && (
            <div className="dash-ai-context-indicator">
              <span className="indicator-text">
                <Bot className="w-3 h-3 text-blue-500 inline-block mr-1" />
                Currently on {activeNav === 'home' ? 'homepage' : activeNav}
              </span>
              <button 
                className="indicator-dismiss-btn"
                onClick={() => setShowStatus(false)}
                title="Dismiss status"
              >
                ✕
              </button>
            </div>
          )}

          <div className="dash-ai-input-row">
            <input
              type="text"
              className="dash-ai-text-input"
              placeholder="Type any question you have....."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              className="dash-ai-send-btn"
              onClick={() => handleSendMessage()}
              aria-label="Send query"
              title="Send question"
            >
              {inputValue.trim() ? (
                <Send className="w-4 h-4 text-blue-600" />
              ) : (
                <Mic className="w-4 h-4 text-blue-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

/* ═══════════════════════════════════════
   ASSESSMENTS TAB CONTENT
   ═══════════════════════════════════════ */
const AssessmentsContent = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredAssessments = assessments.filter(a => {
    if (filter === 'All') return true;
    return a.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="dash-tab-content">
      {/* Stats */}
      <div className="dash-tab-stats dash-animate-in dash-animate-in-1">
        <div className="dash-stat-chip">
          <div className="stat-icon blue"><CheckCircle2 /></div>
          <div><div className="stat-value">2</div><div className="stat-label">Completed</div></div>
        </div>
        <div className="dash-stat-chip">
          <div className="stat-icon purple"><Clock /></div>
          <div><div className="stat-value">2</div><div className="stat-label">Pending</div></div>
        </div>
        <div className="dash-stat-chip">
          <div className="stat-icon green"><Target /></div>
          <div><div className="stat-value">2</div><div className="stat-label">Locked</div></div>
        </div>
      </div>

      {/* All Assessments */}
      <section className="dash-assessments-section dash-animate-in dash-animate-in-2">
        <div className="dash-section-header">
          <h2 className="dash-section-title">All Assessments</h2>
          <div className="dash-filter-pills">
            {['All', 'Completed', 'Pending'].map((pill) => (
              <span
                key={pill}
                className={`dash-pill ${filter === pill ? 'active' : ''}`}
                onClick={() => setFilter(pill)}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="dash-assessments-grid">
          {filteredAssessments.map((a) => {
            const Icon = a.Icon;
            return (
              <div className={`dash-assessment-card ${a.status === 'locked' ? 'locked' : ''}`} key={a.title}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <div className={`dash-assessment-icon ${a.iconType}`}><Icon /></div>
                  <span className={`dash-status-badge ${a.status}`}>
                    {a.status === 'completed' && <><Check style={{ width: 12, height: 12 }} /> Completed</>}
                    {a.status === 'pending' && <><Clock style={{ width: 12, height: 12 }} /> Pending</>}
                    {a.status === 'locked' && <><Shield style={{ width: 12, height: 12 }} /> Locked</>}
                  </span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <div className="dash-assessment-meta">
                  <span><Clock style={{ width: 12, height: 12 }} /> {a.duration}</span>
                  <span><ClipboardList style={{ width: 12, height: 12 }} /> {a.questions} Qs</span>
                </div>
                <div className="dash-assessment-tags">
                  {a.tags.map(t => <span className="dash-assessment-tag" key={t}>{t}</span>)}
                </div>
                {a.status === 'pending' && (
                  <button className="dash-card-btn full-width" onClick={() => navigate('/quiz')}>
                    Start Test <ArrowRight style={{ width: 14, height: 14 }} />
                  </button>
                )}
                {a.status === 'completed' && (
                  <button className="dash-card-btn outline full-width" onClick={() => navigate('/quiz')}>
                    View Results <Eye style={{ width: 14, height: 14 }} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

/* ═══════════════════════════════════════
   CAREER RECOMMENDATIONS TAB
   ═══════════════════════════════════════ */
const CareerContent = () => (
  <div className="dash-tab-content">
    <div className="dash-tab-stats dash-animate-in dash-animate-in-1">
      <div className="dash-stat-chip">
        <div className="stat-icon blue"><Compass /></div>
        <div><div className="stat-value">6</div><div className="stat-label">Careers Matched</div></div>
      </div>
      <div className="dash-stat-chip">
        <div className="stat-icon green"><TrendingUp /></div>
        <div><div className="stat-value">85%</div><div className="stat-label">Top Match</div></div>
      </div>
      <div className="dash-stat-chip">
        <div className="stat-icon purple"><Award /></div>
        <div><div className="stat-value">68%</div><div className="stat-label">Readiness</div></div>
      </div>
    </div>

    <section className="dash-animate-in dash-animate-in-2" style={{ marginBottom: 24 }}>
      <div className="dash-section-header"><h2 className="dash-section-title">Recommended Career Paths</h2></div>
      <div className="dash-career-list">
        {recommendations.map((r) => {
          const Icon = r.Icon;
          return (
            <div className="dash-career-card" key={r.title}>
              <div className="dash-career-card-left">
                <div className="dash-recommendation-icon"><Icon /></div>
                <div className="dash-career-card-info">
                  <div className="dash-career-card-title">{r.title}</div>
                  <div className="dash-career-card-desc">{r.desc}</div>
                  <div className="dash-career-card-meta">
                    <span><Briefcase style={{ width: 12, height: 12 }} /> {r.salary}</span>
                    <span><TrendingUp style={{ width: 12, height: 12 }} /> {r.growth} Growth</span>
                  </div>
                </div>
              </div>
              <div className="dash-career-card-right">
                <CircularProgress value={r.match} size={56} strokeWidth={4} />
                <span style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>Match</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </div>
);

/* ═══════════════════════════════════════
   COUNSELLING TAB
   ═══════════════════════════════════════ */
const CounsellingContent = () => (
  <div className="dash-tab-content">
    <div className="dash-tab-stats dash-animate-in dash-animate-in-1">
      <div className="dash-stat-chip">
        <div className="stat-icon blue"><Users /></div>
        <div><div className="stat-value">4</div><div className="stat-label">Counsellors</div></div>
      </div>
      <div className="dash-stat-chip">
        <div className="stat-icon green"><Calendar /></div>
        <div><div className="stat-value">2</div><div className="stat-label">Upcoming</div></div>
      </div>
      <div className="dash-stat-chip">
        <div className="stat-icon purple"><CheckCircle2 /></div>
        <div><div className="stat-value">5</div><div className="stat-label">Completed</div></div>
      </div>
    </div>

    <section className="dash-animate-in dash-animate-in-2" style={{ marginBottom: 24 }}>
      <div className="dash-section-header">
        <h2 className="dash-section-title">Your Counsellors</h2>
        <button className="dash-card-btn small"><UserPlus style={{ width: 14, height: 14 }} /> Add Counsellor</button>
      </div>
      <div className="dash-counsellor-cards">
        {counsellors.map((c) => (
          <div className="dash-card dash-counsellor-detail-card" key={c.name}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <div className="dash-counsellor-avatar" style={!c.img ? { background: `linear-gradient(135deg, ${c.color}20, ${c.color}40)` } : {}}>
                {c.img ? <img src={c.img} alt={c.name} /> : <span className="avatar-initials" style={{ color: c.color }}>{c.initials}</span>}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#1E293B' }}>{c.name}</div>
                <div style={{ fontSize: 12, color: '#64748B' }}>{c.specialty}</div>
              </div>
            </div>
            <div className="dash-counsellor-stats-row">
              <span><Star style={{ width: 13, height: 13, color: '#F59E0B' }} /> {c.rating}</span>
              <span><Video style={{ width: 13, height: 13, color: '#3B82F6' }} /> {c.sessions} sessions</span>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <button className="dash-card-btn small" style={{ flex: 1 }}><Calendar style={{ width: 14, height: 14 }} /> Book Session</button>
              <button className="dash-card-btn small outline" style={{ flex: 1 }}><MessageCircle style={{ width: 14, height: 14 }} /> Message</button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Upcoming Sessions */}
    <section className="dash-animate-in dash-animate-in-3" style={{ marginBottom: 24 }}>
      <div className="dash-section-header"><h2 className="dash-section-title">Upcoming Sessions</h2></div>
      <div className="dash-card">
        <div className="dash-session-item">
          <div className="dash-activity-time blue">Tomorrow</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#1E293B' }}>Career Strategy Session</div>
            <div style={{ fontSize: 12, color: '#64748B' }}>with Career Coach · 10:00 AM</div>
          </div>
          <button className="dash-card-btn small"><Video style={{ width: 14, height: 14 }} /> Join</button>
        </div>
        <div className="dash-session-item" style={{ borderTop: '1px solid #F1F5F9', paddingTop: 14, marginTop: 14 }}>
          <div className="dash-activity-time purple">Mar 3</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#1E293B' }}>Resume Review</div>
            <div style={{ fontSize: 12, color: '#64748B' }}>with HR Expert · 2:00 PM</div>
          </div>
          <button className="dash-card-btn small"><Video style={{ width: 14, height: 14 }} /> Join</button>
        </div>
      </div>
    </section>
  </div>
);

/* ═══════════════════════════════════════
   PROGRESS TRACKER TAB
   ═══════════════════════════════════════ */
const ProgressContent = () => (
  <div className="dash-tab-content">
    <div className="dash-tab-stats dash-animate-in dash-animate-in-1">
      <div className="dash-stat-chip">
        <div className="stat-icon blue"><Target /></div>
        <div><div className="stat-value">3/5</div><div className="stat-label">Goals Achieved</div></div>
      </div>
      <div className="dash-stat-chip">
        <div className="stat-icon green"><Award /></div>
        <div><div className="stat-value">68%</div><div className="stat-label">Overall Progress</div></div>
      </div>
      <div className="dash-stat-chip">
        <div className="stat-icon purple"><TrendingUp /></div>
        <div><div className="stat-value">+12%</div><div className="stat-label">This Month</div></div>
      </div>
    </div>

    {/* Career Readiness */}
    <section className="dash-animate-in dash-animate-in-2" style={{ marginBottom: 24 }}>
      <div className="dash-section-header"><h2 className="dash-section-title">Career Readiness</h2></div>
      <div className="dash-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 24 }}>
          <CircularProgress value={68} size={90} strokeWidth={6} />
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#1E293B' }}>68% Ready</div>
            <div style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>Complete more assessments and skill-building activities to improve your score</div>
          </div>
        </div>
        <div className="dash-readiness-bars">
          <div className="dash-readiness-item">
            <span>Assessments</span>
            <div className="dash-skill-bar"><div className="dash-skill-bar-fill" style={{ width: '66%' }} /></div>
            <span className="dash-skill-pct">66%</span>
          </div>
          <div className="dash-readiness-item">
            <span>Skill Development</span>
            <div className="dash-skill-bar"><div className="dash-skill-bar-fill" style={{ width: '72%' }} /></div>
            <span className="dash-skill-pct">72%</span>
          </div>
          <div className="dash-readiness-item">
            <span>Counselling</span>
            <div className="dash-skill-bar"><div className="dash-skill-bar-fill" style={{ width: '60%' }} /></div>
            <span className="dash-skill-pct">60%</span>
          </div>
        </div>
      </div>
    </section>

    {/* Skill Progress */}
    <section className="dash-animate-in dash-animate-in-3" style={{ marginBottom: 24 }}>
      <div className="dash-section-header"><h2 className="dash-section-title">Skill Progress</h2></div>
      <div className="dash-card">
        <div className="dash-skill-bars">
          {skills.map((s) => (
            <div className="dash-skill-item" key={s.name}>
              <div className="dash-skill-header">
                <span className="dash-skill-name">{s.name}</span>
                <span className="dash-skill-pct">{s.pct}%</span>
              </div>
              <div className="dash-skill-bar">
                <div className="dash-skill-bar-fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Goals */}
    <section className="dash-animate-in dash-animate-in-4" style={{ marginBottom: 24 }}>
      <div className="dash-section-header"><h2 className="dash-section-title">Goals</h2></div>
      <div className="dash-card">
        <div className="dash-goals-list">
          {[
            { text: 'Complete Aptitude Test', done: true },
            { text: 'Complete Personality Test', done: true },
            { text: 'Book first counselling session', done: true },
            { text: 'Complete Interest Inventory', done: false },
            { text: 'Reach 80% career readiness', done: false },
          ].map((g, i) => (
            <div className="dash-goal-item" key={i}>
              <div className={`dash-goal-check ${g.done ? 'done' : ''}`}>
                {g.done && <Check style={{ width: 14, height: 14 }} />}
              </div>
              <span style={{ textDecoration: g.done ? 'line-through' : 'none', color: g.done ? '#94A3B8' : '#1E293B' }}>{g.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

/* ═══════════════════════════════════════
   COMMUNITY TAB
   ═══════════════════════════════════════ */
const CommunityContent = () => (
  <div className="dash-tab-content">
    <div className="dash-tab-stats dash-animate-in dash-animate-in-1">
      <div className="dash-stat-chip">
        <div className="stat-icon blue"><MessageSquare /></div>
        <div><div className="stat-value">128</div><div className="stat-label">Discussions</div></div>
      </div>
      <div className="dash-stat-chip">
        <div className="stat-icon green"><Users /></div>
        <div><div className="stat-value">2.4K</div><div className="stat-label">Members</div></div>
      </div>
      <div className="dash-stat-chip">
        <div className="stat-icon purple"><Trophy /></div>
        <div><div className="stat-value">56</div><div className="stat-label">Success Stories</div></div>
      </div>
    </div>

    {/* Category Tabs */}
    <section className="dash-animate-in dash-animate-in-2" style={{ marginBottom: 24 }}>
      <div className="dash-section-header">
        <h2 className="dash-section-title">Recent Discussions</h2>
        <div className="dash-filter-pills">
          <span className="dash-pill active">All</span>
          <span className="dash-pill">Discussions</span>
          <span className="dash-pill">Q&A</span>
          <span className="dash-pill">Success Stories</span>
        </div>
      </div>
      <div className="dash-community-posts">
        {communityPosts.map((post) => (
          <div className="dash-card dash-post-card" key={post.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <span className={`dash-post-category ${post.category === 'Discussion' ? 'blue' : post.category === 'Q&A' ? 'purple' : 'green'}`}>
                {post.category}
              </span>
              <span style={{ fontSize: 11, color: '#94A3B8' }}>{post.time}</span>
            </div>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1E293B', margin: '0 0 8px 0', lineHeight: 1.4 }}>{post.title}</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: '#64748B' }}>by {post.author}</span>
              <div style={{ display: 'flex', gap: 14, fontSize: 12, color: '#94A3B8' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MessageSquare style={{ width: 13, height: 13 }} /> {post.replies}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><ThumbsUp style={{ width: 13, height: 13 }} /> {post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

/* ═══════════════════════════════════════
   HELP & SUPPORT TAB
   ═══════════════════════════════════════ */
const HelpContent = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="dash-tab-content">
      {/* Quick Actions */}
      <div className="dash-tab-stats dash-animate-in dash-animate-in-1">
        <div className="dash-stat-chip" style={{ cursor: 'pointer' }}>
          <div className="stat-icon blue"><Headphones /></div>
          <div><div className="stat-value" style={{ fontSize: 14 }}>Contact</div><div className="stat-label">Support Team</div></div>
        </div>
        <div className="dash-stat-chip" style={{ cursor: 'pointer' }}>
          <div className="stat-icon green"><Mail /></div>
          <div><div className="stat-value" style={{ fontSize: 14 }}>Email</div><div className="stat-label">support@counselx.com</div></div>
        </div>
        <div className="dash-stat-chip" style={{ cursor: 'pointer' }}>
          <div className="stat-icon purple"><Send /></div>
          <div><div className="stat-value" style={{ fontSize: 14 }}>Feedback</div><div className="stat-label">Submit Feedback</div></div>
        </div>
      </div>

      {/* FAQs */}
      <section className="dash-animate-in dash-animate-in-2" style={{ marginBottom: 24 }}>
        <div className="dash-section-header"><h2 className="dash-section-title">Frequently Asked Questions</h2></div>
        <div className="dash-faq-list">
          {faqItems.map((f, i) => (
            <div className={`dash-card dash-faq-item ${openFaq === i ? 'open' : ''}`} key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="dash-faq-q">
                <HelpCircle style={{ width: 18, height: 18, color: '#3B82F6', flexShrink: 0 }} />
                <span>{f.q}</span>
                <ChevronDown style={{ width: 16, height: 16, color: '#94A3B8', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </div>
              {openFaq === i && (
                <div className="dash-faq-a">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Options */}
      <section className="dash-animate-in dash-animate-in-3" style={{ marginBottom: 24 }}>
        <div className="dash-section-header"><h2 className="dash-section-title">Get in Touch</h2></div>
        <div className="dash-assessments-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="dash-card" style={{ textAlign: 'center', padding: 28, cursor: 'pointer' }}>
            <div className="dash-assessment-icon blue" style={{ margin: '0 auto 12px' }}><Phone /></div>
            <h3 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 4px 0' }}>Call Us</h3>
            <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>Mon–Fri 9AM–6PM</p>
          </div>
          <div className="dash-card" style={{ textAlign: 'center', padding: 28, cursor: 'pointer' }}>
            <div className="dash-assessment-icon purple" style={{ margin: '0 auto 12px' }}><MessageCircle /></div>
            <h3 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 4px 0' }}>Live Chat</h3>
            <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>Available 24/7</p>
          </div>
          <div className="dash-card" style={{ textAlign: 'center', padding: 28, cursor: 'pointer' }}>
            <div className="dash-assessment-icon green" style={{ margin: '0 auto 12px' }}><Mail /></div>
            <h3 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 4px 0' }}>Email Us</h3>
            <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>Response within 24h</p>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ═══════════════════════════════════════
   MAIN CONTENT ROUTER
   ═══════════════════════════════════════ */
const MainContent = ({ activeNav, setActiveNav, isAiOpen, setIsAiOpen, setIsMobileOpen, searchQuery, setSearchQuery }) => {
  const renderContent = () => {
    switch (activeNav) {
      case 'home': return <HomeContent setActiveNav={setActiveNav} />;
      case 'assessments': return <AssessmentsContent />;
      case 'career': return <CareerContent />;
      case 'counselling': return <CounsellingContent />;
      case 'progress': return <ProgressContent />;
      case 'community': return <CommunityContent />;
      case 'help': return <HelpContent />;
      default: return <HomeContent setActiveNav={setActiveNav} />;
    }
  };

  return (
    <main className={`dash-main ${isAiOpen ? 'with-ai-panel' : 'full-expanded'}`} key={activeNav}>
      <PageHeader 
        activeNav={activeNav} 
        isAiOpen={isAiOpen} 
        setIsAiOpen={setIsAiOpen} 
        setIsMobileOpen={setIsMobileOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {renderContent()}
    </main>
  );
};

/* ═══════════════════════════════════════
   DASHBOARD (Main Export)
   ═══════════════════════════════════════ */
const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [isAiOpen, setIsAiOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="dashboard-wrapper">
      <Sidebar 
        activeNav={activeNav} 
        setActiveNav={setActiveNav} 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <div className="dash-body-layout">
        <MainContent 
          activeNav={activeNav} 
          setActiveNav={setActiveNav}
          isAiOpen={isAiOpen}
          setIsAiOpen={setIsAiOpen}
          setIsMobileOpen={setIsMobileOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <CounselXAiAssistant 
          isOpen={isAiOpen} 
          onClose={() => setIsAiOpen(false)}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
      </div>
    </div>
  );
};

export default Dashboard;
