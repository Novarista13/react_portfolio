import chocolate from "../../images/works/chocolate.jpg";
import chocolatecard from "../../images/works/chocolatecard.jpg";
import dashboard from "../../images/works/dashboard.png";
// import usermanage from "../../images/works/usermanage.png";
import weatherold from "../../images/works/weatherold.jpg";
import weathernew from "../../images/works/weathernew.jpg";
import webpage from "../../images/works/webpage.jpg";
import portfolioold from "../../images/works/portfolioold.png";
import coffeeReview from "../../images/works/coffee-review.jpg";
import jewelryShop from "../../images/works/jewelry-shop.png";
import erpSystem from "../../images/works/erp-system.jpg";

export const worksImage = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "chocolate":
      return chocolate;
    case "chocolatecard":
      return chocolatecard;
    case "dashboard":
      return dashboard;
    case "jewelry shop website":
      return jewelryShop;
    case "small erp system":
      return erpSystem;
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
