import dynamic from "next/dynamic";
import Header3 from "@/components/header/header-3";
import Hero3 from "@/components/hero/hero-3";
import Hotels from "@/components/hotels/Hotels2";
import Link from "next/link";
import Rentals from "@/components/rentals/Rentals";
import Cruise from "@/components/cruise/Cruise";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/home/home-3/WhyChoose";
import DiscountsBanner from "@/components/home/home-5/DiscountsBanner";
import Tours3 from "@/components/tours/Tours3";
import TourCategories from "@/components/home/home-5/TourCategories";
import Blog4 from "@/components/blog/Blog4";
import Travellers from "@/components/home/home-2/Travellers";
import TrustBox from "@/components/trustpilot/page";

export const metadata = {
  title: "Halo Holidays || Here For You",
  description: "Halo Holidays - Travel & Tour ",
};

const home_3 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header3 />
      {/* End Header 3 */}

      <Hero3 />
      {/* End Hero 3 */}

      {/* <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Special Offers</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div> */}
          {/* End .row */}
          {/* <div className="row y-gap-20 pt-40">
            <AddBanner />
          </div> */}
          {/* End .row */}
        {/* </div> */}
        {/* End container */}
      {/* </section> */}
      {/* End AddBanner Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Halo Holidays for Your All Inclusive Holidays?</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Your holiday should be as unique as you are. With unbeatable prices, flexible bookings, and round-the-clock support, we ensure your holiday experience is seamless and tailored to your preferences.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why choose Section */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Holiday Types</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  We have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          {/* <div className="row y-gap-30 pt-60 lg:pt-40">
            <Holidays />
          </div>
          </div> */}
          {/* </section> */} 


          <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Choose your All Inclusive Holiday Type</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                With Halo Holidays, finding your perfect escape is effortless. Whether you're dreaming of a serene beach retreat, a romantic honeymoon hideaway, or an action-packed family adventure, our diverse range of all-inclusive holiday types caters to every desire. Select from last-minute getaways, luxurious cruises, or tailor-made family or couple holidays. Each experience is crafted to provide you with unforgettable moments and unparalleled value. Start exploring now and find the holiday that resonates with your idea of the perfect vacation.
                </p>
              </div>
            </div>
            {/* End .col */}

            

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                aria-label="more"
              >
                More <div className="icon-arrow-top-right ml-15" 
                aria-label="arrow-top-right"/>
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            {/* <TopDestinations/> */}
            <TourCategories />
            
          </div>
          <div className="col-auto ">
              <div className="d-flex x-gap-19 items-center ml-1000 ">
                <div className="col-auto">
                  <button className="d-flex items-right text-24 arrow-right-hover js-tour-type-prev"
                  aria-label="arrow-left">
                    <i className="icon icon-arrow-left " />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-tour-type-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-tour-type-next "
                  aria-label="arrow-right">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End next */}
              </div>
            </div>
        </div>
        
      </section>


      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Explore Hot Deals</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}


          {/* Holiday   */ }

          {/* <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
           
          </div>
          <div className="row y-gap-30 pt-40">
            <div className="col-xl-5">
              <DiscountsBanner /> */}
            {/* </div> */}
            {/* End col-xl-5 */}

            {/* <div className="col-xl-7"> */}
              {/* <Tours3 /> */}
            {/* </div> */}
            {/* End col-xl-7 */}
          {/* </div> */}


          {/* End .row */}
        {/* </div> */}
        {/* End .container */}
      {/* // </section> */} 

      
            {/* End Top Destinations Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Explore Our Top Destinations for All Inclusive Holidays</h2>
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
          <Travellers/>
          </div>
          {/* End relative */}
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Last Minute Holidays</h2>
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


      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Best All Inclusive Holidays</h2>
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
      {/* End  Hotel sections */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div> */}
            {/* End .col */}

            {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
            {/* End .col */}
          {/* </div> */}
          {/* End .row */}

          {/* <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div> */}
          {/* End .row */}
        {/* </div> */}
        {/* End .container */}
      {/* </section> */}
      {/* End Tours Sections */}

{/* 
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Trending Activity</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div> */}
            {/* </div> */}
            {/* End .col */}

            {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
            {/* End .col */}
          {/* </div> */}
          {/* End .row */}

          {/* <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity />
          </div> */}
          {/* End .row */}
        {/* </div> */}
        {/* End .container */}
      {/* </section> */}
      {/* Trending Activity Sections */}

      {/* <section className="layout-pt-md layout-pb-md"> */}
        {/* <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Featured Holiday Rentals
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div> */}
            {/* End .col */}

            {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                aria-label="more"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
            {/* End .col */}
          {/* </div> */}
          {/* End .row */}

          {/* <div className="y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Rentals />
          </div> */}
          {/* End .row */}
        {/* </div> */}
        {/* End .container */}
      {/* </section> */}
      {/* Featured Rentals Sections */}

    

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Featured Cruise Deals</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                aria-label="more">
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cruise />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Features Cruise Deals Sections */}

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Routes</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div> */}
            {/* End .col */}

            {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
            {/* End .col */}
          {/* </div> */}
          {/* End .row */}

          {/* <div className="row y-gap-30 pt-40 sm:pt-20">
            <Flights />
          </div> */}
          {/* End .row */}
        {/* </div> */}
        {/* End .container */}
       {/* </section> */}
      {/* Popular Routes Sections */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Blogs will go here
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


  <TrustBox/>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_3), { ssr: true });