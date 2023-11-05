import Banner from "../../Component/Banner/Banner";
import Footer from "../../Component/Footer/Footer";
import GoogleMap from "./GoogelMap/GoogleMap";
import HotelManage from "./HotelManage/HotelManage";
import OurTeam from "./OurTeam/OurTeam";
import Testimonials from "./Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div className="parallax">
      <Banner></Banner>
      <HotelManage></HotelManage>
      <Testimonials></Testimonials>
      <OurTeam></OurTeam>
      <GoogleMap></GoogleMap>
      <Footer></Footer>
    </div>
  );
};

export default Home;
