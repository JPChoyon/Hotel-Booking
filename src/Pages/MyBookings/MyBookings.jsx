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

  return (
    <div>
      {bookings.map((prodact) => (
        <BookingRow
          key={prodact._id}
          setBookings={setBookings}
          bookings={bookings}
        ></BookingRow>
      ))}
    </div>
  );
};

export default MyBookings;
