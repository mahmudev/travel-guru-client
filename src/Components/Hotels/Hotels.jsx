import React from "react";
import { useLoaderData } from "react-router-dom";
import HotelCard from "../Card/HotelCard/HotelCard";
const Hotels = () => {
  const hotels = useLoaderData();
  console.log(hotels);
  return (
    <div className="text-left mt-36 mb-10">
      <p>252 stays Apr 13-17 3 guests</p>
      <h4
        className="text-2xl"
        style={{ fontFamily: ["Bebas Neue", "cursive"] }}
      >
        Stay in Cox's Bazar
      </h4>
      <div className="grid md:grid-cols-3 gap-2">
        <div className="col-span-2 grid md:grid-cols-2 gap-2">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel}></HotelCard>
          ))}
        </div>
        
        <div className="map">
          <iframe
            className="md:w-full md:h-screen rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24933407057!2d91.9204992358945!3d21.45103776170327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1682899313051!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
