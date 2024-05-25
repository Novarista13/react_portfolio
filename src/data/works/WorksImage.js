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
import bookRecommend from "../../images/works/book-recommend.png";

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
    case "book recommendation website":
      return bookRecommend;
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
export const worksVideo = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "jewelry shop website":
      return "https://drive.google.com/file/d/1MK7GywRZZaX_DIBTevVVFPEMG5zgE4n5/preview";
    case "small erp system":
      return "https://drive.google.com/file/d/1n1FwwE3ctxL3h3IFKkqPsgCHEgvoxMfF/preview";
    case "book recommendation website":
      return "https://drive.google.com/file/d/1Hois0HGsxV5gMlMgv5XzfK-NvkyHTNbq/preview";
  }
};
