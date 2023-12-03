import React from "react";
import { Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <Stack direction="vertical" className="justify-content-center mt-5 pt-5">
        <hr className="mt-5 pt-5"/>
        <p className=" fs-6 align-self-center font-monospace text-muted">Again ! This React-Typescript based application is meant for only learning by doing. The focus was on react using vite tool, custom hooks, react-router & it's nested routes, strict type checking. It does not support responsiveness fully. </p>
        <h5 className="align-self-center" style={{color:"#0174BE"}}>Author Saurabh Shankariya</h5>
        <hr className="mt-5 pt-5"/>
    </Stack>
  );
};

export default Footer;
