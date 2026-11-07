import { Link, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();

    // Helper function to check if a link is active
    const isActive = (path) => location.pathname === path;

    const navLinks = (
        <>
            <li>
                <Link
                    to={`/`}
                    className={`font-medium transition-colors ${isActive('/')
                            ? 'text-emerald-400 font-bold bg-slate-800/60'
                            : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/40'
                        }`}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to={`/About`}
                    className={`font-medium transition-colors ${isActive('/About')
                            ? 'text-emerald-400 font-bold bg-slate-800/60'
                            : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/40'
                        }`}
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    to={`/Explore`}
                    className={`font-medium transition-colors ${isActive('/Explore')
                            ? 'text-emerald-400 font-bold bg-slate-800/60'
                            : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/40'
                        }`}
                >
                    Explore
                </Link>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/10 shadow-2xl transition-all">
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">

                {/* Navbar Start: Brand Logo & Mobile Dropdown */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-slate-900 border border-white/10 text-slate-200 rounded-2xl z-50 mt-3 w-56 p-3 shadow-2xl gap-1"
                        >
                            {navLinks}
                            <div className="pt-2 mt-2 border-t border-white/10 lg:hidden">
                                <Link
                                    to="/Explore"
                                    className="btn btn-emerald w-full bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/25"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group text-2xl font-extrabold tracking-tight">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10 8.46 3.54 6.34 4.25l4.24 5.65-4.24 1.13-2.12-1.41-1.42.47 2.12 2.83c.47.63 1.25 1 2.04.83l14.16-3.77c.8-.21 1.28-1.04 1.06-1.84z" />
                            </svg>
                        </div>
                        <span className="text-white">
                            Wander<span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Lust</span>
                        </span>
                    </Link>
                </div>

                {/* Navbar Center: Desktop Navigation Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 bg-slate-900/60 border border-white/10 rounded-full py-1.5 px-4 backdrop-blur-md">
                        {navLinks}
                    </ul>
                </div>

                {/* Navbar End: CTA Button */}
                <div className="navbar-end gap-3">
                    <Link
                        to="/Explore"
                        className="btn bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-xl px-5 font-semibold text-sm shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;