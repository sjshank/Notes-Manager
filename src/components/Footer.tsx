import { Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Stack direction="vertical" className="justify-content-center mt-5 pt-5">
      <hr className="mt-5 pt-5" />
      <p className=" fs-6 align-self-center font-monospace text-muted">
        {t("footerTxt")}
      </p>
      <h5 className="align-self-center" style={{ color: "#0174BE" }}>
        Author Saurabh Shankariya
      </h5>
      <hr className="mt-5 pt-5" />
    </Stack>
  );
};

export default Footer;
