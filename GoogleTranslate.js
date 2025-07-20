import { useEffect, useState, useRef } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
//styles
import styles from "./GoogleTranslate.module.css";
import { selectThemeColor } from "../../slices/themeColorSlice";
import { useSelector } from "react-redux";
const GoogleTranslate = () => {
  const translatorElement = useRef(null);
  const theme = useSelector(selectThemeColor);
  const [language, setLanguage] = useState(
    sessionStorage.getItem("language") || "tr"
  );
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        // en,de,uk
        pageLanguage: "tr",
        includedLanguages: "ar,en,de,uk",
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );

    addScript.setAttribute("type", "text/javascript");
    addScript.setAttribute("id", "translateScript");
    document.body.appendChild(addScript);

    var iframe = document.getElementById(":1.container");
    
    if (iframe) {
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;

      var originalPageBtn = iframeDocument.getElementById(":1.restore");
      originalPageBtn.click();

      window.googleTranslateElementInit = googleTranslateElementInit;

      setTimeout(() => {
        if (translatorElement.current?.querySelector(".goog-te-combo")) {
          translatorElement.current.querySelector(".goog-te-combo").value =
            language;
          translatorElement.current
            .querySelector(".goog-te-combo")
            .dispatchEvent(new Event("change"));
        }
      }, 1000);
    } else {
      window.googleTranslateElementInit = googleTranslateElementInit;
    }

    return () => {
      window.googleTranslateElementInit = null;
    };
  }, []);

  const handleChange = (e) => {
    sessionStorage.setItem("language", e.target.value);
    var iframe = document.querySelector(".goog-te-banner-frame");

    if (iframe) {
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;

      var originalPageBtn = iframeDocument.getElementById(":1.restore");
    }

    if (e.target.value === "tr") {
      setLanguage(e.target.value);
      originalPageBtn.click();
    } else {
      setLanguage(e.target.value);
      if (translatorElement.current?.querySelector(".goog-te-combo")) {
        translatorElement.current.querySelector(".goog-te-combo").value =
          e.target.value;
        translatorElement.current
          .querySelector(".goog-te-combo")
          .dispatchEvent(new Event("change"));
      }
    }
  };

  return (
    <>
      <div
        style={{ position: "absolute", left: "-600px" }}
        ref={translatorElement}
        id="google_translate_element"
      ></div>
      <select
        style={{ backgroundColor: theme.lightColor }}
        className={styles.select}
        value={language}
        onChange={(e) => handleChange(e)}
      >
        <option translate="no" value="tr">
          Türkçe
        </option>
        <option translate="no" value="de">
          Deutsch
        </option>
        <option translate="no" value="ar">
          عربي
        </option>
        <option translate="no" value="en">
          English
        </option>
        <option translate="no" value="uk">
          український
        </option>
      </select>
    </>
  );
};

export default GoogleTranslate;
