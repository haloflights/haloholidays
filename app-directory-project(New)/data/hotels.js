//
// 'use client'
// import axios from "axios";
// import {useEffect, useState} from "react";
//
//
// const Hotels = () => {
//   const [hotelsData, setHotelsData] = useState([]);
//
//
//   const baseURL = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels';
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(baseURL, {
//           params: {
//             dest_id: '-2092174',
//             search_type: 'CITY',
//             arrival_date: '2023-12-28',
//             departure_date: '2024-01-04',
//             adults: '1',
//             children_age: '0,17',
//             room_qty: '1',
//             page_number: '1',
//             languagecode: 'en-us',
//             currency_code: 'AED'
//           },
//           headers: {
//             'X-RapidAPI-Key': '4625a5f741msh2845f89966d858dp158d2ejsna3f0de6935aa',
//             'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
//           },
//         });
//
//
//         setHotelsData(response.data);
//
//         const flightsData = response.data.data;
//         const hotelName = flightsData.general.name;
//         const flights = response.data;
//         // const daysArray = flightsData.flights;
//         console.log(flightsData)
//         console.log(flights);
//
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//         // Handle error as needed
//       }
//     };
//
//     fetchData();
//   }, []);
//
// }
export const hotelsData = [
  {

    id: 1,
    tag: "Breakfast Included",
    slideImg: ["/img/hotels/1.png"],
    img: "/img/hotels/1.png",
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    ratings: "4.7",
    numberOfReviews: "3014",
    price: "72",
    delayAnimation: "100",
    city: "new_york",
    category: "hotel",
  },
  {
    id: 2,
    tag: "",
    slideImg: ["/img/hotels/2.png", "/img/hotels/1.png", "/img/hotels/3.png"],
    img: "/img/hotels/2.png",
    title: "Staycity Aparthotels Deptford Bridge Station",
    location: "Ciutat Vella, Barcelona",
    ratings: "4.8",
    numberOfReviews: "2345",
    price: "85",
    delayAnimation: "200",
    city: "london",
    category: "tour",
  },
  {
    id: 3,
    tag: "best seller",
    slideImg: ["/img/hotels/3.png"],
    img: "/img/hotels/3.png",
    title: "The Westin New York at Times Square West",
    location: "Manhattan, New York",
    ratings: "4.7",
    numberOfReviews: "3014",
    price: "68",
    delayAnimation: "300",
    city: "new_york",
    category: "activity",
  },
  {
    id: 4,
    tag: "top rated",
    slideImg: ["/img/hotels/4.png"],
    img: "/img/hotels/4.png",
    title: "DoubleTree by Hilton Hotel New York Times Square West",
    location: "Vaticano Prati, Rome",
    ratings: "4.5",
    numberOfReviews: "5633",
    price: "89",
    delayAnimation: "400",
    city: "new_york",
    category: "cruise",
  },
  {
    id: 5,
    tag: "Breakfast Included",
    slideImg: ["/img/hotels/5.png"],
    img: "/img/hotels/5.png",
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    ratings: "4.8",
    numberOfReviews: "3014",
    price: "99",
    delayAnimation: "500",
    city: "london",
    category: "holiday_rentals",
  },
  {
    id: 6,
    tag: "-25% today",
    slideImg: ["/img/hotels/6.png"],
    img: "/img/hotels/6.png",
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    ratings: "4.7",
    numberOfReviews: "3467",
    price: "79",
    delayAnimation: "600",
    city: "new_york",
    category: "hotel",
  },
  {
    id: 7,
    tag: "best seller",
    slideImg: ["/img/hotels/7.png"],
    img: "/img/hotels/7.png",
    title: "Staycity Aparthotels Deptford Bridge Station",
    location: "Ciutat Vella, Barcelona",
    ratings: "4.8",
    numberOfReviews: "3014",
    price: "88",
    delayAnimation: "700",
    city: "new_york",
    category: "holiday_rentals",
  },
  {
    id: 8,
    tag: "top rated",
    slideImg: ["/img/hotels/8.png"],
    img: "/img/hotels/8.png",
    title: "The Westin New York at Times Square West",
    location: "Manhattan, New York",
    ratings: "4.9",
    numberOfReviews: "7654",
    price: "68",
    delayAnimation: "800",
    city: "london",
    category: "flights",
  },
  {
    id: 9,
    tag: "Breakfast Included",
    img: "/img/hotels/9.png",
    slideImg: ["/img/hotels/9.png"],
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    ratings: "4.7",
    numberOfReviews: "3245",
    price: "72",
    delayAnimation: "900",
    city: "new_york",
    category: "car",
  },
  {
    id: 10,
    tag: "",
    slideImg: [
      "/img/hotels/10.png",
      "/img/hotels/11.png",
      "/img/hotels/12.png",
    ],
    title: "Staycity Aparthotels Deptford Bridge Station",
    img: "/img/hotels/10.png",
    location: "Ciutat Vella, Barcelona",
    ratings: "4.8",
    numberOfReviews: "3432",
    price: "85",
    delayAnimation: "1000",
    city: "paris",
    category: "hotel",
  },
  {
    id: 11,
    tag: "best seller",
    slideImg: ["/img/hotels/11.png"],
    img: "/img/hotels/11.png",
    title: "The Westin New York at Times Square West",
    location: "Manhattan, New York",
    ratings: "4.7",
    numberOfReviews: "3014",
    price: "68",
    delayAnimation: "1100",
    city: "new_york",
    category: "hotel",
  },
  {
    id: 12,
    tag: "top rated",
    slideImg: ["/img/hotels/12.png"],
    img: "/img/hotels/12.png",
    title: "DoubleTree by Hilton Hotel New York Times Square West",
    location: "Vaticano Prati, Rome",
    ratings: "4.5",
    numberOfReviews: "2343",
    price: "89",
    delayAnimation: "1200",
    city: "paris",
    category: "hotel",
  },
  {
    id: 13,
    tag: "Breakfast Included",
    slideImg: ["/img/hotels/13.png"],
    img: "/img/hotels/13.png",
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    ratings: "4.8",
    numberOfReviews: "3014",
    price: "99",
    delayAnimation: "500",
    city: "new_york",
    category: "hotel",
  },
  {
    id: 14,
    tag: "-25% today",
    slideImg: ["/img/hotels/14.png"],
    img: "/img/hotels/14.png",
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    ratings: "4.7",
    numberOfReviews: "3467",
    price: "79",
    delayAnimation: "600",
    city: "istanbul",
    category: "tour",
  },
  {
    id: 15,
    tag: "best seller",
    slideImg: ["/img/hotels/15.png"],
    img: "/img/hotels/15.png",
    title: "Staycity Aparthotels Deptford Bridge Station",
    location: "Ciutat Vella, Barcelona",
    ratings: "4.8",
    numberOfReviews: "3014",
    price: "88",
    delayAnimation: "700",
    city: "istanbul",
    category: "hotel",
  },
  {
    id: 16,
    tag: "top rated",
    slideImg: ["/img/hotels/16.png"],
    img: "/img/hotels/16.png",
    title: "The Westin New York at Times Square West",
    location: "Manhattan, New York",
    ratings: "4.9",
    numberOfReviews: "7654",
    price: "68",
    delayAnimation: "800",
    city: "new_york",
    category: "hotel",
  },
];

export const hotelResult = [
  {

    id: 1,
    tag: "Breakfast Included",
    slideImg: ["/img/hotels/1.png"],
    img: "/img/hotels/1.png",
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    ratings: "4.7",
    numberOfReviews: "3014",
    price: "72",
    delayAnimation: "100",
    city: "new_york",
    category: "europe",
  },
]
