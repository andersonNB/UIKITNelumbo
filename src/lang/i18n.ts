import { use } from "i18next"
import { initReactI18next } from "react-i18next"
import { es } from "./es"
import { en } from "./en"

const resources = {
  es,
  en,
}
export default use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'es', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you’re using a language detector, do not define the lng option
    supportedLngs: ['es', 'en'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })