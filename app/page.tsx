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
      {/* ... 以降のQ&Aなどのセクションも元のまま ... */}
    </div>
  )
}
