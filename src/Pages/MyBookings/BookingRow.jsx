import Swal from "sweetalert2";

const BookingRow = ({ setBookings, bookings, booking }) => {
  const { _id, name, price, image, availability } = booking;
  //   console.log(bookings);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hotel-booking-server-blush.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  return (
    <div key={_id}>
      <div className="w-full  mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img
            className="mx-auto h-32 rounded-t-lg"
            src={image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {name}
            </h5>
          </a>

          <div className="flex items-center justify-between">
            <span className=" font-bold text-gray-900">{price}$</span>

            <button
              onClick={() => handleDelete(_id)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancell Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRow;
