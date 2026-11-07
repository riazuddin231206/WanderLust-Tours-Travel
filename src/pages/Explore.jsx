import { useState } from "react";


const Explore = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('popular');

    const categories = [
        'All',
        'Mountain Trekking',
        'Beach & Islands',
        'Cultural & Heritage',
        'Wildlife Safari',
        'Urban Adventure',
    ];

    const tours = [
        {
            id: 1,
            title: 'Annapurna Circuit Trekking',
            location: 'Pokhara, Nepal',
            category: 'Mountain Trekking',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
            duration: '12 Days',
            groupSize: 'Max 10',
            rating: 4.9,
            reviews: 128,
            price: 1250,
            originalPrice: 1450,
            featured: true,
            badge: 'Best Seller',
        },
        {
            id: 2,
            title: 'Tropical Bali Island Hopping',
            location: 'Bali, Indonesia',
            category: 'Beach & Islands',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
            duration: '7 Days',
            groupSize: 'Max 12',
            rating: 4.8,
            reviews: 96,
            price: 890,
            originalPrice: 990,
            featured: false,
            badge: 'Popular',
        },
        {
            id: 3,
            title: 'Historic Kyoto Temple Walk',
            location: 'Kyoto, Japan',
            category: 'Cultural & Heritage',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
            duration: '5 Days',
            groupSize: 'Max 8',
            rating: 4.95,
            reviews: 210,
            price: 1100,
            originalPrice: 1200,
            featured: true,
            badge: 'Top Rated',
        },
        {
            id: 4,
            title: 'Serengeti Big Five Safari',
            location: 'Serengeti, Tanzania',
            category: 'Wildlife Safari',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
            duration: '8 Days',
            groupSize: 'Max 6',
            rating: 4.92,
            reviews: 74,
            price: 2400,
            originalPrice: 2700,
            featured: false,
            badge: 'Featured',
        },
        {
            id: 5,
            title: 'Swiss Alps Glacier Express',
            location: 'Zermatt, Switzerland',
            category: 'Mountain Trekking',
            image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
            duration: '6 Days',
            groupSize: 'Max 10',
            rating: 4.88,
            reviews: 142,
            price: 1850,
            originalPrice: 2000,
            featured: false,
            badge: 'Trending',
        },
        {
            id: 6,
            title: 'Santorini Sunset Yacht Cruise',
            location: 'Santorini, Greece',
            category: 'Beach & Islands',
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
            duration: '4 Days',
            groupSize: 'Max 14',
            rating: 4.79,
            reviews: 88,
            price: 750,
            originalPrice: 850,
            featured: false,
            badge: 'Hot Deal',
        },
    ];

    // Filter & Sort Logic
    const filteredTours = tours
        .filter((tour) => {
            const matchesCategory =
                selectedCategory === 'All' || tour.category === selectedCategory;
            const matchesSearch =
                tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tour.location.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return b.reviews - a.reviews; // Default: Popular
        });

    return (
        <div className="bg-slate-950 text-slate-100 min-h-screen font-sans py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
                        🔍 Discover Next Destinations
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
                        Explore Popular{' '}
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                            Tour Packages
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Choose from hundreds of handpicked journeys designed for outdoor adventure, relaxation, and culture.
                    </p>
                </div>

                {/* Filter & Search Bar Controls */}
                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-4 md:p-6 mb-12 shadow-xl backdrop-blur-md">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
                        {/* Search Input */}
                        <div className="relative w-full md:w-96">
                            <svg
                                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by tour title or location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-emerald-500 text-white placeholder-slate-500 transition-colors"
                            />
                        </div>

                        {/* Sort By Dropdown */}
                        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                            <span className="text-slate-400 text-sm font-medium whitespace-nowrap">
                                Sort By:
                            </span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 text-white cursor-pointer"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="rating">Highest Rated</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Category Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-t border-white/5 pt-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === cat
                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                                        : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tour Cards Grid */}
                {filteredTours.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTours.map((tour) => (
                            <div
                                key={tour.id}
                                className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xl"
                            >
                                {/* Image & Badges */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={tour.image}
                                        alt={tour.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                                    {/* Top Badge */}
                                    <span className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                        {tour.badge}
                                    </span>

                                    {/* Wishlist Bookmark Button */}
                                    <button className="absolute top-4 right-4 bg-slate-900/60 hover:bg-slate-900 backdrop-blur-md border border-white/20 text-white p-2.5 rounded-full transition-colors">
                                        <svg className="w-4 h-4 fill-current text-white/80 hover:text-emerald-400" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </button>

                                    {/* Location Tag on Image */}
                                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-slate-200 text-xs font-medium">
                                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {tour.location}
                                    </div>
                                </div>

                                {/* Card Content Body */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Meta Info (Duration & Group Size) */}
                                        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                                            <span className="flex items-center gap-1">
                                                ⏱️ {tour.duration}
                                            </span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                👥 {tour.groupSize}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-1">
                                            {tour.title}
                                        </h3>
                                    </div>

                                    {/* Rating & Pricing Row */}
                                    <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                                        {/* Rating */}
                                        <div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-amber-400 text-sm">★</span>
                                                <span className="text-sm font-bold text-white">{tour.rating}</span>
                                                <span className="text-xs text-slate-400">({tour.reviews})</span>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="text-right">
                                            <span className="text-xs text-slate-500 line-through mr-2 font-medium">
                                                ${tour.originalPrice}
                                            </span>
                                            <span className="text-xl font-extrabold text-emerald-400">
                                                ${tour.price}
                                            </span>
                                            <span className="text-xs text-slate-400 font-normal"> / person</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-white/10">
                        <p className="text-4xl mb-4">🏝️</p>
                        <h3 className="text-xl font-bold text-white mb-2">No Tours Found</h3>
                        <p className="text-slate-400 text-sm max-w-sm mx-auto">
                            We couldn't find any tours matching your search or category filter. Try clearing your search parameters.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Explore;