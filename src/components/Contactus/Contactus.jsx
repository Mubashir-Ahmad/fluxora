import React, { useState } from "react";
import "./contactus.css";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import ccImage from '../../asset/image/cc.png'
import combinedShapeImage from '../../asset/image/Combined-Shape.png'
import profileImage from '../../asset/image/Profile.png'
import mImage from '../../asset/image/m.png'

function Contactus() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    try {
      const emailParams = {
        user_name: name,
        email,
        PhoneNumber: phoneNumber,
        message,
      };
      const serviceID = 'service_19nzo1g';
      const templateID = 'template_9uurlko';
      const userID = 'eeX6qX4lCOIr0DOSN';
      emailjs.init(userID);

      emailjs
        .send(serviceID, templateID, emailParams)
        .then(function (response) {
          console.log('Email sent successfully:', response);
        })
        .catch(function (error) {
          console.error('Error sending email:', error);
        });
    } catch(error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <div className="contact_container">
      <div className="aboutsection1 slide-inn">
        <h3 className="aboutsection1_heading">{t("contact")}</h3>
        <h3 className="aboutsection1_heading2">{t("us")}</h3>
      </div>
      <div className="container contact_us slide-in">
        <div className="row">
          <h2 className="contact_heading">{t("future")}</h2>
          <p className="contact_para">
            {t("burning")}
          </p>
        </div>

        <div className="row">
          <form onSubmit={sendMail}>
            <div className="form-group">
            <span className="input-icon"><img src={ccImage} alt="icon" className="cc-icon" /></span>
              <input
                type="text"
                className="form-control aa"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={t("name")}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
            <span className="input-icon"><img src={combinedShapeImage} alt="icon" className="combined-shape-icon" /></span>
              <input
                type="email"
                className="form-control aa"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={t("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
            <span className="input-icon"><img src={profileImage} alt="icon" className="profile-icon" /></span>
              <input
                type="number"
                className="form-control aa"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={t("phone")}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
            <span className="input-icon"><img src={mImage} alt="icon" className="m-icon" /></span>
              <textarea
                className="form-control aa"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder={t("message")}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <br />
            <button type="submit" className="btn btn-primary sst">
              <p>{t("submit")}</p>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contactus;
