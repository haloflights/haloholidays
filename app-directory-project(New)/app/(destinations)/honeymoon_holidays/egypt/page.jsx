import dynamic from "next/dynamic";
import Header3 from "@/components/header/header-3";
import Hotels from "@/components/hotels/Hotels2";
import Link from "next/link";
import Cruise from "@/components/cruise/Cruise";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/common/WhyChoose";
import WhyChooseMobile from "@/components/common/WhyChooseMobile";
import Blog4 from "@/components/blog/Blog4";
import Travellers from "@/components/home/home-2/Travellers";
import TrustBox from "@/components/trustpilot/trustbox";
import EgyptHero from "@/components/hero/honeymoon-hero/egypt-hero";
import Egypt_cities from "@/components/holidays/honeymoon_holidays/cities/Egypt_Cities";

export const metadata = {
  title: "Halo Holidays || Here For You",
  description: "Halo Holidays - Travel & Tour ",
};

const egypt = () => {
  return (
    <>
      {/* End Page Title */}

      <Header3 />
      {/* End Header 3 */}

      <EgyptHero />
      {/* End Hero 3 */}

      
      <section className="layout-pt-md layout-pb-md d-none d-sm-block">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title pt-30">Why Choose Halo Holidays for Your All Inclusive Holidays?</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Your holiday should be as unique as you are. With unbeatable prices, flexible bookings, and round-the-clock support, we ensure your holiday experience is seamless and tailored to your preferences.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50 mb-30">
            <WhyChoose />
          </div>
          {/* End row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why choose Section */}

      <section className="layout-pt-md layout-pb-md d-md-none">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title pt-30">Why Choose Halo Holidays for Your All Inclusive Holidays?</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Your holiday should be as unique as you are. With unbeatable prices, flexible bookings, and round-the-clock support, we ensure your holiday experience is seamless and tailored to your preferences.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50 mb-30">
            <WhyChooseMobile />
          </div>

          <div className="col-auto ">
              <div className="d-flex x-gap-20  items-center mt-10 y-gap-30 justify-content-center">
                <div className="col-auto">
                  <button className="d-flex items-center text-26  arrow-right-hover js-tour-type-prev"
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
          {/* End row */}
          
        </div>
        {/* End .container */}
      </section>
      {/* End Why choose mobile Section */}

      

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Cities will go here</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Confused where you should go? Explore our top destinations for all inclusive Holidays
                </p>
              </div>
            </div>
            {/* End .col */}

        
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-20 sm:pt-20 item_gap-x30">
          <Egypt_cities/>
        
          </div>
          {/* End relative */}

          <div className="text-center pt-40">
              <Link
                href="#"
                className="text-20 text-decoration-underline blue-1 text-blue-1 h-30"
                aria-label="more"
              >
                Explore more destinations 
              </Link>
            </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Cities Will Go here</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Finding a Last Minute Holiday can be stressfull sometimes, but not with us. We take care of the stress bringing you nothing but the best.
                </p>
              </div>
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels />
          </div>
          {/* End relative */}

          <div className="text-center pt-40">
              <Link
                href="#"
                className="text-20 text-decoration-underline blue-1 text-blue-1 h-30"
                aria-label="more"
              >
                Show me more
              </Link>
            </div>

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

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-content-center items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Experience The Love</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                 This is why we do What We do
                </p>
              </div>
            </div>
            {/* End .col */}
            <TrustBox/>
          </div>
          {/* End .row */}

          {/* <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cruise />
          </div> */}
          {/* End .row */}
        </div>
       
        {/* End .container */}
      </section>
      {/* Features Cruise Deals Sections */}

     
      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default egypt;