// import Footer from "@/components/layout/footer/Footer";
// import Header from "@/components/layout/header/Header";
import React from 'react';
import Scrollup from "../others/Scrollup";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      {/* header */}
      {/* <Header /> */}

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