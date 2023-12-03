import React from "react";
import { Outlet, } from "react-router-dom";
import { Loading,  Navbar } from "../Components";


const HomeLayout = () => {
  const isPageLoading = false;
  return (
    <>
      <Navbar />

      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <section className="align-element py-7 ">
            <Outlet />
          </section>
        </>
      )}
      {/* Render nested routes */}
    </>
  );
};

export default HomeLayout;
