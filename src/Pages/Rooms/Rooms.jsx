import { useLoaderData } from "react-router-dom";

import Footer from "../../Component/Footer/Footer";

import RoomCard from "./RoomCard";
import { useState } from "react";
import { useEffect } from "react";

const Rooms = () => {
  const data = useLoaderData();

  // const { rooms, setRooms } = useState(data)
  // // console.log(rooms);

  // useEffect(() => {
  //   fetch(`https://hotel-booking-server-blush.vercel.app/rooms?sort=${asc ? "asc" : " desc"}`)
  //     .then((res) => res.json())
  //     .then((data) => setRooms(data));
  // },[asc,setRooms])
  // // sort method
  // const [asc, setAsc] = useState(true);

  // console.log(rooms);
  return (
    <div>
      <div className=" w-full">
        <button onClick={() => setAsc(!asc)} className="btn btn-primary">
          {asc ? "Price (High To Low)" : "Price (Low To High)"}
        </button>
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
