import { useLoaderData } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";

import RoomCard from "./RoomCard";
import { useState } from "react";

const Rooms = () => {
  const rooms = useLoaderData();

  // const [rooms, setRooms] = useState([]);
  // const [sortOrder, setSortOrder] = useState("filter"); // Initial sort order

  // const handleSortChange = (event) => {
  //   const selectedSortOrder = event.target.value;
  //   setSortOrder(selectedSortOrder);

  //   if (selectedSortOrder === "high") {
  //     const sortedProducts = [...rooms].sort((a, b) => b.price - a.price);
  //     setRooms(sortedProducts);
  //   } else if (selectedSortOrder === "low") {
  //     const sortedProducts = [...rooms].sort((a, b) => a.price - b.price);
  //     setRooms(sortedProducts);
  //   }
  // };
  return (
    <div>
      <div className=" w-full">
        <select
          className="mx-auto font-bold form-control block"
          // value={sortOrder}
          // onChange={handleSortChange}
        >
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
