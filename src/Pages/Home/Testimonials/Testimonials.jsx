const Testimonials = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500 ">clients</span> say
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Our hotel has maked for the quality service to our customer and get
            their proper common problem make to solved as soon as possible. We
            are trusted our area.
          </p>
          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “As a long-time user, I can confidently say this service has
                exceeded my expectations. The quality and reliability are
                top-notch. It has simplified my life in so many ways, making it
                an absolute must-have. I can not thank the team behind this
                product enough for their innovation and dedication.”.
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Robert
                  </h1>
                  <span className="text-sm text-gray-500">
                    CTO, Robert Consultency
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “I have been using this product for a few months now, and I am
                thrilled with the results. It has truly transformed my daily
                routine. The convenience and effectiveness are unbeatable, and I
                can not imagine going back to my old ways. It is a game-changer,
                and I can not recommend it enough!”.
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Jeny Doe
                  </h1>
                  <span className="text-sm text-gray-500">
                    CEO, Jeny Consultency
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “I was skeptical at first, but after using this product, I'm a
                true believer. It's made a significant difference in my life.
                The results are remarkable, and the customer support is
                exceptional. It's a valuable addition to anyone's daily routine,
                and I'm grateful to have found it”.
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Ema Watson{" "}
                  </h1>
                  <span className="text-sm text-gray-500">
                    Marketing Manager at Stech
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
