import React from 'react';
import { Calendar, CheckCircle, Clock, Users, Target, Shield, Scale, Heart } from 'lucide-react';

interface LandingPageProps {
    onEnterApp: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-green-500/10 rounded-lg rotate-45 animate-bounce"></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-500/10 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-500/10 rounded-lg rotate-12 animate-bounce delay-500"></div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Main Headlines */}
                    <div className="mb-16">
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                            <span className="text-[#DD7BAC] block">KAMI</span>
                            <span className="text-[#DD7BAC] block">MENUNGGU.</span>
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#007A42] mb-12 leading-tight">
                            BUKTIKAN SUARA<br />
                            RAKYAT DIDENGAR.
                        </h2>
                    </div>

                    {/* 17+8 Section */}
                    <div className="mb-16">
                        <div className="text-8xl md:text-9xl font-black text-[#DD7BAC] mb-4">
                            17+8
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-[#DD7BAC] mb-6">
                            TUNTUTAN<br />
                            RAKYAT
                        </div>
                        <div className="text-xl md:text-2xl font-semibold text-[#007A42] space-y-2">
                            <div>Transparansi.</div>
                            <div>Reformasi. Empati.</div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="mb-16">
                        <button
                            onClick={onEnterApp}
                            className="group relative px-12 py-6 bg-[#DD7BAC] text-black font-bold text-xl rounded-2xl 
                       hover:bg-[#c96a9a] transform hover:scale-105 transition-all duration-300 
                       shadow-2xl hover:shadow-pink-500/25"
                        >
                            <span className="relative z-10">LIHAT AGENDA REFORMASI</span>
                            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <Target className="w-8 h-8 text-[#DD7BAC] mb-3 mx-auto" />
                            <div className="text-2xl font-bold text-[#DD7BAC]">17</div>
                            <div className="text-sm text-gray-300">Tuntutan Mendesak</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <Shield className="w-8 h-8 text-[#007A42] mb-3 mx-auto" />
                            <div className="text-2xl font-bold text-[#007A42]">8</div>
                            <div className="text-sm text-gray-300">Agenda Reformasi</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <Calendar className="w-8 h-8 text-[#DD7BAC] mb-3 mx-auto" />
                            <div className="text-2xl font-bold text-[#DD7BAC]">5 Sep</div>
                            <div className="text-sm text-gray-300">Deadline 2025</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <Clock className="w-8 h-8 text-[#007A42] mb-3 mx-auto" />
                            <div className="text-2xl font-bold text-[#007A42]">31 Aug</div>
                            <div className="text-sm text-gray-300">Deadline 2026</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative z-10 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-4xl font-bold text-center mb-16 text-white">
                        Platform Monitoring Agenda Reformasi
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 
                          hover:bg-white/10 hover:scale-105 transition-all duration-500">
                            <div className="w-16 h-16 bg-[#DD7BAC]/20 rounded-2xl flex items-center justify-center mb-6 
                            group-hover:bg-[#DD7BAC]/30 transition-colors duration-300">
                                <CheckCircle className="w-8 h-8 text-[#DD7BAC]" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white">Tracking Progress</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Monitor kemajuan setiap tuntutan dan agenda reformasi dengan sistem tracking yang transparan.
                            </p>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 
                          hover:bg-white/10 hover:scale-105 transition-all duration-500">
                            <div className="w-16 h-16 bg-[#007A42]/20 rounded-2xl flex items-center justify-center mb-6 
                            group-hover:bg-[#007A42]/30 transition-colors duration-300">
                                <Users className="w-8 h-8 text-[#007A42]" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white">Partisipasi Publik</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Platform terbuka untuk memantau dan mendorong implementasi agenda reformasi bersama.
                            </p>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 
                          hover:bg-white/10 hover:scale-105 transition-all duration-500">
                            <div className="w-16 h-16 bg-[#DD7BAC]/20 rounded-2xl flex items-center justify-center mb-6 
                            group-hover:bg-[#DD7BAC]/30 transition-colors duration-300">
                                <Scale className="w-8 h-8 text-[#DD7BAC]" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white">Transparansi</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Memastikan transparansi dalam setiap langkah implementasi agenda reformasi.
                            </p>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 
                          hover:bg-white/10 hover:scale-105 transition-all duration-500">
                            <div className="w-16 h-16 bg-[#007A42]/20 rounded-2xl flex items-center justify-center mb-6 
                            group-hover:bg-[#007A42]/30 transition-colors duration-300">
                                <Heart className="w-8 h-8 text-[#007A42]" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white">Empati</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Mendorong pendekatan yang lebih humanis dalam setiap kebijakan dan reformasi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="relative z-10 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-4xl font-bold text-center mb-16 text-white">
                        Timeline Agenda Reformasi
                    </h3>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20"></div>

                        {/* Timeline items */}
                        <div className="space-y-16">
                            <div className="flex items-center">
                                <div className="flex-1 text-right pr-8">
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-2xl font-bold text-[#DD7BAC] mb-2">17 Tuntutan Mendesak</h4>
                                        <p className="text-gray-300 mb-2">Deadline: 5 September 2025</p>
                                        <p className="text-sm text-gray-400">
                                            Tuntutan segera yang harus dipenuhi untuk mengatasi krisis demokrasi
                                        </p>
                                    </div>
                                </div>
                                <div className="w-6 h-6 bg-[#DD7BAC] rounded-full border-4 border-black relative z-10"></div>
                                <div className="flex-1 pl-8"></div>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-1 pr-8"></div>
                                <div className="w-6 h-6 bg-[#007A42] rounded-full border-4 border-black relative z-10"></div>
                                <div className="flex-1 text-left pl-8">
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-2xl font-bold text-[#007A42] mb-2">8 Agenda Reformasi</h4>
                                        <p className="text-gray-300 mb-2">Deadline: 31 Agustus 2026</p>
                                        <p className="text-sm text-gray-400">
                                            Agenda reformasi jangka panjang untuk perubahan struktural
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative z-10 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-8 text-white">
                        Mari Bersama Memantau Agenda Reformasi
                    </h3>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        Setiap suara rakyat penting. Bergabunglah dalam memantau dan mendorong
                        implementasi agenda reformasi untuk Indonesia yang lebih baik.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={onEnterApp}
                            className="px-10 py-4 bg-[#DD7BAC] text-black font-bold text-lg rounded-2xl 
                       hover:bg-[#c96a9a] transform hover:scale-105 transition-all duration-300 
                       shadow-2xl"
                        >
                            MULAI MONITORING
                        </button>
                        <button
                            className="px-10 py-4 bg-[#007A42] text-white font-bold text-lg rounded-2xl 
                       hover:bg-[#006835] transform hover:scale-105 transition-all duration-300 
                       shadow-2xl"
                        >
                            PELAJARI LEBIH LANJUT
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-12 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400 text-sm">
                        Platform Monitoring Agenda Reformasi Indonesia • 2025
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        Transparansi • Reformasi • Empati
                    </p>
                </div>
            </footer>
        </div>
    );
};