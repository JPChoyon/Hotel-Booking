import { useLoaderData } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";

import RoomCard from "./RoomCard";

const Rooms = () => {
  const rooms = useLoaderData();
  return (
    <div>
      <div className=" w-full">
        <select className="mx-auto font-bold block" name="" id="">
          <option value="filter">Filter</option>
          <option value="high">Price (High To Low)</option>
          <option value="low">Price (Low To High)</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 ">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Rooms;
