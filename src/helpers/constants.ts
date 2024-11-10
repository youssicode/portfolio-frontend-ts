import images from "./images"

const navLinks: string[] = [
  "home",
  "about",
  "work",
  "skills",
  "testimonials",
  "contact",
]

const specialTechs: string[] = [images.git, images.react, images.tailwind]
const projectsFilterOptions: string[] = [
  "HTML & CSS only",
  "Vanilla JS",
  "React",
  "Full-Stack",
  "All",
]

enum ProfileDefinitions {
  First = "front-end developer",
  Second = "Meta-certified",
}

export type SocialMediaLink = {
  name: string
  url: string
}
const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/youssicode",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/el-hrouzi",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/youssef.elhrouzi",
  },
]

export {
  navLinks,
  specialTechs,
  ProfileDefinitions,
  projectsFilterOptions,
  socialMediaLinks,
}
