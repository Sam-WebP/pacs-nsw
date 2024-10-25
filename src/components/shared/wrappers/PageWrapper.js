// import Footer from "@/components/layout/footer/Footer";
// import Header from "@/components/layout/header/Header";
import Scrollup from "../others/Scrollup.js";
const PageWrapper = ({ children }) => {
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