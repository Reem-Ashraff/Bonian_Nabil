import React, { useState } from "react";
import "./projects.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom/cjs/react-router-dom";
import projectsEn from "../../locates/en/details.json";
import projectsAr from "../../locates/ar/details.json";
import { Helmet } from "react-helmet-async";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {

    const { t } = useTranslation();
    const projects = document.documentElement.lang === "ar" ? projectsAr : projectsEn;

    const displayProjects = [
        projects[projects.length - 1],
        ...projects,
        projects[0],
    ];

    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
        const firstCard = sliderRef.current.children[currentIndex + 1];

        sliderRef.current.scrollLeft =
            firstCard.offsetLeft -
            (sliderRef.current.offsetWidth - firstCard.offsetWidth) / 2;
    }, [currentIndex]);
    const nextSlide = () => {
        if (currentIndex === projects.length) {
            setCurrentIndex(1);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const prevSlide = () => {
        if (currentIndex === 1) {
            setCurrentIndex(projects.length);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            <Helmet>
                <title>Our Projects | Bonian Nabil</title>
                <meta
                    name="description"
                    content="Explore Bonian Nabil’s portfolio of residential and commercial construction and interior design projects."
                />
                <meta name="keywords" content="construction projects, interior design portfolio, architecture works Egypt" />
            </Helmet>
            <main className="projects-main content">
                <h2 className="text-center">{t("projects.projects")}</h2>
                <section className="projects-section d-flex justify-content-between align-items-center">
                    {document.documentElement.lang === "en" ?
                        <button onClick={prevSlide}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></button> :
                        <button onClick={prevSlide}><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button>
                    }
                    <div className="position1">
                        <div className="projects-slider w-100" ref={sliderRef}>
                            <div className="shadow-right col-12"></div>
                            {displayProjects.map((project, index) => {
                                return (
                                    <div className="project-card" key={index}>
                                        <Link to={`/details/${project.id}`} className="link project-div mb-4 mb-md-5">
                                            <div>
                                                <div className="col-12 project-img">
                                                    <img src={project.coverImage} className="w-100" alt="project" />
                                                    <div className="shadow"></div>
                                                </div>
                                                <div className="col-12 project-paragraph">{project.title}</div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                            <div className="shadow-left col-12"></div>
                        </div>
                    </div>
                    {document.documentElement.lang === "en" ?
                        <button onClick={nextSlide}><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button> :
                        <button onClick={nextSlide}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></button>
                    }
                </section>
            </main>
        </>
    )
}
export default Projects;
