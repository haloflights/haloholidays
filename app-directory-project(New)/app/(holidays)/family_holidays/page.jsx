import dynamic from "next/dynamic";
import Blog4 from "@/components/blog/Blog4";
import Brand2 from "@/components/brand/Brand2";
import DefaultFooter from "@/components/footer/default";
import Header3 from "@/components/header/header-3";
import FamilyHero from "@/components/hero/family-hero";
import BlockGuide from "@/components/home/home-2/BlockGuide";
import Testimonial from "@/components/home/home-2/Testimonial";
import TestimonialRating from "@/components/home/home-2/TestimonialRating";
import Travellers from "@/components/home/home-2/Travellers";
import FilterHotels3 from "@/components/hotels/FilterHotels3";
import Link from "next/link";
import Hotels from "@/components/hotels/Hotels2";
import WhyChoose from "@/components/home/home-3/WhyChoose";
import WhyChooseMobile from "@/components/home/home-3/WhyChooseMobile";

export const metadata = {
    title: "Halo Holidays || Here For You",
    description: "Halo Holidays - Travel & Tour ",
  };

const family_holidays = () => {
  return (
    <>
      {/* End Page Title */}

      <Header3 />
      {/* End Header 2 */}

      {/* <Hero5 /> */}
      <FamilyHero />
      {/* End Hero 2 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
        <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Halo Holidays for Your All Inclusive Family Holidays?</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Your holiday should be as unique as you are. With unbeatable prices, flexible bookings, and round-the-clock support, we ensure your holiday experience is seamless and tailored to your preferences.
                </p>
              </div>
            </div>
          </div>
        <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
        </div>
      </section>
      {/* End travel block sections */}


      

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Connect With Other Travellers
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-places-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <Travellers />
          {/* End travellers component */}
        </div>
        {/* End .container */}
      </section>
      {/* End Connect with Travellers Sections */}

         {/* <FilterHotels3 /> */}

      {/* End Best Seller Hotels Sections */}

      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row justify-center text-center pt-60">
            <div className="col-auto">
              <div className="text-15 lh-1 text-white">
                Trusted by the world’s best
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="px-40 md:px-0">
            <div className="row y-gap-30 justify-between items-center pt-60 lg:pt-40">
              <Brand2 />
            </div>
          </div>
        </div>
      </section>
      {/* End testimonial and brand sections Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                Stay Updated with All-Inclusive Couple Holiday Insights
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
               Blogs Will go here
                </p>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Blog4 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top All Inclusive Family Holidays Hotels</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1 h-30"
                aria-label="more"
              >
                More <div className="icon-arrow-top-right ml-15"  />
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels />
          </div>
          {/* End relative */}
        </div>
      </section>


      {/* <Subscribe /> */}
      {/* End Subscribe Section */}

      {/* <AppBanner /> */}
      {/* End AppBanner Section */}

      {/* <CallToActions /> */}
      {/* End CallToActions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(family_holidays), { ssr: false });
