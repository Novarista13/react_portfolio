export const worksText = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "chocolate":
      return "I built my chocolate carousel website using HTML, CSS, and Bootstrap, to showcase an array of delightful cocoa treats.";

    case "chocolatecard":
      return "I entered the world of front-end development by gaining some knowledge in HTML, CSS, and JavaScript along with my new skills in VS Code.";

    case "dashboard":
      return "I constructed my admin dashboard website by harnessing the power of HTML, CSS, and Bootstrap, I curated a seamless interface that facilitates smooth data management and monitoring. Through my expertise in HTML, CSS, and Bootstrap, I successfully brought my vision to reality, creating an intuitive admin dashboard that enhances productivity and organization. ";

    case "usermanage":
      return "By leveraging PHP's backend capabilities and MySQL's database management, I enabled seamless user registration, login, and data storage. Combining my proficiency in these technologies, I successfully brought my user management website to life, providing a seamless experience for managing and organizing user information.";

    case "weatherold":
      return "I built a Vanilla JavaScript weather app in SheCodes Plus, an advanced 8-week JavaScript coding workshop. Building upon my previously-gained knowledge, I also became skilled in Bootstrap, API's, real-life development workflow, hosting, and advanced JavaScript. I combined all of these skills to create a fully-functioning weather app.";

    case "webpage":
      return " By utilizing HTML for structuring and CSS for styling, I carefully curated accessibility across various devices. ";

    default:
      break;
  }
};
