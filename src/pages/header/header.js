import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png"
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const location = useLocation();
    const currentLocation = location.pathname

    const changeLanguage = (e) => {
        const lang = e.target.value;
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
    };

    return (
        <>
            <header className={currentLocation === "/home" ? "home-header d-flex align-items-center justify-content-between" : "header d-flex align-items-center justify-content-between"}>

                <div className="d-flex align-items-center col-3 col-sm-3 col-md-3">
                    <div className="logo d-flex align-items-center">
                        <img src={Logo} className="w-100 h-auto" alt="logo"/>
                    </div>
                    <h1 className="text-center">{t("header.bonian")}</h1>
                </div>

                <ul className="d-flex align-items-center mb-0">
                    <NavLink to="/home" className="link1 me-1 me-sm-3 me-md-3 me-lg-5" activeClassName="active"><li>{t("header.home")}</li></NavLink>
                    <NavLink to="/about" className="link1 me-1 me-sm-3 me-md-3 me-lg-5" activeClassName="active"><li>{t("header.about")}</li></NavLink>
                    <NavLink to="/services" className="link1 me-1 me-sm-3 me-md-3 me-lg-5" activeClassName="active"><li>{t("header.services")}</li></NavLink>
                    <NavLink to="/projects" className="link1 me-1 me-sm-3 me-md-3 me-lg-5" activeClassName="active"><li>{t("header.projects")}</li></NavLink>
                    <NavLink to="/contact" className="link1 me-1 me-sm-3 me-md-3 me-lg-5" activeClassName="active"><li>{t("header.contact")}</li></NavLink>
                </ul>

                <select value={i18n.language} onChange={(e) => changeLanguage(e)}>
                    <option value="en">en</option>
                    <option value="ar">ar</option>
                </select>

            </header>
        </>
    )
}
export default Header;