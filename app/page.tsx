"use client"

// "useState"は今回不要になったので削除したよ
import { useEffect } from "react" 
import { Instagram, Twitter, Music2, MessageCircle } from "lucide-react"
import Image from "next/image"

const navItems = [
  'TOPPAGE',
  'PROFILE',
  'SCHEDULE',
  'SNS',
  'RECRUIT',
];

export default function HauruPortfolio() {
  
  // =======================================================
  // ★★★ エラーの原因と思われる部分を一旦コメントアウト！ ★★★
  // =======================================================
  /*
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll(".fade-in-section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])
  */
  // =======================================================

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ===== トップセクション ===== */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen bg-black text-white overflow-hidden">
        <header className="absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
            <div className="flex items-center space-x-4">
              <p className="text-xl font-bold tracking-widest">ALL GROUP</p>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm tracking-wider uppercase hover:text-blue-400 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </header>

        <div className="z-0 flex flex-col items-center text-center">
          <div className="font-serif text-8xl transform -rotate-12">///</div>
          <h1 className="font-serif text-8xl tracking-[0.5em] mt-4">MONSTAR</h1>
        </div>
      </section>

      {/* ===== Profile Section ===== */}
      {/* fade-in-sectionのクラス名も一旦外しておくね */}
      <section id="profile" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">PROFILE</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <img
                src="/images/design-mode/LINE_ALBUM_20251003_251005_14(1).jpg"
                alt="はうる"
                className="w-full rounded-lg"
              />
              <div className="grid grid-cols-3 gap-4">
                <img src="/images/design-mode/LINE_ALBUM_20251003_251005_7.jpg" alt="はうる 2" className="w-full aspect-square object-cover rounded-lg" />
                <img src="/images/design-mode/LINE_ALBUM_20251003_251005_6.jpg" alt="はうる 3" className="w-full aspect-square object-cover rounded-lg" />
                <img src="/images/design-mode/LINE_ALBUM_20251003_251005_10.jpg" alt="はうる 4" className="w-full aspect-square object-cover rounded-lg" />
              </div>
            </div>
            <div className="space-y-6 text-lg">
              <div className="border-l-2 border-blue-400 pl-6"><p className="text-gray-400 mb-2">名前</p><p className="text-2xl font-bold">はうる</p></div>
              <div className="border-l-2 border-blue-400 pl-6"><p className="text-gray-400 mb-2">所属</p><p className="text-2xl font-bold">MONSTAR -xeno-</p></div>
              <div className="border-l-2 border-blue-400 pl-6"><p className="text-gray-400 mb-2">誕生日</p><p className="text-2xl font-bold">8月21日</p></div>
              <div className="border-l-2 border-blue-400 pl-6"><p className="text-gray-400 mb-2">血液型</p><p className="text-2xl font-bold">A型</p></div>
              <div className="border-l-2 border-blue-400 pl-6"><p className="text-gray-400 mb-2">趣味</p><p className="text-2xl font-bold">音楽鑑賞、ゲーム</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 以下、他のセクションも同様にfade-in-sectionを外しておく */}
      <section id="qa" className="min-h-screen py-20 px-4">
        {/* ... Q&Aの中身は変更なし ... */}
      </section>
      <section id="schedule" className="min-h-screen py-20 px-4">
        {/* ... Scheduleの中身は変更なし ... */}
      </section>
      <section id="sns" className="min-h-screen py-20 px-4">
        {/* ... SNSの中身は変更なし ... */}
      </section>
      <footer className="py-16 px-4 border-t border-gray-800">
        {/* ... Footerの中身は変更なし ... */}
      </footer>
    </div>
  )
}
