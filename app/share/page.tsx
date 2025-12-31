"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
// Import icons
import { 
  FaShareAlt, FaGoogleDrive, FaSearch, FaQuoteLeft, FaTimes, FaExternalLinkAlt
} from 'react-icons/fa';

const REPO_PATH = "/ttinportfolio";
const avatarPath = `${REPO_PATH}/images/avtt.jpg`;

// --- 1. ĐỊNH NGHĨA KIỂU DỮ LIỆU (INTERFACE) ---
// Bước quan trọng để TypeScript hiểu cấu trúc object, không báo lỗi đỏ
interface Resource {
  id: number;
  title: string;
  desc: string;
  advice: string;
  icon: React.ReactNode;
  tag: string;
  color: string;
  link: string;
}

export default function SharePage() {
  const [filter, setFilter] = useState('All');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // --- 2. FIX LỖI TYPESCRIPT Ở ĐÂY ---
  // Khai báo rõ ràng state này có thể là Resource HOẶC null
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const categories = ['All', 'English', 'Technical', 'Academic'];

  // --- DATA RESOURCES ---
  const resources: Resource[] = [
    {
      id: 1,
      title: "Kho Tài Liệu Tiếng Anh",
      desc: "Tổng hợp các giáo trình, tài liệu luyện thi và từ vựng tiếng Anh mình lưu trữ trên Google Drive.",
      advice: `Hello bạn ,thì đây là File sách cũng như là tài liệu Tiếng anh mà mình đã và đang học, mình muốn gửi đến các bạn nào đang cần .
      
      Trong kho này, mình không chỉ lưu sách, mình lưu lại hành trình học tiếng anh của mình. 
      
      Lời khuyên của mình: Thật sự tiếng anh rất rất quan trọng đối với tất cả mọi người.Hãy bắt đầu khi còn có thể vì chưa bao giờ là quá muộn nếu bạn thật sự cố gắng.
      Mình biết các cũng sẽ có nhiều bạn suy nghĩ giống mình ^.^ . Đây là những chia sẽ riêng của mình đến với những bạn yếu hoặc kém tiếng anh .

      Đây là lộ trình Ielts mà mình đang học .
      Đầu tiên :Học Phát âm (Trong file sẽ bao gồm sách pronunciation ) .Phần nãy sẽ giúp cho các bạn có thể hiểu rõ thế nào là nguyên âm và phụ âm căn bản trong tiếng anh,
      và giúp cho các bạn có thể phát âm chuẩn hơn. Khi mình đã phát âm chuẩn việc nghe nó cũng sẽ cải thiện lên rất nhiều vì à song song đó các bạn bổ sung cho mình vốn từ vựng nhé.
      Tiếp theo trong thư mục sẽ có một file sách tên là Cambridge English .Đây sẽ là file giúp cho bạn có thể cải thiện được phần Listening,Speaking,Reading,Writing.
      File này sẽ giúp cho bạn từ vựng cơ bản nhất theo các chủ đề,cũng như các bài nghe , nói ,đọc viết ,mình cũng sẽ upload lên những từ vựng chính trong các chủ đề 
      cũng như các podcard nghe theo từng bài. 
      Tiếp theo: Chúng ta sẽ đến phần Ngữ pháp (Grammar) .Ngữ pháp giúp xác định rõ thời gian, đối tượng và mối quan hệ giữa các ý. Sai ngữ pháp có thể thay đổi hoàn toàn ý nghĩa câu nói.
      Mình sẽ cập nhật và bổ sung những gì mình đang học......

      
      `,
      icon: <FaGoogleDrive />,
      tag: "English",
      color: "bg-green-600",
      link: "https://drive.google.com/drive/folders/1d_8KCi7oxtNUv8zuaUYgqXPO0S10MpM9?usp=sharing"
    },
    {
      id: 2,
      title: "Project Repository",
      desc: "Thư mục lưu trữ source code, tài liệu thiết kế và các dự án thực tế mình đã triển khai.",
      advice: `
      
      Đây là nơi mình lưu trữ các dự án tâm đắc nhất, bao gồm cả những dự án Java TCP/RMI hay các web app Next.js. Hy vọng source code của mình sẽ giúp bạn có thêm góc nhìn tham khảo khi gặp bug hoặc bí ý tưởng.
      
      `,
      icon: <FaGoogleDrive />, 
      tag: "Technical",
      color: "bg-blue-700",
      link: "https://drive.google.com/drive/folders/1scD5MySZ4w0CH5fKT_L6peivVEly1jfG?usp=sharing"
    },
    {
      id: 3,
      title: "Tài Liệu Bổ Sung",
      desc: "Thư mục tài liệu tham khảo mở rộng được lưu trữ trên Google Drive.",
      advice: `
      
      Folder này chứa các bài học cũng như tài liệu về C++, các clip học tổng hợp về Java,...`,
      icon: <FaGoogleDrive />,
      tag: "Academic",
      color: "bg-indigo-600",
      link: "https://drive.google.com/drive/folders/1LiLNNVSJyDmlkzJ5Megd9YVwOTbwRaFM"
    }
  ];

  const filteredResources = filter === 'All' 
    ? resources 
    : resources.filter(item => item.tag === filter);

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden relative">
      
      {/* --- MODAL PROFILE --- */}
      <AnimatePresence>
        {isProfileOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsProfileOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
            />
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 5 }}
              className="relative w-full max-w-sm aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <Image src={avatarPath} alt="Profile" fill className="object-cover" unoptimized />
              <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center">✕</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL RESOURCE DETAIL (POPUP CHIA SẺ) --- */}
      <AnimatePresence>
        {selectedResource && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            {/* Backdrop tối màu */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedResource(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Nội dung Modal */}
            <motion.div 
              layoutId={`card-${selectedResource.id}`} 
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl z-20 flex flex-col max-h-[90vh]"
            >
              {/* Header Modal */}
              <div className={`${selectedResource.color} p-8 text-white relative overflow-hidden shrink-0`}>
                <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
                   <div className="text-[10rem] leading-none">{selectedResource.icon}</div>
                </div>
                <button 
                  onClick={() => setSelectedResource(null)}
                  className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors z-30"
                >
                  <FaTimes size={20} />
                </button>
                <div className="relative z-10">
                   <span className="inline-block px-3 py-1 bg-white/20 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">
                      {selectedResource.tag}
                   </span>
                   <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-2 pr-8">
                     {selectedResource.title}
                   </h2>
                </div>
              </div>

              {/* Body Modal: Phần chia sẻ */}
              <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
                <div className="mb-8">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                    <FaQuoteLeft className="text-purple-500"/> Lời nhắn nhủ
                  </h4>
                  <div className="prose prose-lg text-slate-600 font-light leading-relaxed whitespace-pre-line text-sm md:text-base">
                    {/* Hiển thị nội dung advice */}
                    {selectedResource.advice}
                  </div>
                </div>

                {/* Nút hành động */}
                <div className="pt-8 border-t border-slate-100 flex flex-wrap justify-end gap-4">
                   <button 
                     onClick={() => setSelectedResource(null)}
                     className="px-6 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 transition-colors"
                   >
                     Đóng
                   </button>
                   <a 
                     href={selectedResource.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`${selectedResource.color} text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2`}
                   >
                     Truy cập Kho Tài Liệu <FaExternalLinkAlt size={12}/>
                   </a>
                </div>
              </div>
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
                layoutId={`card-${item.id}`} // Animation link với Modal
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                // Khi click -> Set resource đang chọn -> Mở Modal
                onClick={() => setSelectedResource(item)}
                className="group cursor-pointer relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-100/40 hover:shadow-purple-200/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
              >
                <div>
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-800 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t border-slate-50 mt-auto">
                  <span className="text-[9px] font-black text-purple-600 uppercase tracking-widest px-3 py-1 bg-purple-50 rounded-lg">
                    {item.tag}
                  </span>
                  {/* Nút giả để gợi ý click */}
                  <div className="text-slate-400 group-hover:text-purple-600 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors">
                    Chi tiết & Link <FaShareAlt size={10} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* INSPIRATION QUOTE */}
        <section data-aos="zoom-in" className="mt-32 relative py-20 px-10 rounded-[4rem] text-center overflow-hidden border-2 border-dashed border-slate-200">
            <div className="max-w-3xl mx-auto space-y-6">
              <FaQuoteLeft className="text-4xl mx-auto text-yellow-500 animate-pulse" />
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