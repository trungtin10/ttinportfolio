"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'; // Import thêm Image cho Modal
import { FaGamepad, FaBook, FaCode, FaMusic, FaPlane, FaDownload, FaRocket, FaSearch } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';

// --- CẤU HÌNH ĐƯỜNG DẪN ---
const REPO_PATH = "/ttinportfolio"; 
const avatarPath = `${REPO_PATH}/images/avt1.jpg`;
const modalAvatarPath = `${REPO_PATH}/images/avtt.jpg`; 
// CẬP NHẬT: Đổi tên file PDF cho khớp với file bạn cung cấp
const cvPath = `${REPO_PATH}/TRAN_TRUNG_TIN_CV.pdf`; 

export default function About() {
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State quản lý Modal Profile

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden relative">
      
      {/* 1. MODAL PROFILE */}
      <AnimatePresence>
        {isProfileOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
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
              <Image src={modalAvatarPath} alt="Profile" fill className="object-cover" unoptimized />
              <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center text-xs">✕</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BACKGROUND GRADIENT */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-200/40 blur-[130px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/30 blur-[120px] rounded-full"></div>
      </div>

      {/* 2. HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-xl z-50 border-b border-white/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">
          <Link href="/" className="group flex items-center gap-2 font-black text-xl tracking-tighter">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              T
            </div>
          </Link>
          
          <nav className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="text-blue-600 border-b-2 border-blue-600 pb-1">About</Link>
            <Link href="/skills" className="hover:text-black transition-colors">Skills</Link>
            <Link href="/project" className="hover:text-black transition-colors">Project</Link>
            <Link href="/share" className="hover:text-black transition-colors">Share</Link>
            <Link href="/contact" className="hover:text-black transition-colors uppercase font-bold text-slate-400">
              Contact
            </Link>
          </nav>
          
          <div className="flex gap-4 text-slate-400 text-lg">
             <button onClick={() => setIsProfileOpen(true)} className="hover:text-blue-600 transition-colors">👤</button> 
             <button className="hover:text-blue-600 transition-colors text-slate-400"><FaSearch size={18}/></button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex justify-center px-6 pt-48 pb-20 w-full max-w-6xl mx-auto">
        <section 
          className="w-full bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-white p-8 md:p-16"
          data-aos="fade-up"
        >
          <div className="text-center mb-16" data-aos="fade-down">
             <span className="text-blue-600 font-mono text-[10px] mb-4 block tracking-[0.4em] uppercase font-bold">
              // Personal Profile
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">About Me</h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 items-start">
            
            {/* CỘT TRÁI - Avatar & Actions */}
            <div className="flex flex-col items-center w-full md:w-1/3 md:sticky md:top-40" data-aos="fade-right">
              <div className="relative w-64 h-80 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 bg-white border-4 border-white">
                <img
                  src={avatarPath}
                  alt="Trần Trung Tín"
                  className="w-full h-full object-cover"
                  style={{ 
                    imageRendering: 'auto',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translateZ(0)' 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="mt-8 text-center w-full">
                 <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Software Engineer</p>
                 <h3 className="text-xl font-bold text-slate-900 mt-1 uppercase">Trần Trung Tín</h3>
                 
                 <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-[320px] mx-auto px-4">
                    {/* CẬP NHẬT: Thêm thuộc tính download và trỏ đúng file */}
                    <a 
                      href={cvPath}
                      download="TRAN_TRUNG_TIN_CV.pdf" // Thuộc tính download kích hoạt tải xuống
                      className="flex-1 group relative inline-flex items-center justify-center gap-2 px-4 py-4 bg-slate-900 text-white rounded-2xl text-[9px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-blue-600 hover:shadow-xl active:scale-95 shadow-lg shadow-slate-200"
                    >
                      <FaDownload className="group-hover:animate-bounce" />
                      <span> CV</span>
                    </a>

                    <Link 
                      href="/project" 
                      className="flex-1 group inline-flex items-center justify-center gap-2 px-4 py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-2xl text-[9px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-slate-50 hover:border-blue-600 hover:text-blue-600 active:scale-95 shadow-md"
                    >
                      <FaRocket className="group-hover:rotate-12 transition-transform" />
                      <span>Projects</span>
                    </Link>
                 </div>
              </div>
            </div>

            {/* CỘT PHẢI - Text Content */}
            <div className="md:w-2/3 text-slate-600 leading-relaxed space-y-10" data-aos="fade-left">
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-blue-600"></span>
                    Chào bạn, mình là Tín
                </h2>
                <p className="text-lg font-light">
                  Sinh viên năm 4 trường đại học Công nghệ (HUTECH). Chuyên ngành của mình là <span className="text-blue-600 font-bold underline decoration-blue-200 underline-offset-4">Software Engineering</span>. 
                  Mình định hướng phát triển lâu dài trong lĩnh vực phần mềm với tư duy hệ thống và giải quyết vấn đề thực tế.
                </p>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Blog này là nơi:
                    </h3>
                    <ul className="text-sm space-y-3 opacity-80">
                        <li>• Ghi lại kiến thức lập trình hệ thống.</li>
                        <li>• Chia sẻ kinh nghiệm làm đồ án.</li>
                        <li>• Lưu trữ hành trình phát triển.</li>
                    </ul>
                </div>
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                        Nội dung tập trung:
                    </h3>
                    <ul className="text-sm space-y-3 opacity-80">
                        <li>• Lập trình & Tư duy giải quyết vấn đề.</li>
                        <li>• Phát triển Web / Mobile hiện đại.</li>
                        <li>• Cơ sở dữ liệu & Kiến trúc hệ thống.</li>
                    </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-[10px] font-mono text-slate-300 uppercase tracking-[0.5em] border-b border-slate-50 pb-2">Sở thích cá nhân</h3>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 rounded-full text-xs font-bold border border-slate-200 shadow-sm transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600">
                    <FaGamepad size={14}/> Gaming
                  </span>
                  <span className="flex items-center gap-2 px-5 py-2.5 bg-white text-purple-700 rounded-full text-xs font-bold border border-slate-200 shadow-sm transition-all hover:bg-purple-600 hover:text-white hover:border-purple-600">
                    <FaBook size={14}/> Đọc sách
                  </span>
                  <span className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 rounded-full text-xs font-bold border border-slate-200 shadow-sm transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900">
                    <FaCode size={14}/> Lập trình
                  </span>
                  <span className="flex items-center gap-2 px-5 py-2.5 bg-white text-pink-700 rounded-full text-xs font-bold border border-slate-200 shadow-sm transition-all hover:bg-pink-600 hover:text-white hover:border-pink-600">
                    <FaMusic size={14}/> Nghe nhạc
                  </span>
                </div>
              </section>

              <section className="space-y-4">
                <div className="relative p-10 bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
                    <FaCode className="absolute -right-4 -bottom-4 text-9xl text-white/5 rotate-12" />
                    <p className="relative z-10 italic text-blue-50/80 leading-relaxed font-light text-lg">
                        "Nghệ thuật lập trình chính là nghệ thuật tổ chức sự phức tạp, làm chủ sự đa dạng và tránh sa vào vòng xoáy của sự hỗn loạn."
                    </p>
                </div>
              </section>

              <p className="text-slate-400 italic text-[10px] mt-10 tracking-[0.4em] uppercase font-bold text-center">
                // Keep moving forward.
              </p>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-6xl mx-auto px-8 py-16 border-t border-slate-200 flex justify-center items-center">
        <p className="text-slate-400 text-[10px] font-mono tracking-[0.4em] uppercase font-bold text-center">
            © {new Date().getFullYear()} / TRUNG TIN PORTFOLIO
        </p>
      </footer>
    </div>
  );
}