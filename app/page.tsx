"use client"

// 不要なuseEffectとuseStateを完全に削除
import { Instagram, Twitter, Music2, MessageCircle } from "lucide-react"

// ナビゲーションの項目
const navItems = [
  'TOP',
  'PROFILE',
  'Q&A',
  'SCHEDULE',
  'SNS',
];

export default function HauruPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ===== トップセクション ===== */}
      <section id="top" className="relative flex flex-col items-center justify-center w-full h-screen bg-black text-white">
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
        <div className="flex flex-col items-center text-center">
          <div className="font-serif text-8xl transform -rotate-12">///</div>
          <h1 className="font-serif text-8xl tracking-[0.5em] mt-4">MONSTAR</h1>
        </div>
      </section>

      {/* ===== Profile Section ===== */}
      <section id="profile" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">PROFILE</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <img
                src="/images/design-mode/LINE_ALBUM_20251003_251005_14(1).jpg" // ★ここが一番大事なファイル名！
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

      {/* ===== Q&A Section ===== */}
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

      {/* ===== Schedule Section ===== */}
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

      {/* ===== SNS Section ===== */}
      <section id="sns" className="py-24 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">SNS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="#" className="group border-2 border-blue-400 rounded-lg p-8 text-center hover:bg-blue-400/10 transition-all"><Instagram className="w-16 h-16 text-blue-400 mx-auto mb-4" /><p className="text-xl font-bold">Instagram</p><p className="text-sm text-gray-400">@hauru_official</p></a>
            <a href="#" className="group border-2 border-blue-400 rounded-lg p-8 text-center hover:bg-blue-400/10 transition-all"><Music2 className="w-16 h-16 text-blue-400 mx-auto mb-4" /><p className="text-xl font-bold">TikTok</p><p className="text-sm text-gray-400">@hauru_tiktok</p></a>
            <a href="#" className="group border-2 border-blue-400 rounded-lg p-8 text-center hover:bg-blue-400/10 transition-all"><MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-4" /><p className="text-xl font-bold">LINE</p><p className="text-sm text-gray-400">友達追加はこちら</p></a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
