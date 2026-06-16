import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {

    const { t } = useTranslation();

    return (
        <>
            <footer className="d-flex flex-wrap">

                <div className="col-12 col-md-6 col-lg-3 footer-div1">
                    <div className="d-flex align-items-center">
                        <div className="footer-logo">
                            <img src={Logo} className="w-100 h-auto" alt="logo"/>
                        </div>
                        <h5>{t("footer.bonian")}</h5>
                    </div>
                    <p>{t("home.description1")}</p>
                </div>

                <div className="col-12 col-md-6 col-lg-3 footer-div2">
                    <h6>{t("footer.links")}</h6>
                    <ul>
                        <Link to="/home" className="link"><li>{t("footer.home")}</li></Link>
                        <Link to="/about" className="link"><li>{t("footer.about")}</li></Link>
                        <Link to="/services" className="link"><li>{t("footer.services")}</li></Link>
                        <Link to="/projects" className="link"><li className="mb-0">{t("footer.projects")}</li></Link>
                    </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3 footer-div3">
                    <h6>{t("footer.services")}</h6>
                    <ul>
                        <li>{t("home.service1")}</li>
                        <li>{t("home.service2")}</li>
                        <li>{t("home.service3")}</li>
                        <li>{t("home.service4")}</li>
                        <li>{t("home.service5")}</li>
                        <li className="mb-0">{t("home.service6")}</li>
                    </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3 footer-div4">
                    <h6>{t("contact.contact")}</h6>
                    <div>
                        <div className="d-flex align-items-center info-div-footer">
                            <FontAwesomeIcon icon={faPhone} className="contact-logo-footer"></FontAwesomeIcon>
                            <div className="contact-info-footer">{t("contact.phone2")}</div>
                        </div>
                        <div className="d-flex align-items-center info-div-footer">
                            <FontAwesomeIcon icon={faWhatsapp} className="contact-logo-footer"></FontAwesomeIcon>
                            <a href="https://api.whatsapp.com/send?phone=201501526950&text=%E2%80%9CHello%2C%20I%20want%20more%20info%20about%20the%20product%E2%80%9D&fbclid=IwVERDUASeUkBleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEe6fAn2dk_oHR6rVy10S5mnPBptM6RLsI3rVJfh05liD1dXeLsmkTBO96jyGs_aem_J6lHfU0CIxNM5dp0RCq22w" target="_blank" rel="noreferrer" className="link contact-info">{t("contact.phone2")}</a>
                        </div>
                        <div className="d-flex align-items-center info-div-footer">
                            <FontAwesomeIcon icon={faFacebookF} className="contact-logo-footer"></FontAwesomeIcon>
                            <a href="https://www.facebook.com/share/1EJAKg2n2t/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="link contact-info-footer">{t("contact.social")}</a>
                        </div>
                        <div className="d-flex align-items-center info-div-footer">
                            <FontAwesomeIcon icon={faInstagram} className="contact-logo-footer"></FontAwesomeIcon>
                            <a href="https://instagram.com/boniannabil?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" className="link contact-info-footer">{t("contact.social")}</a>
                        </div>
                        <div className="d-flex align-items-center info-div-ooter">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-logo-footer"></FontAwesomeIcon>
                            <div className="contact-info-footer">boniannabil@gmail.com</div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3"></div>
            </footer>
        </>
    )
}
export default Footer;
