import React, { useState, useRef, useEffect } from "react";
import "./home.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/autoplay"; // Import autoplay CSS
import "swiper/modules";
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
import image13 from "../../asset/image/home-image-1 1.png"
import image20 from "../../asset/image/airbnb.png"
import image21 from "../../asset/image/g18.png"
import image22 from "../../asset/image/Group 481736.png"
import image23 from "../../asset/image/Group 481737.png"
import image24 from "../../asset/image/test1.png"
import image25 from "../../asset/image/test2.png"
import image26 from "../../asset/image/test3.png"
import image27 from "../../asset/image/test5.png"
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
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
        setSlidesPerView(3);
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
  const handleButtonClick = () => {
    console.log("nottttt");
    navigate("/aboutus");
  };
  console.log('navigate',navigate)
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
        className={`bottom-animation container-fluid ${
          isBottomAnimationVisible ? "slide-iin" : ""
        }`}
      >
         <div className="row fluxora_technology">
          <div className="col-lg" style={{paddingTop:'10px'}}>
          <img src={image13} className="fluxora_technology_img"/>
          </div>
          <div className="col-lg" style={{paddingLeft: '10px'}} >
            <div className="fluxora_tech .upersection1_imgg" style={{display:"flex",flexDirection:'column',justifyContent:'flex-start'}}>
            <div style={{borderLeft:'solid 4px #1BACD1',marginTop:'10px'}}>
              <h1 style={{color:'#1BACD1',fontSize:'39px',textAlign:'left',fontWeight:'600',paddingLeft:'30px' }}className="lop">Fluxora</h1>
            </div>
              <p style={{color:'#1BACD1',fontSize:'22px',textAlign:'left',paddingLeft:'33px'}} className="loop_1">Technology</p>
          <h2 style={{color:'white',fontSize:'22px',fontWeight:'500',textAlign:'justify',marginTop:'15px',paddingLeft:'30px'}} className="opensans">Welcome to <span style={{ color: "#1bacd1",fontWeight:"600" }}>Fluxora</span>, where innovation meets tradition to forge the future.</h2>
        <p style={{color:'white',fontSize:'22px',textAlign:'justify',fontWeight:'500',margin:'10px 0px' ,paddingLeft:'30px'} } className="opensans">At <span style={{ color: "#1bacd1",fontWeight:"600" }}>Fluxora</span>, we believe in challenging the status quo to deliver unique, cutting-edge solutions in AI, Web3, and Content Strategy.</p>
        <p style={{color:'white',fontSize:'22px',textAlign:'justify',fontWeight:'500',paddingLeft:'30px'}} className="opensans" >Our mission is to empower businesses to navigate the ever-evolving digital landscape with confidence. Join us on a journey of transformation and let's redefine what's possible together.</p>    
        <Button
              type="button"
              className="btn btn-light fluxora_btn"
              onClick={handleButtonClick}
            >
              <p className="opensans" style={{margin:'0px',textAlign:'center',color:'white',letterSpacing:2}}>LEARN MORE</p>
            </Button>
          </div>
          </div>
        </div>
        </div>
      <div
        ref={(node) => {
          bottomRef.current = node;
          belowSectionRef.current = node;
        }}
        className={`bottom-animation container-fluid ${
          isBottomAnimationVisible ? "slide-iin" : ""
        }`}
        style={{
          width:'90%',
          paddingTop:'50px'
          // , paddingLeft:'40px',
          // paddingRight:'40px'
        }}
      >
        <div className="row" style={{display:'flex',justifyContent:'center',margin:'40px 0px'}}>
        {/* <h3 className="aboutsection1_heading" style={{width:'0%'}}>{t("aboutus")}</h3> " "
        <h3 className="aboutsection1_heading2" style={{width:'20%'}}>{t("us")}</h3>      */}
        <h3 className="aa_heading" >OUR<span className="a_heading2" > STORY</span> </h3> 
        {/* " "
        <h3 className="aboutsection1_heading2" style={{width:'25%'}}>STORY</h3> */}
        </div>
        <div className="row">
          {/* <p className="upersection1_content_SideA_P2">
            {t("ourStoryDescription")}
          </p> */}
          <p className="upersection1_content_SideA_P2 service_ai_heading">
          <span style={{ color: "#1bacd1",fontWeight:"600" }}>Fluxora </span>is not just embracing the future; it is creating it.
          </p>
        </div>
        <div className="row">
          <div className="col-lg ourstory">
            {/* <p className="upersection1_content_SideB_P">{t("first_content")}</p> */}
            <p className="upersection1_content_SideB_P service_ai_heading"><span style={{ color: "#1bacd1",fontWeight:"600" }}>Fluxora's</span> journey began with a vision to create change over time. Founded by a team of visionaries passionate about technology and innovation, our foundation is built on a relentless pursuit of innovation, aiming to not only meet but exceed the expectations of the digital era and pave the way for groundbreaking achievements.</p>
            <Button
              type="button"
              className="btn btn-light upersection1_content_SideB_Button"
              onClick={handleButtonClick}
            >
              <p className="opensans" style={{fontWeight:'600',margin:'0px',textAlign:'center'}}>
                Learn More About Us
                </p>
            </Button>
          </div>
          <div className="col-lg">
            <img src={image3} className="upersection1_img" />
          </div>
        </div>
          <div className="row" style={{width:'97%',paddingTop:'10%'}}>
            <div className="col-lg" style={{marginTop:'10px'}}>
              <div style={{borderLeft:'solid 4px #1BACD1',marginTop:'10px'}}>
                <h2 style={{color:'white',fontWeight:'500',position:'relative',zIndex:999,fontSize:'35px',textAlign:'justify',marginLeft:'25px'}} className="lop">
                We work with big and small companies
                </h2>
              </div>
              <h3 className="service_ai" style={{color: '#A9A7B0',lineHeight:'2',margin:'30px 10px 10px 27px',fontSize:'22px',fontWeight:'500',position:'relative',zIndex:999,textAlign:'justify'}}>
              At <span style={{ color: "#1bacd1",fontWeight:"600" }}>Fluxora</span>, we pride ourselves on our versatile expertise and our ability to cater to the needs of both large enterprises and small businesses. Our proficiency in various domains  is reflected in our success rates:
              </h3>
              <h3 className="service_ai" style={{color: '#A9A7B0',lineHeight:'2',margin:'30px 10px 10px 27px',fontSize:'22px',textAlign:'justify',fontWeight:'500',position:'relative',zIndex:999}}>
              Partner with <span style={{ color: "#1bacd1",fontWeight:"600" }}>Fluxora</span>, where expertise meets excellence, regardless of the size of your business.
              </h3>
            </div>
            <div className="col-lg" style={{marginTop:'10px'}}>
                  <div className="progress_bar">
                    <p>AI DEVELOPMENT</p>
                    <p>92%</p>
                  </div>
            <ProgressBar variant="success" now={90} />
            <div className="progress_bar">
                    <p>INFORMATION ARCHITECTURE</p>
                    <p>98%</p>
                  </div>
            <ProgressBar variant="info" now={98} />
            <div className="progress_bar">
                    <p>USER EXPERIENCES</p>
                    <p>95%</p>
              </div>
            <ProgressBar variant="warning" now={95} />
            <div className="progress_bar">
                    <p>USER INTERFACE</p>
                    <p>88%</p>
                  </div>
            <ProgressBar variant="danger" now={88} />
            </div>
          </div>
      </div>
      <div className="yyy" style={{ marginTop: "10%" }}>
        <div className="container-fluid uppersection3" style={{width:'85%',paddingBottom:'5%'}}>
          <div className="row" style={{ padding: "65px 0px" }}>
            <h4 className="uppersection3_heading service_ai_heading">Services</h4>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg uppersection3_box1">
              <h5 className="service_ai_heading">Content Strategy</h5>
              <p className="service_ai" style={{color:'white',fontSize:'17px',textAlign:'justify',fontWeight:'500'}}>In a world flooded with information, Fluxora crafts content that cuts through the noise. Our strategic approach ensures your message not only reaches but resonates with your audience, driving engagement and fostering lasting connections. Let's tell your story in a way that captivates and convinces.</p>
              <img src={image9} />
              <div className="overlay">
                <div className="overlay-content">
                  <div className="overlay_content_A">
                    <Link className="overlay_link" to="/service?fromHome=true">
                      <p>Content Strategy</p>
                    </Link>
                  </div>
                  <div className="overlay_content_A">
                    <Link className="overlay_link" to="/service?fromHome=true">
                      <p>Short Form Content</p>
                    </Link>
                  </div>
                  <div className="overlay_content_A">
                    <Link className="overlay_link" to="/service?fromHome=true">
                      <p>AI-Generated Faceless Content</p>
                    </Link>
                  </div>
                  <div className="overlay_content_A">
                    <Link className="overlay_link" to="/service?fromHome=true">
                      <p>Content Automation</p>
                    </Link>
                  </div>
                 
                  <img src={image10} />
                </div>
              </div>
            </div>
            <div className="col-lg uppersection3_box1">
              <h5 className="service_ai_heading">AI</h5>
              <p className="service_ai" style={{color:'white',fontSize:'17px',textAlign:'justify',fontWeight:'500'}}>At Fluxora, AI is more than just technology; it's the key to unlocking unprecedented opportunities for growth and innovation. Our AI solutions are designed to transform complex challenges into simple solutions, optimizing operations and enhancing decision-making processes. Embrace AI with Fluxora and lead the charge in your industry.</p>
              <img src={image9} />
              <div className="overlay">
                <div className="overlay-content">
                <div className="overlay_content_A">
                    <Link className="overlay_link" to="/service?fromHome=true">
                      <p>Automation</p>
                    </Link>
                  </div>
                  <div className="overlay_content_A">
                    <Link className="overlay_link" to="/service?fromHome=true">
                      <p>Chatbots</p>
                    </Link>
                  </div>
                  <img src={image10} />
                </div>
              </div>
            </div>
            <div className="col-lg uppersection3_box1">
              <h5 className="service_ai_heading">Web3.0</h5>

              <p style={{color:'white',fontSize:'17px',textAlign:'justify',fontWeight:'500',}} className="service_ai">Step into the future with Fluxora's Web3 services, where decentralization opens up a new realm of possibilities. From blockchain to digital assets, our expertise empowers clients to navigate the Web3 space confidently. Whether it's launching an NFT project or integrating blockchain technology, Fluxora is your gateway to the next digital revolution.</p>
              <img src={image9} />
              <div className="overlay">
                <div className="overlay-content">
                <div className="overlay_content_A">
                    <Link className="overlay_link" to="/service?fromHome=true">
                      <p>Marketing</p>
                    </Link>
                  </div>
                  <div className="overlay_content_A">
                    <Link className="overlay_link" to="/service?fromHome=true">
                      <p>Community Building</p>
                    </Link>
                  </div>
                  <div className="overlay_content_A">
                    <Link className="overlay_link" to="/service?fromHome=true">
                      <p>Smart Contract Services</p>
                    </Link>
                  </div>
                  {/* <div className="overlay_content_A">
                    <Link className="overlay_link" to="/service?fromHome=true">
                      <p>{t("contentautomation")}</p>
                    </Link>
                  </div> */}
                  <img src={image10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row fluxora-waw">
      <div className="upersection2_img">
        {/* <img src={image14} className="uppersection2_content" /> */}
          {/* <div className="col-md home_img">
          <img src={image4} alt="*"/>
          </div> */}
          <div className="home_image_box">
          <div className="col-md home_img"><img src={image20} alt="*"/></div>
          <div className="col-md home_img"><img src={image21} alt="*"/></div>
          <div className="col-md home_img"><img src={image22} alt="*"/></div>
          <div className="col-md home_img"><img src={image23} alt="*"/></div>
        </div>
          </div>
      </div>
      </div>
      <div className="yyy">
      <div className="blog_container">
        <div className="container">
          <div className="row" style={{ padding: "65px 0px" }}>
            <h4 className="blog_heading service_ai_heading">Blogs</h4>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <Swiper
              slidesPerView={slidesPerVieww}
              modules={[Autoplay]}
              autoplay={{ delay: 5000 }}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link to="/blog?fromHomee=true" className="op">
                  {" "}
                  <div className="col-lg uppersection4_box1">
                    <img src={image11} style={{zIndex:'999'}} />
                    <p>Ethical Considerations in AI Development</p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/blog?fromHomee=true" className="op">
                  {" "}
                  <div className="col-lg uppersection4_box1">
                    <img src={image11} />
                    <p>Ethical Considerations in AI Development</p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/blog?fromHomee=true" className="op">
                  {" "}
                  <div className="col-lg uppersection4_box1">
                    <img src={image11} />
                    <p>Ethical Considerations in AI Development</p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/blog?fromHomee=true" className="op">
                  {" "}
                  <div className="col-lg uppersection4_box1">
                    <img src={image11} />
                    <p>Ethical Considerations in AI Development</p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/blog?fromHomee=true" className="op">
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
      </div>
     
        <div className="uppersection5">
          <div className="heading_content">
            <h3 style={{zIndex:'999'}}>Testimonials</h3>
            <p style={{zIndex:'999'}}>
              Show all
              <img src={image12} />
            </p>
          </div>
          {/* <Swiper
            slidesPerView={slidesPerView}
            navigation={true}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            className="mySwiper"
          > */}

            {/* <SwiperSlide> */}
            <div className="container-fluid">
            <div className="row mySwipper">
              <div className="col-lg swipper_box1">
                <div className="swiper_content">
                  <img src={image27} />
                  <div className="swiper_box">
                    <p className="swiper_p3" style={{position:'relative',zIndex:'999'}}>AI is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image25} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Herman Jensen</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>
              </div>
            {/* </SwiperSlide>
            <SwiperSlide> */}
              <div className=" col-lg swipper_box1">
                <div className="swiper_content">
                  <img src={image27} />
                  <div className="swiper_box">
                    <p className="swiper_p3">AI makes your life easier. If you're lucky to have it, you're lucky.</p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image24} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Steve Mark</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>
              </div>
            {/* </SwiperSlide>
            <SwiperSlide> */}
              <div className="col-lg swipper_box1">
                <div className="swiper_content">
                  <img src={image27} />
                  <div className="swiper_box">
                    <p className="swiper_p3">It is usually people in the Data business, Fintech, and Software trade that are really rich.</p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image26} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Kenn Gallagher</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            {/* </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className="swipper_box1">
                <div className="swiper_content">
                  <img src={image15} />
                  <div className="swiper_box">
                    <p className="swiper_p3">AI is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
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
                    <p className="swiper_p3">AI is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
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
                    <p className="swiper_p3">AI is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
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
                    <p className="swiper_p3">AI is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
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
                    <p className="swiper_p3">AI is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
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
                    <p className="swiper_p3">AI is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
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
            </SwiperSlide> */}
          {/* </Swiper> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;