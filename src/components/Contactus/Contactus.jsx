import React from "react";
import "./contactus.css";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";
function Contactus() {
  const { t } = useTranslation();
  return (
    <>
      <div className="aboutsection1 slide-inn">
        <h3 className="aboutsection1_heading">Contact</h3> " "
        <h3 className="aboutsection1_heading2">Us</h3>
      </div>
      <div className="container contact_us slide-in" >
        <div className="row">
          <div className="col-md">
            <h2 className="contact_heading">THE FUTURE AWAITS</h2>
            <p className="contact_para">
              Got a burning AI idea, question, or just want to chat about what
              we do? We're all ears! Reach out, and our friendly team at
              Morningside AI will be right there to guide, assist, or simply
              share in your excitement. Let's make your AI journey memorable
              together
            </p>
          </div>

          <div className="col-md">
            <form>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              " "
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              " "
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
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
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <br />
              <button type="submit" class="btn btn-primary sst">
                Submit
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
