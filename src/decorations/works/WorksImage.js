import chocolate from "../../images/works/chocolate.png";
import chocolatecard from "../../images/works/chocolatecard.png";
import dashboard from "../../images/works/dashboard.png";
import usermanage from "../../images/works/usermanage.png";
import weatherold from "../../images/works/weatherold.png";
import webpage from "../../images/works/webpage.png";

export const worksImage = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "chocolate":
      return chocolate;
    case "chocolatecard":
      return chocolatecard;
    case "dashboard":
      return dashboard;
    case "usermanage":
      return usermanage;
    case "weatherold":
      return weatherold;
    case "webpage":
      return webpage;
    default:
      break;
  }
};
