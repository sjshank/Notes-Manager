import React from "react";
import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const PageHeader = () => {
  return (
    <>
    <Stack className="justify-content-center m-4">
      <h1 className="fs-1 align-self-center badge " style={{backgroundColor:"#0174BE"}}>Notes Manager</h1>
    </Stack>
    <nav className="navbar navbar-light bg-light mb-4 mt-2" id="navBar">
      <div className="">
        <NavLink className="navbar-brand p-4"  to="/">
          Home
        </NavLink>
        <NavLink className="navbar-brand p-4" to="/new">
          New Note
        </NavLink>
      </div>
    </nav>
    </>
  );
};

export default PageHeader;
