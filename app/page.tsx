"use client"

import { useEffect, useState } from "react"
import { Instagram, Music2, MessageCircle } from "lucide-react"

export default function HauruPortfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

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
      {/* Top Section - Logo and Name */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="text-center space-y-8">
          <div className="w-48 h-48 mx-auto bg-gray-900 rounded-full flex items-center justify-center border-2 border-pink-500">
            <div className="text-6xl font-bold">MX</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
            MONSTAR <span className="text-blue-500">-xeno-</span>
          </h1>
          <p className="text-2xl md:text-3xl text-blue-400">はうる</p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="min-h-screen py-20 px-4 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-pink-500">PROFILE</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <img
                src="/images/design-mode/LINE_ALBUM_20251003_251005_14(1).jpg"
                alt="はうる"
                className="w-full rounded-lg"
              />
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/images/design-mode/LINE_ALBUM_20251003_251005_7.jpg"
                  alt="はうる 2"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <img
                  src="/images/design-mode/LINE_ALBUM_20251003_251005_6.jpg"
                  alt="はうる 3"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <img
                  src="/images/design-mode/LINE_ALBUM_20251003_251005_10.jpg"
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
              <div className="border-l-2 border-pink-500 pl-6">
                <p className="text-gray-400 mb-2">所属</p>
                <p className="text-2xl font-bold">MONSTAR -xeno-</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <p className="text-gray-400 mb-2">誕生日</p>
                <p className="text-2xl font-bold">12月25日</p>
              </div>
              <div className="border-l-2 border-pink-500 pl-6">
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

      {/* Q&A Section */}
      <section className="min-h-screen py-20 px-4 fade-in-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">Q&A</h2>
          <div className="space-y-8">
            {[
              {
                q: "ホストを始めたきっかけは？",
                a: "人と話すことが好きで、お客様を笑顔にできる仕事がしたいと思ったからです。",
              },
              {
                q: "得意なことは何ですか？",
                a: "お客様の話をじっくり聞いて、楽しい時間を作ることです。",
              },
              {
                q: "好きな食べ物は？",
                a: "焼肉とお寿司が大好きです！",
              },
              {
                q: "お客様へのメッセージ",
                a: "いつも応援ありがとうございます。一緒に楽しい時間を過ごしましょう！",
              },
            ].map((item, index) => (
              <div key={index} className="border-l-2 border-blue-400 pl-6 py-4">
                <p className="text-blue-400 font-bold text-xl mb-3">Q. {item.q}</p>
                <p className="text-white text-lg pl-4">A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="min-h-screen py-20 px-4 fade-in-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-pink-500">SCHEDULE</h2>
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

      {/* SNS Section */}
      <section className="min-h-screen py-20 px-4 fade-in-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">SNS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="#" className="group border-2 border-pink-500 rounded-lg p-8 hover:bg-pink-500/10 transition-all">
              <div className="flex flex-col items-center space-y-4">
                <Instagram className="w-16 h-16 text-pink-500" />
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
            <a href="#" className="group border-2 border-green-500 rounded-lg p-8 hover:bg-green-500/10 transition-all">
              <div className="flex flex-col items-center space-y-4">
                <MessageCircle className="w-16 h-16 text-green-500" />
                <p className="text-xl font-bold">LINE</p>
                <p className="text-sm text-gray-400">友達追加はこちら</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Store Info */}
      <footer className="py-16 px-4 border-t border-gray-800 fade-in-section">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-32 h-32 mx-auto bg-gray-900 rounded-full flex items-center justify-center border-2 border-pink-500">
            <div className="text-4xl font-bold">MX</div>
          </div>
          <h3 className="text-3xl font-bold">MONSTAR -xeno-</h3>
          <div className="space-y-2 text-gray-400">
            <p>〒123-4567</p>
            <p>東京都渋谷区○○○ 1-2-3</p>
            <p>TEL: 03-1234-5678</p>
            <p>営業時間: 20:00 - 5:00</p>
          </div>
          <div className="pt-8 text-sm text-gray-600">
            <p>&copy; 2025 MONSTAR -xeno-. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
