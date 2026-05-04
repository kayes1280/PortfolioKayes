import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <section className="h-24 bg-[#dedbd2]">
            <div className="flex items-center h-full w-[90%] mx-auto justify-between">

                <div className="text-[#335C67] ml-10 text-[25px] font-semibold">
                    <NavLink to="/">KAYES AHMAD</NavLink>
                </div>

                <div className="flex items-center h-full gap-25">

                    <div className="flex gap-8 text-xl text-[#335C67]">

                        <NavLink to="/"className={({ isActive }) =>isActive 
                                ? "text-[#edede9] font-semibold border-b-2"
                                : "hover:text-[#edede9]"}>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={({ isActive }) =>isActive 
                                ? "text-[#edede9] font-semibold border-b-2"
                                : "hover:text-[#edede9]"
                            }>
                            About Me
                        </NavLink>

                        <NavLink to="/services" className={({ isActive }) =>isActive 
                                ? "text-[#edede9] font-semibold border-b-2"
                                : "hover:text-[#edede9]"
                            }>
                            Services
                        </NavLink>

                        <NavLink to="/workprofile" className={({ isActive }) =>isActive 
                                ? "text-[#edede9] font-semibold border-b-2"
                                : "hover:text-[#edede9]"
                            }>
                            Work Profile
                        </NavLink>

                        <NavLink to="/contact" className={({ isActive }) =>isActive 
                                ? "text-[#edede9] font-semibold border-b-2"
                                : "hover:text-[#edede9]"
                            }>
                            Contact
                        </NavLink>

                    </div>

                    <div className="hover:bg-[#335C67] hover:text-[#edede9] transition duration-300 border border-[#3a5a40] rounded-lg px-4 py-2 bg-[#edede9] text-[#335C67] text-lg">
                        <button className="cursor-pointer">Get Hired</button>
                    </div>

                </div>
            </div>
        </section>
    );
}