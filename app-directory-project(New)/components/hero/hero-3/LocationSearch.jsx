
'use client'

import {useEffect, useState} from "react";
import axios from "axios";

const LocationSearch = ({onSelect}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [hotelsData, setHotelsData] = useState(null);
  const baseURL = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination';
  const [suggestions, setSuggestions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL, {
        params: {
          query: searchValue,
        },
        headers: {
          'X-RapidAPI-Key': '4625a5f741msh2845f89966d858dp158d2ejsna3f0de6935aa',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        },});




      setSuggestions(response.data);

      const hotelData = response.data.data;
      const hotelName = hotelData.label;

      // console.log(daysArray);

      for (const day of hotelData) {
        console.log(day.city_name, day.label, day.name);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      // Handle error as needed
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const locationSearchContent = hotelsData ? hotelsData.map(function(element) {
    return {
      id: element.id,
      name: element.name,
      address: element.address,
      // Add other properties as needed
    };
  }) : [];

  // const locationSearchContent = [
  //     {
  //     id: 1,
  //     name: "London",
  //     address: "Greater London, United Kingdom",
  //   },
  //   {
  //     id: 2,
  //     name: "New York",
  //     address: "New York State, United States",
  //   },
  //   {
  //     id: 3,
  //     name: "Paris",
  //     address: "France",
  //   },
  //   {
  //     id: 4,
  //     name: "Madrid",
  //     address: "Spain",
  //   },
  //   {
  //     id: 5,
  //     name: "Santorini",
  //     address: "Greece",
  //   },
  // ];

  const handleOptionClick = (item) => {
    fetchData();
    setSearchValue(item.name);
    setSelectedItem(item);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSelect = (selectedValue) => {
    setSearchValue(selectedValue);
    setSuggestions([]);
    onSelect(selectedValue); // Pass the selected value to the parent or another component
  };


  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <h5 className="text-15 fw-500 ls-2 lh-16">Location</h5>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="Where are you going?"
              className="js-search js-dd-focus"
              value={searchValue}
              // onChange={(e) => setSearchValue(e.target.value)}
              onChange={handleInputChange}
              onClick={handleOptionClick}

            />
          </div>
        </div>

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {locationSearchContent.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={item.id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.name}
                      </div>
                      <div className="text-14 lh-12 text-light-1 mt-5">
                        {item.address}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSearch;
