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
  Shield, Sparkles, Eye, MapPin
} from 'lucide-react';
import careerCoachImg from '../assets/career_coach.png';
import './Dashboard.css';
import { useAuth } from '../context/AuthContext';

/* ─── Sidebar Navigation ─── */
const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: ClipboardList, label: 'Assessments', id: 'assessments' },
  { icon: Compass, label: 'Career Recommendations', id: 'career' },
  { icon: Users, label: 'Counselling', id: 'counselling' },
  { icon: TrendingUp, label: 'Progress Tracker', id: 'progress' },
  { icon: MessageCircle, label: 'Community', id: 'community' },
  { icon: HelpCircle, label: 'Help & Support', id: 'help' },
];

/* ─── Page Titles ─── */
const pageTitles = {
  home: { title: 'Home', subtitle: 'Welcome back!' },
  assessments: { title: 'Assessments', subtitle: 'Take tests to discover your strengths' },
  career: { title: 'Career Recommendations', subtitle: 'Explore career paths matched to your profile' },
  counselling: { title: 'Counselling', subtitle: 'Connect with expert counsellors' },
  progress: { title: 'Progress Tracker', subtitle: 'Track your career readiness journey' },
  community: { title: 'Community', subtitle: 'Connect, learn, and grow together' },
  help: { title: 'Help & Support', subtitle: 'We\'re here to help you' },
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
   SIDEBAR COMPONENT
   ═══════════════════════════════════════ */
const Sidebar = ({ activeNav, setActiveNav }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="dash-sidebar">
      <div className="dash-sidebar-logo">
        <div className="logo-icon"><img src={assets.logo_blue} alt="logo" className='w-8 lg:w-10'/></div>
        <span>CounselX</span>
      </div>

      <nav className="dash-sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              className={`dash-nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              <Icon />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="dash-sidebar-profile">
        <div className="dash-profile-card">
          <div className="dash-profile-avatar">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              {user?.name?.charAt(0) || 'U'}
            </div>
          </div>
          <div className="dash-profile-info">
            <div className="dash-profile-name">{user?.name || 'User'}</div>
            <div className="dash-profile-plan">{user?.mbti ? `Type: ${user.mbti}` : 'Premium Plan'}</div>
          </div>
        </div>
        <button className="dash-logout-btn" onClick={handleLogout}>
          <LogOut />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

/* ═══════════════════════════════════════
   PAGE HEADER (shared across all tabs)
   ═══════════════════════════════════════ */
const PageHeader = ({ activeNav }) => {
  const { user } = useAuth();
  const info = pageTitles[activeNav] || pageTitles.home;
  const subtitle = activeNav === 'home' 
    ? `Welcome back, ${user?.name || 'User'}!` 
    : info.subtitle;

  return (
    <div className="dash-header dash-animate-in dash-animate-in-1">
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <div className="dash-header-left">
          <h1>{info.title}</h1>
          <p>{subtitle}</p>
        </div>

        {activeNav === 'home' && (
          <div className="dash-header-stats">
            <div className="dash-stat-chip">
              <div className="stat-icon blue"><ClipboardList /></div>
              <div>
                <div className="stat-value">3</div>
                <div className="stat-label">Tests Completed</div>
              </div>
            </div>
            <div className="dash-stat-chip">
              <div className="stat-icon green"><Users /></div>
              <div>
                <div className="stat-value">2</div>
                <div className="stat-label">Sessions Booked</div>
              </div>
            </div>
            <div className="dash-stat-chip">
              <div className="stat-icon purple"><Award /></div>
              <div>
                <div className="stat-value">68%</div>
                <div className="stat-label">Career Readiness</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="dash-header-right">
        <div className="dash-search">
          <Search />
          <input type="text" placeholder="Search..." />
        </div>
        <button className="dash-notification-btn">
          <Bell />
          <span className="dash-notification-dot" />
        </button>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   HOME TAB CONTENT
   ═══════════════════════════════════════ */
const HomeContent = ({ setActiveNav }) => {
  const maxBarHeight = 140;
  return (
    <>
      {/* My Activity */}
      <section className="dash-activity-section dash-animate-in dash-animate-in-2">
        <div className="dash-section-header">
          <h2>My Activity</h2>
          <a className="dash-see-all">See all <ChevronRight /></a>
        </div>
        <div className="dash-activity-grid">
          <div className="dash-card">
            <div className="dash-chart-container">
              <div className="dash-chart-y-axis">
                <span>4</span><span>3</span><span>2</span><span>1</span>
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
          </div>
          <div className="dash-activity-items">
            <div className="dash-activity-item">
              <span className="dash-activity-time blue">10:00</span>
              <span className="dash-activity-text">Aptitude Test Completed</span>
              <span className="dash-activity-icon check"><Check /></span>
            </div>
            <div className="dash-activity-item">
              <span className="dash-activity-time purple">12:00</span>
              <span className="dash-activity-text">Personality Test Result Ready</span>
              <span className="dash-activity-icon edit"><Pencil /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Counsellors */}
      <section className="dash-counsellors-section dash-animate-in dash-animate-in-3">
        <div className="dash-section-header">
          <h2>Your Counsellors</h2>
          <a className="dash-see-all" onClick={() => setActiveNav('counselling')}>See all <ChevronRight /></a>
        </div>
        <div className="dash-counsellors-row">
          {counsellors.map((c, i) => (
            <div className="dash-counsellor" key={c.name}>
              <div className="dash-counsellor-avatar" style={!c.img ? { background: `linear-gradient(135deg, ${c.color}20, ${c.color}40)` } : {}}>
                {c.img ? <img src={c.img} alt={c.name} /> : <span className="avatar-initials" style={{ color: c.color }}>{c.initials}</span>}
                <span className="dash-counsellor-badge">{i % 2 === 0 ? <Star /> : <Zap />}</span>
              </div>
              <span className="dash-counsellor-name">{c.name}</span>
            </div>
          ))}
          <button className="dash-add-counsellor" onClick={() => setActiveNav('counselling')}>
            <Plus />
          </button>
        </div>
      </section>

      {/* Assessments Preview */}
      <section className="dash-assessments-section dash-animate-in dash-animate-in-4">
        <div className="dash-section-header">
          <h2>Popular Assessments</h2>
          <a className="dash-see-all" onClick={() => setActiveNav('assessments')}>See all <ChevronRight /></a>
        </div>
        <div className="dash-assessments-grid">
          {assessments.slice(0, 3).map((a) => {
            const Icon = a.Icon;
            return (
              <div className="dash-assessment-card" key={a.title}>
                <div className={`dash-assessment-icon ${a.iconType}`}><Icon /></div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <div className="dash-assessment-tags">
                  {a.tags.map(t => <span className="dash-assessment-tag" key={t}>{t}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

/* ═══════════════════════════════════════
   ASSESSMENTS TAB CONTENT
   ═══════════════════════════════════════ */
const AssessmentsContent = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Stats */}
      <div className="dash-tab-stats dash-animate-in dash-animate-in-2">
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
      <section className="dash-assessments-section dash-animate-in dash-animate-in-3">
        <div className="dash-section-header">
          <h2>All Assessments</h2>
          <div className="dash-filter-pills">
            <span className="dash-pill active">All</span>
            <span className="dash-pill">Completed</span>
            <span className="dash-pill">Pending</span>
          </div>
        </div>
        <div className="dash-assessments-grid">
          {assessments.map((a) => {
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
                  <button className="dash-card-btn outline full-width">
                    View Results <Eye style={{ width: 14, height: 14 }} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

/* ═══════════════════════════════════════
   CAREER RECOMMENDATIONS TAB
   ═══════════════════════════════════════ */
const CareerContent = () => (
  <>
    <div className="dash-tab-stats dash-animate-in dash-animate-in-2">
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

    <section className="dash-animate-in dash-animate-in-3" style={{ marginBottom: 24 }}>
      <div className="dash-section-header"><h2>Recommended Career Paths</h2></div>
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
  </>
);

/* ═══════════════════════════════════════
   COUNSELLING TAB
   ═══════════════════════════════════════ */
const CounsellingContent = () => (
  <>
    <div className="dash-tab-stats dash-animate-in dash-animate-in-2">
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

    <section className="dash-animate-in dash-animate-in-3" style={{ marginBottom: 24 }}>
      <div className="dash-section-header">
        <h2>Your Counsellors</h2>
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
    <section className="dash-animate-in dash-animate-in-4" style={{ marginBottom: 24 }}>
      <div className="dash-section-header"><h2>Upcoming Sessions</h2></div>
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
  </>
);

/* ═══════════════════════════════════════
   PROGRESS TRACKER TAB
   ═══════════════════════════════════════ */
const ProgressContent = () => (
  <>
    <div className="dash-tab-stats dash-animate-in dash-animate-in-2">
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
    <section className="dash-animate-in dash-animate-in-3" style={{ marginBottom: 24 }}>
      <div className="dash-section-header"><h2>Career Readiness</h2></div>
      <div className="dash-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 24 }}>
          <CircularProgress value={68} size={100} strokeWidth={6} />
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
    <section className="dash-animate-in dash-animate-in-4" style={{ marginBottom: 24 }}>
      <div className="dash-section-header"><h2>Skill Progress</h2></div>
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
    <section className="dash-animate-in dash-animate-in-5" style={{ marginBottom: 24 }}>
      <div className="dash-section-header"><h2>Goals</h2></div>
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
  </>
);

/* ═══════════════════════════════════════
   COMMUNITY TAB
   ═══════════════════════════════════════ */
const CommunityContent = () => (
  <>
    <div className="dash-tab-stats dash-animate-in dash-animate-in-2">
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
    <section className="dash-animate-in dash-animate-in-3" style={{ marginBottom: 24 }}>
      <div className="dash-section-header">
        <h2>Recent Discussions</h2>
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
  </>
);

/* ═══════════════════════════════════════
   HELP & SUPPORT TAB
   ═══════════════════════════════════════ */
const HelpContent = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      {/* Quick Actions */}
      <div className="dash-tab-stats dash-animate-in dash-animate-in-2">
        <div className="dash-stat-chip" style={{ cursor: 'pointer' }}>
          <div className="stat-icon blue"><Headphones /></div>
          <div><div className="stat-value" style={{ fontSize: 14 }}>Contact</div><div className="stat-label">Support Team</div></div>
        </div>
        <div className="dash-stat-chip" style={{ cursor: 'pointer' }}>
          <div className="stat-icon green"><Mail /></div>
          <div><div className="stat-value" style={{ fontSize: 14 }}>Email</div><div className="stat-label">support@careerguide.com</div></div>
        </div>
        <div className="dash-stat-chip" style={{ cursor: 'pointer' }}>
          <div className="stat-icon purple"><Send /></div>
          <div><div className="stat-value" style={{ fontSize: 14 }}>Feedback</div><div className="stat-label">Submit Feedback</div></div>
        </div>
      </div>

      {/* FAQs */}
      <section className="dash-animate-in dash-animate-in-3" style={{ marginBottom: 24 }}>
        <div className="dash-section-header"><h2>Frequently Asked Questions</h2></div>
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
      <section className="dash-animate-in dash-animate-in-4" style={{ marginBottom: 24 }}>
        <div className="dash-section-header"><h2>Get in Touch</h2></div>
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
    </>
  );
};

/* ═══════════════════════════════════════
   RIGHT PANEL – adapts per tab
   ═══════════════════════════════════════ */
const RightPanel = ({ activeNav, setActiveNav }) => (
  <aside className="dash-right-panel">
    {/* CTA Card */}
    <div className="dash-cta-card dash-animate-in dash-animate-in-1">
      <h3>{activeNav === 'assessments' ? 'Continue your assessments' : activeNav === 'career' ? 'Unlock more matches' : 'Discover suitable career paths'}</h3>
      <p>{activeNav === 'assessments' ? 'Complete pending tests for better recommendations' : 'Take assessments to unlock personalized recommendations'}</p>
      <button className="dash-cta-btn" onClick={() => setActiveNav('assessments')}>
        {activeNav === 'assessments' ? 'Take Next Test' : 'Start Assessment'} <ChevronRight />
      </button>
    </div>

    {/* Progress Card */}
    <div className="dash-card dash-progress-card dash-animate-in dash-animate-in-2">
      <div className="dash-progress-circle-wrap">
        <CircularProgress value={68} />
        <div className="dash-progress-info">
          <h4>Career Readiness</h4>
          <p>Based on tests and skill progress</p>
        </div>
      </div>
    </div>

    {/* Career Recommendations */}
    <div className="dash-recommendations dash-animate-in dash-animate-in-3">
      <h3>Top Matches</h3>
      <div className="dash-recommendation-list">
        {recommendations.slice(0, 3).map((r) => {
          const Icon = r.Icon;
          return (
            <div className="dash-recommendation-item" key={r.title} onClick={() => setActiveNav('career')}>
              <div className="dash-recommendation-icon"><Icon /></div>
              <div className="dash-recommendation-info">
                <div className="dash-recommendation-title">{r.title}</div>
                <div className="dash-recommendation-bar">
                  <div className="dash-recommendation-bar-fill" style={{ width: `${r.match}%` }} />
                </div>
              </div>
              <span className="dash-recommendation-match">{r.match}%</span>
              <span className="play-icon"><Play /></span>
            </div>
          );
        })}
      </div>
    </div>

    {/* Progress Tracker */}
    <div className="dash-card dash-tracker-section dash-animate-in dash-animate-in-4">
      <h3>Skill Snapshot</h3>
      <div className="dash-skill-bars">
        {skills.slice(0, 3).map((s) => (
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

    {/* Community */}
    <div className="dash-card dash-community-section dash-animate-in dash-animate-in-5">
      <h3>Community</h3>
      <div className="dash-community-list">
        <div className="dash-community-item" onClick={() => setActiveNav('community')}>
          <MessageSquare /> Peer Discussions <ChevronRight className="arrow" />
        </div>
        <div className="dash-community-item" onClick={() => setActiveNav('community')}>
          <FileQuestion /> Q&A Threads <ChevronRight className="arrow" />
        </div>
        <div className="dash-community-item" onClick={() => setActiveNav('community')}>
          <Trophy /> Success Stories <ChevronRight className="arrow" />
        </div>
      </div>
    </div>

    {/* Help */}
    <div className="dash-card dash-help-section dash-animate-in dash-animate-in-6">
      <h3>Help & Support</h3>
      <div className="dash-help-list">
        <div className="dash-help-item" onClick={() => setActiveNav('help')}>
          <HelpCircle /> FAQs <ChevronRight className="arrow" />
        </div>
        <div className="dash-help-item" onClick={() => setActiveNav('help')}>
          <Headphones /> Contact Support <ChevronRight className="arrow" />
        </div>
        <div className="dash-help-item" onClick={() => setActiveNav('help')}>
          <Send /> Submit Feedback <ChevronRight className="arrow" />
        </div>
      </div>
    </div>
  </aside>
);

/* ═══════════════════════════════════════
   MAIN CONTENT ROUTER
   ═══════════════════════════════════════ */
const MainContent = ({ activeNav, setActiveNav }) => {
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
    <main className="dash-main" key={activeNav}>
      <PageHeader activeNav={activeNav} />
      {renderContent()}
    </main>
  );
};

/* ═══════════════════════════════════════
   DASHBOARD (Main Export)
   ═══════════════════════════════════════ */
const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <div className="dashboard-wrapper">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      <MainContent activeNav={activeNav} setActiveNav={setActiveNav} />
      <RightPanel activeNav={activeNav} setActiveNav={setActiveNav} />
    </div>
  );
};

export default Dashboard;
