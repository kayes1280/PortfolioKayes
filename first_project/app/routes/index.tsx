import Hero from "../component/hero";
import About from "./about";
import Services from "../routes/services";
import WorkProfile from "./workprofile";
import Contact from "./contact";

export default function Index() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <WorkProfile />
            <Contact />
        </div>
    );
}