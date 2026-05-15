import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Me" },
        { path: "/services", label: "Services" },
        { path: "/workprofile", label: "Work Profile" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-[#dedbd2] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-[#335C67] text-lg sm:text-xl md:text-2xl font-semibold hover:opacity-80 transition">
                            KAYES AHMAD
                        </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-8">
                        <div className="flex gap-4 lg:gap-8 text-sm lg:text-lg text-[#335C67]">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-[#edede9] font-semibold border-b-2 border-[#335C67] pb-1"
                                            : "hover:text-[#335C67] transition opacity-80 hover:opacity-100"
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                        <button className="ml-4 hover:bg-[#335C67] hover:text-[#edede9] transition duration-300 border border-[#335C67] rounded-lg px-4 py-2 bg-[#edede9] text-[#335C67] text-sm lg:text-base font-semibold cursor-pointer">
                            Get Hired
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#335C67] hover:bg-[#335C67] hover:bg-opacity-10 transition"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-[#dedbd2] border-t border-[#335C67] border-opacity-20">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#edede9] font-semibold bg-[#335C67] block px-3 py-2 rounded-md text-base"
                                        : "text-[#335C67] hover:bg-[#335C67] hover:bg-opacity-10 block px-3 py-2 rounded-md text-base transition"
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <button className="w-full mt-4 hover:bg-[#335C67] hover:text-[#edede9] transition duration-300 border border-[#335C67] rounded-lg px-4 py-2 bg-[#edede9] text-[#335C67] font-semibold cursor-pointer text-sm">
                            Get Hired
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}