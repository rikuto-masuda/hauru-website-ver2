"use client"

// 必要なアイコンだけをインポート
import { Instagram, Twitter, Music2, MessageCircle } from "lucide-react"
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
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ===== トップセクション (新デザイン) ===== */}
      {/* ===== トップセクション (スマホ対応版) ===== */}
      <section id="top" className="relative flex flex-col items-center justify-center w-full h-screen bg-black text-white overflow-hidden">
        <header className="absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
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

            {/* ===== ここからがスマホ用のハンバーガーメニュー (PCでは隠れる) ===== */}
            <div className="md:hidden">
              {/* ここにハンバーガーボタンを後で追加するよ！ */}
            </div>
            {/* =============================================================== */}

          </div>
        </header>
        {/* ↓↓↓ ここの文字サイズ指定を賢くしたよ！ ↓↓↓ */}
        <div className="z-0 flex flex-col items-center text-center px-4">
          <div className="font-serif text-6xl md:text-8xl transform -rotate-12">///</div>
          <h1 className="font-serif text-6xl md:text-8xl tracking-widest md:tracking-[0.5em] mt-4">MONSTAR</h1>
        </div>
      </section>

      {/* ===== Profile Section (レイアウト修正 & 青色統一 & 誕生日更新) ===== */}
      <section id="profile" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">PROFILE</h2>
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

      {/* ===== Q&A Section (青色統一) ===== */}
      <section id="q&a" className="py-24 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">Q&A</h2>
          <div className="space-y-8">
            {[ { q: "ホストを始めたきっかけは？", a: "人と話すことが好きで、お客様を笑顔にできる仕事がしたいと思ったからです。" }, { q: "得意なことは何ですか？", a: "お客様の話をじっくり聞いて、楽しい時間を作ることです。" }, { q: "好きな食べ物は？", a: "焼肉とお寿司が大好きです！" }, { q: "お客様へのメッセージ", a: "いつも応援ありがとうございます。一緒に楽しい時間を過ごしましょう！" }, ].map((item, index) => (
              <div key={index} className="border-l-2 border-blue-400 pl-6 py-4"><p className="text-blue-400 font-bold text-xl mb-3">Q. {item.q}</p><p className="text-white text-lg pl-4">A. {item.a}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Schedule Section (青色統一) ===== */}
      <section id="schedule" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">SCHEDULE</h2>
          <div className="border-2 border-gray-800 rounded-lg p-8">
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4"><p className="text-gray-400 text-xl">スケジュールカレンダー</p><p className="text-sm text-gray-500">画像をアップロードしてください</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SNS Section (青色統一) ===== */}
      <section id="sns" className="py-24 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">SNS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://www.instagram.com/showtime_howl?igsh=MTdsOG8xZTVpYXI5Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group border-2 border-blue-400 rounded-lg p-8 text-center hover:bg-blue-400/10 transition-all"><Instagram className="w-16 h-16 text-blue-400 mx-auto mb-4" /><p className="text-xl font-bold">Instagram</p></a>
            <a href="https://www.tiktok.com/@tankyusha?_t=ZS-90EcmFAtzCZ&_r=1" target="_blank" rel="noopener noreferrer" className="group border-2 border-blue-400 rounded-lg p-8 text-center hover:bg-blue-400/10 transition-all"><Music2 className="w-16 h-16 text-blue-400 mx-auto mb-4" /><p className="text-xl font-bold">TikTok</p></a>
            <a href="https://line.me/ti/p/7qTM6wsieQ" target="_blank" rel="noopener noreferrer" className="group border-2 border-blue-400 rounded-lg p-8 text-center hover:bg-blue-400/10 transition-all"><MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-4" /><p className="text-xl font-bold">LINE</p></a>
          </div>
        </div>
      </section>

      {/* ===== Footer (お店情報) ===== */}
      <footer className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-bold">MONSTAR -xeno-</h3>
          <div className="space-y-2 text-gray-400">
      _host       <p>大阪府大阪市中央区東心斎橋２丁目６−１３ 日宝ナイトビル 4F</p>
            <p>TEL: 06-6575-7097</p>
            <p>営業時間: 20:00～LAST</p>
          </div>
          <div className="pt-8 text-sm text-gray-600">
            <p>&copy; 2025 Hauru Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
