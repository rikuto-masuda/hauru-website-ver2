{/* ===== Profile Section (ファイル名を最終修正！) ===== */}
      <section id="profile" className="min-h-screen py-20 px-4 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">PROFILE</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* メインの画像ファイル名を(1)付きに修正！ */}
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
              <div className="border-l-2 border-blue-400 pl-6">
                <p className="text-gray-400 mb-2">所属</p>
                <p className="text-2xl font-bold">MONSTAR -xeno-</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <p className="text-gray-400 mb-2">誕生日</p>
                <p className="text-2xl font-bold">8月21日</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <p className="text-gray-400 mb-2">血液型</p>
    _host              <p className="text-2xl font-bold">A型</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-6">
                <p className="text-gray-400 mb-2">趣味</p>
                <p className="text-2xl font-bold">音楽鑑賞、ゲーム</p>
              </div>
            </div>
          </div>
        </div>
      </section>
