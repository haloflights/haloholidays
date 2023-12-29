const index = () => {
  return (
    <section className="masthead -type-3 z-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/backgrounds/Family.svg" className="js-lazy" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-50 lg:text-40 md:text-30 text-white"
                data-aos="fade-up"
              >
                All Inclusive Holidays In Indonesia <br />Your Gateway to Stress-Free Travel
              </h1><br />
              <p
                className="text-white mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Discover amazing places at exclusive deals
              </p>
            
            {/* <p className="mt-20" data-aos="fade-up" data-aos-delay="500">
              Experience the various exciting tour and travel packages and Make
              hotel reservations, find
              <br className="lg:d-none" /> vacation packages, search cheap
              hotels and events
            </p> */}

            
            </div>
            {/* End hero title */}
{/* 
            <div
              className="masthead__tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <MainFilterSearchBox />
            </div> */}
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
