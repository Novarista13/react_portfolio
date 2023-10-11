import html from "../../images/skills/html.svg";
import css from "../../images/skills/css.svg";
import javascript from "../../images/skills/javascript.svg";
import bootstrap from "../../images/skills/bootstrap.svg";
import react from "../../images/skills/react.svg";
import materialui from "../../images/skills/materialui.svg";
import git from "../../images/skills/git.svg";
import figma from "../../images/skills/figma.svg";
import canva from "../../images/skills/canva.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "bootstrap":
      return bootstrap;
    case "react":
      return react;
    case "materialui":
      return materialui;
    case "git":
      return git;
    case "figma":
      return figma;
    case "canva":
      return canva;
    default:
      break;
  }
}