import { Link } from "react-router";

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: (
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Verified Local Guides',
            description: 'Explore every destination with certified, passionate local experts who know all the hidden spots and cultural history.',
        },
        {
            id: 2,
            icon: (
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Best Price Guarantee',
            description: 'Get unmatched rates with transparent pricing. No hidden fees or unexpected charges during your journey.',
        },
        {
            id: 3,
            icon: (
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: '24/7 Travel Support',
            description: 'Our dedicated customer service team is on call around the clock to assist you before, during, and after your trip.',
        },
        {
            id: 4,
            icon: (
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Flexible Bookings',
            description: 'Plans change. Enjoy hassle-free cancellations and easy rescheduling options on most tour packages.',
        },
    ];

    return (
        <section className="bg-slate-950 text-slate-100 py-24 px-6 lg:px-8 font-sans border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
                        ✨ Premium Experience
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                        Why Travel With{' '}
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                            Us?
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        We focus on every detail of your journey so you can focus entirely on making unforgettable memories.
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call-to-Action Banner */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/40 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                            Ready for Your Next Great Adventure?
                        </h3>
                        <p className="text-slate-400 text-sm sm:text-base">
                            Join over 12,000+ happy travelers. Book your personalized tour today and save up to 20% on early reservations.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link to="/Explore" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/30 text-sm whitespace-nowrap">
                            Explore All Tours
                        </Link>
                        <Link to="/Contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 active:scale-95 border border-white/10 transition-all text-slate-200 font-semibold rounded-2xl text-sm whitespace-nowrap">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;