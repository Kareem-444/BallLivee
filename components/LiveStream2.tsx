"use client";

import { useRef, useState, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw, Loader2
} from 'lucide-react';

export default function ProfessionalLiveStreamPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentQuality, setCurrentQuality] = useState<string>('auto');

  // Stream URL - يمكنك تغييره لأي رابط بث
  const streamUrl = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

  // Alternative test streams you can use:
  // const streamUrl = "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8";
  // const streamUrl = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

  // Quality options for HLS streams
  const qualityOptions = [
    { label: 'تلقائي', value: 'auto' },
    { label: '1080p', value: '1080' },
    { label: '720p', value: '720' },
    { label: '480p', value: '480' },
    { label: '360p', value: '360' }
  ];

  // Auto-hide controls
  useEffect(() => {
    if (showControls && isPlaying) {
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
  }, [showControls, isPlaying]);

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

  // Initialize video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = volume / 100;
    video.muted = isMuted;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => {
      setIsLoading(false);
      setHasError(false);
    };
    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [volume, isMuted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(err => {
        console.error('Error playing video:', err);
        setHasError(true);
      });
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const newMutedState = !isMuted;
    video.muted = newMutedState;
    setIsMuted(newMutedState);
    
    if (newMutedState) {
      setVolume(0);
    } else {
      const newVolume = volume === 0 ? 80 : volume;
      setVolume(newVolume);
      video.volume = newVolume / 100;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    video.volume = newVolume / 100;
    setIsMuted(newVolume === 0);
    video.muted = newVolume === 0;
  };

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
    const video = videoRef.current;
    if (!video) return;

    setIsLoading(true);
    setHasError(false);
    video.load();
    video.play().catch(err => {
      console.error('Error playing after reload:', err);
      setHasError(true);
    });
  };

  const handleContainerInteraction = () => {
    setShowControls(true);
  };

  const changeQuality = (quality: string) => {
    setCurrentQuality(quality);
    // في حالة استخدام HLS.js يمكنك تغيير الجودة هنا
    // لكن للبساطة، سنعيد تحميل الفيديو
    handleReload();
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden select-none"
      onClick={handleContainerInteraction}
      onMouseMove={handleContainerInteraction}
      onTouchStart={handleContainerInteraction}
    >
      {/* Video Player */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain"
        playsInline
        autoPlay
        preload="auto"
        crossOrigin="anonymous"
      >
        <source src={streamUrl} type="application/x-mpegURL" />
        <source src={streamUrl} type="video/mp4" />
        المتصفح لا يدعم تشغيل الفيديو
      </video>

      {/* Loading Overlay */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-30">
          <div className="text-center">
            <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-500 animate-spin mx-auto mb-4" />
            <p className="text-white text-sm sm:text-base font-medium">جاري تحميل البث...</p>
          </div>
        </div>
      )}

      {/* Error Overlay */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-30">
          <div className="text-center px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/30 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
              </div>
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2">فشل تحميل البث</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6">تأكد من صحة رابط البث أو اتصالك بالإنترنت</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleReload();
              }}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-5 h-5" />
              <span>إعادة المحاولة</span>
            </button>
          </div>
        </div>
      )}

      {/* Controls Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/80 transition-opacity duration-300 z-20 ${
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

        {/* Center Play Button (when paused) */}
        {!isPlaying && !isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl shadow-emerald-500/50"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" />
            </button>
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
                {/* Play/Pause */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="text-white hover:text-emerald-400 transition-all hover:scale-110 p-1.5 sm:p-2 rounded-lg hover:bg-white/10"
                  aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  ) : (
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" />
                  )}
                </button>

                {/* Reload */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReload();
                  }}
                  className="text-white hover:text-emerald-400 transition-all hover:scale-110 p-1.5 sm:p-2 rounded-lg hover:bg-white/10"
                  aria-label="إعادة تحميل"
                >
                  <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                {/* Volume Controls */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="text-white hover:text-emerald-400 transition-all hover:scale-110 p-1.5 sm:p-2 rounded-lg hover:bg-white/10"
                    aria-label={isMuted ? "إلغاء كتم الصوت" : "كتم الصوت"}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    ) : (
                      <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    )}
                  </button>
                  
                  {/* Volume Slider */}
                  <div className="hidden sm:flex items-center gap-2 md:gap-3 bg-slate-800/60 border border-slate-700/40 rounded-lg px-3 py-1.5 md:px-4 md:py-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={handleVolumeChange}
                      onClick={(e) => e.stopPropagation()}
                      className="w-16 md:w-24 h-1.5 md:h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer 
                        [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:w-3 
                        [&::-webkit-slider-thumb]:h-3 
                        md:[&::-webkit-slider-thumb]:w-4 
                        md:[&::-webkit-slider-thumb]:h-4 
                        [&::-webkit-slider-thumb]:rounded-full 
                        [&::-webkit-slider-thumb]:bg-emerald-500 
                        [&::-webkit-slider-thumb]:cursor-pointer
                        [&::-webkit-slider-thumb]:shadow-lg
                        [&::-webkit-slider-thumb]:shadow-emerald-500/50
                        [&::-moz-range-thumb]:w-3
                        [&::-moz-range-thumb]:h-3
                        md:[&::-moz-range-thumb]:w-4
                        md:[&::-moz-range-thumb]:h-4
                        [&::-moz-range-thumb]:rounded-full
                        [&::-moz-range-thumb]:bg-emerald-500
                        [&::-moz-range-thumb]:border-0
                        [&::-moz-range-thumb]:cursor-pointer"
                      aria-label="مستوى الصوت"
                    />
                    <span className="text-white text-xs md:text-sm font-bold min-w-[2.5rem] text-center">
                      {volume}%
                    </span>
                  </div>
                </div>

                {/* Quality Selector - Desktop */}
                <div className="hidden md:block relative">
                  <select
                    value={currentQuality}
                    onChange={(e) => {
                      e.stopPropagation();
                      changeQuality(e.target.value);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-slate-800/60 border border-slate-700/40 text-emerald-400 rounded-lg px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold cursor-pointer hover:bg-slate-700/60 transition-all appearance-none pr-8"
                    aria-label="اختيار الجودة"
                  >
                    {qualityOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-slate-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
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

          {/* Mobile Volume Slider */}
          <div className="sm:hidden mt-3">
            <div className="bg-black/95 backdrop-blur-xl rounded-xl p-3 border border-slate-700/50">
              <div className="flex items-center gap-3">
                <VolumeX className="w-4 h-4 text-slate-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-4 
                    [&::-webkit-slider-thumb]:h-4 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-emerald-500 
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:shadow-emerald-500/50"
                  aria-label="مستوى الصوت"
                />
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span className="text-white text-sm font-bold min-w-[3rem] text-center">
                  {volume}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}