import Rating from "react-rating";
import grayStar from '../../assets/images/stars/star-grey.png'
import redStar from "../../assets/images/stars/star-red.png";
import yelloStar from "../../assets/images/stars/star-yellow.png";
import { Link } from "react-router-dom";


const RoomCard = ({ room }) => {
  const {_id,name, description, size, image, price,rating } = room;
  // console.log(description);
  return (
    <div>
      <div className="flex max-w-md items-center h-52 rounded-2xl overflow-hidden bg-white shadow-lg">
        <div className="w-1/3 bg-cover bg-landscape">
          <img src={image} alt="" />
        </div>
        <div className="w-2/3 p-4">
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
          <div className="flex mt-2 item-center">
            <div className="flex font-bold items-center mt-2.5 mb-5">
              Rating :
              <span>
                <Rating
                  placeholderRating={parseFloat(rating)}
                  emptySymbol={<img src={grayStar} className="icon" />}
                  placeholderSymbol={<img src={redStar} className="icon" />}
                  fullSymbol={<img src={yelloStar} className="icon" />}
                />
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {parseFloat(rating)}
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-xl font-bold text-gray-700">${price}</h1>
            <Link to={`/rooms/${_id}`}>
              <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
