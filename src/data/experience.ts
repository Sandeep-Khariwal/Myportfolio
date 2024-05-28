export type Experience = {
    company: string;
    techs: string[],
    link:string,
    Duration:string
  };
  
  const experience: Experience[] = [
    {
      company: "StockBrain",
      techs: ["ReactJs","Redux"],
      link: "https://fastreach.io",
      Duration:"3"
    },
    {
      company: "fastreach",
      techs: ["NextJs","Redux","TailwindCss","NestJs", "PostgreSQL"],
      link: "https://fastreach.io",
      Duration:"3"
    },
    {
    company: "Ethica Service Pvt Ltd",
      techs: ["NextJs","Redux", "Antd","TailwindCss","NestJs", "PostgreSQL"],
      link: "https://ethica.app",
      Duration:"3"
    }
  ];
  
  export default experience;
  