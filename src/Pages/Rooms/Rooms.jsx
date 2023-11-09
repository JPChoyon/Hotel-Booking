import { useLoaderData } from "react-router-dom";

import Footer from "../../Component/Footer/Footer";

import RoomCard from "./RoomCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

const Rooms = () => {
  // const rooms = useLoaderData();
const [sortvalue, setsortValue] = useState("asc");
const handleSort = (e) => {
  const sorting = e.target.value;
  if (sorting === "High to Low") {
    setsortValue("desc");
  } else if (sorting === "Low to High") {
    setsortValue("asc");
  }
};
  const [rooms, setRooms] = useState();
  useEffect(() => {
    axios
    .get(`http://localhost:5000/rooms?sortvalue=${sortvalue}`)
    .then((res) => {
      setRooms(res.data);
    });
  }, [sortvalue]);
  // console.log(roomData);
console.log(sortvalue);

  return (
    <div>
      <div className=" w-full">
        <select name="" className="input my-6" onChange={handleSort} id="">
          <option value="" className="disabled">
            Choose one
          </option>
          <option>High to Low</option>
          <option>Low to High </option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 ">
        {rooms?.map((room) => (
          <RoomCard key={room.id} room={room}></RoomCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Rooms;
