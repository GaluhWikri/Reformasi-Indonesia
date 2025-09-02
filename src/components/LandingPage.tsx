import React from 'react';
import { 
  ArrowRight, 
  Target, 
  BookOpen, 
  Users, 
  Calendar, 
  TrendingUp, 
  Shield, 
  Heart,
  CheckCircle2,
  Clock,
  Star,
  Zap
} from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  const stats = [
    { number: "17", label: "Tuntutan Mendesak", icon: Target, color: "#DD7BAC" },
    { number: "8", label: "Agenda Reformasi", icon: BookOpen, color: "#007A42" },
    { number: "25", label: "Total Agenda", icon: CheckCircle2, color: "#6366F1" },
    { number: "2", label: "Tahun Target", icon: Calendar, color: "#F59E0B" }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Monitoring Real-time",
      description: "Pantau progres setiap agenda reformasi dengan update terkini dan visualisasi yang jelas.",
      color: "#DD7BAC"
    },
    {
      icon: Shield,
      title: "Transparansi Penuh",
      description: "Akses informasi lengkap tentang setiap tuntutan dan agenda reformasi tanpa batasan.",
      color: "#007A42"
    },
    {
      icon: Users,
      title: "Partisipasi Rakyat",
      description: "Platform untuk rakyat memantau dan mendorong implementasi agenda reformasi.",
      color: "#6366F1"
    },
    {
      icon: Heart,
      title: "Untuk Indonesia",
      description: "Bersama membangun Indonesia yang lebih demokratis, adil, dan sejahtera.",
      color: "#F59E0B"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #DD7BAC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #007A42 2px, transparent 2px)`,
          backgroundSize: '80px 80px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse" 
             style={{ backgroundColor: '#DD7BAC', animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-10 animate-pulse" 
             style={{ backgroundColor: '#007A42', animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 rounded-full opacity-10 animate-pulse" 
             style={{ backgroundColor: '#DD7BAC', animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full opacity-10 animate-pulse" 
             style={{ backgroundColor: '#007A42', animationDelay: '6s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-green-500 rounded-full blur-md opacity-30"></div>
                <div className="relative bg-white p-2 rounded-full shadow-lg">
                  <Users className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Agenda Reformasi
              </span>
            </div>
            <button
              onClick={onEnterApp}
              className="bg-gradient-to-r from-pink-500 to-green-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Mulai Pantau
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Headline */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-green-100 rounded-full px-6 py-3 mb-6 border border-gray-200/50">
                <Star className="w-5 h-5 text-pink-600 mr-2" />
                <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
                  Platform Monitoring Reformasi Indonesia
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Agenda Reformasi
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
                  Indonesia
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Memantau progres pelaksanaan <strong>17 Tuntutan Mendesak</strong> dan <strong>8 Agenda Reformasi</strong> 
                untuk Indonesia yang lebih demokratis, adil, dan sejahtera
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={onEnterApp}
                className="group bg-gradient-to-r from-pink-500 to-green-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Zap className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                Pantau Progres Sekarang
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-200 hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm font-medium text-gray-600 text-center">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Fitur Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platform komprehensif untuk memantau dan mendorong implementasi agenda reformasi Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated Background Gradient */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}80 100%)` }}
                ></div>
                
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: `${feature.color}40` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Timeline Reformasi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dua fase penting dalam perjalanan reformasi Indonesia menuju demokrasi yang lebih baik
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-purple-300 to-green-300 rounded-full"></div>

            <div className="space-y-16">
              {/* Phase 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group">
                    <div className="flex items-center justify-end mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mr-3">17 Tuntutan Mendesak</h3>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" 
                           style={{ backgroundColor: '#DD7BAC20' }}>
                        <Target className="w-6 h-6" style={{ color: '#DD7BAC' }} />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Tuntutan mendesak yang harus segera ditindaklanjuti untuk mengatasi krisis demokrasi dan keadilan di Indonesia.
                    </p>
                    <div className="flex items-center justify-end">
                      <Calendar className="w-5 h-5 text-pink-500 mr-2" />
                      <span className="text-sm font-medium text-pink-600">Deadline: 5 September 2025</span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"
                     style={{ backgroundColor: '#DD7BAC' }}></div>
                
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"
                     style={{ backgroundColor: '#007A42' }}></div>
                
                <div className="flex-1 pl-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300" 
                           style={{ backgroundColor: '#007A4220' }}>
                        <BookOpen className="w-6 h-6" style={{ color: '#007A42' }} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">8 Agenda Reformasi</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Agenda reformasi jangka menengah untuk membangun fondasi sistem politik dan ekonomi yang lebih kuat.
                    </p>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-600">Deadline: 31 Agustus 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Background */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ backgroundColor: feature.color }}
                ></div>
                
                <div className="relative z-10 text-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                {/* Hover Border */}
                <div 
                  className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: `${feature.color}30` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-pink-500/10 to-green-500/10 rounded-3xl p-12 border border-gray-200/50 backdrop-blur-sm">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-green-500 mb-6 shadow-2xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                Mari Bersatu untuk Reformasi
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Setiap suara rakyat penting. Bergabunglah dalam memantau dan mendorong implementasi agenda reformasi 
                untuk Indonesia yang lebih baik.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onEnterApp}
                className="group bg-gradient-to-r from-pink-500 to-green-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Clock className="w-6 h-6 mr-3 group-hover:animate-spin" />
                Mulai Monitoring
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200/50">
              <p className="text-sm text-gray-500 mb-4">Dipercaya oleh rakyat Indonesia untuk transparansi reformasi</p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-500">Transparan</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-500">Untuk Rakyat</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-500">Akurat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-green-500 rounded-full blur-lg opacity-50"></div>
                <div className="relative bg-white p-3 rounded-full">
                  <Users className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <span className="ml-3 text-2xl font-bold">Agenda Reformasi Indonesia</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Platform monitoring progres reformasi untuk Indonesia yang lebih demokratis dan berkeadilan.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-sm text-gray-500">
                © 2025 Agenda Reformasi Indonesia. Suara rakyat adalah suara kebenaran.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;