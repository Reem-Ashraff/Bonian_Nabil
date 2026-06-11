import React from "react";
import "./services.css";
import { useTranslation } from "react-i18next";
import service1 from "../../assets/مقاولات.jpeg"
import service2 from "../../assets/توريدات.jpeg"
import service3 from "../../assets/استثمار.jpeg"
import service4 from "../../assets/تصريحات.jpeg"
import service5 from "../../assets/كورسات.jpeg"
import service6 from "../../assets/تصنيع.jpeg"
import { Helmet } from "react-helmet-async";

const Services = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Services | Bonian Nabil</title>
                <meta
                    name="description"
                    content="Bonian Nabil provides construction, finishing, architectural design, and interior design services with high-quality execution."
                />
                <meta name="keywords" content="construction services, interior design services, finishing works Egypt" />
            </Helmet>
            <main className="services-main">
                <h2 className="text-center">{t("services.Services")}</h2>
                <section className="services-section d-flex flex-wrap justify-content-between">
                    <div className="col-12 col-lg-5 d-flex align-items-center mb-4 mb-md-5">
                        <div className="col-6 service-img">
                            <img src={service1} className="w-100 h-auto" alt="project" />
                            <div className="shadow"></div>
                        </div>
                        <div className="col-6 service-paragraph">{t("services.service1")}</div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex align-items-center mb-4 mb-md-5">
                        <div className="col-6 service-img">
                            <img src={service2} className="w-100 h-auto" alt="project" />
                            <div className="shadow"></div>
                        </div>
                        <div className="col-6 service-paragraph">{t("services.service2")}</div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex align-items-center mb-4 mb-md-5">
                        <div className="col-6 service-img">
                            <img src={service3} className="w-100 h-auto" alt="project" />
                            <div className="shadow"></div>
                        </div>
                        <div className="col-6 service-paragraph">{t("services.service3")}</div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex align-items-center mb-4 mb-md-5">
                        <div className="col-6 service-img">
                            <img src={service4} className="w-100 h-auto" alt="project" />
                            <div className="shadow"></div>
                        </div>
                        <div className="col-6 service-paragraph">{t("services.service4")}</div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex align-items-center mb-4 mb-md-5">
                        <div className="col-6 service-img">
                            <img src={service5} className="w-100 h-auto" alt="project" />
                            <div className="shadow"></div>
                        </div>
                        <div className="col-6 service-paragraph">{t("services.service5")}</div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex align-items-center mb-4 mb-md-5">
                        <div className="col-6 service-img">
                            <img src={service6} className="w-100 h-auto" alt="project" />
                            <div className="shadow"></div>
                        </div>
                        <div className="col-6 service-paragraph">{t("services.service6")}</div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Services;