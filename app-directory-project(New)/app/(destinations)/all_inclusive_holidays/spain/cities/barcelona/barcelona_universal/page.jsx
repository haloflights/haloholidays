import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import cityHotelsData from "@/data/cityHotels";
import Header3 from "@/components/header/header-3";
import Overview from "@/components/city-hotels/all_inclusive_holidays/spain/barcelona/barcelona_universal/Overview";
import TopBreadCrumb from "@/components/city-hotels/all_inclusive_holidays/spain/barcelona/barcelona_universal/TopBreadCrumb";
import SidebarRight from "@/components/city-hotels/all_inclusive_holidays/spain/barcelona/barcelona_universal/SidebarRight";
import ReviewProgress from "@/components/city-hotels/all_inclusive_holidays/spain/barcelona/barcelona_universal/guest-reviews/ReviewProgress";
import Facilities from "@/components/city-hotels/all_inclusive_holidays/spain/barcelona/barcelona_universal/Facilities";
import DefaultFooter from "@/components/footer/default";
import MapPropertyFinder from "@/components/city-hotels/all_inclusive_holidays/spain/barcelona/barcelona_universal/MapPropertyFinder";
import GalleryCruiseSlider from "@/components/city-hotels/all_inclusive_holidays/spain/barcelona/barcelona_universal/GalleryCruiseSlider";
import TopDestinations2 from "@/components/destinations/TopDestinations2";
import TrustBox from "@/components/trustpilot/trustbox";

export const metadata = {
  title: "Malaysia || Halo Holidays - Here For You",
  description: "Malaysia || Halo Holidays",
};

const barcelona_universal = () => {
  const title = "Barcelona Universal";
  const holiday = cityHotelsData.find((item) => item.title == title);
  

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <TopBreadCrumb />
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="row justify-between items-end">
            <div className="col-auto">
              <h1 className="text-26 fw-600">{holiday?.title}</h1>
              <div className="d-flex x-gap-5 items-center pt-5">
                <i className="icon-location-2 text-16 text-light-1" />
                <button
                  aria-label="Show on Map"
                  data-x-click="mapFilter"
                  className="text-15 text-blue-1 underline">
                  <a href="#mapSection">Show on Map</a>
                </button>
              </div>
            </div>
            {/* End .col-auto */}

            <div className="col-auto">
              <div className="row x-gap-10 y-gap-10">
                <div className="col-auto">
                  <button aria-label="Share" className="button px-15 py-10 -blue-1">
                    <i className="icon-share mr-10" />
                    Share
                  </button>
                </div>
                {/* End .col-auto */}

                <div className="col-auto">
                  <button aria-label="Save" className="button px-15 py-10 -blue-1 bg-light-2">
                    <i className="icon-heart mr-10" />
                    Save
                  </button>
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End top gallery header section */}

      <section className="pt-30">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <GalleryCruiseSlider />
              {/* End gallery grid wrapper */}

              <Overview />
              {/* End Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              <SidebarRight holiday={holiday} />
                           
            </div>
            
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

      <section className="mt-40">
        <div className="container border-top-light pt-40">
          <div className="row x-gap-40 y-gap-40">
            <div className="col-12">
              <h2 className="text-22 fw-500">Facilities of this Holiday</h2>
              <div className="row x-gap-40 y-gap-40 pt-20">
                <Facilities />
              </div>
              {/* End .row */}
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End facilities */}

      <section id="mapSection" className="pt-40">
        <div className="container">
          <h2 className="text-22 fw-500 mb-20">Holiday Location</h2>
          <div className=" rounded-4 overflow-hidden map-500">
            <MapPropertyFinder />
          </div>
        </div>
      </section>
      {/* End MapPropertyFinder */}

      <section id="hol-rev" className="pt-40 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-22 fw-500">Guest reviews</h2>
            </div>
          </div>
          {/* End .row */}

          <ReviewProgress holiday={holiday} />
          {/* End review with progress */}

          </div>
        {/* End .container */}
        {/* End container */}
      </section>
      {/* End Review section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-content-center items-end">
            <div className="col-auto">
              <div className="sectionTitle -md mb-30">
                <h2 className="sectionTitle__title">Experience The Love</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0 text-center">
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

      <section className="layout-pt-md pb-50">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Similar Destinations
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="pt-40 relative">
            <TopDestinations2 />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End top destinations */}


      {/* End facilites section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(barcelona_universal), {
  ssr: false,
});
