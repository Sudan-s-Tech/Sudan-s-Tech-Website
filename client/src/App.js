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
import Coursepage from "./components/Coursepage/Course2";
import Nav from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial/Testimonial";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
function App() {
    let name;
    return (
        <div className="App">
            <Router>
                <Route path="/" exact={true}>
                    <Home
                        btn={true}
                        subheading={"SudansTech"}
                        heading={"Build Your Future "}
                        gradient={"With Us"}
                        para={
                            "Sudan’s Technocrats(Tech) Foundation,J&K First Ever Tech Community which aims to focus on reducing the Technology gap between Industry and Students of India and is Registered section-8 company Rules under govt. Of India .Sudan's Technocrats(Tech) Foundation is a non-profit initiative aimed at making use of 21st-century technologies and learning methods to foster a fresh breed of highly skilled young people empowered with technical and social skills."
                        }
                    />
                    <Features />
                    <Vision />
                    <TechStack />
                    <Impact />
                    <Feedback />
                    <Discord />
                    <Testimonial />
                    <Footer />
                </Route>
                <Route path="/events" exact={true}>
                    <Events />

                    <Footer />
                </Route>
                <Route path="/trainings" exact={true}>
                    <Training />
                    <Footer />
                </Route>
                <Route path="/contact" exact={true}>
                    <Contact />

                    <Footer />
                </Route>
                <Route path="/sponsors" exact={true}>
                    <Sponsors />
                    <Feedback />
                    <Footer />
                </Route>
                <Route path="/team" exact={true}>
                    <Team />
                    <Footer />
                </Route>

                <Route path="/signin" exact={true}>
                   <SignIn />
                </Route>
                <Route path="/register/:name" exact={true}>

                <Route path={`/register/:${name}`}>

                    <Nav />
                    {console.log(name)}
                    <Coursepage title={name} />
                </Route>
            </Router>
        </div>
    );
}

export default App;
