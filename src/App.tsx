import React, { useState, useEffect } from 'react';
import { Check, Calendar, Target, Users, BookOpen, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import { LandingPage } from './components/LandingPage';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  completedAt?: string;
}

interface Section {
  title: string;
  deadline: string;
  tasks: Task[];
  color: string;
  icon: string;
}

const iconMap = {
  Target: <Target className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />
};

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [sections, setSections] = useState<Section[]>([
    {
      title: "17 Tuntutan Mendesak",
      deadline: "2025-09-05",
      color: "#DD7BAC",
      icon: "Target",
      tasks: [
        { id: 1, text: "Bentuk tim investigasi independen terkait kasus Affan Kurniawan, Umar Amarudin, dan korban kekerasan lainnya dalam aksi 28–30 Agustus.", completed: false },
        { id: 2, text: "Hentikan keterlibatan TNI dalam pengamanan sipil, kembalikan ke barak.", completed: false },
        { id: 3, text: "Bebaskan seluruh demonstran yang ditahan, tanpa kriminalisasi.", completed: false },
        { id: 4, text: "Tangkap dan adili aparat yang melakukan kekerasan secara transparan.", completed: false },
        { id: 5, text: "Hentikan kekerasan oleh polisi, taati SOP pengendalian massa.", completed: false },
        { id: 6, text: "Bekukan kenaikan gaji/tunjangan DPR dan batalkan fasilitas baru.", completed: false },
        { id: 7, text: "Publikasikan transparansi anggaran DPR secara proaktif.", completed: false },
        { id: 8, text: "Selidiki harta anggota DPR yang bermasalah melalui KPK.", completed: false },
        { id: 9, text: "Dorong Badan Kehormatan DPR periksa anggota yang melecehkan aspirasi rakyat.", completed: false },
        { id: 10, text: "Tegaskan sanksi partai untuk kader yang memicu kemarahan publik.", completed: false },
        { id: 11, text: "Komitmen partai untuk berpihak pada rakyat di tengah krisis.", completed: false },
        { id: 12, text: "Libatkan anggota DPR dalam ruang dialog publik dengan mahasiswa dan masyarakat sipil.", completed: false },
        { id: 13, text: "Tegakkan disiplin internal agar TNI tidak ambil alih fungsi Polri.", completed: false },
        { id: 14, text: "Komitmen publik TNI untuk tidak memasuki ruang sipil selama krisis demokrasi.", completed: false },
        { id: 15, text: "Pastikan upah layak bagi guru, tenaga kesehatan, buruh, hingga mitra ojek online.", completed: false },
        { id: 16, text: "Ambil langkah darurat cegah PHK massal dan lindungi buruh kontrak.", completed: false },
        { id: 17, text: "Buka dialog dengan serikat buruh terkait upah minimum dan outsourcing.", completed: false }
      ]
    },
    {
      title: "8 Agenda Reformasi",
      deadline: "2026-08-31",
      color: "#007A42",
      icon: "BookOpen",
      tasks: [
        { id: 18, text: "Bersihkan dan lakukan reformasi besar-besaran di DPR.", completed: false },
        { id: 19, text: "Reformasi partai politik serta penguatan pengawasan eksekutif.", completed: false },
        { id: 20, text: "Rencana reformasi perpajakan yang lebih adil.", completed: false },
        { id: 21, text: "Sahkan UU perampasan aset koruptor, perkuat independensi KPK, dan tegakkan UU Tipikor.", completed: false },
        { id: 22, text: "Reformasi kepolisian agar lebih profesional dan humanis.", completed: false },
        { id: 23, text: "TNI kembali sepenuhnya ke barak, tanpa pengecualian.", completed: false },
        { id: 24, text: "Perkuat Komnas HAM dan lembaga pengawas independen.", completed: false },
        { id: 25, text: "Tinjau ulang kebijakan sektor ekonomi dan ketenagakerjaan.", completed: false }
      ]
    }
  ]);

  const [animatingTasks, setAnimatingTasks] = useState<Set<number>>(new Set());

  // Load saved state from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('reform-agenda-progress');
    if (savedData) {
      setSections(JSON.parse(savedData));
    }
  }, []);

  // Save state to localStorage whenever sections change
  useEffect(() => {
    localStorage.setItem('reform-agenda-progress', JSON.stringify(sections));
  }, [sections]);

  const toggleTask = (sectionIndex: number, taskId: number) => {
    setAnimatingTasks(prev => new Set(prev).add(taskId));
    
    setTimeout(() => {
      setSections(prevSections => 
        prevSections.map((section, index) => 
          index === sectionIndex 
            ? {
                ...section,
                tasks: section.tasks.map(task =>
                  task.id === taskId 
                    ? { 
                        ...task, 
                        completed: !task.completed,
                        completedAt: !task.completed ? new Date().toISOString() : undefined
                      } 
                    : task
                )
              }
            : section
        )
      );
      
      setTimeout(() => {
        setAnimatingTasks(prev => {
          const newSet = new Set(prev);
          newSet.delete(taskId);
          return newSet;
        });
      }, 300);
    }, 150);
  };

  const getDaysRemaining = (deadline: string) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getProgress = (tasks: Task[]) => {
    const completed = tasks.filter(task => task.completed).length;
    return Math.round((completed / tasks.length) * 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getUrgencyLevel = (daysRemaining: number) => {
    if (daysRemaining < 0) return 'overdue';
    if (daysRemaining <= 30) return 'critical';
    if (daysRemaining <= 90) return 'urgent';
    return 'normal';
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'overdue': return 'text-red-600 bg-red-50 border-red-200';
      case 'critical': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'urgent': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  const totalTasks = sections.reduce((sum, section) => sum + section.tasks.length, 0);
  const totalCompleted = sections.reduce((sum, section) => sum + section.tasks.filter(t => t.completed).length, 0);
  const overallProgress = Math.round((totalCompleted / totalTasks) * 100);

  if (showLanding) {
    return <LandingPage onEnterApp={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #DD7BAC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #007A42 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowLanding(true)}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              <span className="font-medium">Kembali ke Beranda</span>
            </button>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-green-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-white p-3 rounded-full shadow-lg">
                  <Users className="w-8 h-8 text-gray-700" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent ml-4">
                Agenda Reformasi Indonesia
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              Memantau progres pelaksanaan tuntutan rakyat untuk reformasi menyeluruh demi Indonesia yang lebih adil dan demokratis
            </p>
            
            {/* Overall Progress */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress Keseluruhan</span>
                <span className="text-sm font-bold text-gray-900">{totalCompleted}/{totalTasks} ({overallProgress}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-green-500 transition-all duration-1000 ease-out"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {sections.map((section, sectionIndex) => {
            const daysRemaining = getDaysRemaining(section.deadline);
            const progress = getProgress(section.tasks);
            const completedTasks = section.tasks.filter(task => task.completed).length;
            const urgency = getUrgencyLevel(daysRemaining);
            
            return (
              <div key={sectionIndex} className="group">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  {/* Section Header */}
                  <div 
                    className="px-8 py-8 text-white relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${section.color} 0%, ${section.color}dd 100%)`
                    }}
                  >
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 transform translate-x-16 -translate-y-16" 
                           style={{ backgroundColor: 'white' }}></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10 transform -translate-x-12 translate-y-12" 
                           style={{ backgroundColor: 'white' }}></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                          {iconMap[section.icon as keyof typeof iconMap]}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold ml-4">{section.title}</h2>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span className="text-sm font-medium opacity-90">Deadline</span>
                          </div>
                          <div className="text-lg font-bold">
                            {formatDate(section.deadline)}
                          </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <Clock className="w-5 h-5 mr-2" />
                            <span className="text-sm font-medium opacity-90">Sisa Waktu</span>
                          </div>
                          <div className="text-lg font-bold">
                            {daysRemaining > 0 ? `${daysRemaining} hari` : 'Terlewat'}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Progress Bar */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2" />
                            <span className="text-sm font-medium">Progress</span>
                          </div>
                          <span className="text-lg font-bold">{completedTasks}/{section.tasks.length} ({progress}%)</span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-white/30 rounded-full h-4 overflow-hidden">
                            <div 
                              className="bg-white h-4 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                              style={{ width: `${progress}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                            </div>
                          </div>
                          {progress > 0 && (
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                              <CheckCircle2 className="w-3 h-3 text-white/80" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Urgency Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-4 ${getUrgencyColor(urgency)}`}>
                        <div className="w-2 h-2 rounded-full mr-2 animate-pulse" 
                             style={{ backgroundColor: urgency === 'overdue' ? '#DC2626' : urgency === 'critical' ? '#EA580C' : urgency === 'urgent' ? '#D97706' : '#059669' }}></div>
                        {urgency === 'overdue' ? 'Terlewat' : urgency === 'critical' ? 'Kritis' : urgency === 'urgent' ? 'Mendesak' : 'Normal'}
                      </div>
                    </div>
                  </div>

                  {/* Tasks List */}
                  <div className="p-8">
                    <div className="space-y-3">
                      {section.tasks.map((task, taskIndex) => (
                        <div
                          key={task.id}
                          className={`group/task relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
                            task.completed
                              ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 shadow-inner'
                              : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg'
                          } ${animatingTasks.has(task.id) ? 'scale-105 shadow-xl' : ''}`}
                          onClick={() => toggleTask(sectionIndex, task.id)}
                          style={{
                            animationDelay: `${taskIndex * 50}ms`
                          }}
                        >
                          {/* Completion Animation Overlay */}
                          {animatingTasks.has(task.id) && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse rounded-2xl"></div>
                          )}
                          
                          <div className="flex items-start space-x-4 relative z-10">
                            <div className="flex-shrink-0 mt-1">
                              <div
                                className={`w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all duration-300 transform ${
                                  task.completed
                                    ? 'border-gray-400 bg-gray-400 scale-110'
                                    : `border-gray-300 hover:scale-110 group-hover/task:border-opacity-80`
                                } ${animatingTasks.has(task.id) ? 'animate-bounce' : ''}`}
                                style={{ 
                                  backgroundColor: task.completed ? '#6B7280' : 'transparent',
                                  borderColor: task.completed ? '#6B7280' : section.color,
                                  boxShadow: task.completed ? '0 0 20px rgba(107, 114, 128, 0.3)' : `0 0 20px ${section.color}20`
                                }}
                              >
                                {task.completed && (
                                  <Check className="w-4 h-4 text-white animate-in zoom-in duration-200" />
                                )}
                              </div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm leading-relaxed transition-all duration-300 ${
                                task.completed 
                                  ? 'text-gray-500 line-through' 
                                  : 'text-gray-800 group-hover/task:text-gray-900'
                              }`}>
                                {task.text}
                              </p>
                              
                              {task.completed && task.completedAt && (
                                <div className="mt-2 flex items-center text-xs text-gray-400">
                                  <CheckCircle2 className="w-3 h-3 mr-1" />
                                  Diselesaikan {new Date(task.completedAt).toLocaleDateString('id-ID')}
                                </div>
                              )}
                            </div>

                            {/* Task Number Badge */}
                            <div className="flex-shrink-0">
                              <div 
                                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                                style={{ backgroundColor: section.color }}
                              >
                                {taskIndex + 1}
                              </div>
                            </div>
                          </div>

                          {/* Hover Effect Border */}
                          <div 
                            className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover/task:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{ borderColor: `${section.color}40` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Summary Dashboard */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Dashboard Progres
            </h3>
            <p className="text-gray-600">Ringkasan pencapaian agenda reformasi</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {sections.map((section, index) => {
              const progress = getProgress(section.tasks);
              const completedTasks = section.tasks.filter(task => task.completed).length;
              const daysRemaining = getDaysRemaining(section.deadline);
              const urgency = getUrgencyLevel(daysRemaining);
              
              return (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded-full mr-3 shadow-lg"
                          style={{ backgroundColor: section.color }}
                        ></div>
                        <h4 className="text-lg font-semibold text-gray-800">{section.title}</h4>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(urgency)}`}>
                        {daysRemaining > 0 ? `${daysRemaining} hari` : 'Terlewat'}
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-gray-900 mb-1">
                        {completedTasks}<span className="text-2xl text-gray-500">/{section.tasks.length}</span>
                      </div>
                      <div className="text-lg font-medium" style={{ color: section.color }}>
                        {progress}% Selesai
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ 
                            width: `${progress}%`,
                            background: `linear-gradient(90deg, ${section.color} 0%, ${section.color}cc 100%)`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                      {progress > 0 && (
                        <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
                          <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Overall Statistics */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-green-500 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {overallProgress}%
              </div>
              <div className="text-lg text-gray-600 mb-4">
                Total Kemajuan Reformasi
              </div>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                {totalCompleted} dari {totalTasks} agenda telah diselesaikan. Mari terus berjuang untuk Indonesia yang lebih baik.
              </p>
            </div>
          </div>
        </div>

        {/* Inspirational Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500/10 to-green-500/10 rounded-2xl p-8 border border-gray-200/50">
            <blockquote className="text-xl font-medium text-gray-800 mb-4 italic">
              "Suara rakyat adalah suara kebenaran"
            </blockquote>
            <p className="text-gray-600 font-medium">
              Mari bersatu untuk Indonesia yang lebih demokratis dan berkeadilan
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;