
'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// import { All_inclusive_spain_destinations } from ".";
import { last_minute_phuket_destinations } from "@/data/cities";
import Link from "next/link";

const Phuket_cities = () => {
  return (
    <div className="pt-40 overflow-hidden js-section-slider">
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-places-next",
          prevEl: ".js-places-prev",
        }}
        pagination={{
          el: ".js-places-pag",
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {last_minute_phuket_destinations.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              // href="/tour-list-v3"
              href={item.link}
              className="citiesCard -type-2"
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
            >
              <div className="citiesCard__image rounded-4 ratio ratio-3:4">
                <img
                  className="img-ratio rounded-4 js-lazy"
                  src={item.img}
                  alt="image"
                />
              </div>
              <div className="citiesCard__content mt-10">
                <h4 className="text-18 lh-13 fw-500 text-dark-1">
                  {item.title}
                </h4>
                
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Phuket_cities;
