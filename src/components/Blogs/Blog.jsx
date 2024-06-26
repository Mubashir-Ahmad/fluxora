
import React, { useEffect, useState, useRef } from "react";
import Footer from "../footer/Footer";
import "./blog.css";
import { useTranslation } from "react-i18next";
import image1 from "../../asset/image/a1.png";
import image13 from "../../asset/image/person.png";
import image11 from "../../asset/image/a7.png";
import { Link, useLocation } from "react-router-dom";
function Blog() {
  const { t } = useTranslation();
  const location = useLocation();
  const belowSectionRef = useRef(null);
  const [isBottomAnimationVisible, setIsBottomAnimationVisible] =
    useState(false);
  const bottomRef = useRef(null);
  useEffect(() => {
      window.scrollTo(0, 0);
   
  }, []);
  return (
    <>
      <div>
        <div
          className='aboutsection1'
        >
          {/* <div className="aboutsection1 slide-inn"> */}
          <h3 className="servicesection1_heading">Our</h3> " "
          <h3 className="servicesection1_heading2">Blogs</h3>
        </div>
        <div
          className='aboutsection3'
        >
          <div className="aboutsection3_box_A">
            <div className="service_swipper_box1">
              <Link to="/blogdetail" className="blogdetail_link">
                <div className="service_swiper_content">
                  <div className="col-lg blog_uppersection4_box1">
                    <img src={image11} />
                    <p>{t("ethicalConsiderations")}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="service_swipper_box1">
              <Link to="/blogdetail" className="blogdetail_link">
                <div className="service_swiper_content">
                  <div className="col-lg blog_uppersection4_box1">
                    <img src={image11} />
                    <p>{t("ethicalConsiderations")}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="service_swipper_box1">
              <Link to="/blogdetail" className="blogdetail_link">
                <div className="service_swiper_content">
                  <div className="col-lg blog_uppersection4_box1">
                    <img src={image11} />
                    <p>{t("ethicalConsiderations")}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="service_swipper_box1">
              <Link to="/blogdetail" className="blogdetail_link">
                <div className="service_swiper_content">
                  <div className="col-lg blog_uppersection4_box1">
                    <img src={image11} />
                    <p>{t("ethicalConsiderations")}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="service_swipper_box1">
              <Link to="/blogdetail" className="blogdetail_link">
                <div className="service_swiper_content">
                  <div className="col-lg blog_uppersection4_box1">
                    <img src={image11} />
                    <p>{t("ethicalConsiderations")}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="service_swipper_box1">
              <Link to="/blogdetail" className="blogdetail_link">
                <div className="service_swiper_content">
                  <div className="col-lg blog_uppersection4_box1">
                    <img src={image11} />
                    <p>{t("ethicalConsiderations")}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;

