const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Cox\'s Bazar',
      country: 'Bangladesh',
      toursCount: '45 Tours',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      tag: 'World\'s Longest Beach',
      colSpan: 'lg:col-span-2',
    },
    {
      id: 2,
      name: 'Kyoto',
      country: 'Japan',
      toursCount: '28 Tours',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      tag: 'Heritage & Culture',
      colSpan: 'lg:col-span-1',
    },
    {
      id: 3,
      name: 'Santorini',
      country: 'Greece',
      toursCount: '32 Tours',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      tag: 'Romantic Getaways',
      colSpan: 'lg:col-span-1',
    },
    {
      id: 4,
      name: 'Swiss Alps',
      country: 'Switzerland',
      toursCount: '19 Tours',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
      tag: 'Mountain & Snow',
      colSpan: 'lg:col-span-2',
    },
  ];

  return (
    <section className="bg-slate-950 text-slate-100 py-24 px-6 lg:px-8 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
              📍 Top Picks
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Trending <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Destinations</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-md">
            Explore our hand-picked collection of global hot-spots, featuring curated local packages and authentic cultural experiences.
          </p>
        </div>

        {/* Bento-style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {destinations.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-3xl overflow-hidden group border border-white/10 shadow-2xl h-[380px] cursor-pointer ${item.colSpan}`}
            >
              {/* Background Image with Hover Scale */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-slate-900/70 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div>
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    {item.country}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">
                    {item.toursCount}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-emerald-500 border border-white/20 group-hover:border-emerald-500 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;