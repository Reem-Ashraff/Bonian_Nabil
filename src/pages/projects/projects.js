import React from "react";
import "./projects.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom/cjs/react-router-dom";
import projectsEn from "../../locates/en/details.json";
import projectsAr from "../../locates/ar/details.json";
import { Helmet } from "react-helmet-async";

const Projects = () => {

    const { t } = useTranslation();
    const projects = document.documentElement.lang === "ar" ? projectsAr : projectsEn;

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
            <main className="projects-main">
                <h2 className="text-center">{t("projects.projects")}</h2>
                <section className="projects-section d-flex flex-wrap justify-content-between">

                    {projects.map((project) => {
                        return (
                            <Link key={project.id} to={`/details/${project.id}`} className="link project-div mb-4 mb-md-5">
                                <div>
                                    <div className="col-12 project-img">
                                        <img src={project.coverImage} className="w-100" alt="project" />
                                        <div className="shadow"></div>
                                    </div>
                                    <div className="col-12 project-paragraph">{project.title}</div>
                                </div>
                            </Link>
                        )
                    })}

                </section>
            </main>
        </>
    )
}
export default Projects;