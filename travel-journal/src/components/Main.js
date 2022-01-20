import React from "react";
import Trip from "./Trip";
import data from "../data/data";

const Main = () => {
  const tripData = data.map((trip, i) => {
    return <Trip key={i} data={trip} />;
  });
  return <div className="Main">{tripData}</div>;
};

export default Main;
