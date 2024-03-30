<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import "./aboutus.css";
import image1 from "../../asset/image/a1.png";
import image13 from "../../asset/image/person.png";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import image2 from "../../asset/image/image5.png";
import image3 from "../../asset/image/image8.png";
import image4 from "../../asset/image/imagee7.png";
import { useTranslation } from "react-i18next";
function Aboutus() {
  const { t } = useTranslation();
  const [counterValue, setCounterValue] = useState(0);
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
  }, []);
  const updateCounter = () => {
    const targetValue = 1616372; // Target value to reach
    const increment = 100000000; // Increment value for each step
    let currentValue = 0;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        // If the current value exceeds or equals the target value, stop the interval
        clearInterval(interval);
        setCounterValue(targetValue);
      } else {
        setCounterValue(currentValue);
      }
    }, 100); // Adjust the interval duration as needed
  };

  useEffect(() => {
    // Call the function to start the counter when the component mounts
    updateCounter();
  }, []);

  return (
    <div>
      <div className="aboutsection1 slide-inn">
        <h3 className="aboutsection1_heading">{t("aboutus")}</h3> " "
        <h3 className="aboutsection1_heading2">{t("us")}</h3>
      </div>
      <div className="aboutsection2 element-to-animate slide-in">
        <h4 className="aboutsection2_heading">{t("ourStoryDescription")}</h4>
        <p className="aboutsection2_para">
          {t("contentDescription")}
          {t("contentDescription")}
          {t("contentDescription")}
          {t("contentDescription")}
        </p>
        <div className="container element-to-animate slide-in">
        <h3 className="heading_content_3">${counterValue.toLocaleString()}</h3>
          <p className="heading_content_4">
            Value generated for clients within 1 year of bussiness
          </p>
        </div>
        <img src={image1} className=" aboutsection2_img" />
      </div>
      <div className="container">
        <div className="row">
          <h4 className="uppersection3_heading">Futute Proofing Partners</h4>
        </div>
      </div>
      <div className="about_container">
        <div className="container">
          <div className="row ">
            <div className="col-md">
              <img src={image2} />
            </div>
            <div className="col-md ElunaAI">
              <h4>Eluna.AI</h4>
              <p>
                THE WORLD'S LEADING ARTIFICIAL INTELLIGENCE PLATFORM FOR
                CREATORS AND THE MOST ACTIVE AI COMMUNITY IN THE WORLD. ELUNA AI
                HAS BEEN AT THE FOREFRONT OF THE GENERATIVE AI WAVE SINCE DAY 1.
                WE WERE TASKED TO DEVELOP THEIR AI-POWERED CONTENT STRATEGY AND
                TOOK THEM FROM A MEASLY 2000 FOLLOWERS TO 11,000 ON TWITTER,
                WHILE MAINTAINING 200,000+ ON INSTAGRAM... IN 2 MONTHS. FLUXORA
                ALSO CONDUCTED ROUTINE CHECKS FOR THEIR GENERATIVE AI PLATFORM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about_container">
        <div className="container">
          <div className="row ">
            {/* <img src={image3}/> */}
            <div className="col-md ElunaAI">
              <h4>Meta hub technologies</h4>
              <p>
                METAHUB TECHNOLOGIES ARE THE CREATORS OF ZENOGAKKI. THE WORLD'S
                FIRST DECENTRALIZED ANIME BRAND IN COLLABORATION WITH TONEPLUS
                JAPAN. ESTABLISHED IN THE UAE, FLUXORA SPENT AN ENTIRE YEAR
                DEVELOPING THEIR COMMUNITY BUILDING STRATEGY AND CONDUCTED
                PRE-MINT CONSULTATION ON THEIR BLOCKCHAIN INFRASTRUCTURE FOR
                THEIR NFT LAUNCH. ULTIMATELY HELPING THEM GENERATE A WHOPPING
                $1,700,000 WITHIN 5 HOURS OF THE PUBLIC SALE.
              </p>
            </div>
            <div className="col-md">
              <img src={image3} />
            </div>
          </div>
        </div>
      </div>
      <div className="about_container">
        <div className="container">
          <div className="row ">
            <div className="col-md">
              <img src={image4} />
            </div>
            <div className="col-md ElunaAI">
              <h4>Metav3ase</h4>
              <p>
                THE WORLD'S LEADING AND MOST POPULAR WEB3 MEDIA DISTRUBTION
                BRAND. METAVERSE NOW STANDS AT A STAGGERING 1.3 MILLION
                FOLLOWERS. FLUXORA WAS TASKED TO HELP THEM DEVELOP THEIR
                COMMUNITY, EDIT CONTENT, CONDUCT LIVE AUDIENCE TWITTER SPACES
                AND EVEN CRAFT THEIR LINKEDIN STRATEGY.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={bottomRef}
        className={`bottom-animation aboutsection3 ${
          isBottomAnimationVisible ? "slide-iin" : ""
        }`}
      >
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
=======
import React, { useEffect, useRef, useState } from "react";
import "./aboutus.css";
import image1 from "../../asset/image/a1.png";
import image13 from "../../asset/image/person.png";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import image2 from "../../asset/image/image5.png";
import image3 from "../../asset/image/image8.png";
import image4 from "../../asset/image/imagee7.png";
import { useTranslation } from "react-i18next";
function Aboutus() {
  const { t } = useTranslation();
  const [counterValue, setCounterValue] = useState(0);
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
  }, []);
  const updateCounter = () => {
    const targetValue = 1616372; // Target value to reach
    const increment = 100000000; // Increment value for each step
    let currentValue = 0;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        // If the current value exceeds or equals the target value, stop the interval
        clearInterval(interval);
        setCounterValue(targetValue);
      } else {
        setCounterValue(currentValue);
      }
    }, 100); // Adjust the interval duration as needed
  };

  useEffect(() => {
    // Call the function to start the counter when the component mounts
    updateCounter();
  }, []);

  return (
    <div>
      <div className="aboutsection1 slide-inn">
        <h3 className="aboutsection1_heading">About</h3>
        <h3 className="aboutsection1_heading2">Us</h3>
      </div>
      <div className="aboutsection2 element-to-animate slide-in">
        <h4 className="aboutsection2_heading">{t("ourStoryDescription")}</h4>
        {/* <p className="aboutsection2_para">
          {t("contentDescription")}
          {t("contentDescription")}
          {t("contentDescription")}
          {t("contentDescription")}
        </p> */}
          <p className="aboutsection2_para" style={{fontSize:'19px',textAlign:'justify'}}>
          At Fluxora, we redefine innovation with every project we undertake. Our collaborations with industry pioneers like Metav3rse and Eluna.AI, and our groundbreaking launches of sought-after NFT projects, showcase our unwavering dedication to excellence and ingenuity. 
        </p>
        <p className="aboutsection2_para" style={{fontSize:'19px',textAlign:'justify'}}>
        As a hub for technology enthusiasts and visionary creators, we’re not just participants in the digital transformation; we’re its architects.Our mission extends beyond providing cutting-edge solutions in AI, Web3, and content strategy; it’s about crafting a legacy that influences the tech landscape for generations to come.   
        </p>
     
        <div className="container element-to-animate slide-in">
        <h3 className="heading_content_3">${counterValue.toLocaleString()}</h3>
          <p className="heading_content_4" style={{fontSize:'19px',textAlign:'center'}}>
        Join us on this journey and witness how we’re setting new standards, one success at a time.
        </p>
        </div>
        <img src={image1} className=" aboutsection2_img" />
      </div>
      <div className="container">
        <div className="row">
          <h4 className="uppersection3_heading">Futute Proofing Partners</h4>
        </div>
      </div>
      <div className="about_container">
        <div className="container">
          <div className="row ">
            <div className="col-md">
              <img src={image2} />
            </div>
            <div className="col-md ElunaAI">
              <h4>Eluna.AI</h4>
              <p>
                THE WORLD'S LEADING ARTIFICIAL INTELLIGENCE PLATFORM FOR
                CREATORS AND THE MOST ACTIVE AI COMMUNITY IN THE WORLD. ELUNA AI
                HAS BEEN AT THE FOREFRONT OF THE GENERATIVE AI WAVE SINCE DAY 1.
                WE WERE TASKED TO DEVELOP THEIR AI-POWERED CONTENT STRATEGY AND
                TOOK THEM FROM A MEASLY 2000 FOLLOWERS TO 11,000 ON TWITTER,
                WHILE MAINTAINING 200,000+ ON INSTAGRAM... IN 2 MONTHS. FLUXORA
                ALSO CONDUCTED ROUTINE CHECKS FOR THEIR GENERATIVE AI PLATFORM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about_container">
        <div className="container">
          <div className="row ">
            {/* <img src={image3}/> */}
            <div className="col-md ElunaAI">
              <h4>Meta hub technologies</h4>
              <p>
                METAHUB TECHNOLOGIES ARE THE CREATORS OF ZENOGAKKI. THE WORLD'S
                FIRST DECENTRALIZED ANIME BRAND IN COLLABORATION WITH TONEPLUS
                JAPAN. ESTABLISHED IN THE UAE, FLUXORA SPENT AN ENTIRE YEAR
                DEVELOPING THEIR COMMUNITY BUILDING STRATEGY AND CONDUCTED
                PRE-MINT CONSULTATION ON THEIR BLOCKCHAIN INFRASTRUCTURE FOR
                THEIR NFT LAUNCH. ULTIMATELY HELPING THEM GENERATE A WHOPPING
                $1,700,000 WITHIN 5 HOURS OF THE PUBLIC SALE.
              </p>
            </div>
            <div className="col-md">
              <img src={image3} />
            </div>
          </div>
        </div>
      </div>
      <div className="about_container">
        <div className="container">
          <div className="row ">
            <div className="col-md">
              <img src={image4} />
            </div>
            <div className="col-md ElunaAI">
              <h4>Metav3ase</h4>
              <p>
                THE WORLD'S LEADING AND MOST POPULAR WEB3 MEDIA DISTRUBTION
                BRAND. METAVERSE NOW STANDS AT A STAGGERING 1.3 MILLION
                FOLLOWERS. FLUXORA WAS TASKED TO HELP THEM DEVELOP THEIR
                COMMUNITY, EDIT CONTENT, CONDUCT LIVE AUDIENCE TWITTER SPACES
                AND EVEN CRAFT THEIR LINKEDIN STRATEGY.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={bottomRef}
        className={`bottom-animation aboutsection3 ${
          isBottomAnimationVisible ? "slide-iin" : ""
        }`}
      >
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
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
                <p className="about_swiper_p3">{t("testimonialQuote")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
>>>>>>> f7d8722 (ten commit)
