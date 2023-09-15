import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    safesecurity,
    tesla,
    shopify,
    fooddelivery,
    portal,
    threejs,
    todolist,
    jenkins,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "project",
      title: "Projects",
    }
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Jenkins",
      icon: jenkins
    }
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer I",
      company_name: "Safe Security",
      icon: safesecurity,
      iconBg: "#383E56",
      date: "June 2022 - December 2022",
      points: [
        "1. Demonstrated expertise in Shell Scripting, Bash, JavaScript and TypeScript, utilizing these languages to develop robust and scalable software solutions.", 
        "2. Utilized software tools such as Docker, Jenkins, and Git to streamline development processes, improve collaboration, and ensure version control and code integrity.",
        "3. Adapted to and thrived in an Agile work culture, 100% actively contributing to sprint planning, stand-ups, and retrospectives."
        
      ],
    },
    
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Online Food Delivery",
      description:[
        " Developed a web application for online food ordering by using React.js, Node.js, MongoDB and Express.js.",
        " Implemented features such as a robust search functionality for food items and categories, allowing users to easily find desired items. Developed an intuitive cart system that enables users to add items with their desired quantities for seamless ordering.",
        " Implemented a comprehensive order history feature to track and maintain records of all orders placed to date.",
      ],
        
      tags: [
        {
          name: "Node JS",
          color: "green-text-gradient",
        },
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Express JS",
          color: "yellow-text-gradient",
        },
      ],
      image: fooddelivery,
      source_code_link: "https://github.com/shilpabhati/GoFood_Project",
    },
    {
      name: "ToDo List",
      description:[
        " Created a web-based Todo List application using React JS.",
        " Listed the main features of the Todo List app, such as adding, editing, and deleting tasks.",
        " Delivered a user-friendly and responsive interface that simplifies task handling while maintaining task data integrity.",
      ],
        tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML5",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/shilpabhati/ToDo_List",
    },
    {
      name: "Placement Portal",
      description:[
        " Developed a server application using technologies NodeJS, Express.js, RestAPIs, MongoDB.",
        " Implemented backend part of placement portal of a college with student and company login and registration and registering/deregistering a student from a company."
      ],
        tags: [
        {
          name: "Node JS",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "yellow-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: portal,
      source_code_link: "https://github.com/shilpabhati/Placement-Portal",
    },
  ];
  
  export { services, technologies, experiences, projects };