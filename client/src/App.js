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
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
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
            </Router>
        </div>
    );
}

export default App;
