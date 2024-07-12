import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "NelsonAIDev",
  DESCRIPTION: "Welcome to NelsonAIDev",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "nelsona2001@hotmail.com",
    HREF: "mailto:nelsona2001@hotmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "NelsonAIDev",
    HREF: "https://github.com/NelsonAIDev"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Nelson Delgado",
    HREF: "https://www.linkedin.com/in/nelson-andres-delgado-machado/",
  },
]
