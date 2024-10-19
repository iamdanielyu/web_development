export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Coding History",
    year: 2022,
    description:
      "Attending UCSB as first year studying Computer Science. Learning Python and C++ as of right now. Has prior experience with Python and JavaScript.",
    url: "https://cs.ucsb.edu/",
  },
  {
    title: "Some Projects I've Done",
    year: 2024,
    description:
      "I have been doing mostly projects from freeCodeCamp and am planning to do my own projects in the future.",
    url: "https://codepen.io/your-work",
  },
  {
    title: "Connections",
    year: 2025,
    description:
      "Looking to learn more about computers in general and create connections in the industry.",
    url: "https://example.com/",
  },
];
