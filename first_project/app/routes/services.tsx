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
        <section className="mb-20 mt-20 w-[80%] mx-auto">
            <div className="mb-10">
                <h1 className="flex items-center justify-center text-[60px] text-[#dedbd2]">Services</h1>
                <p className="flex text-center text-[20px] text-[#dedbd2]">I offer modern and scalable web development services, focusing on both frontend and backend solutions. I build responsive, user-friendly interfaces along with secure and efficient backend systems. With a blend of development and design skills, I ensure both functionality and great user experience. My goal is to deliver high-quality digital solutions that meet real-world needs.</p>
            </div>
            
            <div className="flex justify-center flex-wrap gap-10 text-center">
                {services.map((service, index) => (
                    <div key={index} className="bg-[#dedbd2] w-70 h-70 rounded-lg p-5">
                        <h1 className="text-xl mb-3">{service.icon}</h1>
                        <h1 className="text-[25px] mb-5 text-[#335C67]">{service.title}</h1>
                        <p className="text-[15px] text-[#335C67]">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
