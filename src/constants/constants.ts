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

export { navLinks, specialTechs, ProfileDefinitions, projectsFilterOptions }
