import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import BookingRow from "./BookingRow";
import { useLoaderData } from "react-router-dom";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [bookings, setBookings] = useState(data);

  const userEmail = user.email;
  const url = `http://localhost:5000/bookings?userEmail=${user?.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url, userEmail]);
  console.log(data);

  return (
    <div>
      {bookings.map((booking) => (
        <BookingRow
          key={booking._id}
          setBookings={setBookings}
          booking={booking}
          bookings = {bookings}
        ></BookingRow>
      ))}
    </div>
  );
};

export default MyBookings;
