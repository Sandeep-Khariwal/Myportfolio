export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Batch mate App",
    techs: ["ReactJs","Redux","NodeJs", "Firebase", "ExpressJs", "MondoDB"],
    link: "https://64d9c28b7b37a0047c01ac7f--batch-mate-app.netlify.app/",
  },
  {
    title: "flickerchat",
    techs: ["NextJs","Redux","TailwindCss","NodeJs", "ExpressJs", "MondoDB"],
    link: "https://flickerchat.com",
  },
  {
    title: "E-commerce",
    techs: ["ReactJs","NodeJs", "ExpressJs", "MondoDB"],
    link: "https://transcendent-twilight-a8d98c.netlify.app/",
  }
];

export default projects;
