import React from 'react';
import { Play, Clock, Users, Calendar, ChevronRight, Tv, Trophy, Star } from 'lucide-react';

const matches = [
  {
    id: 1,
    homeTeam: "إنتر ميامي",
    awayTeam: "ناشفيل",
    homeTeamLogo: "/download.png",
    awayTeamLogo: "/Nashville.svg",
    time: "3:00 صباحاً",
    sport: "كرة القدم",
    league: "الدوري الأمريكي",
    isLive: false,
    viewers: "12,500",
    featured: false,
    streamLink: "/LiveStream"
  },
  {
    id: 2,
    homeTeam: "أوتريخت",
    awayTeam: "أياكس",
    homeTeamLogo: "/Utrecht.svg",
    awayTeamLogo: "/Ajax.svg",
    time: "1:15 مساءً",
    sport: "كرة القدم",
    league: "الدوري الهولندي",
    isLive: false,
    viewers: "25,000",
    streamLink: "/LiveStreamCloored"
  },
  {
    id: 3,
    homeTeam: "بيراميدز",
    awayTeam: "سيراميكا كليوباترا",
    homeTeamLogo: "/Pyramids.svg",
    awayTeamLogo: "/Ceramica.svg",
    time: "2:45 مساءً",
    sport: "كرة القدم",
    league: "الدوري المصري",
    isLive: false,
    viewers: "18,000",
    streamLink: "/LiveStreamDool"
  },
  {
    id: 4,
    homeTeam: "أستون فيلا",
    awayTeam: "بورنموث",
    homeTeamLogo: "/Aston_Villa.svg",
    awayTeamLogo: "/Bournemouth.svg",
    time: "4:00 مساءً",
    sport: "كرة القدم",
    league: "الدوري الإنجليزي الممتاز",
    isLive: true,
    viewers: "45,000",
    streamLink: "/LiveStreamFloored"
  },
  {
    id: 5,
    homeTeam: "برينتفورد",
    awayTeam: "نيوكاسل",
    homeTeamLogo: "/Brentford.svg",
    awayTeamLogo: "/Newcastle.svg",
    time: "4:00 مساءً",
    sport: "كرة القدم",
    league: "الدوري الإنجليزي الممتاز",
    isLive: true,
    viewers: "38,500",
    streamLink: "/LiveStream2"
  },
  {
    id: 6,
    homeTeam: "كريستال بالاس",
    awayTeam: "برايتون",
    homeTeamLogo: "/Crystal_Palace.svg",
    awayTeamLogo: "/Brighton.svg",
    time: "4:00 مساءً",
    sport: "كرة القدم",
    league: "الدوري الإنجليزي الممتاز",
    isLive: true,
    viewers: "32,000",
    streamLink: "/LiveStream3"
  },
  {
    id: 7,
    homeTeam: "بولونيا",
    awayTeam: "نابولي",
    homeTeamLogo: "/Bologna.svg",
    awayTeamLogo: "/Napoli.svg",
    time: "4:00 مساءً",
    sport: "كرة القدم",
    league: "الدوري الإيطالي",
    isLive: true,
    viewers: "42,000",
    streamLink: "/LiveStream4"
  },
  {
    id: 8,
    homeTeam: "رايو فاليكانو",
    awayTeam: "ريال مدريد",
    homeTeamLogo: "/Rayo_Vallecano.svg",
    awayTeamLogo: "/Real_Madrid.svg",
    time: "5:15 مساءً",
    sport: "كرة القدم",
    league: "الدوري الإسباني",
    isLive: false,
    viewers: "65,000",
    streamLink: "/LiveStream5"
  },
  {
    id: 9,
    homeTeam: "الزمالك",
    awayTeam: "الأهلي",
    homeTeamLogo: "/Zamalek.svg",
    awayTeamLogo: "/Al_Ahly.svg",
    time: "5:30 مساءً",
    sport: "كرة القدم",
    league: "الدوري المصري",
    isLive: false,
    viewers: "55,000",
    streamLink: "/LiveStream6"
  },
  {
    id: 10,
    homeTeam: "تشيلسي",
    awayTeam: "وولفرهامبتون",
    homeTeamLogo: "/chelsea.png",
    awayTeamLogo: "/wolves.png",
    time: "6:30 مساءً",
    sport: "كرة القدم",
    league: "الدوري الإنجليزي الممتاز",
    isLive: false,
    viewers: "52,000",
    featured: true,
    streamLink: "/LiveStream"
  }
];

const stats = [
  { label: "مباريات مباشرة", value: "4", icon: Tv },
  { label: "المشاهدون النشطون", value: "333,000+", icon: Users },
  { label: "مباريات اليوم", value: "10", icon: Trophy }
];

export default function SportsStreamingPage() {
  const featuredMatch = matches.find(m => m.featured);
  const regularMatches = matches.filter(m => !m.featured);
  const liveMatches = matches.filter(m => m.isLive);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col" dir="rtl">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Tv className="w-8 h-8 text-emerald-500" />
              <span className="text-white font-bold text-xl">Ball Live</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>{liveMatches.length} مباشر</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              منصة البث الرياضي الاحترافية
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              استمتع بمشاهدة المباريات المباشرة بجودة عالية وتغطية شاملة
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 text-center hover:border-emerald-500 transition-colors"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-emerald-500" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Match */}
        {featuredMatch && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl font-bold text-white">المباراة المميزة</h2>
            </div>

            <div className="bg-slate-800/90 border-2 border-emerald-600/50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
                <div className="bg-slate-700/50 border border-emerald-600/60 rounded-lg px-4 py-2">
                  <span className="text-emerald-300 text-sm font-bold">{featuredMatch.league}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8">
                <div className="flex flex-col items-center gap-3 flex-1 max-w-xs">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl p-3 sm:p-4 shadow-lg">
                    <img 
                      src={featuredMatch.homeTeamLogo} 
                      alt={featuredMatch.homeTeam} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-bold text-base sm:text-lg text-center">{featuredMatch.homeTeam}</span>
                </div>
                
                <div className="text-xl sm:text-2xl font-bold text-emerald-400">ضد</div>
                
                <div className="flex flex-col items-center gap-3 flex-1 max-w-xs">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl p-3 sm:p-4 shadow-lg">
                    <img 
                      src={featuredMatch.awayTeamLogo} 
                      alt={featuredMatch.awayTeam} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-bold text-base sm:text-lg text-center">{featuredMatch.awayTeam}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 mb-6 text-gray-300 flex-wrap">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">{featuredMatch.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">{featuredMatch.viewers} مشاهد</span>
                </div>
              </div>

              <a
                href={featuredMatch.streamLink}
                className="flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-colors"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                <span>شاهد البث المباشر</span>
                <Play className="w-5 h-5" fill="currentColor" />
              </a>
            </div>
          </section>
        )}

        {/* Match Schedule */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">جدول مباريات اليوم</h2>
          </div>

          <div className="grid gap-6">
            {regularMatches.map((match) => (
              <div
                key={match.id}
                className={`bg-slate-800/80 border rounded-xl p-4 sm:p-6 transition-all hover:scale-[1.02] ${
                  match.isLive 
                    ? 'border-red-500/50 hover:border-red-500 shadow-lg shadow-red-500/20' 
                    : 'border-slate-700 hover:border-emerald-500'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 text-sm font-bold">{match.sport}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-xs">{match.league}</span>
                  </div>
                  {match.isLive && (
                    <div className="flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-lg px-3 py-1.5 w-fit">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-300 text-xs font-bold">مباشر الآن</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-5">
                  <div className="flex items-center gap-3 flex-1 w-full sm:w-auto">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg p-2 shadow-md flex-shrink-0">
                      <img 
                        src={match.homeTeamLogo} 
                        alt={match.homeTeam} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white font-bold text-sm sm:text-base">{match.homeTeam}</span>
                  </div>
                  
                  <div className="text-emerald-400 font-bold text-sm sm:text-base">ضد</div>
                  
                  <div className="flex items-center gap-3 flex-1 justify-end w-full sm:w-auto">
                    <span className="text-white font-bold text-right text-sm sm:text-base">{match.awayTeam}</span>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg p-2 shadow-md flex-shrink-0">
                      <img 
                        src={match.awayTeamLogo} 
                        alt={match.awayTeam} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-4 text-gray-300 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span>{match.viewers}</span>
                    </div>
                  </div>

                  <a
                    href={match.streamLink}
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors w-full sm:w-auto justify-center"
                  >
                    <span>شاهد البث</span>
                    <Play className="w-4 h-4" fill="currentColor" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-8 sm:p-12 text-center">
            <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              احصل على تجربة مشاهدة مميزة
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              انضم إلى العضوية المميزة للحصول على وصول غير محدود لجميع المباريات والفعاليات الحصرية
            </p>
            <a
              href="/premium"
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <span>اشترك الآن</span>
              <ChevronRight className="w-5 h-5 rotate-180" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Tv className="w-5 h-5 text-emerald-500" />
              <span className="text-white font-bold">Ball Live</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Ball Live. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}