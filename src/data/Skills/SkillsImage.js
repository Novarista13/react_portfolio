import html from "../../images/skills/html.svg";
import css from "../../images/skills/css.svg";
import javascript from "../../images/skills/javascript.svg";
import bootstrap from "../../images/skills/bootstrap.svg";
import react from "../../images/skills/react.svg";
import materialui from "../../images/skills/materialui.svg";
import git from "../../images/skills/git.svg";
import canva from "../../images/skills/canva.svg";
import next from "../../images/skills/next.svg";
import node from "../../images/skills/node.svg";
import tailwind from "../../images/skills/tailwind.svg";
import github from "../../images/skills/github.svg";
import typescript from "../../images/skills/typescript.svg";
import shadcn from "../../images/skills/shadcn.png";
import flowbite from "../../images/skills/flowbite.png";
import nextAuth from "../../images/skills/next-auth.svg";
import prisma from "../../images/skills/prisma.svg";
import zod from "../../images/skills/zod.svg";
import axios from "../../images/skills/axios.png";

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
    case "canva":
      return canva;
    case "typescript":
      return typescript;
    case "next":
      return next;
    case "node":
      return node;
    case "tailwind":
      return tailwind;
    case "github":
      return github;
    case "shadcnui":
      return shadcn;
    case "flowbiteui":
      return flowbite;
    case "next auth":
      return nextAuth;
    case "prisma":
      return prisma;
    case "zod":
      return zod;
    case "axios":
      return axios;
    default:
      break;
  }
};
