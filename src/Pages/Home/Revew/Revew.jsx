import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import RevewCard from "./RevewCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Revew = () => {
  const [corosoulData, setCorousolData] = useState();
  useEffect(() => {
    fetch("https://hotel-booking-server-blush.vercel.app/riview")
      .then((res) => res.json())
      .then((data) => setCorousolData(data));
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="3000">
      <Carousel>
        {corosoulData?.map((corosul) => (
          <RevewCard key={corosul.id} corosul={corosul}></RevewCard>
        ))}
      </Carousel>
    </div>
  );
};

export default Revew;
