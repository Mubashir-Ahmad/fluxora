import React from "react";
import "./aboutus.css";
import image1 from "../../asset/image/a1.png";
import image13 from "../../asset/image/person.png";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";
function Aboutus() {
  const {t} = useTranslation();
  return (
    <div>
      <div className="aboutsection1">
        <h3>{t("aboutus")}</h3>
      </div>
      <div className="aboutsection2">
        <h4 className="aboutsection2_heading">
        {t("ourStoryDescription")}
        </h4>
        <p className="aboutsection2_para">
        {t("contentDescription")}
        {t("contentDescription")}
        {t("contentDescription")}
        {t("contentDescription")}
        </p>
        <img src={image1} className="aboutsection2_img" />
      </div>
      <div className="aboutsection3">
        <h3 className="heading_content">{t("testimonials")}</h3>
        <div className="aboutsection3_box_A">
          <div className="about_swipper_box1">
            <div className="about_swiper_content">
              <div className="icon_box">
                <img src={image13} />
              </div>
              <p className="about_swiper_p1">{t("Davidgillroy")}</p>
              <p className="about_swiper_p2">Digital Artist at Digital Group</p>
              <div className="about_swiper_box">
                <p className="about_swiper_p3">
                  {t("testimonialQuote")}
                </p>
              </div>
            </div>
          </div>
          <div className="about_swipper_box1">
            <div className="about_swiper_content">
              <div className="icon_box">
                <img src={image13} />
              </div>
              <p className="about_swiper_p1">{t("Davidgillroy")}</p>
              <p className="about_swiper_p2">Digital Artist at Digital Group</p>
              <div className="about_swiper_box">
                <p className="about_swiper_p3">
                  {t("testimonialQuote")}
                </p>
              </div>
            </div>
          </div>
          <div className="about_swipper_box1">
            <div className="about_swiper_content">
              <div className="icon_box">
                <img src={image13} />
              </div>
              <p className="about_swiper_p1">{t("Davidgillroy")}</p>
              <p className="about_swiper_p2">Digital Artist at Digital Group</p>
              <div className="about_swiper_box">
                <p className="about_swiper_p3">
                  {t("testimonialQuote")}
                </p>
              </div>
            </div>
          </div>
          <div className="about_swipper_box1">
            <div className="about_swiper_content">
              <div className="icon_box">
                <img src={image13} />
              </div>
              <p className="about_swiper_p1">{t("Davidgillroy")}</p>
              <p className="about_swiper_p2">Digital Artist at Digital Group</p>
              <div className="about_swiper_box">
                <p className="about_swiper_p3">
                  {t("testimonialQuote")}
                </p>
              </div>
            </div>
          </div>
          <div className="about_swipper_box1">
            <div className="about_swiper_content">
              <div className="icon_box">
                <img src={image13} />
              </div>
              <p className="about_swiper_p1">{t("Davidgillroy")}</p>
              <p className="about_swiper_p2">Digital Artist at Digital Group</p>
              <div className="about_swiper_box">
                <p className="about_swiper_p3">
                  {t("testimonialQuote")}
                </p>
              </div>
            </div>
          </div>
          <div className="about_swipper_box1">
            <div className="about_swiper_content">
              <div className="icon_box">
                <img src={image13} />
              </div>
              <p className="about_swiper_p1">{t("Davidgillroy")}</p>
              <p className="about_swiper_p2">Digital Artist at Digital Group</p>
              <div className="about_swiper_box">
                <p className="about_swiper_p3">
                  {t("testimonialQuote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Aboutus;
