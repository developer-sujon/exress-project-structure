//External Lib  import
const i18next = require("i18next");
const i18nextMiddleware = require("i18next-http-middleware");
import Backend from "i18next-fs-backend";

export default i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    // debug: true,
    backend: {
      // eslint-disable-next-line no-path-concat
      loadPath: "locales/{{lng}}/{{ns}}.json",
      // eslint-disable-next-line no-path-concat
      addPath: "locales/{{lng}}/{{ns}}.missing.json",
    },
    fallbackLng: "en",
    preload: ["en", "de"],
  });
