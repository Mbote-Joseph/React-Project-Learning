import React from "react";
import Card from "./Card";
// import Contact from "./Contact";
import Home from "./Home";
import Katie from "./images/image 12.png";
import Wedding from "./images/wedding-photography 1.png";
import Mountain from "./images/mountain-bike 1.png";

const Main = () => {
  return (
    <div className="main">
      <Home />
      <div className="cards-main">
        <Card
          image={Katie}
          lesson="Life lessons with Katie Zaferes"
          price={136}
          stats={{ rating: 5.0, voters: 6, country: "USA" }}
        />
        <Card
          image={Wedding}
          lesson="Learn wedding photography"
          price={125}
          stats={{ rating: 4.8, voters: 15, country: "UK" }}
        />
        <Card
          image={Mountain}
          lesson="Group Mountain Biking"
          price={50}
          stats={{ rating: 4.7, voters: 37, country: "Russia" }}
        />
      </div>
    </div>
  );
};

export default Main;
//  <Contact />

// <img src={Katie} alt="katie" />
//       <div className="rating">
//         <div className="stats">
//           <img src={Star} alt="star" />
//           <span>5.0</span>
//           <span className="gray">(6) .</span>
//           <span className="gray">USA</span>
//         </div>
//         <p>Life lessons with Katie Zaferes</p>
//         <p>
//           <span style={{ fontWeight: "bold" }}>From $136 </span>/ person
//         </p>
//       </div>
