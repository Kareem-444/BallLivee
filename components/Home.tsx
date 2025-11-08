"use client";

import React from 'react';
import Link from 'next/link';
import { Trophy, Calendar, Clock, Play, TrendingUp, Globe, Shield, Star, ArrowLeft, Tv, Zap } from 'lucide-react';

export default function HomePage() {
  const premierLeagueTeams = [
    { name: 'مانشستر سيتي', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' },
    { name: 'ليفربول', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' },
    { name: 'أرسنال', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg' },
    { name: 'تشيلسي', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg' },
    { name: 'مانشستر يونايتد', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
    { name: 'توتنهام', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg' },
  ];

  const laLigaTeams = [
    { name: 'ريال مدريد', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
    { name: 'برشلونة', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
    { name: 'أتلتيكو مدريد', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg' },
    { name: 'إشبيلية', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg' },
  ];

  const serieATeams = [
    { name: 'يوفنتوس', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Juventus_FC_2017_logo.svg' },
    { name: 'إنتر ميلان', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg' },
    { name: 'ميلان', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg' },
    { name: 'نابولي', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg' },
  ];

  const features = [
    {
      icon: Tv,
      title: 'بث مباشر عالي الجودة',
      description: 'شاهد جميع المباريات بجودة HD وبدون تقطيع',
      color: 'emerald'
    },
    {
      icon: Clock,
      title: 'جداول محدثة لحظياً',
      description: 'احصل على جداول المباريات المحدثة بشكل فوري',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'تغطية شاملة',
      description: 'جميع الدوريات والبطولات العالمية',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'إشعارات فورية',
      description: 'كن أول من يعرف بمواعيد المباريات المهمة',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(16 185 129) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative">
          <div className="text-center mb-12 sm:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-semibold text-sm sm:text-base">البث المباشر متاح الآن</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              تابع جميع
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mt-2">
                الدوريات العالمية
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              شاهد جميع مباريات الدوري الإنجليزي، الإسباني، الإيطالي والبطولات الأوروبية بجودة عالية ومباشرة
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <Link
                href="/TodayMatchs"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-2xl transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
              >
                <span className="text-base sm:text-lg">شاهد مباريات اليوم</span>
                <Play className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
              </Link>

              <Link
                href="/TomorrowMatchs"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-700/50 hover:bg-slate-700 border-2 border-slate-600 hover:border-emerald-500 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-2xl transition-all backdrop-blur-sm"
              >
                <span className="text-base sm:text-lg">مباريات الغد</span>
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">200+</div>
              <div className="text-gray-400 text-sm sm:text-base">مباراة يومياً</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm sm:text-base">دوري وبطولة</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">HD</div>
              <div className="text-gray-400 text-sm sm:text-base">جودة البث</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm sm:text-base">متاح دائماً</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premier League Section */}
      <section className="py-12 sm:py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">الدوري الإنجليزي الممتاز</h2>
                <p className="text-gray-400 text-sm sm:text-base mt-1">Premier League</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {premierLeagueTeams.map((team, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-500 rounded-2xl p-4 sm:p-6 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="w-full aspect-square bg-white rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 flex items-center justify-center">
                  <img src={team.logo} alt={team.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-white font-bold text-center text-xs sm:text-sm lg:text-base group-hover:text-purple-400 transition-colors">
                  {team.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La Liga Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center shadow-lg">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">الدوري الإسباني</h2>
                <p className="text-gray-400 text-sm sm:text-base mt-1">La Liga</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {laLigaTeams.map((team, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-orange-500 rounded-2xl p-4 sm:p-6 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
              >
                <div className="w-full aspect-square bg-white rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 flex items-center justify-center">
                  <img src={team.logo} alt={team.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-white font-bold text-center text-xs sm:text-sm lg:text-base group-hover:text-orange-400 transition-colors">
                  {team.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serie A Section */}
      <section className="py-12 sm:py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">الدوري الإيطالي</h2>
                <p className="text-gray-400 text-sm sm:text-base mt-1">Serie A</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {serieATeams.map((team, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500 rounded-2xl p-4 sm:p-6 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="w-full aspect-square bg-white rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 flex items-center justify-center">
                  <img src={team.logo} alt={team.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-white font-bold text-center text-xs sm:text-sm lg:text-base group-hover:text-blue-400 transition-colors">
                  {team.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              لماذا Ball Live؟
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              نوفر لك أفضل تجربة لمتابعة المباريات المباشرة
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-emerald-500 rounded-2xl p-6 sm:p-8 transition-all hover:scale-105 hover:shadow-xl"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-${feature.color}-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 sm:w-8 sm:h-8 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-3xl mb-6 sm:mb-8">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            ابدأ المشاهدة الآن
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed">
            لا تفوت أي لحظة من مباريات فريقك المفضل. ابدأ المشاهدة الآن مجاناً!
          </p>
          <Link
            href="/TodayMatchs"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-emerald-600 font-bold py-4 sm:py-5 px-8 sm:px-12 rounded-2xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105 text-base sm:text-lg"
          >
            <span>شاهد المباريات المباشرة</span>
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Ball Live</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              منصتك الأولى لمتابعة جميع المباريات المباشرة
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2024 Ball Live. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}