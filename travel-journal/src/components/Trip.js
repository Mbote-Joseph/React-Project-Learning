import React from "react";
import { BsGeoAlt } from "react-icons/bs";
const Trip = ({ data }) => {
  return (
    <div className="trip">
      <img src={data.imageUrl} alt={data.description} />
      <div className="content">
        <BsGeoAlt /> <big>{data.location}</big>{" "}
        <a href={data.googleMapsUrl}>View on Google Maps</a>
        <h1>{data.title}</h1>
        <span>{data.startDate}</span>-<span>{data.endDate}</span>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Trip;

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description:
//   "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: Image1,
