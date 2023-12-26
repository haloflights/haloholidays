import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

const index = () => {
  return (
    <footer className="footer -type-1">
      
      <section className="layout-pt-md layout-pb-md bg-dark-2">
      <div className="container">
        <div className="row y-gap-20 justify-between  items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white" />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">
                  Your Travel Journey Starts Here
                </h4>
                <div className="text-white">
                  Sign up and we`&apos;ll send the best deals to you
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20" >
              <div>
                <input
                  className="bg-white h-40"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              {/* End email input */}

              <div>
                <button className="button -md h-40 bg-blue-1 text-white" >
                  Subscribe
                </button>
              </div>
              {/* End subscribe btn */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
      
      
      <div className="container">
        <div className="pt-20 pb-10 ">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>
              <ContactInfo />
            </div>
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}

            {/* <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Mobile</h5>
              {/* <AppButton /> */}
            {/* </div> */} 
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
