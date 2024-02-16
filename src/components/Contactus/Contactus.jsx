import React,{useState} from "react";
import "./contactus.css";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
function Contactus() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const sendMail = (e)=>{
    console.log('ppp',e)
      e.preventDefault();
    try{
 
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
      .send(serviceID, templateID,emailParams)
      .then(function (response) {
        console.log('Email sent successfully:', response);
      })
      .catch(function (error) {
        console.error('Error sending email:', error);
      });
  }
  catch(error){
    console.error('Error sending email:', error);
  }
  }
  return (
    <>
      <div className="aboutsection1 slide-inn">
        <h3 className="aboutsection1_heading">{t("contact")}</h3> " "
        <h3 className="aboutsection1_heading2">{t("us")}</h3>
      </div>
      <div className="container contact_us slide-in" >
        <div className="row">
          <div className="col-md">
            <h2 className="contact_heading">{t("future")}</h2>
            <p className="contact_para">
              {t("burning")}
            </p>
          </div>

          <div className="col-md">
            <form  onSubmit={sendMail}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={t("name")}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              " "
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={t("email")}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              " "
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={t("phone")}
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder={t("message")}
                  onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
              </div>
              <br />
              <button type="submit" class="btn btn-primary sst">
                <p>{t("submit")}</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
