const GoogleMap = () => {
  return (
    <div className="py-20">
      <div className="text-4xl py-5 font-bold text-center text-black">
        Our location in Google Map
      </div>
      <iframe
        className="mx-auto border-l-fuchsia-50 border-2 rounded-lg "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234323.16393098043!2d88.88241525818133!3d23.413548092942705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff238d32576529%3A0x6b414e810c617373!2sHotel%20Divine%20Centre%20Ltd!5e0!3m2!1sen!2sbd!4v1699160752120!5m2!1sen!2sbd"
        width={750}
        height={350}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div></div>
    </div>
  );
};

export default GoogleMap;
