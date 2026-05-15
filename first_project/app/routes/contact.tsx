export default function ContactPage() {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <div className="mb-8 sm:mb-12 md:mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#dedbd2] font-bold">Contact Me</h1>
                <p className="text-base sm:text-lg md:text-xl text-[#dedbd2] mt-4 sm:mt-6 leading-relaxed max-w-3xl mx-auto">
                    Feel free to reach out for any web development, design, or collaboration opportunities. I am always open to discussing new ideas and exciting projects. Whether you have a question or a project in mind, I'm happy to connect. Let's build something meaningful together.
                </p>
            </div>

            <form className="bg-[#dedbd2] p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-5">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="p-3 text-sm sm:text-base text-[#335C67] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#335C67] transition" 
                    />

                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="p-3 text-sm sm:text-base text-[#335C67] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#335C67] transition" 
                    />
                    
                    <input 
                        type="text" 
                        placeholder="Phone Number" 
                        className="p-3 text-sm sm:text-base text-[#335C67] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#335C67] transition" 
                    />
                    
                    <select className="p-3 text-sm sm:text-base text-[#335C67] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#335C67] transition">
                        <option>Service Of Interest</option>
                        <option>Web Development</option>
                        <option>App Design</option>
                        <option>UI/UX</option>
                    </select>
                    
                    <input 
                        type="text" 
                        placeholder="Timeline" 
                        className="p-3 text-sm sm:text-base text-[#335C67] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#335C67] transition" 
                    />
                    
                    <textarea 
                        placeholder="Project Details..." 
                        className="p-3 text-sm sm:text-base text-[#335C67] rounded-lg border border-gray-300 h-24 sm:h-28 md:col-span-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#335C67] transition"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className="mt-6 sm:mt-8 hover:bg-[#335C67] hover:text-[#edede9] transition duration-300 border border-[#335C67] rounded-lg px-6 sm:px-8 py-2 sm:py-3 bg-[#edede9] text-[#335C67] text-base sm:text-lg cursor-pointer font-semibold w-full sm:w-auto" 
                >
                    Get Hired
                </button>
            </form>
        </section>
    );
}
