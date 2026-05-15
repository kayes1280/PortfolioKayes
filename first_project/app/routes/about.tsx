export default function AboutPage() {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#edede9]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#dedbd2] font-bold text-center mb-8 sm:mb-12 md:mb-16">About me</h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
                <div className="flex-shrink-0">
                    <img 
                        className="rounded-2xl w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#335C67] object-cover" 
                        src="/kayes.jpg" 
                        alt="kayes" 
                    />
                </div>
                <div className="flex-1">
                    <p className="text-[#dedbd2] text-base sm:text-lg md:text-xl leading-relaxed space-y-4">
                        <span className="block">
                            I am Kayes Ahmad, a passionate Computer Science student with a strong interest in becoming a Full-Stack Software Engineer. I enjoy solving complex problems through code and continuously improving my skills by exploring new technologies and development practices.
                        </span>
                        <span className="block">
                            With a background in programming and software development, I focus on building efficient, user-friendly, and scalable applications. I also have a creative side from my experience in graphic design, which helps me create visually appealing and intuitive user interfaces.
                        </span>
                        <span className="block">
                            I am highly motivated to grow in the tech industry and aim to build impactful projects, including SaaS-based applications. In my free time, I enjoy learning new skills, reading, cooking, and spending time with pets.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
