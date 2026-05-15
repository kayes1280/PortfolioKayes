

export default function Hero() {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#edede9]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
                <div className="flex-1">
                    <h1 className="text-base sm:text-lg md:text-2xl">Hi, I'm</h1>
                    <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl">Kayes Ahmad</h1>
                    <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#dedbd2] font-bold">Full-Stack Developer</h1>
                    
                    <div className="mt-6 flex items-center gap-6 text-xl sm:text-2xl">
                        <a href="" className="hover:opacity-70 transition"><i className="fa-brands fa-instagram"></i></a>
                        <a href="" className="hover:opacity-70 transition"><i className="fa-brands fa-twitter"></i></a>
                        <a href="" className="hover:opacity-70 transition"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="" className="hover:opacity-70 transition"><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                    
                    <button className="mt-6 hover:bg-[#335C67] hover:text-[#edede9] transition duration-300 border border-[#335C67] rounded-lg px-6 sm:px-8 py-2 sm:py-3 bg-[#edede9] text-[#335C67] text-base sm:text-lg font-semibold cursor-pointer">
                        Download CV
                    </button>

                    {/* Stats Box */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 font-semibold bg-[#edede9] p-4 sm:p-6 rounded-lg text-[#335C67] max-w-md">
                        <div className="text-center">
                            <p className="text-lg sm:text-2xl font-bold">2+</p>
                            <h1 className="text-xs sm:text-sm">Experiences</h1>
                        </div>
                        <div className="text-center">
                            <p className="text-lg sm:text-2xl font-bold">4+</p>
                            <h1 className="text-xs sm:text-sm">Projects</h1>
                        </div>
                        <div className="text-center">
                            <p className="text-lg sm:text-2xl font-bold">5+</p>
                            <h1 className="text-xs sm:text-sm">Happy Clients</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
