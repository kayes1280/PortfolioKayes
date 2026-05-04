export default function Footer() {
    return (
        <footer className="bg-[#dedbd2] text-[#335C67] pt-16">
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div >
                            <img className="w-14 h-14 rounded-full bg-[#335C67] flex items-center justify-center text-white font-bold"src="/kayes.jpg" alt="kayes" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Kayes Ahmad<span>.</span></h2>
                            <p className="text-sm">Full Stack Developer</p>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Passionate about building scalable web applications with clean code and modern technologies.
                    </p>
                    <div className="flex gap-4 mt-4 text-xl">
                        <a href="" className="hover:opacity-70"><i className="fa-brands fa-instagram"></i></a>
                        <a href="" className="hover:opacity-70"><i className="fa-brands fa-facebook"></i></a>
                        <a href="" className="hover:opacity-70"><i className="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">LINKS</h3>
                    <ul className="space-y-2">
                        <li><a href="" className="hover:underline">About</a></li>
                        <li><a href="" className="hover:underline">Skills</a></li>
                        <li><a href="" className="hover:underline">Projects</a></li>
                        <li><a href="" className="hover:underline">Services</a></li>
                        <li><a href="" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

              
                <div>
                    <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
                    <ul className="space-y-2">
                        <li>Web Development</li>
                        <li>API Development</li>
                        <li>Database Design</li>
                        <li>UI/UX Implementation</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
                    <ul className="space-y-2">
                        <li>✉️ nice12693@gmail.com</li>
                        <li>📞 +880 1750570183</li>
                        <li>📍 Dhaka, Bangladesh</li>
                    </ul>
                </div>
            </div>

            <div className="border-t mt-10 py-5 text-center text-sm">
                <p>© 2026 Kayes Ahmad. All rights reserved.</p>
                <p>Crafted with ❤️ using HTML & Tailwind CSS</p>
            </div>
        </footer>
    );
}
