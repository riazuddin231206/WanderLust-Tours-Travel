import { useState } from "react";

export default function HeroSection() {
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [travelers, setTravelers] = useState('2 Guests');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log({ destination, date, travelers });
    };

    return (
        <div className="relative min-h-screen bg-slate-900 text-white flex flex-col justify-between overflow-hidden font-sans">
            {/* Background Image with Dark Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
                    alt="Scenic Mountain Highway Travel"
                    className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out hover:scale-100 animate-pulse duration-[10000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            {/* Main Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16 flex-1 flex flex-col justify-center">
                {/* Tagline Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400 text-sm font-medium mb-6 w-fit animate-fade-in">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Explore the Unexplored World
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.15] mb-6">
                    Crafting Your Ultimate <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                        Travel Experience
                    </span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
                    Discover handpicked destinations, immersive private tours, and unforgettable
                    adventures around the globe with expert local guides.
                </p>

                {/* Floating Search/Filter Bar */}
                <div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/40 text-slate-800 mb-12">
                    <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center">

                        {/* Destination Field */}
                        <div className="flex flex-col gap-1 px-3 py-2 rounded-xl hover:bg-slate-100/80 transition-colors">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Destination
                            </label>
                            <input
                                type="text"
                                placeholder="Where to go?"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                className="bg-transparent font-medium text-slate-900 focus:outline-none placeholder-slate-400 text-sm"
                            />
                        </div>

                        {/* Date Field */}
                        <div className="flex flex-col gap-1 px-3 py-2 rounded-xl border-t sm:border-t-0 sm:border-l border-slate-200 hover:bg-slate-100/80 transition-colors">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Date
                            </label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-transparent font-medium text-slate-900 focus:outline-none text-sm cursor-pointer"
                            />
                        </div>

                        {/* Travelers Selector */}
                        <div className="flex flex-col gap-1 px-3 py-2 rounded-xl border-t sm:border-t-0 sm:border-l border-slate-200 hover:bg-slate-100/80 transition-colors">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Guests
                            </label>
                            <select
                                value={travelers}
                                onChange={(e) => setTravelers(e.target.value)}
                                className="bg-transparent font-medium text-slate-900 focus:outline-none text-sm cursor-pointer"
                            >
                                <option>1 Guest</option>
                                <option>2 Guests</option>
                                <option>3 - 5 Guests</option>
                                <option>6+ Group</option>
                            </select>
                        </div>

                        {/* Search Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-full min-h-[48px] bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 text-sm"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                            Search Tours
                        </button>
                    </form>
                </div>

                {/* Social Proof & Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 max-w-4xl">
                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">12k+</p>
                        <p className="text-xs sm:text-sm text-slate-400">Happy Travelers</p>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">400+</p>
                        <p className="text-xs sm:text-sm text-slate-400">Curated Tours</p>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">4.9 ★</p>
                        <p className="text-xs sm:text-sm text-slate-400">Overall Rating</p>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">50+</p>
                        <p className="text-xs sm:text-sm text-slate-400">Countries Covered</p>
                    </div>
                </div>
            </div>
        </div>
    );
}