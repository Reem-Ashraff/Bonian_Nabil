import React from "react";
import "./contact.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocation } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Helmet } from "react-helmet-async";

const Contact = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Contact Us | Bonian Nabil</title>
                <meta
                    name="description"
                    content="Get in touch with Bonian Nabil for construction and interior design inquiries and project consultations."
                />
                <meta name="keywords" content="contact Bonian Nabil, construction company contact, Egypt architecture firm" />

                <meta property="og:title" content="Contact Us | Bonian Nabil" />
                <meta property="og:description" content="Get in touch with Bonian Nabil for construction and interior design inquiries and project consultations." />
                <meta property="og:image" content="https://bonian-nabil.vercel.app/logo.PNG" />
                <meta property="og:url" content="https://bonian-nabil.vercel.app/contcat" />
            </Helmet>
            <main className="contact-main content">
                <h2 className="text-center">{t("contact.contact")}</h2>
                <div className="d-flex flex-wrap align-items-center">
                    <div className="col-12 col-lg-6 info">
                        <div className="contact-text">{t("contact.text")}</div>
                        <p className="contact-description">{t("contact.description")}</p>
                        <div className="d-flex align-items-center info-div">
                            <FontAwesomeIcon icon={faPhone} className="contact-logo"></FontAwesomeIcon>
                            <div className="contact-info">{t("contact.phone1")} - {t("contact.phone2")}</div>
                        </div>
                        <div className="d-flex align-items-center info-div">
                            <FontAwesomeIcon icon={faWhatsapp} className="contact-logo"></FontAwesomeIcon>
                            <div className="contact-info">{t("contact.phone2")}</div>
                        </div>
                        <div className="d-flex align-items-center info-div">
                            <FontAwesomeIcon icon={faFacebookF} className="contact-logo"></FontAwesomeIcon>
                            <a href="https://www.facebook.com/share/1EJAKg2n2t/?mibextid=wwXIfr" target="_blank" className="link contact-info">{t("contact.social")}</a>
                        </div>
                        <div className="d-flex align-items-center info-div">
                            <FontAwesomeIcon icon={faInstagram} className="contact-logo"></FontAwesomeIcon>
                            <a href="https://instagram.com/boniannabil?igshid=YmMyMTA2M2Y=" target="_blank" className="link contact-info">{t("contact.social")}</a>
                        </div>
                        <div className="d-flex align-items-center info-div">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-logo"></FontAwesomeIcon>
                            <div className="contact-info">boniannabil@gmail.com</div>
                        </div>
                        <div className="d-flex info-div">
                            <FontAwesomeIcon icon={faLocation} className="contact-logo"></FontAwesomeIcon>
                            <div className="contact-info">{t("contact.assiut")}<br />{t("contact.cairo")}</div>
                        </div>
                    </div>
                    <iframe className="map col-12 col-lg-6 mt-4 mt-md-0" title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.838436781609!2d31.179522775365555!3d27.192814247997436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450b1fbbbffca5%3A0xde642da3af5b92fb!2sBonian%20nabil%20company!5e0!3m2!1sen!2seg!4v1780929186972!5m2!1sen!2seg" width="100%"></iframe>
                </div>
            </main>
        </>
    )
}
export default Contact;
