// import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/header/Navbar";
import React from "react";
import Scrollup from "../others/Scrollup";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      {/* header */}
      <Navbar />

      {/* main content */}
      {children}

      {/* footer */}
      {/* <Footer /> */}

      {/* scroll up */}
      <Scrollup />
    </>
  );
};

export default PageWrapper;
