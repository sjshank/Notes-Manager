import React, { useRef, useState } from "react";
import { Stack } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const PageHeader = ({ t, i18n }: any) => {
  const changeLang = () => {
    i18n.changeLanguage(i18n.language == "de" ? "en" : "de");
  };
  return (
    <>
      <Stack className="justify-content-center m-4">
        <h1
          className="fs-1 align-self-center badge "
          style={{ backgroundColor: "#0174BE" }}
        >
          {t("Notes Manager")}
        </h1>
      </Stack>
      <nav className="navbar navbar-light bg-light mb-4 mt-2" id="navBar">
        <div className="">
          <NavLink className="navbar-brand p-4" to="/">
          {t("Home")}
          </NavLink>
          <NavLink className="navbar-brand p-4" to="/new">
          {t("New Note")}
          </NavLink>
        </div>
        <div>
          <a
            className={`navbar-brand p-4 ${
              i18n.language == "de" ? "de-lang" : "en-lang"
            }`}
            role="button"
            onClick={() => changeLang()}
          >
            {i18n.language !== "en" ? <>ENGLISH</> : <>GERMAN</>}
          </a>
        </div>
      </nav>
    </>
  );
};

export default withTranslation()(PageHeader);
