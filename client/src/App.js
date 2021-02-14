import "./App.css";
import Home from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import TechStack from "./components/Techstack/Techstack";
import Discord from "./components/Discord/Discord";
import Vision from "./components/Vision/Vision";
import Impact from "./components/Impact/Impact";
import Events from "./components/Events/Events";
import Training from "./components/Training/Training";
import Footer from "./components/footer/Footer";
import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import Sponsors from "./components/Sponsors/Sponsors";
import Coursepage from "./components/Coursepage/Course";
import Nav from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
    let name;
    return (
        <div className="App">
            <Router>
                <Route path="/" exact={true}>
                    <Home
                        subheading={"SudansTech"}
                        heading={"Build Your Future "}
                        gradient={"With Us"}
                        para={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
                        }
                    />
                    <Features />
                    <Vision />
                    <TechStack />
                    <Impact />
                    <Feedback />
                    <Discord />
                    <Footer />
                </Route>
                <Route path="/events" exact={true}>
                    <Events />
                    <Feedback />
                    <Footer />
                </Route>
                <Route path="/trainings" exact={true}>
                    <Training />
                    <Feedback />
                    <Footer />
                </Route>
                <Route path="/contact" exact={true}>
                    <Contact />
                    <Feedback />
                    <Footer />
                </Route>
                <Route path="/sponsors" exact={true}>
                    <Sponsors />
                    <Feedback />
                    <Footer />
                </Route>
                <Route path="/register/:name" exact={true}>
                    <Nav />
                    <Coursepage name={name} />
                </Route>
            </Router>
        </div>
    );
}

export default App;
