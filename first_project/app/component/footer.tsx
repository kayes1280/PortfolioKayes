export default function Footer() {
    return (
        <footer className="bg-[#dedbd2] text-[#335C67] py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10 md:mb-12">
                    
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div>
                                <img className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#335C67] flex items-center justify-center text-white font-bold object-cover" src="/kayes.jpg" alt="kayes" />
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold">Kayes Ahmad<span className="text-[#dedbd2]">.</span></h2>
                                <p className="text-xs sm:text-sm">Full Stack Developer</p>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed mb-4">
                            Passionate about building scalable web applications with clean code and modern technologies.
                        </p>
                        <div className="flex gap-4 text-base sm:text-lg">
                            <a href="" className="hover:opacity-70 transition"><i className="fa-brands fa-instagram"></i></a>
                            <a href="" className="hover:opacity-70 transition"><i className="fa-brands fa-facebook"></i></a>
                            <a href="" className="hover:opacity-70 transition"><i className="fa-brands fa-x-twitter"></i></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-4">LINKS</h3>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li><a href="" className="hover:underline transition opacity-80 hover:opacity-100">About</a></li>
                            <li><a href="" className="hover:underline transition opacity-80 hover:opacity-100">Skills</a></li>
                            <li><a href="" className="hover:underline transition opacity-80 hover:opacity-100">Projects</a></li>
                            <li><a href="" className="hover:underline transition opacity-80 hover:opacity-100">Services</a></li>
                            <li><a href="" className="hover:underline transition opacity-80 hover:opacity-100">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-4">SERVICES</h3>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li>Web Development</li>
                            <li>API Development</li>
                            <li>Database Design</li>
                            <li>UI/UX Implementation</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-4">CONTACT</h3>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li>✉️ nice12693@gmail.com</li>
                            <li>📞 +880 1750570183</li>
                            <li>📍 Dhaka, Bangladesh</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#335C67] border-opacity-20 pt-6 sm:pt-8 md:pt-10 text-center text-xs sm:text-sm">
                    <p className="mb-1">© 2026 Kayes Ahmad. All rights reserved.</p>
                    <p>Crafted with ❤️ using React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}
