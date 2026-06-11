import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHeader from "./locates/en/header.json";
import enHome from "./locates/en/home.json";
import enAbout from "./locates/en/about.json";
import enServices from "./locates/en/services.json";
import enContact from "./locates/en/contact.json";
import enProjects from "./locates/en/projects.json";
import enFooter from "./locates/en/footer.json";
import enDetails from "./locates/en/details.json";
import enTeam from "./locates/en/team.json";

import arHeader from "./locates/ar/header.json";
import arHome from "./locates/ar/home.json";
import arAbout from "./locates/ar/about.json";
import arServices from "./locates/ar/services.json";
import arContact from "./locates/ar/contact.json";
import arProjects from "./locates/ar/projects.json";
import arFooter from "./locates/ar/footer.json";
import arDetails from "./locates/ar/details.json";
import arTeam from "./locates/ar/team.json";

const currentLanguage =
  localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: enHeader,
          home: enHome,
          about: enAbout,
          services: enServices,
          contact: enContact,
          projects: enProjects,
          footer: enFooter,
          details: enDetails,
          team: enTeam
        },
      },

      ar: {
        translation: {
          header: arHeader,
          home: arHome,
          about: arAbout,
          services: arServices,
          contact: arContact,
          projects: arProjects,
          footer: arFooter,
          details: arDetails,
          team: arTeam
        },
      },
    },

    lng: currentLanguage,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

document.documentElement.lang = currentLanguage;
document.documentElement.dir =
  currentLanguage === "ar" ? "rtl" : "ltr";

export default i18n;