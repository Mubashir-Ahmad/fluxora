<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
import Footer from "../footer/Footer";

function Home() {
  const upperSectionRef = useRef(null);
  const belowSectionRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      let scaleValue = 1 + scrollValue * 0.009;
    
      // Cap the scale value to a maximum value to prevent it from increasing indefinitely
      const maxScaleValue = 2; // Adjust this value as needed
      scaleValue = Math.min(scaleValue, maxScaleValue);
    
      upperSectionRef.current.classList.toggle("zoomed", scrollValue > 70);
      setIsZoomed(scrollValue > 70);
    
      upperSectionRef.current.style.transform = `scale(${scaleValue})`;
    
      if (scrollValue > 50) {
        // If the wave has faded away, show the below section
        belowSectionRef.current.classList.add("fadeIn");
      } else {
        // If the wave is still visible, hide the below section
        belowSectionRef.current.classList.remove("fadeIn");
      }
    };
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`uppersection ${isZoomed ? "zoomed" : ""}`}
        ref={upperSectionRef}
      >
        <div className="uppersection-image">
          <img src={image2} alt="Background" />
        </div>
        <h3 className="uppersection_heading">Fluxora</h3>
      </div>
      <div className="uppersection1" ref={belowSectionRef}>
        <div className="upersection1_content">
          <div className="upersection1_content_SideA">
            <p className="upersection1_content_SideA_P">OURSTORY</p>
            <p className="upersection1_content_SideA_P2">
              Redefine the Digital Paradigms and Push the boundaries of What’s
              Possible
            </p>
          </div>
          <div className="upersection1_content_SideB">
            <p className="upersection1_content_SideB_P">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <p className="upersection1_content_SideB_P">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
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
        {/* <img src={image4}  className="upersection1_img"/> */}
        <div className="uppersection2_content">
          <div className="uppersection2_box1">
            <img src={image4} />
          </div>
          <div className="uppersection2_box2">
            {" "}
            <img src={image4} />
          </div>
          <div className="uppersection2_box3">
            {" "}
            <img src={image5} />
          </div>
          <div className="uppersection2_box4">
            {" "}
            <img src={image6} />
          </div>
          <div className="uppersection2_box5">
            {" "}
            <img src={image7} />
          </div>
          <div className="uppersection2_box5">
            {" "}
            <img src={image8} />
          </div>
        </div>
      </div>
      <div className="uppersection3">
        <h4 className="uppersection3_heading">Services</h4>
        <div className="uppersection3_content">
          <div className="uppersection3_box1">
            <h5>Content</h5>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <img src={image9} />
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <img src={image10} />
              </div>
            </div>
          </div>

          <div className="uppersection3_box1">
            <h5>Al</h5>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <img src={image9} />
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <img src={image10} />
              </div>
            </div>
          </div>
          <div className="uppersection3_box1">
            <h5>Web3.0</h5>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <img src={image9} />
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <img src={image10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uppersection4">
        <h4 className="uppersection3_heading">Blogs</h4>
        <div className="uppersection4_content">
          <div className="uppersection4_box1">
            <img src={image11} />
            <p>Ethical Considerations in AI Development</p>
          </div>
          <div className="uppersection4_box1">
            <img src={image11} />
            <p>Ethical Considerations in AI Development</p>
          </div>
          <div className="uppersection4_box1">
            <img src={image11} />
            <p>Ethical Considerations in AI Development</p>
          </div>
        </div>
      </div>
      <div className="uppersection5">
        <div className="heading_content">
          <h3>Testimonials</h3>
          <p>
            Show all
            <img src={image12} />
          </p>
        </div>
        <Swiper
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
=======
import React, { useState, useRef, useEffect } from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
import Footer from "../footer/Footer";

function Home() {
  const upperSectionRef = useRef(null);
  const belowSectionRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      let scaleValue = 1 + scrollValue * 0.009;
    
      // Cap the scale value to a maximum value to prevent it from increasing indefinitely
      const maxScaleValue = 2; // Adjust this value as needed
      scaleValue = Math.min(scaleValue, maxScaleValue);
    
      upperSectionRef.current.classList.toggle("zoomed", scrollValue > 70);
      setIsZoomed(scrollValue > 70);
    
      upperSectionRef.current.style.transform = `scale(${scaleValue})`;
    
      if (scrollValue > 50) {
        // If the wave has faded away, show the below section
        belowSectionRef.current.classList.add("fadeIn");
      } else {
        // If the wave is still visible, hide the below section
        belowSectionRef.current.classList.remove("fadeIn");
      }
    };
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`uppersection ${isZoomed ? "zoomed" : ""}`}
        ref={upperSectionRef}
      >
        <div className="uppersection-image">
          <img src={image2} alt="Background" />
        </div>
        <h3 className="uppersection_heading">Fluxora</h3>
      </div>
      <div className="uppersection1" ref={belowSectionRef}>
        <div className="upersection1_content">
          <div className="upersection1_content_SideA">
            <p className="upersection1_content_SideA_P">OURSTORY</p>
            <p className="upersection1_content_SideA_P2">
              Redefine the Digital Paradigms and Push the boundaries of What’s
              Possible
            </p>
          </div>
          <div className="upersection1_content_SideB">
            <p className="upersection1_content_SideB_P">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <p className="upersection1_content_SideB_P">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
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
        {/* <img src={image4}  className="upersection1_img"/> */}
        <div className="uppersection2_content">
          <div className="uppersection2_box1">
            <img src={image4} />
          </div>
          <div className="uppersection2_box2">
            {" "}
            <img src={image4} />
          </div>
          <div className="uppersection2_box3">
            {" "}
            <img src={image5} />
          </div>
          <div className="uppersection2_box4">
            {" "}
            <img src={image6} />
          </div>
          <div className="uppersection2_box5">
            {" "}
            <img src={image7} />
          </div>
          <div className="uppersection2_box5">
            {" "}
            <img src={image8} />
          </div>
        </div>
      </div>
      <div className="uppersection3">
        <h4 className="uppersection3_heading">Services</h4>
        <div className="uppersection3_content">
          <div className="uppersection3_box1">
            <h5>Content</h5>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <img src={image9} />
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <img src={image10} />
              </div>
            </div>
          </div>

          <div className="uppersection3_box1">
            <h5>Al</h5>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <img src={image9} />
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <img src={image10} />
              </div>
            </div>
          </div>
          <div className="uppersection3_box1">
            <h5>Web3.0</h5>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <img src={image9} />
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <div className="overlay_content_A">
                  <p>Content Strategy</p>
                </div>
                <img src={image10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uppersection4">
        <h4 className="uppersection3_heading">Blogs</h4>
        <div className="uppersection4_content">
          <div className="uppersection4_box1">
            <img src={image11} />
            <p>Ethical Considerations in AI Development</p>
          </div>
          <div className="uppersection4_box1">
            <img src={image11} />
            <p>Ethical Considerations in AI Development</p>
          </div>
          <div className="uppersection4_box1">
            <img src={image11} />
            <p>Ethical Considerations in AI Development</p>
          </div>
        </div>
      </div>
      <div className="uppersection5">
        <div className="heading_content">
          <h3>Testimonials</h3>
          <p>
            Show all
            <img src={image12} />
          </p>
        </div>
        <Swiper
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swipper_box1">
              <div className="swiper_content">
                <div className="icon_box">
                  <img src={image13} />
                </div>
                <p className="swiper_p1">David Gillroy</p>
                <p className="swiper_p2">Digital Artist at Digital Group</p>
                <div className="swiper_box">
                  <p className="swiper_p3">
                    ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly
                    adopting a new digital lending strategy to make most popular
                    streamline the web process’’
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
>>>>>>> f7d8722 (ten commit)
