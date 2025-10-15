"use client"

// 必要なアイコン(Menu, X)と、useStateを追加
import { Instagram, Twitter, Music2, MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"

// ヘッダーに表示するナビゲーションの項目
const navItems = [
  'TOP',
  'PROFILE',
  'Q&A',
  'SCHEDULE',
  'SNS',
];

export default function HauruPortfolio() {
  // ハンバーガーメニューの「開閉スイッチ」を準備
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ===== トップセクション (スマホ対応版) ===== */}
      <section id="top" className="relative flex flex-col items-center justify-center w-full h-screen bg-black text-white overflow-hidden">
        <header className="absolute top-0 left-0 right-0 z-10">
          {/* 安定版の余白(px-4) */}
          <div className="container mx-auto flex justify-between items-center px-4 py-4">
            {/* 左上の"ALL GROUP" */}
            <div className="flex items-center space-x-4">
              <p className="text-xl font-bold tracking-widest">ALL GROUP</p>
            </div>

            {/* PC用のナビゲーション (スマホでは隠れる) */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm tracking-wider uppercase hover:text-blue-400 transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            {/* PC用のSNSアイコン (スマホでは隠れる) */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://www.instagram.com/showtime_howl?igsh=MTdsOG8xZTVpYXI5Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>

            {/* ===== スマホ用のハンバーガーボタン (PCでは隠れる) ===== */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* ===== スマホ用のメニュー画面 (開閉スイッチがONの時だけ表示) ===== */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center">
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-4">
                <X className="w-8 h-8" />
              </button>
              <nav className="flex flex-col items-center space-y-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl tracking-wider uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>
        {/* 中央のMONSTARロゴ */}
        <div className="z-0 flex flex-col items-center text-center px-4">
          <div className="font-serif text-6xl md:text-8xl transform -rotate-12">///</div>
          <h1 className="font-serif text-6xl md:text-8xl tracking-widest md:tracking-[0.5em] mt-4">MONSTAR</h1>
        </div>
      </section>

      {/* ===== Profile Section ===== */}
      <section id="profile" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">PROFILE</h2>
          {/* ★★★ここがPCで2列にするための魔法の言葉！★★★ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* === 左カラム (写真全部) === */}
            <div className="space-y-6">
              <img src="/images/design-mode/LINE_ALBUM_20251003_251005_14(1).jpg" alt="はうる" className="w-full rounded-lg shadow-lg" />
              <div className="grid grid-cols-3 gap-4">
                <img src="/images/design-mode/LINE_ALBUM_20251003_251005_7.jpg" alt="はうる 2" className="w-full aspect-square object-cover rounded-lg" />
                <img src="/images/design-mode/LINE_ALBUM_20251003_251005_6.jpg" alt="はうる 3" className="w-full aspect-square object-cover rounded-lg" />
                <img src="/images/design-mode/LINE_ALBUM_20251003_251005_10.jpg" alt="はうる 4" className="w-full aspect-square object-cover rounded-lg" />
              </div>
            </div>
            {/* === 右カラム (テキスト情報) === */}
            <div className="space-y-8 text-lg md:mt-0 mt-8">
              <div className="border-l-4 border-blue-400 pl-6"><p className="text-gray-400 mb-1 text-sm">名前</p><p className="text-2xl font-bold">はうる</p></div>
              <div className="border-l-4 border-blue-400 pl-6"><p className="text-gray-400 mb-1 text-sm">所属</p><p className="text-2xl font-bold">MONSTAR -xeno-</p></div>
              <div className="border-l-4 border-blue-400 pl-6"><p className="text-gray-400 mb-1 text-sm">誕生日</p><p className="text-2xl font-bold">8月21日</p></div>
              <div className="border-l-4 border-blue-400 pl-6"><p className="text-gray-400 mb-1 text-sm">血液型</p><p className="text-2xl font-bold">B型</p></div>
              <div className="border-l-4 border-blue-400 pl-6"><p className="text-gray-400 mb-1 text-sm">趣味</p><p className="text-2xl font-bold">音楽鑑賞、ゲーム</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ... (Q&A以下のセクションは変更なし) ... */}

    </div>
  )
}
