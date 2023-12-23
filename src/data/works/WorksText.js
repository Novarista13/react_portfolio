export const worksText = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "chocolate":
      return "I built my chocolate carousel website using HTML, CSS, and Bootstrap, to showcase delightful cocoa treats.";

    case "chocolatecard":
      return "I entered the world of front-end development gaining knowledge in HTML, CSS, JavaScript and new skills in VS Code.";

    case "dashboard":
      return "I constructed my admin dashboard website by harnessing the power of HTML, CSS, and Bootstrap. ";

    // case "usermanage":
    //   return "By leveraging PHP's backend capabilities and MySQL's database management, I enabled seamless user registration, login, and data storage. Combining my proficiency in these technologies, I successfully brought my user management website to life, providing a seamless experience for managing and organizing user information.";

    case "js weather website":
      return "I built a Vanilla JavaScript weather app in SheCodes Plus, an advanced 8-week JavaScript coding workshop. Building upon my previously-gained knowledge, I also became skilled in Bootstrap, API's, real-life development workflow, hosting, and advanced JavaScript. I combined all of these skills to create a fully-functioning weather app.";

    case "react weather webiste":
      return "I developed my weather website using React, Bootstrap, and the OpenWeather API, creating a dynamic platform for real-time weather information. Leveraging React's component-based architecture and Bootstrap's responsive design, I crafted an visually appealing user interface. By integrating the OpenWeather API, I ensured that users could access up-to-date weather data with ease.";

    case "old portfolio":
      return "I built my portfolio website using HTML, CSS, and Bootstrap, creating a professional showcase of my work. Combining HTML for structure, CSS for styling, and Bootstrap for responsiveness, I crafted a user-friendly design that highlights my skills and projects. Through my expertise in these technologies, I successfully brought my portfolio to life, allowing visitors to explore my work and learn more about me.";

    case "coffee review website":
      return "I constructed my coffee shop review website with a dedicated coffee album section using HTML, CSS, React, and Bootstrap, offering coffee enthusiasts a comprehensive platform for sharing and exploring their favorite brews. My expertise in these technologies allowed me to create a visually appealing coffee album section, where coffee lovers can share their passion and discover new flavors.";

    case "webpage":
      return "By utilizing HTML for structuring and CSS for styling, I carefully curated accessibility across various devices.";

    case "jewelry shop website":
      return `I am proud to showcase my meticulously crafted jewelry shop project, a testament to my skills in web development. Leveraging the power of React and the versatile styling capabilities of Bootstrap, I have created an immersive and visually stunning online shopping experience. From elegant designs to seamless navigation, my project offers users a captivating journey through a curated collection of exquisite jewelry pieces.\n\nContributors: \n  Front End: May Thit Htun\n  BackEnd: Moe Phyu Sin Maung`;

    case "small erp system":
      return "I am excited to present my accomplished ERP system project with my team, a testament to my proficiency in developing robust and scalable solutions. Utilizing React and Bootstrap, I have meticulously designed and implemented an efficient Enterprise Resource Planning system that streamlines processes and enhances business management.From seamless data management to integrated modules for various business functions, my project showcases a harmonious blend of technology and usability.\n\nContributors: Me and My Team";
    default:
      break;
  }
};
