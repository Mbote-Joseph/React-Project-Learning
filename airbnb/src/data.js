import Katie from "./images/image 12.png";
import Wedding from "./images/wedding-photography 1.png";
import Mountain from "./images/mountain-bike 1.png";

export default [
  {
    image: Katie,
    lesson: "Life lessons with Katie Zaferes",
    price: 136,
    stats: { rating: 5.0, voters: 6, country: "USA" },
    openSpots: 0,
  },
  {
    image: Wedding,
    lesson: "Learn wedding photography",
    price: 125,
    stats: { rating: 4.8, voters: 15, country: "UK" },
    openSpots: 10,
  },
  {
    image: Mountain,
    lesson: "Group Mountain Biking",
    price: 50,
    stats: { rating: 4.7, voters: 37, country: "Russia" },
    openSpots: 0,
  },
];

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
// }
