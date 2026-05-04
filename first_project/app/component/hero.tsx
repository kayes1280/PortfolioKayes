

export default function Hero() {
    return (
        <section className="mt-10 ml-30 flex items-center w-[90%] mx-auto text-[#edede9]">
            <div>
                <h1 className="text-[30px]">Hi, I'm</h1>
                <h1 className="mt-3 text-[30px]">Kayes Ahmad</h1>
                <h1 className="mt-3 text-[60px] text-[#dedbd2]">Full-Stack Developer</h1>
                
                <div className="mt-3 flex items-center gap-5 text-[25px]">
                    <a href="" className="hover:opacity-80"><i className="fa-brands fa-instagram"></i></a>
                    <a href="" className="hover:opacity-80"><i className="fa-brands fa-twitter"></i></a>
                    <a href="" className="hover:opacity-80"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="" className="hover:opacity-80"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
                
                <div className="cursor-pointer flex mt-3 hover:bg-[#335C67] hover:text-[#edede9] transition duration-300 border border-[#3a5a40] rounded-lg px-4 py-2 bg-[#edede9] text-[#335C67] text-lg w-fit">
                    <a className="ml-10 mr-10" href="">Download</a>
                </div>

                <div className="flex gap-8 mt-10 mb-30 font-semibold w-[67%] bg-[#edede9] p-5 rounded-lg text-[#335C67]">
                    <div>
                        <p>2+</p>
                        <h1>Experiences</h1>
                    </div>
                    <div>
                        <p>4+</p>
                        <h1>Projects</h1>
                    </div>
                    <div>
                        <p>5+</p>
                        <h1>Happy Clients</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
