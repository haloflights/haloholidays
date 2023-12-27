import Image from "next/image";

const Block1 = () => {
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">About Halo Holidays</h2>
        <p className="mt-5"></p>
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
    
Welcome to Halo, established in 2018 as a sanctuary for discerning travelers seeking journeys that blend the wisdom of experience with the thrill of exploration. We are more than just a travel agency; we are your seasoned companion, your insightful guide, and your empathetic friend in the dynamic world of travel. With branches in the UK and Sri Lanka, our expertise spans diverse cultures and landscapes, ensuring that your travel experience is as rich and varied as the destinations themselves.
          <br />
          <br />
          At Halo, we are committed to curating travel experiences that resonate with your unique preferences and style. Our journey together is built on a foundation of trust and reliability, ensuring every aspect of your trip is handled with utmost care. From the serene beaches of Sri Lanka to the historic streets of the UK, we promise journeys that are not only comfortable and leisure-oriented but also engaging and enriching. Established to nurture your travel aspirations and support you every step of the way, Halo is where your dream vacations come to life, leaving you with memories to cherish and stories to share.
        </p>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/pages/about/2.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
