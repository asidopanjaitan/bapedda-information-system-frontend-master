import Home from "./guest-component/Home";
import Navbar from "./guest-component/Navbar";
import "../../../App.css";
import Informasi from "./guest-component/Informasi";
import About from "./guest-component/About";
import Regulasi from "./guest-component/Regulasi";
import Footer from "./guest-component/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Informasi />
      <About />
      <Regulasi />
      <Footer />
    </>
  );
};

export default Dashboard;
