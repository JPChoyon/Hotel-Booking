import avatar1 from "../../../assets/images/teams/avatar 1.jpg";
import avatar2 from "../../../assets/images/teams/avatar 2.jpg";
import avatar3 from "../../../assets/images/teams/avatar 3.jpg";
import avatar4 from "../../../assets/images/teams/avatar 4.jpg";
import avatar5 from "../../../assets/images/teams/avatar 5.jpg";
import avatar6 from "../../../assets/images/teams/avatar 6.jpg";

const OurTeam = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="3000" className="py-20">
      <section className="text-gray-500 body-font bg-black rounded-2xl">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={avatar1}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p className="text-gray-500">Co-Founder and CEO</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={avatar2}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Henry Letham
                  </h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={avatar5}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Oskar Blinde
                  </h2>
                  <p className="text-gray-500">Maintenance Team</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={avatar3}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    John Doe
                  </h2>
                  <p className="text-gray-500"> Customer Support Manager</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={avatar4}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Martin Eden
                  </h2>
                  <p className="text-gray-500">Security Team</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={avatar6}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500"> Chief Technical Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
