import manage from "../../../assets/images/hotel-manage.jpg";
import { GiClick } from "react-icons/gi";
import { MdSell } from "react-icons/md";
import { BiSolidBadgeDollar } from "react-icons/bi";
const HotelManage = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="3000" className="py-20">
      <div className="relative p-4 py-8 bg-white dark:bg-gray-800 rounded-xl">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 md:pl-20">
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
              Manage everything
            </h4>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <GiClick></GiClick>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      One-click booking
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      If you find a room for staying then you are come in right
                      place
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <MdSell></MdSell>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Orders, managed
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      All your orders in one place so you can manage your
                      delivery, collection, asap and pre-orders in one place.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <BiSolidBadgeDollar></BiSolidBadgeDollar>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Low Budget &amp; Comfortable Rooms
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      Booked comfortable room in low budget and stay in our
                      hotel
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative mt-10  lg:mt-0 lg:col-start-1">
            <img
              src={manage}
              alt="hotel manager"
              className="relative w-auto mx-auto rounded shadow-lg max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelManage;
