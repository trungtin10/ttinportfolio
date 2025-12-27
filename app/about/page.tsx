"use client";
import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaGamepad, FaBook, FaCode, FaMusic, FaPlane } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden relative">
      
      {/* BACKGROUND GRADIENT */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-200/40 blur-[130px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/30 blur-[120px] rounded-full"></div>
      </div>

      {/* HEADER - Cập nhật vị trí Share nằm giữa Skills và Contact */}
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
            
            {/* Share nằm giữa Skills và Contact */}
            <Link href="/share" className="hover:text-black transition-colors">Share</Link>
            
            <Link href="/contact" className="hover:text-black transition-colors uppercase font-bold text-slate-400">
              Contact
            </Link>
          </nav>
          
          <div className="flex gap-4 text-slate-400 text-lg">
             <Link href="/contact" className="hover:text-blue-600 transition-colors">👤</Link> 
             <button className="hover:text-blue-600 transition-colors text-slate-400">🔍</button>
          </div>
        </div>
      </header>

      {/* ABOUT CONTENT */}
      <main className="flex justify-center px-6 pt-48 pb-20 w-full max-w-6xl mx-auto">
        <section 
          className="w-full bg-white/70 backdrop-blur-md rounded-[3rem] shadow-2xl shadow-blue-100/50 border border-white p-8 md:p-16"
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
            
            {/* LEFT COLUMN - Avatar */}
            <div className="flex flex-col items-center md:w-1/3 sticky top-40" data-aos="fade-right">
              <div className="relative w-64 h-80 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="`${REPO_PATH}/images/avt2.jpg`"
                  alt="Trần Trung Tín"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              <div className="mt-8 text-center">
                 <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Software Engineer</p>
                 <h3 className="text-xl font-bold text-slate-900 mt-1">Trần Trung Tín</h3>
              </div>
            </div>

            {/* RIGHT COLUMN - Text Content */}
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
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Blog này là nơi:
                    </h3>
                    <ul className="text-sm space-y-2 opacity-80">
                        <li>• Ghi lại kiến thức lập trình có hệ thống.</li>
                        <li>• Chia sẻ kinh nghiệm làm đồ án thực tế.</li>
                        <li>• Lưu trữ hành trình phát triển bản thân.</li>
                    </ul>
                </div>
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                        Nội dung tập trung:
                    </h3>
                    <ul className="text-sm space-y-2 opacity-80">
                        <li>• Lập trình & Tư duy giải quyết vấn đề.</li>
                        <li>• Phát triển Web / Mobile hiện đại.</li>
                        <li>• Cơ sở dữ liệu & Kiến trúc hệ thống.</li>
                    </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-[10px] font-mono text-slate-300 uppercase tracking-[0.5em] border-b border-slate-50 pb-2">Sở thích cá nhân</h3>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100 shadow-sm">
                    <FaGamepad /> Gaming
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-xs font-bold border border-purple-100 shadow-sm">
                    <FaBook /> Đọc sách
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-xs font-bold border border-slate-100 shadow-sm">
                    <FaCode /> Lập trình
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-xs font-bold border border-pink-100 shadow-sm">
                    <FaMusic /> Nghe nhạc
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-xs font-bold border border-orange-100 shadow-sm">
                    <FaPlane /> Du lịch
                  </span>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-[10px] font-mono text-slate-300 uppercase tracking-[0.5em] border-b border-slate-50 pb-2">Cân bằng cuộc sống</h3>
                <div className="relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2.5rem] border border-blue-100/50 group overflow-hidden">
                    <FaGamepad className="absolute -right-4 -bottom-4 text-8xl text-blue-200/20 rotate-12 group-hover:scale-110 transition-transform" />
                    <p className="relative z-10 italic text-slate-600 leading-relaxed font-light">
                        "Nghệ thuật lập trình chính là nghệ thuật tổ chức sự phức tạp, làm chủ sự đa dạng và tránh sa vào vòng xoáy của sự hỗn loạn."
                    </p>
                </div>
              </section>

              <p className="text-slate-300 italic text-[10px] mt-10 tracking-[0.4em] uppercase font-bold">
                // Keep moving forward.
              </p>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-6xl mx-auto px-8 py-16 border-t border-slate-200/50 flex justify-center items-center">
        <p className="text-slate-300 text-[10px] font-mono tracking-[0.4em] uppercase font-bold text-center">
            © {new Date().getFullYear()} / TRUNG TIN PORTFOLIO
        </p>
      </footer>
    </div>
  );
}