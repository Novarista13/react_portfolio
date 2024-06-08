export const worksTechStack = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "js weather website":
      return ["HTML", "CSS", "Javascript", "Axios", "Bootstrap"];

    case "react weather webiste":
      return ["Javascript", "React", "Axios", "Bootstrap"];

    case "old portfolio":
      return ["HTML", "CSS", "Javascript", "Bootstrap"];

    case "coffee review website":
      return ["Javascript", "React", "Bootstrap"];

    case "jewelry shop website":
      return ["CSS", "Javascript", "React", "Bootstrap"];

    case "small erp system":
      return ["Javascript", "React", "Axios", "Bootstrap"];

    case "book recommendation website":
      return [
        "Typescript",
        "Next",
        "Next Auth",
        "Prisma",
        "Zod",
        "Tailwind",
        "FlowbiteUI",
      ];

    case "small social media platform":
      return ["Javascript", "React", "Axios", "Node", "MaterialUI"];

    case "nextjs movie website":
      return ["Javascript", "Next", "Tailwind"];

    default:
      break;
  }
};
