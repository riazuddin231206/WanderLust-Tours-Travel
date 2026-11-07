
const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Happy Travelers', value: '12,000+' },
    { label: 'Destinations Covered', value: '50+' },
    { label: 'Local Expert Guides', value: '150+' },
  ];

  const values = [
    {
      icon: '🌍',
      title: 'Sustainable Tourism',
      description: 'We prioritize eco-friendly travel options and work directly with local communities to preserve natural heritage.',
    },
    {
      icon: '🛡️',
      title: 'Safety & Security',
      description: 'Your safety is our priority. Every tour is equipped with verified guides, 24/7 support, and complete coverage.',
    },
    {
      icon: '⭐',
      title: 'Curated Experiences',
      description: 'No generic itineraries. Every trip is tailored by travel experts for memorable, authentic cultural immersion.',
    },
  ];

  const team = [
    {
      name: 'Elena Rostova',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Expeditions',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Sophia Chen',
      role: 'Lead Community Guide',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans">
      {/* Page Header / Sub-Hero */}
      <section className="relative py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
          Our Journey & Mission
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Connecting You to the <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Heart of Every Destination
          </span>
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Founded in 2015, we set out to eliminate generic travel package tours and replace them with authentic, immersive adventures led by passionate local experts.
        </p>
      </section>

      {/* Story & Visual Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            We Believe Travel Changes How You See the World
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Our mission goes beyond taking you from point A to point B. We craft personalized journeys designed to help you discover hidden gems, connect with local cultures, and leave a positive footprint behind.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Whether scaling alpine peaks, navigating historic cobblestone streets, or unwinding on pristine beaches, our team ensures every moment is seamless, safe, and deeply meaningful.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
              alt="Hikers watching sunrise"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs">
            <p className="text-emerald-400 text-2xl font-bold">100% Guaranteed</p>
            <p className="text-slate-400 text-xs mt-1">Authentic experiences curated by certified local partners.</p>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="border-y border-white/10 bg-slate-900/50 py-16 my-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-3xl sm:text-5xl font-extrabold text-white">{stat.value}</p>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Drives Us</h2>
          <p className="text-slate-400">The core principles guiding every trip we design and every destination we explore.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-white/10 p-8 rounded-2xl hover:border-emerald-500/40 transition-colors"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership / Team Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Meet Our Explorers</h2>
          <p className="text-slate-400">The passionate team behind your next unforgettable adventure.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden text-center group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-emerald-400 text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;