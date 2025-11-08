import React from 'react';
import { Trophy, Clock, Users, Target, MapPin, Star, Eye, Calendar, Shield, Play } from 'lucide-react';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeLogoUrl: string;
  awayLogoUrl: string;
  date: string;
  time: string;
  league: string;
  stadium: string;
  isLive?: boolean;
  viewers?: string;
  isFeatured?: boolean;
  matchweek?: string;
}

interface Category {
  sport: string;
  icon: React.ElementType;
  matches: Match[];
  color: string;
}

export default function MatchSchedules() {
  const categories: Category[] = [
    {
      sport: 'كرة القدم',
      icon: Target,
      color: 'emerald',
      matches: [
        { 
          id: 1, 
          homeTeam: 'ليستر سيتي', 
          awayTeam: 'ميدلزبره',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '11:45 مساءً',
          league: 'كأس الاتحاد الإنجليزي',
          stadium: 'كينغ باور ستاديوم، ليستر',
          matchweek: 'دور الـ16',
          viewers: '45.2 ألف'
        },
        { 
          id: 2, 
          homeTeam: 'أتلتيكو مدريد', 
          awayTeam: 'يونيون سان جيلواز',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_Union_Saint-Gilloise.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '12:00 صباحاً',
          league: 'دوري أبطال أوروبا',
          stadium: 'واندا ميتروبوليتانو، مدريد',
          matchweek: 'الجولة 4',
          viewers: '98.5 ألف',
          isFeatured: true
        },
        { 
          id: 3, 
          homeTeam: 'بودو/غليمت', 
          awayTeam: 'موناكو',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6b/FK_Bod%C3%B8-Glimt_logo.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Logo_AS_Monaco_FC_%282013%29.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '00:00',
          league: 'دوري أبطال أوروبا',
          stadium: 'أسبميرا ستاديون، بودو',
          matchweek: 'الجولة 4',
          viewers: '52.1 ألف'
        },
        { 
          id: 4, 
          homeTeam: 'يوفنتوس', 
          awayTeam: 'سبورتينغ لشبونة',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Juventus_FC_2017_logo.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Sporting_Clube_de_Portugal_%28Logo%29.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '00:00',
          league: 'دوري أبطال أوروبا',
          stadium: 'أليانز ستاديوم، تورينو',
          matchweek: 'الجولة 4',
          viewers: '112.7 ألف',
          isFeatured: true
        },
        { 
          id: 5, 
          homeTeam: 'ليفربول', 
          awayTeam: 'ريال مدريد',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '10:00',
          league: 'دوري أبطال أوروبا',
          stadium: 'أنفيلد، ليفربول',
          matchweek: 'الجولة 4',
          viewers: '187.3 ألف',
          isFeatured: true,
          isLive: true
        },
        { 
          id: 6, 
          homeTeam: 'باريس سان جيرمان', 
          awayTeam: 'بايرن ميونخ',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '10:00',
          league: 'دوري أبطال أوروبا',
          stadium: 'حديقة الأمراء، باريس',
          matchweek: 'الجولة 4',
          viewers: '165.8 ألف',
          isFeatured: true,
          isLive: true
        },
        { 
          id: 7, 
          homeTeam: 'توتنهام', 
          awayTeam: 'كوبنهاغن',
          homeLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg',
          awayLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/46/FC_K%C3%B8benhavn_logo.svg',
          date: 'الثلاثاء، 4 نوفمبر',
          time: '10:00',
          league: 'دوري أبطال أوروبا',
          stadium: 'توتنهام هوتسبر ستاديوم، لندن',
          matchweek: 'الجولة 4',
          viewers: '78.9 ألف'
        }
      ]
    }
  ];

  const totalMatches = categories.reduce((acc, cat) => acc + cat.matches.length, 0);
  const liveMatches = categories.reduce((acc, cat) => 
    acc + cat.matches.filter(m => m.isLive).length, 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800" dir="rtl">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-4 sm:mb-6 shadow-lg">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 px-4">
              جدول المباريات
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              جداول مباشرة لأهم مباريات اليوم في جميع الرياضات
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                </div>
                <span className="text-xs text-gray-400 font-medium uppercase">الرياضات</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">{categories.length}</div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <span className="text-xs text-gray-400 font-medium uppercase">مباشر الآن</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">{liveMatches}</div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <span className="text-xs text-gray-400 font-medium uppercase">المباريات</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">{totalMatches}</div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <span className="text-xs text-gray-400 font-medium uppercase">المشاهدون</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">740 ألف</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <section key={category.sport} className="mb-12 sm:mb-16">
              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-5 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{category.sport}</h2>
                  <p className="text-gray-400 text-xs sm:text-sm">{category.matches.length} مباريات اليوم</p>
                </div>
              </div>

              {/* Matches Grid */}
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.matches.map(match => (
                  <article
                    key={match.id}
                    className={`bg-slate-800/80 backdrop-blur-sm rounded-2xl border transition-all hover:border-emerald-500 hover:shadow-lg ${
                      match.isFeatured 
                        ? 'border-emerald-700/50' 
                        : 'border-slate-700'
                    }`}
                  >
                    <div className="p-4 sm:p-6">
                      {/* Status Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5 flex-wrap">
                        <div className="flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/50 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
                          <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
                          <span className="text-emerald-200 text-xs font-semibold uppercase">{match.league}</span>
                        </div>
                        
                        {match.isLive && (
                          <div className="flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-lg px-3 py-1.5">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-red-300 text-xs font-bold">مباشر</span>
                          </div>
                        )}
                        
                        {match.isFeatured && !match.isLive && (
                          <div className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/50 rounded-lg px-3 py-1.5">
                            <Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
                            <span className="text-amber-300 text-xs font-bold">مميزة</span>
                          </div>
                        )}
                      </div>

                      {match.matchweek && (
                        <div className="text-xs text-gray-400 font-semibold mb-4 sm:mb-5 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-700 inline-block">
                          {match.matchweek}
                        </div>
                      )}

                      {/* Teams */}
                      <div className="flex items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-2 sm:p-2.5 shadow-lg flex-shrink-0">
                            <img 
                              src={match.homeLogoUrl} 
                              alt={match.homeTeam}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-white font-semibold truncate text-xs sm:text-sm">
                            {match.homeTeam}
                          </span>
                        </div>
                        
                        <div className="text-base sm:text-lg font-bold text-emerald-400 flex-shrink-0 px-1">VS</div>
                        
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-end min-w-0">
                          <span className="text-white font-semibold text-left truncate text-xs sm:text-sm">
                            {match.awayTeam}
                          </span>
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-2 sm:p-2.5 shadow-lg flex-shrink-0">
                            <img 
                              src={match.awayLogoUrl} 
                              alt={match.awayTeam}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Match Info */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
                        <div className="bg-slate-900/70 border border-slate-700 rounded-lg p-2.5 sm:p-3">
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 mb-0.5 sm:mb-1">التوقيت</div>
                          <div className="text-xs sm:text-sm font-semibold text-white">{match.time}</div>
                        </div>
                        
                        <div className="bg-slate-900/70 border border-slate-700 rounded-lg p-2.5 sm:p-3">
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                              <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 mb-0.5 sm:mb-1">المشاهدون</div>
                          <div className="text-xs sm:text-sm font-semibold text-white">{match.viewers}</div>
                        </div>
                        
                        <div className="col-span-2 bg-slate-900/70 border border-slate-700 rounded-lg p-2.5 sm:p-3">
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 mb-0.5 sm:mb-1">الملعب</div>
                          <div className="text-xs sm:text-sm font-semibold text-white truncate">{match.stadium}</div>
                        </div>
                        
                        <div className="col-span-2 bg-slate-900/70 border border-slate-700 rounded-lg p-2.5 sm:p-3">
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 mb-0.5 sm:mb-1">التاريخ</div>
                          <div className="text-xs sm:text-sm font-semibold text-white">{match.date}</div>
                        </div>
                      </div>

                      {/* Watch Button */}
                      <a
                        href="/live"
                        className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95"
                      >
                        <span className="text-sm sm:text-base">شاهد البث المباشر</span>
                        <Play className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer CTA */}
      <footer className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 sm:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-emerald-600/30 rounded-2xl mb-4 sm:mb-6">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
            لا تفوت أي مباراة
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
            شاهد البث المباشر لأكبر الأحداث الرياضية حول العالم
          </p>
        </div>
      </footer>
    </div>
  );
}