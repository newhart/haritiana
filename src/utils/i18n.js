import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {en, fr} from "../common/locales";

// the translations
const resources = {en, fr};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    resources,
    lng: "fr",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
