import { useLoaderData } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";

import RoomCard from "./RoomCard";


const Rooms = ({sorting}) => {
  const rooms = useLoaderData();
  // const [sort,setsort]=
const shortBtn = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${sortHandler}`
  );
  const data = await res.json();
  const sort = data.data.sort((a, b) => {
    const view1 = a.others.views.slice(0, -1);
    const view2 = b.others.views.slice(0, -1);
    return view2 - view1;
  });
  rooms(sort);
};
 console.log(rooms);
  return (
    <div>
      <div className=" w-full">
        <form action="">
          <label htmlFor="sort"></label>
          <select
            className="mx-auto font-bold form-control block"
            name="sort"
            id="sort"
            onClick={sorting}
          >
            {/* <option value="filter">Filter</option> */}
            <option onClick={shortBtn} value="high">Price (High To Low)</option>
            <option value="low">Price (Low To High)</option>
          </select>
        </form>
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
