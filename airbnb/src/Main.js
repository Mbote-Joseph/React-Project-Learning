import React from "react";
import Card from "./Card";
// import Contact from "./Contact";
import Home from "./Home";

import data from "./data";

const Main = () => {
  const cardData = data.map((card, i) => {
    return (
      <Card
        key={i}
        image={card.image}
        lesson={card.lesson}
        price={card.price}
        stats={card.stats}
        openSpots={card.openSpots}
      />

      /*
      ==== Another way where we pass an object as a prop
        <Card key={i} data={card} />
      */
    );
  });

  return (
    <div className="main">
      <Home />
      <div className="cards-main">{cardData}</div>
    </div>
  );
};

export default Main;
//  <Contact />

// <Card
// image={Katie}
// lesson="Life lessons with Katie Zaferes"
// price={136}
// stats={{ rating: 5.0, voters: 6, country: "USA" }}
// />
// <Card
// image={Wedding}
// lesson="Learn wedding photography"
// price={125}
// stats={{ rating: 4.8, voters: 15, country: "UK" }}
// />
// <Card
// image={Mountain}
// lesson="Group Mountain Biking"
// price={50}
// stats={{ rating: 4.7, voters: 37, country: "Russia" }}
// />
