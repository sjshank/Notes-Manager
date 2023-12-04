import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18nextPlugin } from "translation-check";

const resources = {
  en: {
    translation: {
      "Notes Manager": "Welcome To Notes Manager",
      Home: "Home",
      "New Note": "New Note",
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
