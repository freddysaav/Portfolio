/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-QT2L09TF97",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "FREDDY A. SAAVEDRA H.",
  logo_name: "freddy.sh()",
  full_name: "Freddy A. Saavedra H",
  subTitle:
    "Data Scientist, Back-end Developer, and Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1LI1rHZuGaITl3qqXNCg6mWDfLzLHu1Qo/view?usp=sharing",
  mail: "mailto:im.freddysaavedra98@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/freddysaav",
  linkedin: "https://www.linkedin.com/in/freddy-saavedra-60b452167/",
  gmail: "im.freddysaavedra98@gmail.com",
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚜️ Turning dirty and unstructured data into ready to use data for analytics",
        "⚜️ Extract insights and automate intelligent decision-making from business data, and other available sources",
        "⚜️ Creating dynamic dashboards, insightful reports, and compelling visualizations using Power BI, Looker Studio, and Tableau",
        "⚜️ Building Machine Learning and Deep Learning models for different use cases",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            color: "#trasparent",
          },
        },
        {
          skillName: "TableaU",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            color: "transparent",
          },
        },
       {
          skillName: "Looker Studio",
          fontAwesomeClassname: "logos:looker-icon",
          style: {
            color: "#trasparent",
          },
        },
      ],
    },

    {
      title: "Back-end Development",
      fileName: "FullStackImg",
      skills: [
        "⚜️ Creating application back-end in Spring Boot framework",
        "⚜️ Integration of third party services such as AWS and Azure",
        "⚜️ Designing and optimizing database schemas for improved data management and retrieval",
        "⚜️ Building basic responsive website front-end using ReactJS",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6db33f",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚜️ Experience working on multiple cloud platforms",
        "⚜️ Experience hosting and managing websites",
        "⚜️ Experience with continuous integration and continuous delivery",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "devicon:azure",
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidad del Cauca",
      title_url: "https://www.unicauca.edu.co/",
      subtitle: "Bachelors in Electronics and Telecommunications Engineering",
      logo_path: "Unicauca_logo.png",
      alt_name: "SSEC",
      duration: "2016 - 2022",
      descriptions: [
        "⚜️ I have studied basic software engineering subjects like Networking, Operating Systems, DB, Security, Data Structures, Algorithms, and AI.",
        "⚜️ Apart from this, I have done courses on Machine Learning, Data Science, Cloud, and Back-end Development.",
        "⚜️ I received honorable mention for the high impact research project in the field of Telecommunications and Machine Learning.",
      ],
      website_link: "https://drive.google.com/file/d/1gdh4a_zAxBLw1iFQLjgpc2vQoPDseUD6/view?usp=sharing",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Scrum Fundamentals Certified",
      subtitle: "- SCRUMstudy",
      logo_path: "scrum_logo.png",
      certificate_link:
        "https://www.scrumstudy.com/certification/verify?type=SFC&number=655960",
      alt_name: "SCRUMstudy",
      color_code: "#dbdce0",
    },
    {
      title: "Machine Learning with Python from Linear Models to Deep Learning",
      subtitle: "- Regina Barzilay",
      logo_path: "mitx_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/9cbc3446f43a4d33869343a03783b5c2",
      alt_name: "MITx",
      color_code: "#8C151599",
    },
    {
      title: "IBM Data Science",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/8112a0c73505a1007a6081dae6ff9610",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },


    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Research and Volunteership",
  description:
    " I have worked with companies and a research group as Data Scientist. I have also worked as a volunteer to improve my skills and help others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Data Analyst",
          company: "Servagro LTDA",
          company_url: "https://seguridadsvg.com/",
          logo_path: "Servagro_logo.png",
          duration: "jun 2023 - dic 2023",
          location: "Popayán-Cauca, Colombia",
          description: "I used SQL, BigQuery and Looker Studio to develop dashboards and reports for all departments of the company, such as accounting, administration, operations, sales, and marketing. This facilitated accurate tracking of key performance indicators (KPIs) and optimized decision making. I assisted in conducting internal audits to ensure data quality and accuracy, as well as updating information and correcting errors on a large scale. I also helped acquire and debug databases for SMS, WhatsApp and email advertising campaigns, and managed campaigns on platforms such as Meta and Google. I contributed to the implementation of a DevOps environment using tools such as Git, JUnit and New Relic.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "Machine learning developer",
          company: "IEEE ComSoc Unicauca",
          company_url: "http://portal.unicauca.edu.co/portaleningles/news/comsocauca-research-seedbed-consolidated-dissemination-advances-telecommunications",
          logo_path: "comsoc.png",
          duration: "Oct 2021 - Jul 2022",
          location: "Popayán-Cauca, Colombia",
          description:
            "Created a Python, P4, and Machine Learning‑based application to classify and route Internet traffic in real‑time on the data plane of a Telecommunications network, significantly improving its performance. Generated, documented, and published knowledge related to the new P4 programming language for the advanced telecommunications services research line.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a wide variety of the latest technology tools. My best experience is creating Data Science projects and deploying web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};
const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_1.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "P4Tree: a RF classifier for SDN",
      url: "https://github.com/freddysaav/P4Tree",
      description:
        "Network traffic classifier built from data manipulation and analysis, feature engineering, ML, and tuning techniques.",
      languages: [
        {
          name: "P4",
          iconifyClass: "file-icons:p4",
          style: {
            color: "#8cc43e",
          },
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "devicon:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
      ],
    },
    {
      id: "1",
      name: "NBA-2023 24 Quarter Comparison Insights",
      url: "https://github.com/freddysaav/NBA-2023-24-Quarter-Comparison-Insights",
      description:
        "Statistical analysis of the last quarter of an NBA game (2023-24 regular season) using scraping, cleaning and clustering techniques.",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "devicon:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
        {
          name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        },
        {
          name: "Selenium",
          iconifyClass: "skill-icons:selenium",
        },
      ],
    },
    {
      id: "2",
      name: "Routing elephants with RL",
      url: "https://github.com/freddysaav/Routing-Elephants-Reinforcement-Learning",
      description:
        "Reinforcement Learning (RL)-based routing algorithm for SDN networks created from scratch using Python.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "3",
      name: "Portfolio Website",
      url: "https://github.com/freddysaav/Portfolio",
      description: "The complete portfolio website hosted using github pages (gh-pages). You are stalking it right now",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "Australia-weather-forecast",
      url: "https://github.com/freddysaav/Australia-weather-forecast",
      description:
        "Machine learning project that includes different algorithms and accuracy metrics.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "devicon:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
      ],
    },
    {
      id: "5",
      name: "RocketReturn - Data Science for Falcon 9 Landings SpaceX",
      url: "https://github.com/freddysaav/RocketReturn-Data-Science-for-Falcon-9-Landings-SpaceX-",
      description:
        "Data science project that includes data collection (web-scrapping), EDA, visualization, and ML. Also, SQL and Folium library.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        },
        {
          name: "Folium",
          iconifyClass: "simple-icons:folium",
          style: {
            color: "#08fe00",
          },
        },
        {
          name: "Scikit-Learn",
          iconifyClass: "devicon:scikitlearn",
          style: {
            color: "#fb9c35",
          },
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
  projects,
};
