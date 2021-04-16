import React from 'react';
import './style.css';
import aboutUsIMg from '../../assets/img/aboutUs.png';
import Emergency from '../../assets/img/emergency.svg';
import Appointment from '../../assets/img/appointment.svg';
import Qualfied from '../../assets/img/qualified.svg';

const AboutUs = () => (
  <div className="about__us">
    <div className="about__left">
      <img src={aboutUsIMg} alt="about-us" />
    </div>
    <div className="about__right">
      <h3 className="about__header">Contact us</h3>
      <p className="about__paragraph">
        You can reach us:
          At-Savior Care (near Kidzee school), Po- jaydev vihar , Dist-Khurda
          City - Bhubaneshwar<br/>

        <b>Mob no.: +91-9304219693<br/>
        Email-id.: kumarshashank970@gmail.com<br/>
        </b>

       
      </p>
      <div className="about__adv">
        <li>
          <img className="adv__info" src={Emergency} alt="about-us" />
          <h6> Emergency</h6>
          <h6> Dr. Rakesh Agrawalla (Neurosergon)</h6>
        </li>
        <li id="adv__center">
          <img className="adv__info" src={Appointment} alt="about-us" />{' '}
          <h6> Emergency</h6>
          <h6> Dr. P.K Singhania (Eye Specialist)</h6>
        </li>
        <li>
          <img className="adv__info" src={Qualfied} alt="about-us" />{' '}
          <h6> Emergency</h6>
          <h6> Dr. R.K Malhothra (Heart Specailist)</h6>
        </li>
      </div>
    </div>
  </div>
);
export default AboutUs;
