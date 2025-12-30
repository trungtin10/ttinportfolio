"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import thêm Image
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaFacebook, FaInstagram, FaSearch } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

// --- CẤU HÌNH ĐƯỜNG DẪN GỐC ---
const REPO_PATH = "/ttinportfolio";
const avatarPath = `${REPO_PATH}/images/avtt.jpg`;

export default function ContactPage() {
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State quản lý Modal Profile
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgvkrgk", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Có lỗi xảy ra khi gửi. Vui lòng kiểm tra lại cấu hình Formspree!");
      }
    } catch (error) {
      alert("Lỗi kết nối. Vui lòng kiểm tra mạng của bạn!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden relative">
      
      {/* 1. MODAL PROFILE (ĐỒNG BỘ CÁC TRANG) */}
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
              <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center text-xs">✕</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BACKGROUND DECOR */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-200/40 blur-[130px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/30 blur-[120px] rounded-full"></div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-xl z-50 border-b border-white/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">
          <Link href="/" className="group flex items-center gap-2 font-black text-xl tracking-tighter">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              T
            </div>
          </Link>
          <nav className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/skills" className="hover:text-black transition-colors">Skills</Link>
            <Link href="/project" className="hover:text-black transition-colors">Project</Link>
            <Link href="/share" className="hover:text-black transition-colors">Share</Link>
            <Link href="/contact" className="text-blue-600 border-b-2 border-blue-600 pb-1">Contact</Link>
          </nav>
          <div className="flex gap-4 text-slate-400 text-lg">
             {/* SỬA LẠI: NÚT ICON PROFILE ĐỂ MỞ MODAL ẢNH */}
             <button onClick={() => setIsProfileOpen(true)} className="hover:text-blue-600 transition-colors">👤</button> 
             <button className="hover:text-blue-600 transition-colors"><FaSearch size={18}/></button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-48 pb-20 w-full max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: INFO */}
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-4">
              <span className="text-blue-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">// Say Hello</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Hãy kết nối <br/> cùng mình.</h1>
              <p className="text-slate-500 text-lg font-light max-w-md pt-4">
                Bạn có ý tưởng dự án, câu hỏi hay chỉ đơn giản là muốn làm quen? Đừng ngần ngại gửi tin nhắn nhé!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Điện thoại</p>
                  <p className="font-bold text-slate-700">078 370 5831</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-red-500 text-xl group-hover:bg-red-500 group-hover:text-white transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="font-bold text-slate-700">tintran2k4@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-slate-700 text-xl group-hover:bg-slate-700 group-hover:text-white transition-all">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Địa điểm</p>
                  <p className="font-bold text-slate-700">TP. Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 pt-6">
              <a href="https://facebook.com/ttindeptrai/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-md text-slate-400 hover:text-blue-600 transition-all hover:-translate-y-1">
                <FaFacebook size={24} />
              </a>
              <a href="https://tiktok.com/@tt1012022" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-md text-slate-400 hover:text-black transition-all hover:-translate-y-1">
                <SiTiktok size={24} />
              </a>
              <a href="https://www.instagram.com/trungtin83/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-md text-slate-400 hover:text-pink-600 transition-all hover:-translate-y-1">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div data-aos="fade-left">
            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-blue-100/50 border border-white relative overflow-hidden">
              <h3 className="text-2xl font-black mb-8 tracking-tight">Gửi tin nhắn cho mình</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Họ và tên</label>
                    <input name="name" required type="text" placeholder="Trần Trung Tín" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Email</label>
                    <input name="email" required type="email" placeholder="example@mail.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Tiêu đề</label>
                  <input name="subject" required type="text" placeholder="Hợp tác dự án..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Nội dung</label>
                  <textarea name="message" required rows={5} placeholder="Chào Tín, mình muốn trao đổi về..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"></textarea>
                </div>

                <button 
                  disabled={isLoading}
                  type="submit" 
                  className={`w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 shadow-xl ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                >
                  <FaPaperPlane className={`text-[10px] ${isLoading ? 'animate-bounce' : ''}`} />
                  {isLoading ? "Đang gửi..." : "Gửi tin nhắn ngay"}
                </button>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-10 z-10"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl mb-6 shadow-lg shadow-green-100">✓</div>
                    <h4 className="text-2xl font-black mb-2">Cảm ơn bạn!</h4>
                    <p className="text-slate-500">Tin nhắn đã được gửi thành công. <br/> Check Gmail trên điện thoại nhé Tín!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
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