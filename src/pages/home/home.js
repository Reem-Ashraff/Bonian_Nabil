import React from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom/cjs/react-router-dom";
import projectsEn from "../../locates/en/details.json";
import projectsAr from "../../locates/ar/details.json";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const { t } = useTranslation();
    const projects = document.documentElement.lang === "ar" ? projectsAr : projectsEn;

    return (
        <>
        <Helmet>
        <title>Home | Bonian Nabil</title>
        <meta name="description" content="Bonian Nabil is a leading construction and interior design company delivering modern architectural solutions and high-quality finishing works." />
        <meta name="keywords" content="construction, interior design, architecture, Egypt, finishing works" />
      </Helmet>
            <main className="home-main">

                <section className="background-section d-flex align-items-center">
                    <div className="opacity"></div>
                    <div className="text-div col-12">
                        <p className="mb-0 home-paragraph">{t("home.paragraph1")}</p>
                        <p className="mb-0 home-paragraph">{t("home.paragraph2")}</p>
                        <div className="text-center">
                            <div className="main-text w-100">{t("home.bold")}</div>
                            <p className="home-description w-100">{t("home.description")}</p>
                        </div>
                        <div className="home-text d-flex align-items-center justify-content-between">
                            <p className="mb-0 home-paragraph">{t("home.paragraph3")}</p>
                            <p className="mb-0 home-paragraph">{t("home.paragraph4")}</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h4>{t("home.about")}</h4>
                    <p className="mb-0">{t("header.bonian")} <span className="gray">{t("home.description1")}</span></p>
                    <p className="mb-0">{t("home.description2")}</p>
                    <Link to="/about" className="link"><div className="more">{t("home.more1")}</div></Link>
                </section>

                <section className="our-services-section">
                    <h4>{t("services.Services")}</h4>
                    <div className="text-center">
                        <p className="service-margin">{t("home.service1")}</p>
                        <p className="service-margin gray">{t("home.service2")}</p>
                        <p className="service-margin">{t("home.service3")}</p>
                        <p className="service-margin gray">{t("home.service4")}</p>
                        <p className="service-margin">{t("home.service5")}</p>
                        <p className="mb-0 gray">{t("home.service6")}</p>
                    </div>
                </section>

                <section className="our-projects-section">
                    <h4>{t("projects.projects")}</h4>
                    <p>
                        {t("home.projects1")}
                        <span className="gray">{t("home.projects2")}</span>
                        {t("home.projects3")}
                    </p>
                    <div className="d-flex flex-wrap justify-content-between">
                        {projects.slice(0,3).map((project) => {
                        return (
                        <Link key={project.id} to={`/details/${project.id}`} className="link project-div mb-4 mb-md-5">
                            <div>
                                <div className="col-12 project-img">
                                    <img src={project.coverImage} className="w-100" alt="project"/>
                                    <div className="shadow"></div>
                                </div>
                                <div className="col-12 project-paragraph">{project.title}</div>
                            </div>
                        </Link>
                        )
                    })}
                    </div>
                    <Link to="/projects" className="link"><div className="more">{t("home.more2")}</div></Link>
                </section>

                <section className="action-section">
                    <div className="d-flex justify-content-between align-items-center action-div">
                        <div className="action-text">{t("home.action")}</div>
                        <Link to="/contact" className="link"><div className="action-btn text-center">{t("home.btn")}</div></Link>
                    </div>
                </section>

            </main>
        </>
    )
}
export default Home;
