import { useLoaderData } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import Footer from "../../Component/Footer/Footer";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/Context";
import { useContext } from "react";
import DetailsRiview from "../DetailsRiview/DetailsRiview";

const RoomsDetails = (asc) => {
  const details = useLoaderData();
  const {
    _id,
    name,
    price,
    description,
    rating,
    image,
    size,
    availability,
    sits,
    summary,
  } = details;
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const cartDetails = { name, price, description, rating, image, userEmail };

  const handleBooking = (id) => {
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            tposition: "center",
            icon: "success",
            title: "Your Product Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <div className="w-full py-5 my-10 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-72"
          src={image}
          alt="avatar"
        />
        <div className="flex items-center px-6 py-3 text-white bg-gray-900">
          <AiOutlineHome></AiOutlineHome>
          <h1 className="mx-3 text-lg font-semibold text-white">{name}</h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Price Per Night: {price} $
          </h1>
          <p className="py-2 text-gray-700 dark:text-gray-400">
            Description: {description}
          </p>
          <p className="py-2 text-gray-700 dark:text-gray-400">
            Summary: {summary}
          </p>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">
              {" "}
              Availity: <span className="text-green-600">{availability}</span>
            </h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">
              Size : <span className="text-green-400">{size}</span>
            </h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">
              Sits Availble: <span className="text-red-400">{sits}</span>
            </h1>
          </div>
        </div>
        <button
          onClick={() => handleBooking(_id)}
          className="btn btn-outline text-white mx-auto block"
        >
          Book Now
        </button>
      </div>
      <DetailsRiview></DetailsRiview>
      <Footer></Footer>
    </>
  );
};

export default RoomsDetails;
