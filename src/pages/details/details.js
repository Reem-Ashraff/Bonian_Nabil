import React from "react";
import "./details.css";
import { Pannellum } from "pannellum-react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import projectsEn from "../../locates/en/details.json";
import projectsAr from "../../locates/ar/details.json";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Details = () => {

    const { t } = useTranslation();
    const projects = document.documentElement.lang === "ar" ? projectsAr : projectsEn;
    const params = useParams();
    const id = Number(params.id)
    const project = projects.find(item => item.id === id);
    const title = `${project.title} | Bonian Nabil Projects`

    return (
        <>
            <Helmet>
                <title>{title}</title>

                <meta
                    name="description"
                    content={`Explore this ${project.title} project by Bonian Nabil featuring modern architecture, premium finishing, and elegant interior design solutions.`}
                />

                <meta
                    name="keywords"
                    content={`${project.title}, interior design, construction Egypt, architectural project, Bonian Nabil projects`}
                />
                <meta property="og:title" content={project.title} />
                <meta property="og:image" content={project.coverImage} />
                <meta property="og:url" content={`https://bonian-nabil.vercel.app/details/${id}`} />
            </Helmet>
            <main className="details-main">
                <h2 className="text-center">{project.title}</h2>
                <section className="details-description">
                    <p>{project.description}</p>
                    <div>{project.location}</div>
                </section>
                <section className="details-imgs">
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className={project.panorama === "" ? "w-100 img-margin" : "head-image"}>
                            <img src={project.coverImage} className="w-100 h-auto" alt="project" />
                        </div>
                        {project.panorama === "" ? "" :
                            <div className="head-image panoram">
                                <Pannellum
                                    width="100%"
                                    height="100%"
                                    image={project.panorama}
                                    pitch={10}
                                    yaw={180}
                                    hfov={110}
                                    autoLoad
                                    showZoomCtrl
                                />
                            </div>
                        }
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        {project.gallery.map((image) => {
                            return (
                                <div key={image} className="image">
                                    <img src={image} className="w-100 h-auto" alt="project" />
                                </div>
                            )
                        })}
                    </div>
                </section>
                <h2 className="d-none">{t("projects.projects")}</h2>
            </main>
        </>
    )
}
export default Details;
