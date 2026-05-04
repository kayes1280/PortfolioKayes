export default function ContactPage() {
    return (
        <section className="mb-20 mt-20 w-[80%] mx-auto text-center">
            <div className="mb-10 text-center">
                <h1 className="text-[60px] text-[#dedbd2]">Contact Me</h1>
                <p className="text-[20px] text-[#dedbd2]">Feel free to reach out for any web development, design, or collaboration opportunities. I am always open to discussing new ideas and exciting projects. Whether you have a question or a project in mind, I'm happy to connect. Let's build something meaningful together.</p>
            </div>

            <form className="bg-[#dedbd2] p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <input type="text" placeholder="Name" className="p-3 text-[#335C67] rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#335C67]"/>

                    <input type="email" placeholder="Email"className="p-3 text-[#335C67] rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#335C67]"/>
                    
                    <input type="text" placeholder="Phone Number"className="p-3 text-[#335C67] rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#335C67]"/>
                    
                    <select className="p-3 text-[#335C67] rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#335C67]">
                        <option>Service Of Interest</option>
                        <option>Web Development</option>
                        <option>App Design</option>
                        <option>UI/UX</option>
                    </select>
                    
                    <input type="text" placeholder="Timeline"className="p-3 text-[#335C67] rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#335C67]"/>
                    
                    <textarea placeholder="Project Details..."className="p-3 text-[#335C67] rounded-lg border h-32 md:col-span-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#335C67]"></textarea>
                </div>

                <button type="submit" className="mt-5 hover:bg-[#335C67] hover:text-[#edede9] transition duration-300 border border-[#3a5a40] rounded-lg px-6 py-3 bg-[#edede9] text-[#335C67] text-lg cursor-pointer font-semibold">
                    Get Hired
                </button>
            </form>
        </section>
    );
}
