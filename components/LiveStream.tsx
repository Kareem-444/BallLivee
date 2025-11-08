"use client";

import React, { useEffect, useState } from "react";

const ProtectedLiveStream: React.FC = () => {
  const [allowControl, setAllowControl] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // نتأكد إن الكود يعمل فقط على المتصفح (client side)
    if (typeof window !== "undefined") {
      const ua: string = navigator.userAgent || "";
      const mobileDetected: boolean = /iPhone|iPad|iPod|Android|Mobile/i.test(ua);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMobile(mobileDetected);
    }
  }, []);

  const handleAllowSound = (): void => {
    setAllowControl(true);
    // نغلق الطبقة الواقية بعد 5 ثوانٍ
    setTimeout(() => setAllowControl(false), 5000);
  };

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col justify-center items-center p-2 sm:p-4">
      <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        <iframe
          src="https://br.yalla-shoot-llive.com/albaplayer/sports-c3/"
          title="Live Stream"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          frameBorder="0"
        ></iframe>

        {/* الطبقة الواقية */}
        {!allowControl && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-transparent cursor-not-allowed z-10"
            aria-hidden="true"
          />
        )}
      </div>

      <button
        onClick={handleAllowSound}
        className="mt-6 bg-green-600 hover:bg-green-700 active:scale-95 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition text-base sm:text-lg"
      >
        🎧 رفع الصوت
      </button>

      <p className="text-gray-400 mt-2 text-sm text-center px-4">
        {isMobile
          ? "📱 اضغط على الزر ثم ارفع الصوت من الفيديو خلال 5 ثوانٍ (على هاتفك)"
          : "💻 اضغط على الزر ثم ارفع الصوت من الفيديو خلال 5 ثوانٍ"}
      </p>
    </div>
  );
};

export default ProtectedLiveStream;