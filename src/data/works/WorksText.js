export const worksText = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "chocolate":
      return "Built my chocolate carousel website using HTML, CSS, and Bootstrap, to showcase delightful cocoa treats.";

    case "chocolatecard":
      return "Entered the world of front-end development gaining knowledge in HTML, CSS, JavaScript and new skills in VS Code.";

    case "dashboard":
      return "Constructed my admin dashboard website by harnessing the power of HTML, CSS, and Bootstrap. ";

    case "webpage":
      return "By utilizing HTML for structuring and CSS for styling, I carefully curated accessibility across various devices.";

    case "small social media platform":
      return "During a course, I collaborated with my teacher to develop a clone of a popular social media platform, 'X'.\n\n This project involved creating a fully functional website where users can register accounts, post text updates, comment on others' posts, follow each other, and manage their profiles.\n\n A key feature of the platform is its real-time notification system, implemented using WebSockets.\n\n I developed the frontend using React, and the backend with Node.js and a MongoDB database. \n\nThis project not only honed my skills in frontend and backend development but also provided valuable experience in real-time data handling and user interaction management.\n\nContributors: Me & My Teacher";

    case "nextjs movie website":
      return "I collaborated with my teacher in a course to develop a comprehensive movie information website.\n\n This platform allows users to explore details about trending movies, browse movies by various categories, and search for specific movies.\n\n The frontend was built using Next.js, Tailwind CSS, and Radix UI, ensuring a seamless and visually appealing user experience. \n\nThis project helped me enhance my skills in modern web development technologies and provided valuable experience in creating user-friendly and responsive interfaces.\n\nContributors: Me & My Teacher";

    case "js weather website":
      return "Built a Vanilla JavaScript weather app in SheCodes Plus, an advanced 8-week JavaScript coding workshop.\n\nBuilding upon my previously-gained knowledge, I also became skilled in Bootstrap, API's, real-life development workflow, hosting, and advanced JavaScript.\n\n I combined all of these skills to create a fully-functioning weather app.\n\nContributors: Me";

    case "react weather webiste":
      return "Developed my weather website using React, Bootstrap, and the OpenWeather API, creating a dynamic platform for real-time weather information. \n\nLeveraging React's component-based architecture and Bootstrap's responsive design, I crafted an visually appealing user interface. \n\nBy integrating the OpenWeather API, I ensured that users could access up-to-date weather data with ease.\n\nContributors: Me";

    case "old portfolio":
      return "Built my portfolio website using HTML, CSS, and Bootstrap, creating a professional showcase of my work. \n\nCombining HTML for structure, CSS for styling, and Bootstrap for responsiveness, I crafted a user-friendly design that highlights my skills and projects. \n\nThrough my expertise in these technologies, I successfully brought my portfolio to life, allowing visitors to explore my work and learn more about me.\n\nContributors: Me";

    case "coffee review website":
      return "Constructed my coffee shop review website with a dedicated coffee album section using HTML, CSS, React, and Bootstrap, offering coffee enthusiasts a comprehensive platform for sharing and exploring their favorite brews. \n\nMy expertise in these technologies allowed me to create a visually appealing coffee album section, where coffee lovers can share their passion and discover new flavors.\n\nContributors: Me";

    case "jewelry shop website":
      return `I am proud to showcase my meticulously crafted jewelry shop project, a testament to my skills in web development. \n\nLeveraging the power of React and the versatile styling capabilities of Bootstrap, I have created an immersive and visually stunning online shopping experience. \n\nFrom elegant designs to seamless navigation, my project offers users a captivating journey through a curated collection of exquisite jewelry pieces.\n\nContributors: \n  Front End: May Thit Htun\n  BackEnd: Moe Phyu Sin Maung`;

    case "small erp system":
      return "I am excited to present my accomplished ERP system project with my team, a testament to my proficiency in developing robust and scalable solutions. \n\nUtilizing React and Bootstrap, I have meticulously designed and implemented an efficient Enterprise Resource Planning system that streamlines processes and enhances business management. \n\nFrom seamless data management to integrated modules for various business functions, my project showcases a harmonious blend of technology and usability.\n\nContributors: Me and My Team";

    case "book recommendation website":
      return "I developed a comprehensive book recommendation platform using NextJS and TailwindCSS, handling both the frontend and backend development independently. \n\nThe website allows users to search for books, receive personalized recommendations, read reviews, and create customizable book lists. \n\nThe backend services include user authentication, book data management, and recommendation algorithms, providing a robust and efficient solution for book enthusiasts.\n\nContributors: Me";
    default:
      break;
  }
};
