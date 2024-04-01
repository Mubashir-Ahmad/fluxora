import React,{useEffect} from "react";
import "./service.css";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
      <div className="aboutsection1 slide-inn">
        <h3 className="servicesection1_heading">{t('our')}
        </h3> " "
        <h3 className="servicesection1_heading2">{t('services')}</h3>
      </div>
      <div className="container-fluid service_content">
        <div className="container service_main_box sslide-in">
          <h5>Content Strategy</h5>
          <p>
          In a world flooded with information, Fluxora crafts content that cuts through the noise. Our strategic approach ensures your message not only reaches but resonates with your audience, driving engagement and fostering lasting connections. Let's tell your story in a way that captivates and convinces.
          </p>
          <div className="row">
            <div className="col-lg service_content_box_1" style={{marginBottom:'5px',border:'0.5px solid white', borderRadius:'7px'}}>
            <h5>Content Strategy</h5>
              <p>At Fluxora, we tailor every piece of your content strategy to resonate with your brand’s unique voice, ensuring that every blog post, article, and social media update amplifies your message. We meticulously craft a content blueprint that speaks to your audience and aligns seamlessly with your marketing goals, setting the stage for your brand’s success.</p>
            </div>
            <div className="col-lg service_content_box_1" style={{marginBottom:'5px',border:'0.5px solid white', borderRadius:'7px'}}>
            <h5>Short Form Content</h5>
              <p>Specializing in bite-sized yet impactful content, Fluxora excels in capturing your audience's attention in the cluttered digital landscape. We are dedicated to crafting engaging reels, short videos, and visually compelling snippets that not only resonate with viewers but also drive meaningful engagement.</p>
              <p>
              Our innovative approach combines creative storytelling, dynamic visuals, and strategic distribution to ensure your message not only reaches its intended audience but leaves a lasting impression.
              </p>
              <p>
              At Fluxora, we believe in the power of concise content to create big impacts, making us your ideal partner for navigating the complexities of digital marketing and audience engagement.
              </p>
            </div>
            <div className="col-lg service_content_box_1" style={{marginBottom:'5px',border:'0.5px solid white', borderRadius:'7px'}}>
            <h5>AI-Generated Faceless Content</h5>
              <p>Leveraging the latest AI technology, Fluxora creates high-quality, faceless content that maintains a human touch.</p>
                <p>
                This innovative approach ensures consistent content production without sacrificing authenticity, enabling your brand to stay relevant and engaging.
                </p>
            </div>
            <div className="col-lg service_content_box_1" style={{marginBottom:'5px',border:'0.5px solid white', borderRadius:'7px'}}>
            <h5>Content Automation</h5>
              <p>Streamline your content creation with Fluxora’s content automation services. We implement cutting-edge tools to automate routine tasks, from content scheduling to analytics, freeing up your time to focus on creativity and strategy.</p>
              <p>
              This holistic approach ensures every step contributes to a larger vision, perfectly encapsulating your brand’s essence
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="container-fluid service_content">
        <div className="container service_main_box">
        <h5>AI</h5>
          <p>
          At Fluxora, AI is more than just technology; it's the key to unlocking unprecedented opportunities for growth and innovation. Our AI solutions are designed to transform complex challenges into simple solutions, optimizing operations and enhancing decision-making processes. Embrace AI with Fluxora and lead the charge in your industry.
          </p>
          <div className="row">
            <div className="col-lg service_content_box_1" style={{marginBottom:'5px',border:'0.5px solid white', borderRadius:'7px'}}>
            <h5>Automation</h5>
              <p>Elevate your operational efficiency with Fluxora’s AI-driven automation solutions. By integrating advanced AI technology, we streamline your business processes, from data analysis to workflow management.</p>
              <p>
              Our automation services are tailored to reduce manual effort, increase accuracy, and maximize productivity, ensuring your resources are focused on strategic growth and innovation.
              </p>
            </div>
            <div className="col-lg service_content_box_1" style={{marginBottom:'5px',border:'0.5px solid white', borderRadius:'7px'}}>
            <h5>Chatbots</h5>
              <p>Transform your customer service with Fluxora’s state-of-the-art chatbot technology. </p>
              <p>
              Custom-designed to reflect your brand’s personality and meet your specific needs, our chatbots provide instant, 24/7 support and engagement.
              </p>
              <p>
              They intelligently handle inquiries, offer personalized recommendations, and improve user experience, setting new standards for customer interaction in the digital age.
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="container-fluid service_content">
        <div className="container service_main_box">
        <h5>Web3</h5>
          <p>
          Step into the future with Fluxora's Web3 services, where decentralization opens up a new realm of possibilities. From blockchain to digital assets, our expertise empowers clients to navigate the Web3 space confidently. Whether it's launching an NFT project or integrating blockchain technology, Fluxora is your gateway to the next digital revolution.
          </p>
          <div className="row">
            <div className="col-lg service_content_box_1" style={{marginBottom:'5px',border:'0.5px solid white', borderRadius:'7px'}}>
            <h5>Marketing</h5>
              <p>Embrace the future with Fluxora’s Web3.0 marketing strategies. We navigate the complexities of blockchain-based marketing, from NFT promotions to tokenized rewards, ensuring your brand stands out in the decentralized digital world.</p>
            </div>
            <div className="col-lg service_content_box_1" style={{marginBottom:'5px',border:'0.5px solid white', borderRadius:'7px'}}>
            <h5>Community Building</h5>
              <p>At the heart of every successful Web3.0 project is a strong, engaged community.</p>
              <p>Fluxora specializes in fostering vibrant communities around your brand or project, driving engagement and loyalty through strategic communication and engagement.</p>
              <p>
              Our track record speaks volumes; having escalated Eluna and the Metaverse to millions of users stands as a testament to our expertise. We are eager to channel this experience and dedication towards elevating your project to new heights.
              </p>
            </div>
            <div className="col-lg service_content_box_1" style={{marginBottom:'5px',border:'0.5px solid white', borderRadius:'7px'}}>
            <h5>Smart Contract Services</h5>
              <p>From audit to creation and end-to-end management, Fluxora’s smart contract services ensure your Web3.0 projects are secure, reliable, and innovative.</p>
              <p>
              Trust our expertise to guide you through the intricacies of smart contract development, ensuring your projects are built on a solid foundation.
              </p>
            </div>
            <div className="col-lg service_content_box_1" style={{marginBottom:'5px',border:'0.5px solid white', borderRadius:'7px'}}>
            <h5>{t("ContentAutomatation")}</h5>
              <p>{t("content_acordion")}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Service;

