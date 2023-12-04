import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18nextPlugin } from "translation-check";

const resources = {
  en: {
    translation: {
      "Notes Manager": "Welcome To Notes Manager",
      Home: "Home",
      "New Note": "New Note",
      footerTxt : "Again ! This React-Typescript based application is meant for only learning by doing. The focus was on react using vite tool, custom hooks, react-router & it's nested routes, strict type checking and internalization using i18N package. It does not support responsiveness fully."
    },
  },
  de: {
    translation: {
      "Notes Manager": "Willkommen beim Notizenmanager",
      "New Note": "neue Notiz",
      Home: "Heim",
      Title: "Titel",
      Tags: "Stichworte",
      Notes: "Anmerkungen",
      "Your notes goes here...": "Ihre Notizen kommen hierher...",
      "No record found": "Kein Eintrag gefunden",
      footerTxt : "Wieder ! Diese auf React-Typescript basierende Anwendung ist nur für das Lernen durch Handeln gedacht. Der Schwerpunkt lag auf der Reaktion mit dem Vite-Tool, benutzerdefinierten Hooks, dem React-Router und seinen verschachtelten Routen, der strengen Typprüfung und der Internalisierung mit dem i18N-Paket. Die Reaktionsfähigkeit wird nicht vollständig unterstützt.",
      Delete:'Löschen',
      Edit: 'Bearbeiten'
    },
  },
};

i18n
  .use(initReactI18next)
  .use(i18nextPlugin)
  .init({
    resources,
    lng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
