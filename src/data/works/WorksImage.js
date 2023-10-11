import chocolate from "../../images/works/chocolate.png";
import chocolatecard from "../../images/works/chocolatecard.png";
import dashboard from "../../images/works/dashboard.png";
// import usermanage from "../../images/works/usermanage.png";
import weatherold from "../../images/works/weatherold.png";
import weathernew from "../../images/works/weathernew.png"
import webpage from "../../images/works/webpage.png";
import portfolioold from "../../images/works/portfolioold.png";
import coffeeReview from "../../images/works/coffee-review.png";

export const worksImage = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "chocolate":
      return chocolate;
    case "chocolatecard":
      return chocolatecard;
    case "dashboard":
      return dashboard;
    // case "usermanage":
    //   return usermanage;
    case "js weather website":
      return weatherold;
    case "react weather webiste":
      return weathernew;
    case "coffee review website":
      return coffeeReview;
    case "old portfolio":
      return portfolioold;
    case "webpage":
      return webpage;
    default:
      break;
  }
};
