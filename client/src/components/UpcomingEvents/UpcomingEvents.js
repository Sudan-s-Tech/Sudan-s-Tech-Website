import React from "react";
import UpcomingEventsCards from "./UpcomingEventsCards";
import "./UpcomingEvents.css";
// import gall2 from '../../assets/gall2.svg';



 export default function UpcomingEvents() {
return (
  <>
 {/*<div className="box center">*/}
  <section >
  <br/>
    <br/>
      <br/>
      <hr/>
       <br/>
      <br/>
  <h2 style={{textDecoration:'underline'}} ><center>  ACTIVE COURSES !!</center></h2>
<div className="container text-center">
<div className="row">


 <div className="col-md-6 card-align ">
                  <UpcomingEventsCards
                      tag="upcoming"
                      color="secondary"
                      title="CYBER SECURITY BOOTCAMP"
                      date=" 15 July 2021"
                      desc="Become a Cyber Security Specialist, Learn How to Stop Hackers, Prevent Hacking, Learn IT Security &amp; Bug Bounty Programs."
                      imgurl="https://res.cloudinary.com/https-sudans-tech/image/upload/v1615568650/cyber_security_bootcamp_nipf03.png"
                      link="http://localhost:3000/register/CyberSecurity%20Bootcamp"
                    />
                    </div>

                    <div className="col-md-6 card-align">
                    <UpcomingEventsCards
                      tag="upcoming"
                      color="secondary"
                      title="Introduction to Git and Github"
                      date=" 15 July 2021"
                      desc="Learn The Key Concepts and basic workflow for git and github with this easy to follow Course ."
                       imgurl="data:image/jpeg;base64,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"
                      // imgurl={gall2}
                      link="http://localhost:3000/register/Introduction%20to%20Git%20and%20Github"
                    />
                    </div>
</div>


</div>

</section>
    
        
        
</>
                );
}

// export default UpcomingEvents;