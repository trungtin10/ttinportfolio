"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaDatabase, FaExternalLinkAlt, FaTimes, FaSearch } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiSpringboot, SiCisco, SiOracle } from 'react-icons/si';

// --- KHAI BÁO ĐƯỜNG DẪN GỐC ---
const REPO_PATH = "/ttinportfolio";

// Định nghĩa Interfaces
interface Certificate {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  image: string;
  delay: number;
}

interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode;
}

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  delay: number;
}

export default function SkillsPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  const skillGroups: SkillGroup[] = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-blue-500" />,
      skills: [
        { name: "React / Next.js", level: "90%", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", level: "85%", icon: <SiTailwindcss /> },
        { name: "JavaScript (ES6+)", level: "80%", icon: <SiJavascript /> },
      ],
      delay: 0
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-indigo-500" />,
      skills: [
        { name: "Java / Spring Boot", level: "75%", icon: <SiSpringboot /> },
        { name: "Node.js", level: "70%", icon: <FaCode /> },
        { name: "MySQL / MongoDB", level: "80%", icon: <FaDatabase /> },
      ],
      delay: 200
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="text-slate-500" />,
      skills: [
        { name: "Git / GitHub", level: "85%", icon: <FaCode /> },
        { name: "Docker", level: "60%", icon: <FaCode /> },
        { name: "UI/UX Design", level: "65%", icon: <FaCode /> },
      ],
      delay: 400
    }
  ];

  const certificates: Certificate[] = [
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "Nov 23, 2025",
      icon: <SiCisco />,
      image: `${REPO_PATH}/images/networking.png`, 
      delay: 0
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy / OpenEDG",
      date: "Nov 23, 2025",
      icon: <SiJavascript className="text-yellow-400" />, 
      image: `${REPO_PATH}/images/jv1.png`,
      delay: 100
    },
    {
      title: "Professional Java Web Developer",
      issuer: "Oracle / Coursera",
      date: "Oct 2023",
      icon: <SiOracle className="text-[#f80000]" />, 
      image: `${REPO_PATH}/images/jv2.png`,
      delay: 200
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden relative">
      
      {/* MODAL XEM HÌNH CHỨNG CHỈ */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setSelectedCert(null)} 
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-zoom-out" 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} 
              className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <button onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 text-slate-400 hover:text-black z-20 transition-colors text-2xl"><FaTimes /></button>
              <div className="relative aspect-[1.414/1] w-full bg-white">
                <Image 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    fill 
                    className="object-contain p-4 md:p-8" 
                    priority 
                    unoptimized={true} 
                />
              </div>
              <div className="p-8 bg-white border-t flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase">{selectedCert.title}</h3>
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
                <button onClick={() => setSelectedCert(null)} className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all">Đóng lại</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BACKGROUND DECOR */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-200/40 blur-[130px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/30 blur-[120px] rounded-full"></div>
      </div>

      {/* HEADER - ĐÃ CẬP NHẬT THÊM PROJECT */}
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
            <Link href="/skills" className="text-blue-600 border-b-2 border-blue-600 pb-1">Skills</Link>
            
            {/* MỤC PROJECT MỚI TRÊN HEADER */}
            <Link href="/project" className="hover:text-black transition-colors">Project</Link>
            
            <Link href="/share" className="hover:text-black transition-colors">Share</Link>
            <Link href="/contact" className="hover:text-black transition-colors uppercase font-bold text-slate-400">
              Contact
            </Link>
          </nav>
          <div className="flex gap-4 text-slate-400 text-lg">
             <Link href="/contact" className="hover:text-blue-600 transition-colors">👤</Link> 
             <button className="hover:text-blue-600 transition-colors"><FaSearch size={18}/></button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-48 pb-32 w-full max-w-6xl mx-auto px-8 space-y-40">
        <div className="space-y-4" data-aos="fade-down">
          <span className="inline-block text-blue-600 font-mono text-[10px] px-4 py-1.5 bg-blue-100/50 rounded-full tracking-[0.3em] uppercase font-bold">
            // My Technical Stack
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Kỹ Năng & Chứng Chỉ</h1>
        </div>

        {/* SKILLS GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={group.delay} className="group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-blue-200/40 hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">{group.icon}</div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">{group.title}</h3>
              <div className="space-y-8">
                {group.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-bold tracking-wide uppercase">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">{skill.icon}</span>
                        <span className="text-slate-700">{skill.name}</span>
                      </div>
                      <span className="text-slate-400 font-mono">{skill.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: skill.level }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CHỨNG CHỈ */}
        <section className="space-y-16">
          <div className="text-center space-y-4" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">Chứng Chỉ Đạt Được</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={cert.delay}
                onClick={() => setSelectedCert(cert)}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-lg hover:shadow-blue-200/40 hover:-translate-y-2 transition-all duration-500 flex items-start gap-6 cursor-pointer"
              >
                <div className="w-16 h-16 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {cert.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-black text-lg text-slate-800 leading-tight group-hover:text-blue-600 transition-colors uppercase">{cert.title}</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{cert.issuer}</p>
                  <p className="text-[10px] font-mono font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md mt-2 inline-block">{cert.date}</p>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaExternalLinkAlt className="text-slate-300 text-sm" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-6xl mx-auto px-8 py-20 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-10 text-center">
        <p className="text-slate-400 text-[10px] font-mono tracking-[0.4em] uppercase font-bold">
            © {new Date().getFullYear()} / TRUNG TIN PORTFOLIO
        </p>
        <div className="flex gap-12 font-black text-[10px] tracking-widest uppercase text-slate-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Github</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}