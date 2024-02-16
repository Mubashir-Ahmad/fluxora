import React, { useState, useRef, useEffect } from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/autoplay"; // Import autoplay CSS
import "swiper/modules";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import image15 from "../../asset/image/a9.png";
import image16 from "../../asset/image/a10.png";
import image2 from "../../asset/image/Group.png";
import image3 from "../../asset/image/a1.png";
import image4 from "../../asset/image/partner-1_1.png.png";
import image5 from "../../asset/image/a3.png";
import image6 from "../../asset/image/a4.png";
import image7 from "../../asset/image/a5.png";
import image8 from "../../asset/image/a6.png";
import image9 from "../../asset/image/Frame 16.png";
import image10 from "../../asset/image/Vector (1).png";
import image11 from "../../asset/image/a7.png";
import image12 from "../../asset/image/chevron-right.png";
import image13 from "../../asset/image/person.png";
import image14 from "../../asset/image/a8.png";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const upperSectionRef = useRef(null);
  const belowSectionRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [slidesPerVieww, setSlidesPerVieww] = useState(3);
  const [isBottomAnimationVisible, setIsBottomAnimationVisible] =
    useState(false);
  const bottomRef = useRef(null);
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
  }, [belowSectionRef]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      let scaleValue = 1 + scrollValue * 0.009;

      // Cap the scale value to a maximum value to prevent it from increasing indefinitely
      const maxScaleValue = 9; // Adjust this value as needed
      scaleValue = Math.min(scaleValue, maxScaleValue);
      if (upperSectionRef.current) {
        upperSectionRef.current.classList.toggle("zoomed", scrollValue > 100);
        setIsZoomed(scrollValue > 100);
        upperSectionRef.current.style.transform = `scale(${scaleValue})`;
      }
      // upperSectionRef.current.classList.toggle("zoomed", scrollValue > 80);
      // setIsZoomed(scrollValue > 80);

      // upperSectionRef.current.style.transform = `scale(${scaleValue})`;

      if (scrollValue > 100) {
        // If the wave has faded away, show the below section
        belowSectionRef.current.classList.add("fadeIn");
      } else {
        // If the wave is still visible, hide the below section
        belowSectionRef.current.classList.remove("fadeIn");
      }
    };
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
      if (window.innerWidth < 990) {
        setSlidesPerVieww(1);
      } else {
        setSlidesPerVieww(3);
      }
      if (window.innerWidth < 600) {
        setSlidesPerVieww(1);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <div
        className={`uppersection ${isZoomed ? "zoomed" : ""}`}
        ref={upperSectionRef}
      >
        <div className="uppersection-image">
          <img src={image2} alt="Background" />
        </div>
        <h3 className="uppersection_heading">Fluxora</h3>
      </div>
      <div
        ref={(node) => {
          bottomRef.current = node;
          belowSectionRef.current = node;
        }}
        className={`bottom-animation container ${
          isBottomAnimationVisible ? "slide-iin" : ""
        }`}
      >
        <div className="row">
          <p className="upersection1_content_SideA_P ">{t("ourStory")}</p>
        </div>
        <div className="row">
          <div className="col-md">
            <p className="upersection1_content_SideA_P2">
              {t("ourStoryDescription")}
            </p>
          </div>
          <div className="col-md ourstory">
            <p className="upersection1_content_SideB_P">
              {t("contentDescription")}
            </p>
            <p className="upersection1_content_SideB_P">
              {t("contentDescription")}
            </p>
            <button
              type="button"
              className="btn btn-light upersection1_content_SideB_Button"
            >
              Light
            </button>
          </div>
        </div>
        <img src={image3} className="upersection1_img" />
      </div>
      <div className="upersection2_img">
        <img src={image14} className="uppersection2_content" />
      </div>
      <div className="container uppersection3">
        <div className="row" style={{ padding: "30px 0px" }}>
          <h4 className="uppersection3_heading">Services</h4>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-lg uppersection3_box1">
            <h5>{t("content")}</h5>
            <p>{t("contentDescription")}</p>
            <img src={image9} />
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <img src={image10} />
              </div>
            </div>
          </div>
          <div className="col-lg uppersection3_box1">
            <h5>{t("AI")}</h5>
            <p>{t("contentDescription")}</p>
            <img src={image9} />
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <img src={image10} />
              </div>
            </div>
          </div>
          <div className="col-lg uppersection3_box1">
            <h5>{t("Web3.0")}</h5>
            <p>{t("contentDescription")}</p>
            <img src={image9} />
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <div className="overlay_content_A">
                  <Link className="overlay_link" to="/service?fromHome=true">
                    <p>{t("contentStrategy")}</p>
                  </Link>
                </div>
                <img src={image10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ padding: "30px 0px" }}>
          <h4 className="uppersection3_heading">{t("blogs")}</h4>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <Swiper
            slidesPerView={slidesPerVieww}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link
                to={{ pathname: "/blog", state: { scrollToTop: true } }}
                // to='blog'
              >
                {" "}
                <div className="col-lg uppersection4_box1">
                  <img src={image11} />
                  <p>{t("ethicalConsiderations")}</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={{ pathname: "/blog", state: { scrollToTop: true } }}>
                {" "}
                <div className="col-lg uppersection4_box1">
                  <img src={image11} />
                  <p>{t("ethicalConsiderations")}</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={{ pathname: "/blog", state: { scrollToTop: true } }}>
                {" "}
                <div className="col-lg uppersection4_box1">
                  <img src={image11} />
                  <p>{t("ethicalConsiderations")}</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={{ pathname: "/blog", state: { scrollToTop: true } }}>
                {" "}
                <div className="col-lg uppersection4_box1">
                  <img src={image11} />
                  <p>{t("ethicalConsiderations")}</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={{ pathname: "/blog", state: { scrollToTop: true } }}>
                {" "}
                <div className="col-lg uppersection4_box1">
                  <img src={image11} />
                  <p>{t("ethicalConsiderations")}</p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="uppersection5">
        <div className="heading_content">
          <h3>{t("testimonials")}</h3>
          <p>
            {t("showAll")}
            <img src={image12} />
          </p>
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swipper_box1">
              <div className="swiper_content">
                <img src={image15} />
                <div className="swiper_box">
                  <p className="swiper_p3">{t("contentDescription")}</p>
                </div>
                <div className="swiper_box1">
                  <img src={image16} />
                  <div className="swiper_box2">
                    <p className="swiper_box2_para">Kenn Gallagher</p>
                    <p className="swiper_box2_para1">Found & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swipper_box1">
              <div className="swiper_content">
                <img src={image15} />
                <div className="swiper_box">
                  <p className="swiper_p3">{t("contentDescription")}</p>
                </div>
                <div className="swiper_box1">
                  <img src={image16} />
                  <div className="swiper_box2">
                    <p className="swiper_box2_para">Kenn Gallagher</p>
                    <p className="swiper_box2_para1">Found & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swipper_box1">
              <div className="swiper_content">
                <img src={image15} />
                <div className="swiper_box">
                  <p className="swiper_p3">{t("contentDescription")}</p>
                </div>
                <div className="swiper_box1">
                  <img src={image16} />
                  <div className="swiper_box2">
                    <p className="swiper_box2_para">Kenn Gallagher</p>
                    <p className="swiper_box2_para1">Found & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swipper_box1">
              <div className="swiper_content">
                <img src={image15} />
                <div className="swiper_box">
                  <p className="swiper_p3">{t("contentDescription")}</p>
                </div>
                <div className="swiper_box1">
                  <img src={image16} />
                  <div className="swiper_box2">
                    <p className="swiper_box2_para">Kenn Gallagher</p>
                    <p className="swiper_box2_para1">Found & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swipper_box1">
              <div className="swiper_content">
                <img src={image15} />
                <div className="swiper_box">
                  <p className="swiper_p3">{t("contentDescription")}</p>
                </div>
                <div className="swiper_box1">
                  <img src={image16} />
                  <div className="swiper_box2">
                    <p className="swiper_box2_para">Kenn Gallagher</p>
                    <p className="swiper_box2_para1">Found & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swipper_box1">
              <div className="swiper_content">
                <img src={image15} />
                <div className="swiper_box">
                  <p className="swiper_p3">{t("contentDescription")}</p>
                </div>
                <div className="swiper_box1">
                  <img src={image16} />
                  <div className="swiper_box2">
                    <p className="swiper_box2_para">Kenn Gallagher</p>
                    <p className="swiper_box2_para1">Found & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swipper_box1">
              <div className="swiper_content">
                <img src={image15} />
                <div className="swiper_box">
                  <p className="swiper_p3">{t("contentDescription")}</p>
                </div>
                <div className="swiper_box1">
                  <img src={image16} />
                  <div className="swiper_box2">
                    <p className="swiper_box2_para">Kenn Gallagher</p>
                    <p className="swiper_box2_para1">Found & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swipper_box1">
              <div className="swiper_content">
                <img src={image15} />
                <div className="swiper_box">
                  <p className="swiper_p3">{t("contentDescription")}</p>
                </div>
                <div className="swiper_box1">
                  <img src={image16} />
                  <div className="swiper_box2">
                    <p className="swiper_box2_para">Kenn Gallagher</p>
                    <p className="swiper_box2_para1">Found & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
