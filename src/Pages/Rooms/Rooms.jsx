import { useLoaderData } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";

import RoomCard from "./RoomCard";
import { useState } from "react";


const Rooms = () => {
  const rooms = useLoaderData();
  // sort method 
  const [asc, setAsc] = useState(true);

 console.log(rooms);
  return (
    <div>
      <div className=" w-full">
        {/* <form action="">
          <label htmlFor="sort"></label>
          <select
            className="mx-auto font-bold form-control block"
            name="sort"
            id="sort"
            onClick={sorting}
          >
           
            <option onClick={shortBtn} value="high">Price (High To Low)</option>
            <option value="low">Price (Low To High)</option>
          </select>
        </form> */}
        <button onClick={()=>setAsc(!asc)} className="btn btn-primary">
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
