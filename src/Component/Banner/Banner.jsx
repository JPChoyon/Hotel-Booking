import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import slider1 from "../../assets/images/slider 1.jpg";
import slider2 from "../../assets/images/slider 2.jpg";
import slider3 from "../../assets/images/slider 3.jpg";
import slider4 from "../../assets/images/slider 4.jpg";
import slider5 from "../../assets/images/slider 5.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const slider = (
  <AutoplaySlider
    play={true}
    // cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={slider1} />
    <div data-src={slider2} />
    <div data-src={slider3} />
    <div data-src={slider4} />
    <div data-src={slider5} />
  </AutoplaySlider>
);

const Banner = () => {
  return <div className="z-0 ">{slider}</div>;
};

export default Banner;
