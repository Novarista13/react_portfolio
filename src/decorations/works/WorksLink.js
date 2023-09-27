
export const worksLink = (work) => {
  const workID = work.toLowerCase();
  switch (workID) {
    case "weatherold":
      return "https://keen-granita-755fc6.netlify.app/";
    case "weathernew":
      return "https://dashing-dolphin-5b27ce.netlify.app/";
    default:
      break;
  }
}