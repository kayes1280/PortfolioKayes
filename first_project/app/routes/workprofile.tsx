export default function WorkProfilePage() {
    const projects = [
        {
            title: "Amazon Clone",
            description: "This project is an Amazon-inspired e-commerce website built using HTML, CSS, and JavaScript. It replicates key features such as product listings, navigation bar, and responsive design. The project demonstrates strong frontend development skills and attention to UI detail. It focuses on creating a smooth and user-friendly shopping experience."
        },
        {
            title: "Edufort Clone",
            description: "This project is a clone of the Eduford educational website built using HTML and CSS. It focuses on creating a clean, responsive layout with modern design elements. The project demonstrates strong skills in layout structuring, styling, and UI consistency. It highlights the ability to recreate real-world website designs with attention to detail."
        },
        {
            title: "Stone, Paper & Scissors Game",
            description: "This project is an interactive Stone, Paper & Scissors game built using JavaScript, HTML, and CSS. It allows users to play against the computer with real-time result display and dynamic UI updates. The project demonstrates core JavaScript concepts like event handling, logic building, and DOM manipulation."
        },
        {
            title: "TicTacToe",
            description: "This project is a classic Tic Tac Toe game built using HTML, CSS, and JavaScript. It allows two players to play interactively with real-time updates on the game board. The project demonstrates strong understanding of game logic, DOM manipulation, and event handling. It provides a simple yet engaging user experience with a clean and responsive design."
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-8 sm:mb-12 md:mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#dedbd2] text-center font-bold">Work Profile</h1>
                <p className="text-center text-base sm:text-lg md:text-xl text-[#dedbd2] mt-4 sm:mt-6 leading-relaxed max-w-3xl mx-auto">
                    I am a dedicated Computer Science student with a strong passion for full-stack development. I specialize in building responsive web applications with clean and efficient code. I enjoy solving real-world problems and continuously improving my technical and creative skills. My goal is to grow as a developer and create impactful digital solutions.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-[#dedbd2] rounded-lg p-5 sm:p-6 hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col h-full">
                        <h1 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-5 text-[#335C67] font-semibold text-center">{project.title}</h1>
                        <p className="text-sm sm:text-base text-[#335C67] leading-relaxed text-center flex-1">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}