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
        <div className="container service_main_box sslide-in">
          <h5>{t('content')}</h5>
          <p>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.
          </p>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <p className="acordion_text">{t('contentStrategy')}</p>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                <p  className="service_text">
                   {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <p className="acordion_text">{t("shortformstrategy")}</p>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="service_text">
                  {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <p className="acordion_text">{t("AIGeneratedFacelessContent")}</p>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="service_text">
                  {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <p className="acordion_text">{t("ContentAutomatation")}</p>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="service_text">
                  {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container service_main_box">
        <h5>{t('content')}</h5>
          <p>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.
          </p>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <p className="acordion_text">{t('contentStrategy')}</p>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                <p  className="service_text">
                {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <p className="acordion_text">{t("shortformstrategy")}</p>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="service_text">
                  {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <p className="acordion_text">{t("AIGeneratedFacelessContent")}</p>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="service_text">
                  {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <p className="acordion_text">{t("ContentAutomatation")}</p>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="service_text">
                  {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container service_main_box">
        <h5>{t('content')}</h5>
          <p>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.Adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.
          </p>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <p className="acordion_text">{t('contentStrategy')}</p>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                <p  className="service_text">
                {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <p className="acordion_text">{t("shortformstrategy")}</p>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="service_text">
                  {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <p className="acordion_text">{t("AIGeneratedFacelessContent")}</p>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="service_text">
                  {t("content_acordion")}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item d" style={{marginBottom:'10px',border:'1px solid white', borderRadius:'10px'}}>
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed d"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <p className="acordion_text">{t("ContentAutomatation")}</p>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="service_text">
                  {t("content_acordion")}
                  </p>
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

export default Service;
