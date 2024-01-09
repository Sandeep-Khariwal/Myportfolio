type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "sandeepkhariwal01@gmail.com",
  title: "Hi, I’m Sandeep 👋",
  description:
    "Howdy, i'm a *javascript software programmer* with *self projects* of web experience.  I have successfully completed various projects, on MERN stack",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sandeep-khariwal-95b65522b",
    },
    {
      label: "Github",
      link: "https://github.com/Sandeep-Khariwal?tab=repositories",
    },
  ],
};

export default presentation;
