import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Home from "./components/Hero/Hero";

import Features from "./components/Features/Features";
import TechStack from "./components/Techstack/Techstack";
// import Discord from "./components/Discord/Discord";
import Vision from "./components/Vision/Vision";
import Impact from "./components/Impact/Impact";
import Events from "./components/Events/Events";
import Training from "./components/Training/Training";
import Footer from "./components/footer/Footer";
// import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import Sponsors from "./components/Sponsors/Sponsors";
import Coursepage from "./components/Coursepage/Course";
import Nav from "./components/Navbar/Navbar";
// import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial/Testimonial";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";
import { Button, Input, TextareaAutosize } from "@material-ui/core";
import logo from '../src/assets/logo.svg'
import axios from 'axios'
import Success from "./components/success/Success";
import Gallery from "./components/gallery/Gallery";
import CampusLeader from "./components/campusleader/CampusLeader";
import PrivacyRefund from "./policies/PrivacyRefund";
import Privacy from "./policies/Privacy";
import Term from "./policies/Term";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";

function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 460,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #7289DA',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 6, 3),
  },
}));
function App() {
  const[email, setEmail] = useState();
  const[username, setUserame] = useState();
  const[text, setText] = useState();
  const submitForm = ()=>{
    let mailMsg ={
      email:email,
      text:text,
    }
    axios({
      method: "post",
      url: "https://email-receive.herokuapp.com/email",
      data: mailMsg,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=>{
      alert('Message sent sucessfully:)');
      setOpen(false)
      setEmail('')
      setUserame('')
      setText('')
    }).catch((e)=>{
      console.log(e.message);
    })
  }
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const[open , setOpen] = useState(false)
    let name;
    const handleClose = () =>{
      setOpen(false);
    }
    return (
        <div className="App">
             <Modal
        open={open}
        onClose={handleClose}
      >
         <div style={modalStyle} className={classes.paper}>
           <form className='feedback__form' >
       <center>
         <img className='feedback__logo' src={logo} alt="logo" />
         </center>
         <Input 
         placeholder='Email'
         type='text'
         value={email}
         onChange={(e)=>{
           setEmail(e.target.value)
         }}
         >
         </Input>
         <Input 
         placeholder='Name'
         type='text'
         value={username}
         onChange={(e)=>{
           setUserame(e.target.value)
         }}
         >
         </Input>
         <TextareaAutosize 
         className='txtarea'
         placeholder='Share your thought'
         type='text'
         rowsMin={5}
         value={text}
         onChange={(e)=>{
           setText(e.target.value)
         }}
         >
         </TextareaAutosize>
         <Button className='submitBtn' onClick={submitForm}>Submit</Button>
         </form>
    </div>
      </Modal>
      <Button className='feedback__btn' onClick={() =>{
        setOpen(true)
      }}>Feedback</Button>
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
                    <UpcomingEvents/>
                    <Features />
                    <Vision />
                    <TechStack />
                    <Gallery />
                    <Impact />
                    {/* <Feedback /> */}
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
          {/* <Feedback /> */}
          <Footer />
        </Route>
        {/* <Route path="/team" exact={true}>
          <Team />
          <Footer />
        </Route> */}
        <Route path="/signin" exact={true}>
          <Nav />
          <SignIn />
        </Route>
        <Route path="/campusLeader" exact={true}>
          <CampusLeader />
          <Footer />
        </Route>
        <Route path="/dashboard" exact={true}>
          {/* <Nav /> */}

          <Dashboard />
        </Route>
        <Route path={`/register/:${name}`}>
          <Nav />
          <Coursepage title={name} />
          <Footer />
        </Route>
        <Route path='/success'>
         <Success/>
        </Route>
        <Route path='/privacy-refund-policy'>
        <Nav />
         <PrivacyRefund />
        </Route>
        <Route path='/privacy-policy'>
        <Nav />
        <Privacy />
        </Route>
        <Route path='/terms-condition'>
        <Nav />
       <Term />
        </Route>
      </Router>
    </div>
  );
}

export default App;
