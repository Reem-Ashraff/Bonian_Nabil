import React from "react";
import "./about.css";
import { useTranslation } from "react-i18next";
import TeamEn from "../../locates/en/team.json";
import TeamAr from "../../locates/ar/team.json";
import { Helmet } from "react-helmet-async";

const About = () => {

    const { t } = useTranslation();
    const team = document.documentElement.lang === "ar" ? TeamAr : TeamEn;
    const assiutTeam = team.filter(item => item.location === "Assiut");
    const cairoTeam = team.filter(item => item.location === "Cairo");

    return (
        <>
            <Helmet>
                <title>About Us | Bonian Nabil</title>
                <meta
                    name="description"
                    content="Learn more about Bonian Nabil, a company specializing in construction, architecture, and interior design with a focus on quality and innovation."
                />
                <meta name="keywords" content="about Bonian Nabil, construction company Egypt, architecture firm" />
                        
                <meta property="og:title" content="About Us | Bonian Nabil" />
                <meta property="og:description" content="Learn more about Bonian Nabil, a company specializing in construction, architecture, and interior design with a focus on quality and innovation." />
                <meta property="og:image" content="https://bonian-nabil.vercel.app/logo2.jpeg" />
                <meta property="og:url" content="https://bonian-nabil.vercel.app/about" />
            </Helmet>
            <main className="about-main content">
                <h2 className="text-center">{t("about.about")}</h2>

                <section className="about-description">
                    <div className="gray">{t("about.title")}</div>
                    <p>{t("about.description1")}</p>
                    <p className="">{t("about.description2")}</p>
                    <p className="">{t("about.description3")}</p>
                </section><hr className="w-75 m-auto" />

                <section className="team-section">
                    <h4 className="text-center">{t("about.team")}</h4>
                    <div className="text-center gray team-head">{t("about.teamHead")}</div>
                    <div className="d-flex align-items-center">
                        <div className="col-5 col-md-3 ceo-img">
                            <img src={team[0].image} className="w-100 h-auto" alt="person" />
                            <div className="shadow"></div>
                        </div>
                        <div className="col ceo-info">
                            <h6>{team[0].name}</h6>
                            <div className="ceo-position">{team[0].position}</div>
                            <div className="ceo-description gray">{team[0].description}</div>
                        </div>
                    </div>
                    <div className="branch">{t("about.branch1")}</div>
                    <div className="d-flex flex-wrap justify-content-between team-div">
                        {assiutTeam.map((person, index) => {
                            return (
                                <div key={index} className="person-div d-flex align-items-center">
                                    <div className="col-5 person-img">
                                        <img src={person.image} className="w-100 h-100" alt="person" />
                                        <div className="shadow"></div>
                                    </div>
                                    <div className="col person-info">
                                        <h6>{person.name}</h6>
                                        <div className="person-position">{person.position}</div>
                                        <div className="person-description gray">{person.description}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="branch">{t("about.branch2")}</div>
                    <div className="d-flex flex-wrap justify-content-between team-div">
                        {cairoTeam.map((person, index) => {
                            return (
                                <div key={index} className="person-div d-flex align-items-center">
                                    <div className="col-5 person-img">
                                        <img src={person.image} className="w-100 h-100" alt="person" />
                                        <div className="shadow"></div>
                                    </div>
                                    <div className="col person-info">
                                        <h6>{person.name}</h6>
                                        <div className="person-position">{person.position}</div>
                                        <div className="person-description gray">{person.description}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

            </main>
        </>
    )
}
export default About;
