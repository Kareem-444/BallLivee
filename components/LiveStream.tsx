"use client";

import { useRef, useState, useEffect } from 'react';
import { 
  Maximize, Minimize, RotateCcw, Shield, ShieldOff
} from 'lucide-react';

export default function ProtectedLiveStreamPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [clickProtection, setClickProtection] = useState(true);

  // Stream URL
  const streamUrl = "https://br.yalla-shoot-llive.com/albaplayer/sports-c3/";

  // Auto-hide controls
  useEffect(() => {
    if (showControls) {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [showControls]);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if ('webkitRequestFullscreen' in container) {
          const webkitContainer = container as HTMLDivElement & {
            webkitRequestFullscreen: () => Promise<void>;
          };
          await webkitContainer.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ('webkitExitFullscreen' in document) {
          const webkitDocument = document as Document & {
            webkitExitFullscreen: () => Promise<void>;
          };
          await webkitDocument.webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.error('Error toggling fullscreen:', err);
    }
  };

  const handleReload = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    iframe.src = iframe.src;
  };

  const handleContainerInteraction = () => {
    setShowControls(true);
  };

  const toggleClickProtection = () => {
    setClickProtection(!clickProtection);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden select-none"
      onMouseMove={handleContainerInteraction}
      onTouchStart={handleContainerInteraction}
    >
      {/* Stream Player */}
      <iframe
        ref={iframeRef}
        src={streamUrl}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        title="Live Stream"
      />

      {/* Click Protection Overlay */}
      {clickProtection && (
        <div 
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handleContainerInteraction}
        />
      )}

      {/* Controls Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/80 transition-opacity duration-300 z-20 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ pointerEvents: showControls ? 'auto' : 'none' }}
      >
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div className="bg-red-600 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 shadow-lg shadow-red-500/30">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-xs sm:text-sm font-bold">بث مباشر</span>
            </div>
            <div className="bg-black/80 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 border border-slate-700/50 shadow-lg">
              <span className="text-white text-xs sm:text-sm font-bold">Ball Live</span>
            </div>
          </div>
        </div>

        {/* Click Protection Notice */}
        {clickProtection && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30">
            <div className="bg-emerald-600/90 backdrop-blur-xl rounded-lg px-4 py-2 flex items-center gap-2 shadow-lg animate-fade-in">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white text-xs sm:text-sm font-bold">حماية النقرات مفعلة</span>
            </div>
          </div>
        )}

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
          <div className="bg-black/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-slate-700/50 shadow-2xl">
            {/* Progress Bar - Live Indicator */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="flex-1 h-1.5 sm:h-2 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/30">
                <div className="h-full bg-gradient-to-r from-red-600 via-red-500 to-emerald-500 w-full animate-pulse"></div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-red-600/20 border border-red-500/40 rounded-lg px-2 py-1 sm:px-3 sm:py-1.5">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-300 text-xs sm:text-sm font-bold">LIVE</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between gap-2 sm:gap-3">
              {/* Left Controls */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                {/* Reload */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReload();
                  }}
                  className="text-white hover:text-emerald-400 transition-all hover:scale-110 p-1.5 sm:p-2 rounded-lg hover:bg-white/10"
                  aria-label="إعادة تحميل"
                  title="إعادة تحميل البث"
                >
                  <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </button>

                {/* Click Protection Toggle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleClickProtection();
                  }}
                  className={`transition-all hover:scale-110 p-1.5 sm:p-2 rounded-lg ${
                    clickProtection 
                      ? 'text-emerald-400 hover:text-emerald-300 bg-emerald-500/10' 
                      : 'text-slate-400 hover:text-slate-300 hover:bg-white/10'
                  }`}
                  aria-label={clickProtection ? "تعطيل الحماية" : "تفعيل الحماية"}
                  title={clickProtection ? "تعطيل حماية النقرات" : "تفعيل حماية النقرات"}
                >
                  {clickProtection ? (
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  ) : (
                    <ShieldOff className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  )}
                </button>

                {/* Info Text */}
                <div className="hidden md:block bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-2">
                  <span className="text-slate-300 text-xs">
                    {clickProtection ? "محمي من الإعلانات" : "يمكن النقر على البث"}
                  </span>
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFullscreen();
                  }}
                  className="text-white hover:text-emerald-400 transition-all hover:scale-110 p-1.5 sm:p-2 rounded-lg hover:bg-white/10"
                  aria-label={isFullscreen ? "الخروج من ملء الشاشة" : "ملء الشاشة"}
                  title={isFullscreen ? "الخروج من ملء الشاشة" : "ملء الشاشة"}
                >
                  {isFullscreen ? (
                    <Minimize className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  ) : (
                    <Maximize className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Info */}
          <div className="md:hidden mt-3">
            <div className="bg-black/95 backdrop-blur-xl rounded-xl p-3 border border-slate-700/50 text-center">
              <span className="text-slate-300 text-xs">
                {clickProtection ? "🛡️ الحماية من الإعلانات مفعلة" : "⚠️ يمكن النقر على البث"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}