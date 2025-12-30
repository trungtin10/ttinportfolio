"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { FaGithub, FaExternalLinkAlt, FaTimes, FaRocket, FaImages, FaSearch } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';

// --- CẤU HÌNH ĐƯỜNG DẪN GỐC ---
const REPO_PATH = "/ttinportfolio";
const avatarPath = `${REPO_PATH}/images/avtt.jpg`; 

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;     
  gallery?: string[]; 
  github: string;
  demo: string;
}

export default function ProjectPage() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false); 
  
  // STATE: Quản lý ảnh đang được phóng to (Zoom)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // --- DỮ LIỆU DỰ ÁN ---
  const projects: Project[] = [
    {
      id: 1,
      title: "Total English App",
      category: "Mobile",
      // CẬP NHẬT: Mô tả dựa trên báo cáo tuần 10
      description: "Ứng dụng học tiếng Anh tích hợp AI nhận diện giọng nói (Vosk).",
      longDescription: "Ứng dụng di động hỗ trợ học tiếng Anh toàn diện, được xây dựng bằng Flutter kết hợp với Backend Node.js (Express). Điểm nổi bật là tính năng Luyện nói (Speaking) sử dụng mô hình AI Vosk để chuyển đổi giọng nói thành văn bản và chấm điểm phát âm. Hệ thống bao gồm các module: Học từ vựng (Flashcard), Bài tập trắc nghiệm (Quiz), Mini Game lật thẻ và Lộ trình học tập cá nhân hóa.",
      tech: ["Flutter", "Node.js", "Express", "Vosk AI", "Firebase"], // Cập nhật tech stack
      image: `${REPO_PATH}/images/tt7.png`,
      // CẬP NHẬT: Thêm gallery chờ sẵn hình ảnh mới
      gallery: [
        `${REPO_PATH}/images/tt1.png`, // Bạn hãy thêm hình Giao diện chính/Lộ trình vào đây
        `${REPO_PATH}/images/tt2.png`, // Hình Từ vựng
        `${REPO_PATH}/images/tt3.png`,
        `${REPO_PATH}/images/tt5.png`,
        `${REPO_PATH}/images/tt6.png`, // Hình Speaking/Chấm điểm
        `${REPO_PATH}/images/tt4.png`  // Hình Mini Game/Exercise
      ],
      github: "https://github.com/NguyenHin/TotalEnglish",
      demo: "https://github.com/NguyenHin/TotalEnglish"
    },
    {
      id: 2,
      title: "Online Book Store",
      category: "Web",
      description: "Hệ thống bán sách trực tuyến tích hợp thanh toán VNPay.",
      longDescription: "Xây dựng hệ thống bán sách trọn gói. Phía người dùng: Tìm kiếm thông minh, giỏ hàng, thanh toán online (VNPay/QR). Phía quản trị (Admin): Dashboard quản lý vòng đời sản phẩm, kiểm soát hàng tồn kho và báo cáo thống kê.",
      tech: ["ASP.NET Core", "SQL Server", "Bootstrap", "VNPay"],
      image: `${REPO_PATH}/images/s1.jpg`,
      gallery: [
        `${REPO_PATH}/images/ảnh/s1.jpg`,
        `${REPO_PATH}/images/ảnh/s2.png`,
        `${REPO_PATH}/images/ảnh/s3.png`,
        `${REPO_PATH}/images/ảnh/s4.png`,
        `${REPO_PATH}/images/ảnh/s5.png`,
        `${REPO_PATH}/images/ảnh/s6.png`,
        `${REPO_PATH}/images/ảnh/s7.png`,
        `${REPO_PATH}/images/ảnh/s8.png`,
        `${REPO_PATH}/images/ảnh/s9.png`,
        `${REPO_PATH}/images/ảnh/s10.png`,
        `${REPO_PATH}/images/ảnh/s11.png`,
        `${REPO_PATH}/images/ảnh/s12.png`,
        `${REPO_PATH}/images/ảnh/s13.png`,
        `${REPO_PATH}/images/ảnh/s14.png`,
        `${REPO_PATH}/images/ảnh/s15.png`
       
      ],
      
      github: "https://github.com/trungtin10",
      demo: "https://github.com/trungtin10"
    },
    {
      id: 3,
      title: "Coffee Shop POS",
      category: "Desktop",
      description: "Phần mềm quản lý quán cà phê chuyên nghiệp (Mô hình 3 lớp).",
      longDescription: "Hệ thống quản lý quán cà phê được xây dựng chặt chẽ theo kiến trúc 3-Layer (Presentation, BLL, DAL). Phần mềm bao gồm các module: Đăng nhập bảo mật, Sơ đồ bàn trực quan (đổi bàn, gộp bàn), Order món, Quản lý Menu/Nhân viên (CRUD) và Xuất hóa đơn tự động.",
      tech: ["C#", "WinForms", "3-Layer Architecture", "SQL Server"],
      image: `${REPO_PATH}/images/coffee.png`,
      gallery: [
        `${REPO_PATH}/images/c1.png`,
        `${REPO_PATH}/images/c2.png`,
        `${REPO_PATH}/images/cf3.png`, 
        
        `${REPO_PATH}/images/c4.png`
      ],
      github: "https://github.com/trungtin10",
      demo: "https://github.com/trungtin10"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden relative">
      
      {/* 5. MODAL LIGHTBOX (HIỂN THỊ ẢNH PHÓNG TO) */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
            onClick={() => setSelectedGalleryImage(null)} 
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full"
            >
              <img 
                src={selectedGalleryImage} 
                alt="Zoomed" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/20"
              />
              <button 
                onClick={() => setSelectedGalleryImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors bg-black/50 rounded-full p-2"
              >
                <FaTimes size={24} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL PROFILE */}
      <AnimatePresence>
        {isProfileOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsProfileOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
            />
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
              className="relative w-full max-w-sm aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <Image src={avatarPath} alt="Profile" fill className="object-cover" unoptimized />
              <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center">✕</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-xl z-50 border-b border-white/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">
          <Link href="/" className="group flex items-center gap-2 font-black text-xl tracking-tighter">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">T</div>
          </Link>
          <nav className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/about" className="hover:text-black">About</Link>
            <Link href="/skills" className="hover:text-black">Skills</Link>
            <Link href="/project" className="text-blue-600 border-b-2 border-blue-600 pb-1">Project</Link>
            <Link href="/share" className="hover:text-black">Share</Link>
            <Link href="/contact" className="hover:text-black">Contact</Link>
          </nav>
          <div className="flex gap-4 text-slate-400 text-lg">
             <button onClick={() => setIsProfileOpen(true)} className="hover:text-blue-600 transition-colors">👤</button> 
             <button className="hover:text-blue-600 transition-colors"><FaSearch size={18}/></button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-48 pb-32 w-full max-w-6xl mx-auto px-8">
        <div className="space-y-6 mb-20 text-center md:text-left" data-aos="fade-down">
          <span className="inline-block text-blue-600 font-mono text-[10px] px-4 py-1.5 bg-blue-100/50 rounded-full tracking-[0.3em] uppercase font-bold">
            // Creative Works
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-slate-800">
            Selected <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
          </h1>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-8">
            {['All', 'Mobile', 'Web', 'Desktop'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-bold tracking-widest uppercase transition-all ${
                  filter === cat 
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                  : 'bg-white text-slate-400 border border-slate-100 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                data-aos="fade-up"
                onClick={() => setSelectedProject(proj)}
                className="group relative h-[500px] rounded-[3.5rem] overflow-hidden cursor-pointer bg-white shadow-2xl shadow-slate-100 border border-white"
              >
                <div className="absolute inset-0 w-full h-full bg-slate-200">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-12 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-blue-400 font-mono text-[10px] tracking-widest uppercase font-bold">{proj.category}</span>
                    <h3 className="text-3xl font-black text-white mt-2 uppercase tracking-tight">{proj.title}</h3>
                    <p className="text-slate-300 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                      {proj.description}
                    </p>
                    <div className="flex gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="flex items-center gap-2 text-white text-[10px] font-bold uppercase border-b-2 border-blue-500 pb-1">
                        View Details <FaRocket className="text-blue-500" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* 4. MODAL CHI TIẾT DỰ ÁN */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" />
            
            <motion.div 
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} 
              className="relative max-w-4xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-slate-600 transition-colors">
                <FaTimes size={18}/>
              </button>

              <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar">
                
                {/* Ảnh chính Header */}
                <div className="h-64 md:h-80 rounded-[2rem] overflow-hidden bg-slate-100 mb-8 shadow-inner">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <span className="text-blue-600 font-mono text-[10px] tracking-widest uppercase font-bold">{selectedProject.category}</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 uppercase">{selectedProject.title}</h2>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-[9px] font-bold rounded-full uppercase italic">#{t}</span>
                      ))}
                    </div>

                    <p className="text-slate-500 mt-6 leading-relaxed text-lg font-light">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* GALLERY ẢNH */}
                  {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                    <div className="pt-8 border-t border-slate-100">
                      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
                        <FaImages className="text-blue-600"/> Screenshots Gallery (Click to Zoom)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.gallery.map((img, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => setSelectedGalleryImage(img)}
                            className="group relative rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-video hover:shadow-xl transition-all cursor-zoom-in"
                          >
                             <img src={img} alt={`Screenshot ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                             {/* Overlay icon zoom */}
                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <FaSearch className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-0 group-hover:scale-100" size={24} />
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold text-[10px] uppercase hover:bg-slate-200 transition-all">
                      <FaGithub size={18}/> GitHub Source
                    </a>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 bg-blue-600 text-white rounded-2xl font-bold text-[10px] uppercase hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all">
                      <FaExternalLinkAlt size={16}/> Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="w-full max-w-6xl mx-auto px-8 py-20 border-t border-slate-200/50 flex justify-center items-center">
        <p className="text-slate-400 text-[10px] font-mono tracking-[0.4em] uppercase font-bold text-center">© {new Date().getFullYear()} / TRUNG TIN PORTFOLIO</p>
      </footer>
    </div>
  );
}