"use client"

import { useEffect, useState } from "react"
// lucide-reactから、使いたいアイコンを追加でインポートしよう
import { Instagram, Music2, MessageCircle, Twitter, Home } from "lucide-react"
import Image from "next/image" // Next.jsで画像を表示するためのお作法

// ヘッダーに表示するナビゲーションの項目
const navItems = [
  'TOPPAGE',
  'PROFILE',
  'SCHEDULE',
  'SNS',
  'RECRUIT',
];

export default function HauruPortfolio() {
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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ===== トップセクション (ここからが大幅な変更箇所！) ===== */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen bg-black text-white overflow-hidden">
        {/* --- ヘッダーナビゲーション --- */}
        <header className="absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
            {/* 左上のロゴ */}
            <div className="flex items-center space-x-4">
              {/* ロゴ画像をpublicフォルダに置く想定 */}
              {/* <Image src="/all-group-logo.svg" alt="ALL GROUP Logo" width={160} height={40} /> */}
              <p className="text-xl font-bold tracking-widest">ALL GROUP</p>
            </div>
            {/* ナビゲーションリンク */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm tracking-wider uppercase hover:text-blue-400 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            {/* 右上のSNSアイコン */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </header>

        {/* --- 中央のMONSTARロゴ --- */}
        <div className="z-0 flex flex-col items-center text-center">
          {/* MONSTARの爪痕みたいなロゴをテキストで表現 */}
          <div className="font-serif text-8xl transform -rotate-12">///</div>
          {/* MONSTARの文字ロゴ */}
          <h1 className="font-serif text-8xl tracking-[0.5em] mt-4">MONSTAR</h1>
        </div>
      </section>

      {/* ===== Profile Section (青色に統一 & 誕生日を更新) ===== */}
      <section id="profile" className="min-h-screen py-20 px-4 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">PROFILE</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* 画像パスは自分の環境に合わせてね */}
              <img
                src="/LINE_ALBUM_20251003_251005_14.jpg"
                alt="はうる"
                className="w-full rounded-lg"
              />
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/LINE_ALBUM_20251003_251005_7.jpg"
                  alt="はうる 2"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <img
                  src="/LINE_ALBUM_20251003_251005_6.jpg"
                  alt="はうる 3"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <img
                  src="/LINE_ALBUM_20251003_251005_10.jpg"
                  alt="はうる 4"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-6 text-lg">
              <div className="border-l-2 border-blue-400 pl-6">
                <p className="text-gray-400 mb-2">名前</p>
                <p className="text-2xl font-bold">はうる</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <p className="text-gray-400 mb-2">所属</p>
                <p className="text-2xl font-bold">MONSTAR -xeno-</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <p className="text-gray-400 mb-2">誕生日</p>
                <p className="text-2xl font-bold">8月21日</p> {/* ←更新したよ！ */}
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <p className="text-gray-400 mb-2">血液型</p>
                <p className="text-2xl font-bold">A型</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <p className="text-gray-400 mb-2">趣味</p>
                <p className="text-2xl font-bold">音楽鑑賞、ゲーム</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Q&A Section (青色に統一) ===== */}
      <section id="qa" className="min-h-screen py-20 px-4 fade-in-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">Q&A</h2>
          <div className="space-y-8">
            {[
              { q: "ホストを始めたきっかけは？", a: "人と話すことが好きで、お客様を笑顔にできる仕事がしたいと思ったからです。" },
              { q: "得意なことは何ですか？", a: "お客様の話をじっくり聞いて、楽しい時間を作ることです。" },
              { q: "好きな食べ物は？", a: "焼肉とお寿司が大好きです！" },
              { q: "お客様へのメッセージ", a: "いつも応援ありがとうございます。一緒に楽しい時間を過ごしましょう！" },
            ].map((item, index) => (
              <div key={index} className="border-l-2 border-blue-400 pl-6 py-4">
                <p className="text-blue-400 font-bold text-xl mb-3">Q. {item.q}</p>
                <p className="text-white text-lg pl-4">A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Schedule Section (青色に統一) ===== */}
      <section id="schedule" className="min-h-screen py-20 px-4 fade-in-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">SCHEDULE</h2>
          <div className="border-2 border-gray-800 rounded-lg p-8">
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-gray-400 text-xl">スケジュールカレンダー</p>
                <p className="text-sm text-gray-500">画像をアップロードしてください</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SNS Section (青色に統一) ===== */}
      <section id="sns" className="min-h-screen py-20 px-4 fade-in-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">SNS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="#" className="group border-2 border-blue-400 rounded-lg p-8 hover:bg-blue-400/10 transition-all">
              <div className="flex flex-col items-center space-y-4">
                <Instagram className="w-16 h-16 text-blue-400" />
                <p className="text-xl font-bold">Instagram</p>
                <p className="text-sm text-gray-400">@hauru_official</p>
              </div>
            </a>
            <a href="#" className="group border-2 border-blue-400 rounded-lg p-8 hover:bg-blue-400/10 transition-all">
              <div className="flex flex-col items-center space-y-4">
                <Music2 className="w-16 h-16 text-blue-400" />
                <p className="text-xl font-bold">TikTok</p>
                <p className="text-sm text-gray-400">@hauru_tiktok</p>
              </div>
            </a>
            <a href="#" className="group border-2 border-blue-400 rounded-lg p-8 hover:bg-blue-400/10 transition-all">
              <div className="flex flex-col items-center space-y-4">
                <MessageCircle className="w-16 h-16 text-blue-400" />
                <p className="text-xl font-bold">LINE</p>
                <p className="text-sm text-gray-400">友達追加はこちら</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== Footer (青色に統一 & デザイン調整) ===== */}
      <footer className="py-16 px-4 border-t border-gray-800 fade-in-section">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* <div className="w-32 h-32 mx-auto bg-gray-900 rounded-full flex items-center justify-center border-2 border-blue-400">
            <div className="text-4xl font-bold">MX</div>
          </div> */}
          <h3 className="text-3xl font-bold">MONSTAR -xeno-</h3>
          <div className="space-y-2 text-gray-400">
            <p>大阪府大阪市中央区東心斎橋２丁目５−１１ リップル宗右衛門町 B1F</p>
            <p>TEL: 06-4256-4240</p>
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
