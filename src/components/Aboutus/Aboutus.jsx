import React, { useEffect, useRef, useState } from "react";
import "./aboutus.css";
import image1 from "../../asset/image/a1.png";
import image13 from "../../asset/image/person.png";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";
function Aboutus() {
  const {t} = useTranslation();
  const [isBottomAnimationVisible, setIsBottomAnimationVisible] = useState(false);
  const bottomRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, clientHeight, scrollHeight } = document.documentElement || document.body;
  //     if (scrollTop + clientHeight >= scrollHeight) {
  //       setIsBottomAnimationVisible(true);
  //     } else {
  //       setIsBottomAnimationVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsBottomAnimationVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4, // Adjust as needed
      }
    );
  
    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }
  
    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, []);
  return (
    <div>
      <div className="aboutsection1 slide-inn">
        <h3 className="aboutsection1_heading">{t("aboutus")} 
        </h3> " "
        <h3 className="aboutsection1_heading2">{t("us")}</h3>
      </div>
      <div className="aboutsection2 element-to-animate slide-in">
        <h4 className="aboutsection2_heading">
        {t("ourStoryDescription")}
        </h4>
        <p className="aboutsection2_para">
        {t("contentDescription")}
        {t("contentDescription")}
        {t("contentDescription")}
        {t("contentDescription")}
        </p>
        <img src={image1} className=" aboutsection2_img"/>
      </div>
      <div className="container element-to-animate slide-in">
      <h3 className="heading_content_3">$16,163,720</h3>
      <p className="heading_content_4">Value generated for clients within 1 year of bussiness</p>
      </div>
      <div  ref={bottomRef} className={`bottom-animation aboutsection3 ${isBottomAnimationVisible ? "slide-iin" : ""}`}>
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
