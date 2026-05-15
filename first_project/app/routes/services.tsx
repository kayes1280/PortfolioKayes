export default function ServicesPage() {
    const services = [
        {
            icon: "💻",
            title: "Web Development",
            description: "Full-Stack Web Application Development, Frontend Development (Responsive UI using HTML, CSS, Tailwind, JavaScript) Backend Development (API, Database, Authentication) REST API Development"
        },
        {
            icon: "🎨",
            title: "UI/UX & Design",
            description: "Website UI Design, Responsive Layout Design, Landing Page Design, User Experience (UX) Improvement"
        },
        {
            icon: "⚙️",
            title: "SaaS Application Development",
            description: "Build SaaS-based Web Apps, Dashboard Systems (Admin Panel, Analytics), Subscription-based Systems"
        },
        {
            icon: "📱",
            title: "App Development",
            description: "Flutter App Development, Cross-platform Mobile Apps"
        },
        {
            icon: "🌐",
            title: "Deployment & Hosting",
            description: "Website Deployment (Netlify, Vercel, etc.), Domain & Hosting Setup, Git & Version Control"
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-8 sm:mb-12 md:mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#dedbd2] text-center font-bold">Services</h1>
                <p className="text-center text-base sm:text-lg md:text-xl text-[#dedbd2] mt-4 sm:mt-6 leading-relaxed max-w-3xl mx-auto">
                    I offer modern and scalable web development services, focusing on both frontend and backend solutions. I build responsive, user-friendly interfaces along with secure and efficient backend systems. With a blend of development and design skills, I ensure both functionality and great user experience. My goal is to deliver high-quality digital solutions that meet real-world needs.
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-[#dedbd2] rounded-lg p-6 sm:p-8 hover:shadow-lg transition transform hover:-translate-y-1 h-full flex flex-col text-center">
                        <h1 className="text-3xl sm:text-4xl mb-4">{service.icon}</h1>
                        <h1 className="text-lg sm:text-2xl mb-4 text-[#335C67] font-semibold">{service.title}</h1>
                        <p className="text-sm sm:text-base text-[#335C67] leading-relaxed flex-1">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
