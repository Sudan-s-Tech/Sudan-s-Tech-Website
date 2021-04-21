import React from "react";
import "./CampusLeader.css";
import Nav from "../Navbar/Navbar";
import { Button } from "@material-ui/core";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import useForm from "./useForm";
import validate from './validate'




function CampusLeader() {
  const{handleChange, values , submit , errors} = useForm(validate)

  return (
    <div className="campusLeader">
      <Nav />
      <div className="campusLeader__hero">
        <h4>Want to become Campus Leader ?</h4>
        <p>Come and Join us ! Be part of the Community which is for the students,by the students.</p>
        <Button
          style={{
            backgroundColor: "#7289DA",
            color: "#fff",
          }}
          className="campus__btn"
          href='#contact'
        >
          Apply Now
        </Button>
      </div>
      <div className="campusLeader__info">
        <h4>What is a Campus Leader ?</h4>
        <div className="campus__infoContainer">
          <div className="campus__infoLeft">
            <img
              src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="thumbnail"
            />
          </div>
          <div className="campus__infoRight">
            <h5>Who actually is a campus leader?</h5>
            <p>
             Campus Leaders at Sudan's Tech are Like minded people with a growth
              mindset who want to add value to the community by spreading  Knowledge and 
              awareness about the Community and Team up with  like-minded people to work
              towards the Motive .These Leaders Possess many Qualities like energetic, passionate, 
              brilliant and are  like minded College Superheroes who have the zeal to take initiative 
              and Lead by Example.
            </p>
            <h5>What we Seek in Campus Leader ?</h5>
            <ul>
              <li>
                <span style={{fontWeight:'bold'}}>
                An Initiative taker: </span>
                A Leader should always be the first one to take initiative and drive his Team towards the goals of organization.
              </li>
              <li>
              <span style={{fontWeight:'bold'}}>
                Innovative: </span>
                 An innovative leader is not a creative genius with thought-provoking ideas but gives others the freedom to develop 
                 their ideas. As the innovative leader, Steve Jobs himself said, 'Innovations distinguish between a leader and a follower'.
              </li>
              <li>
              <span style={{fontWeight:'bold'}}>
               Visionary: </span>
               A visionary leader is far-sighted and driven and inspired by what a company can become.Ensuring a vision for the future with 
               perseverance and keeping everybody invested in the process is what a visionary leader does.
              </li>
              <li>
              <span style={{fontWeight:'bold'}}>
               Self-motivated: </span>
               One of the essential leadership traits of good leaders is their ability to motivate others. Good leaders always motivate their 
               Community Members and boost their morale when needed. 
              </li>
              <li>
              <span style={{fontWeight:'bold'}}>
               A Community Builder: </span>
               A true leader should identify the resources available within the community, and use them to help build a better Community & more
               helpful one.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="campus__benifits">
        <h4>perks and benifits</h4>
        <div className="campus__cards">
          <div className="campus__card">
            <div className="campus__cardTop">
              <LinkedInIcon className="campus__icon" />
            </div>
            <div className="campus__cardBottom">
              LinkedIn recommendation to all eligible candidates after completion of program.
            </div>
          </div>
          <div className="campus__card">
            <div className="campus__cardTop">
              <PeopleIcon className="campus__icon" />
            </div>
            <div className="campus__cardBottom">
             Opportunity to work with Team of Sudan's Tech ( Performance Based ).
            </div>
          </div>
          <div className="campus__card">
            <div className="campus__cardTop">
              <BusinessIcon className="campus__icon" />
            </div>
            <div className="campus__cardBottom">
              Opportunity to interact and network with industry experts and professionals through various events
            </div>
          </div>
          <div className="campus__card">
            <div className="campus__cardTop">
              <CardGiftcardIcon className="campus__icon" />
            </div>
            <div className="campus__cardBottom">
             Certificate of Appreciation on Completing the Program Successfully.
            </div>
          </div>
        </div>
      </div>
      <div className="campus__contact" id='contact'>
        <h4>Apply Now</h4>
        <div className="contact__container">
          <div className="contactContainer__left">
            <div className="contactContainer__left-info">
              <h4>Lead a community 
                  at your campus
                  powered by Sudan’s Tech
              </h4>
              <p>
               If you feel you want to be a part of this initiative, you can get started by filling up this form.
              </p>
            </div>
          </div>
          <form className='form'>
            <div className="form__first">
              <div className="form__first-group">
                <label>Name </label>
                <input
                  name="name"
                  type="text"
                  onChange={handleChange} value={values.name}
                />
         {errors.name && <p className='error_msg'>{errors.name}</p>}
              </div>
              <div className="form__first-group">
                <label>E-mail </label>
                <input
                   name="email"
                   type="email"
                   onChange={handleChange} value={values.email}
                />
         {errors.email && <p className='error_msg'>{errors.email}</p>}
              </div>
            </div>
            <div className="form__first">
            <div className="form__first-group">
                <label>Phone-No </label>
                <input
                  name="phone"
                  type="number"
            onChange={handleChange} value={values.phone}
                />
         {errors.phone && <p className='error_msg'>{errors.phone}</p>}
              </div>
              <div className="form__first-group">
                <label>College-Name </label>
                <input
                  name="college"
                  type="text"
                  onChange={handleChange} value={values.college}
                />
         {errors.college && <p className='error_msg'>{errors.college}</p>}
              </div>
            </div>
            <div className="form__first">
              <div className="form__first-group">
                <label>Course & Year </label>
                <input
                  name="course"
                  type="text"
                  onChange={handleChange} value={values.course}
                />
         {errors.course && <p className='error_msg'>{errors.course}</p>}
              </div>
              <div className="form__first-group">
                <label>LinkedIn-URL </label>
                <input
                  name="linkedin"
                  type="url"
                  onChange={handleChange} value={values.linkedin}
                />
         {errors.linkedin && <p className='error_msg'>{errors.linkedin}</p>}
              </div>
            </div>
           
            <button type="submit" className="btn" onClick={submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CampusLeader;
