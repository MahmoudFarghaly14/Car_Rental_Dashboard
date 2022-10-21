import React from "react";
import "../styles/bookings.css";

import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import { useState } from "react";
import { useRef } from "react";

const Bookings = () => {
  const [data , setData] = useState(carData)
  const select = useRef();

  const carFilter = ()=> {
    if(select.current.value === 'All') {
      setData(carData)
    }
    else {
      const filterCarData = carData.filter((item)=>item.category === select.current.value)
      setData(filterCarData)
    }

  }
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Booking</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New" >New</option>
              <option value="Popular" >Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select onChange={carFilter} ref={select}>

              <option value="All" >All</option>
              <option value="Toyota" >Toyota</option>
              <option value="Bmw" >Bmw</option>
              <option value="Audi" >Audi</option>
              <option value="Coupe" >Coupe</option>
            </select>
          </div>
        </div>

        <div className="booking__car-list">
          {data.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
