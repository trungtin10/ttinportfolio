"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import thêm Image
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaShareAlt, FaBook, FaCode, FaLightbulb, FaLanguage, 
  FaBrain, FaUserTie, FaSearch, FaStar, FaGlobeAmericas 
} from 'react-icons/fa';

// --- CẤU HÌNH ĐƯỜNG DẪN GỐC ---
const REPO_PATH = "/ttinportfolio";
const avatarPath = `${REPO_PATH}/images/avtt.jpg`;

export default function SharePage() {
  const [filter, setFilter] = useState('All');
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State quản lý Modal Profile

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const categories = ['All', 'English', 'Soft Skills', 'Technical', 'Academic'];

  const resources = [
    {
      title: "English for Developers",
      desc: "Kho tài liệu tổng hợp từ vựng, mẫu câu và phương pháp học tiếng Anh dành riêng cho Dev.",
      icon: <FaLanguage />,
      tag: "English",
      color: "bg-sky-500",
      link: "https://github.com/basecamp/handbook"
    },
    {
      title: "FreeCodeCamp News",
      desc: "Nơi luyện đọc hiểu tiếng Anh qua các bài blog kỹ thuật cực dễ hiểu và bổ ích.",
      icon: <FaGlobeAmericas />,
      tag: "English",
      color: "bg-blue-600",
      link: "https://www.freecodecamp.org/news/"
    },
    {
      title: "The Agile Manifesto",
      desc: "Tìm hiểu về tư duy Agile và Scrum - kỹ năng phối hợp team sống còn trong các công ty IT.",
      icon: <FaUserTie />,
      tag: "Soft Skills",
      color: "bg-rose-500",
      link: "https://agilemanifesto.org/"
    },
    {
      title: "Deep Work - Học tập sâu",
      desc: "Phương pháp tập trung cao độ để giải quyết các vấn đề kỹ thuật khó trong thời gian ngắn.",
      icon: <FaBrain />,
      tag: "Soft Skills",
      color: "bg-purple-500",
      link: "https://www.calnewport.com/blog/"
    },
    {
      title: "CS50: Intro to Computer Science",
      desc: "Khóa học học thuật đỉnh cao của Harvard về tư duy máy tính, thuật toán và cấu trúc dữ liệu.",
      icon: <FaBook />,
      tag: "Academic",
      color: "bg-emerald-600",
      link: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
    },
    {
      title: "Generative AI Learning Path",
      desc: "Lộ trình học về AI và cách ứng dụng Generative AI từ chính Google Cloud cung cấp.",
      icon: <FaStar />,
      tag: "Academic",
      color: "bg-amber-500",
      link: "https://www.cloudskillsboost.google/paths/118"
    },
    {
      title: "Fullstack Roadmap 2024",
      desc: "Bản đồ chi tiết giúp bạn định vị mình đang ở đâu và cần học gì tiếp theo để thành Senior.",
      icon: <FaCode />,
      tag: "Technical",
      color: "bg-slate-800",
      link: "https://roadmap.sh"
    },
    {
      title: "Modern React Guide",
      desc: "Tài liệu học React từ cơ bản đến nâng cao với ví dụ thực tế và giải thích chi tiết.",
      icon: <FaLightbulb />,
      tag: "Technical",
      color: "bg-orange-500",
      link: "https://react.dev/learn"
    }
  ];

  const filteredResources = filter === 'All' 
    ? resources 
    : resources.filter(item => item.tag === filter);

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden relative">
      
      {/* 1. MODAL PROFILE (GIỐNG TRANG HOME & PROJECT) */}
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
              <Image src={avatarPath} alt="Profile" fill className="object-cover" unoptimized />
              <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center">✕</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BACKGROUND DECOR */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-blue-200/30 blur-[130px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/20 blur-[120px] rounded-full"></div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-xl z-50 border-b border-white/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              T
            </div>
          </Link>
          <nav className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/skills" className="hover:text-black transition-colors">Skills</Link>
            <Link href="/project" className="hover:text-black transition-colors">Project</Link>
            <Link href="/share" className="text-blue-600 border-b-2 border-blue-600 pb-1">Share</Link>
            <Link href="/contact" className="hover:text-black transition-colors uppercase font-bold text-slate-400">Contact</Link>
          </nav>
          <div className="flex gap-4 text-slate-400 text-lg">
             {/* THAY ĐỔI: ICON PROFILE MỞ MODAL */}
             <button onClick={() => setIsProfileOpen(true)} className="hover:text-blue-600 transition-colors">👤</button> 
             <button className="hover:text-blue-600 transition-colors"><FaSearch size={18}/></button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-48 pb-32 w-full max-w-6xl mx-auto px-8">
        
        {/* HERO SECTION */}
        <div className="space-y-8 mb-20 text-center md:text-left" data-aos="fade-right">
          <span className="inline-block text-purple-600 font-mono text-[10px] px-4 py-1.5 bg-purple-100/50 rounded-full tracking-[0.4em] uppercase font-bold">
            // Knowledge Sharing
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
            Build. Learn.<br/>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent italic">Share.</span>
          </h1>
          <p className="text-slate-500 text-lg font-light max-w-2xl pt-4 mx-auto md:mx-0">
            Dưới đây là các nguồn tài liệu "chất" nhất mình tổng hợp được. Hy vọng nó giúp ích cho hành trình trở thành Engineer của bạn.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="flex flex-wrap gap-3 mb-16" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat 
                ? 'bg-slate-900 text-white shadow-xl scale-105' 
                : 'bg-white text-slate-400 hover:bg-slate-50 border border-slate-100 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RESOURCES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((item) => (
              <motion.div 
                layout
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-100/40 hover:shadow-purple-200/50 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-800 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t border-slate-50 mt-auto">
                  <span className="text-[9px] font-black text-purple-600 uppercase tracking-widest px-3 py-1 bg-purple-50 rounded-lg">
                    {item.tag}
                  </span>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 group-hover:text-purple-600 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors"
                  >
                    Xem tài liệu <FaShareAlt size={10} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* INSPIRATION QUOTE */}
        <section data-aos="zoom-in" className="mt-32 relative py-20 px-10 rounded-[4rem] text-center overflow-hidden border-2 border-dashed border-slate-200">
            <div className="max-w-3xl mx-auto space-y-6">
              <FaLightbulb className="text-4xl mx-auto text-yellow-500 animate-pulse" />
              <h2 className="text-3xl font-black uppercase tracking-tighter">"Sharing is Growing"</h2>
              <p className="text-slate-500 font-light italic text-lg">
                Học một mình có thể đi nhanh, nhưng cùng nhau chia sẻ kiến thức chúng ta sẽ đi xa hơn.
              </p>
            </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-6xl mx-auto px-8 py-16 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-[10px] font-mono tracking-[0.4em] uppercase font-bold">
            © {new Date().getFullYear()} / TRUNG TIN PORTFOLIO
        </p>
        <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <Link href="/contact" className="hover:text-purple-600 transition-colors">Đề xuất thêm tài liệu</Link>
        </div>
      </footer>
    </div>
  );
}