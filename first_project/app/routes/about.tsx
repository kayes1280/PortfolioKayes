export default function AboutPage() {
    return (
        <section className="mt-10 mb-20 flex flex-wrap items-center justify-center w-[80%] mx-auto text-[#edede9]">
            <h1 className="flex items-center justify-center mb-20 text-[60px] text-[#dedbd2] w-full">About me</h1>
            
            <div className="flex items-center justify-center gap-20 flex-wrap">
                <div>
                    <div >
                        <img className="rounded-[20px] w-80 h-80 bg-[#335C67] flex items-center justify-center"src="/kayes.jpg" alt="kayes" />
                    </div>
                </div>
                <div className="max-w-2xl">
                    <p className="text-[#dedbd2] text-[20px] leading-relaxed">
                        I am Kayes Ahmad, a passionate Computer Science student with a strong interest in becoming a Full-Stack Software Engineer. I enjoy solving complex problems through code and continuously improving my skills by exploring new technologies and development practices.
                        <br /><br />
                        With a background in programming and software development, I focus on building efficient, user-friendly, and scalable applications. I also have a creative side from my experience in graphic design, which helps me create visually appealing and intuitive user interfaces.
                        <br /><br />
                        I am highly motivated to grow in the tech industry and aim to build impactful projects, including SaaS-based applications. In my free time, I enjoy learning new skills, reading, cooking, and spending time with pets.
                    </p>
                </div>
            </div>
        </section>
    );
}
