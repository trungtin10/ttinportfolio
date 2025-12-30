"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const REPO_PATH = "/ttinportfolio"; 
  const avatarPath = `${REPO_PATH}/images/avtt.jpg`;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const handleExploreToggle = () => {
    if (!showDetails) {
      setShowDetails(true);
      setTimeout(() => {
        const element = document.getElementById('details-content');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setShowDetails(false);
      }, 600);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden relative">
      
      {/* 1. MODAL PROFILE */}
      <AnimatePresence>
        {isProfileOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProfileOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
            />
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 5 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <Image src={avatarPath} alt="Profile" fill className="object-cover" />
              <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center">✕</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BACKGROUND GRADIENT */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-200/40 blur-[130px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-sky-100/50 blur-[120px] rounded-full"></div>
      </div>

      {/* HEADER - ĐÃ THÊM PROJECT */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-xl z-50 border-b border-white/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">
          <Link href="/" className="group flex items-center gap-2 font-black text-xl tracking-tighter">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              T
            </div>
          </Link>
          
          <nav className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
            <Link href="/" className="text-blue-600 border-b-2 border-blue-600 pb-1">Home</Link>
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/skills" className="hover:text-black transition-colors">Skills</Link>
            
            {/* LINK PROJECT MỚI */}
            <Link href="/project" className="hover:text-black transition-colors">Project</Link>
            
            <Link href="/share" className="hover:text-black transition-colors">Share</Link>
            <Link href="/contact" className="hover:text-black transition-colors uppercase font-bold text-slate-400">
              Contact
            </Link>
          </nav>
          
          <div className="flex gap-4 text-slate-400 text-lg">
             <button onClick={() => setIsProfileOpen(true)} className="hover:text-blue-600 transition-colors">👤</button> 
             <button className="hover:text-blue-600 transition-colors">🔍</button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-48 pb-20 w-full max-w-6xl mx-auto px-8">
        
        {/* HERO SECTION */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[70vh]">
          <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
            <span className="inline-block text-blue-600 font-mono text-[10px] mb-2 px-4 py-1.5 bg-blue-100/50 rounded-full tracking-[0.3em] uppercase font-bold">
              // Future Software Engineer
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900">
              Build. Learn.<br/>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Share.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg font-light">
              Chào bạn, mình là <span className="text-slate-900 font-bold">Trần Trung Tín</span>. 
              Sinh viên năm 4 chuyên ngành Công nghệ phần mềm.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <button 
                onClick={handleExploreToggle}
                className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-[10px] tracking-widest uppercase hover:bg-blue-600 transition-all hover:scale-105 shadow-2xl shadow-blue-200/50"
              >
                Khám phá ngay
              </button>
              <span className={`text-2xl transition-transform duration-500 ${showDetails ? 'rotate-180' : 'animate-bounce'}`}>
                ↓
              </span>
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <Image src={avatarPath} alt="Trần Trung Tín" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-mono text-[10px] tracking-widest uppercase opacity-70">Portfolio 2025</p>
                <h2 className="text-2xl font-bold tracking-tight">Trần Trung Tín</h2>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-blue-200 rounded-[2.5rem]"></div>
          </div>
        </section>

        {/* NỘI DUNG CHI TIẾT */}
        <AnimatePresence>
          {showDetails && (
            <motion.div 
              id="details-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-40 mt-40">
                <section className="space-y-16">
                  <div className="text-center space-y-4">
                    <h2 className="text-4xl font-black tracking-tight uppercase">Mục tiêu của tôi</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="group relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl hover:-translate-y-2 transition-all overflow-hidden text-center md:text-left">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -z-10 group-hover:bg-blue-600 transition-colors"></div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Lập trình Web & Hệ thống</h3>
                      <p className="text-slate-500 text-lg font-light">Phát triển ứng dụng hiện đại với React, Next.js và kiến trúc Backend tối ưu.</p>
                    </div>

                    <div className="group relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl hover:-translate-y-2 transition-all overflow-hidden text-center md:text-left">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[5rem] -z-10 group-hover:bg-indigo-600 transition-colors"></div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">Kỹ thuật phần mềm</h3>
                      <p className="text-slate-500 text-lg font-light">Áp dụng Clean Code, nguyên lý SOLID và tư duy giải quyết vấn đề thực tế.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 p-16 md:p-24 rounded-[4rem] text-white text-center overflow-hidden">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Sẵn sàng hợp tác?</h2>
                    <p className="text-blue-200/70 text-xl max-w-xl mx-auto mb-12 font-light italic">
                      "Trở thành một Software Engineer có tư duy hệ thống và mang lại giá trị thực cho cộng đồng."
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-xs uppercase hover:scale-105 transition-transform shadow-xl">
                      Liên hệ với mình
                    </Link>
                  </div>
                </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-6xl mx-auto px-8 py-20 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-10">
        <p className="text-slate-400 text-[10px] font-mono tracking-[0.4em] uppercase font-bold text-center">
            © {new Date().getFullYear()} / TRUNG TIN PORTFOLIO
        </p>
        <div className="flex gap-12 font-black text-[10px] tracking-widest uppercase text-slate-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Github</a>
        </div>
      </footer>
    </div>
  );
}