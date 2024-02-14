import React from "react";
import Footer from "../footer/Footer";
import './blog.css'
import { useTranslation } from "react-i18next";
import image1 from "../../asset/image/a1.png";
import image13 from "../../asset/image/person.png";
import image11 from "../../asset/image/a7.png";
import { Link } from "react-router-dom";
function Blog() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="aboutsection1">
          <h3>OurBlogs</h3>
        </div>
        <div className="aboutsection3">
          <div className="aboutsection3_box_A">
            <div className="service_swipper_box1">
              <div className="service_swiper_content">
                <div className="col-lg uppersection4_box1">
                  <img src={image11} />
                  <p>{t("ethicalConsiderations")}</p>
                </div>
              </div>
            </div>
            <div className="service_swipper_box1">
            <div className="service_swiper_content">
              <div className="col-lg uppersection4_box1">
                <img src={image11} />
                <p>{t("ethicalConsiderations")}</p>
              </div>
            </div>
            </div>
            <div className="service_swipper_box1">
              <div className="service_swiper_content">
                <div className="col-lg uppersection4_box1">
                  <img src={image11} />
                  <p>{t("ethicalConsiderations")}</p>
                </div>
            </div>
            </div>
            <div className="service_swipper_box1">
              <div className="service_swiper_content">
                <div className="col-lg uppersection4_box1">
                  <img src={image11} />
                  <p>{t("ethicalConsiderations")}</p>
                </div>
            </div>
            </div>
            <div className="service_swipper_box1">
              <Link to='/blogdetail'>
              <div className="service_swiper_content">
                <div className="col-lg uppersection4_box1">
                  <img src={image11} />
                  <p>{t("ethicalConsiderations")}</p>
                </div>
            </div>
              </Link>
            </div>
            <div className="service_swipper_box1">
              <div className="service_swiper_content">
                <div className="col-lg uppersection4_box1">
                  <img src={image11} />
                  <p>{t("ethicalConsiderations")}</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
