export const demoLink = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "js weather website":
      return "https://keen-granita-755fc6.netlify.app/";
    case "react weather webiste":
      return "https://dashing-dolphin-5b27ce.netlify.app/";
    case "coffee review website":
      return "https://coffeenova-corner.netlify.app/home";
    
    case "old portfolio":
      return "https://gleaming-kulfi-8714c2.netlify.app/";
    default:
      break;
  }
};
export const sourceLink = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "js weather website":
      return "https://github.com/Novarista13/weather_project";
    case "react weather webiste":
      return "https://github.com/Novarista13/weather-react-app";
    case "coffee review website":
      return "https://github.com/Novarista13/coffee";
    case "jewelry shop website":
      return "https://github.com/Novarista13/jewelry_shop";
    case "small erp system":
      return "https://github.com/KaungMN/flavorwave_front";
    case "book recommendation website":
      return "https://github.com/Novarista13/book-recommend";
    case "old portfolio":
      return "https://github.com/Novarista13/portfolio";
    case "small social media platform":
      return "https://github.com/Novarista13/rsd24/tree/main/x-app";
    case "nextjs movie website":
      return "https://github.com/Novarista13/rsd24/tree/main/next-movie";
    default:
      break;
  }
};
