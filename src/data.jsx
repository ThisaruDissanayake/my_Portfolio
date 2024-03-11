import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import { FaFacebook, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-7.jpeg';
import Work8 from './assets/project-8.jpeg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import Cplusplus from  './assets/c++.png';
import Java from  './assets/java.png';
import JS from  './assets/JS.png';
import React from  './assets/react.png';
import Nodejs from  './assets/nodejs.png';
import Python from  './assets/python.png';
import Mongodb from  './assets/mongodb.png';
import Flutter from  './assets/flutter.png';
import Express from  './assets/express.png';
import GIT from  './assets/git.png';
import ML from  './assets/ML.png';
import HTML from  './assets/html.png';
import CSS from  './assets/css.png';
import  Mysql from './assets/mysql.png';
import  MUI from './assets/MUI.png';
import  Photoshop from './assets/photoshop.png';
import  Figma from './assets/figma.png';
import  Canva from './assets/canva.png';
import  Firebase from './assets/firebase.png';
import  Tailwind from './assets/tailwind.png';
import  Dart from './assets/dart.png';
import  Postman from './assets/postman.png';



export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },
  // {
  //   id: 4,
  //   name: 'Behance',
  //   icon: <FaFolderOpen className='nav__icon' />,
  //   path: '/behance',
  // },

  {
    id: 5,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Maleesha',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Dissanayake',
  },
  {
    id: 5,
    title: 'Middle Names : ',
    description: 'Irosh Thisaru',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '24 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Sinhalese',
  },



  {
    id: 6,
    title: 'Address : ',
    description: '9Ela,Mahanelubawa,Hidogama,Anuradhapura',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+94767779548',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'thisarumitd@gmail.com',
  },

  {
    id: 9,
    title: 'GPA : ',
    description: '3.45',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Sinhala, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Months of <br /> Experience',
  },

  {
    id: 2,
    no: '7+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: <FaFacebook />,
    title: 'Facebook Account  <br />',
    title2:<a href='https://web.facebook.com/thisaru.dissanayake.9'>thisaru.dissanayake.9</a>
  },

  {
    id: 4,
    no: <FaLinkedin />,
    title: 'LinkedIn Account  <br />',
    title2:<a href='https://www.linkedin.com/in/thisaru-dissanayake-666197212/'>in/thisaru-dissanayake</a>
  },

  {
    id: 5,
    no: <FaBehance />,
    title: 'Behance Account  <br />',
    title2:<a href='https://www.behance.net/thisarudissanayake'> thisarudissanayake</a>
  },

  {
    id: 6,
    no: <FaGithub />,
    title: 'Github Account  <br /> ',
    title2:<a href='https://github.com/ThisaruDissanayake'>/ThisaruDissanayake</a>
  },
];
export const catogories = [
  {
    id: 1,
    no: 'Programming',
    title: 'C++ <br /> C# ,C<br/> Java <br/> Python ',
  },

  {
    id: 2,
    no: 'Frontend',
    title: 'ReactJS <br /> TailWind <br/> CSS <br/>MUI <br/> Flutter',
  },

  {
    id: 3,
    no: 'Backend',
    title: 'NodeJS  <br /> Express <br/> Dart',
  },

  {
    id: 4,
    no: 'Database',
    title: 'MySql  <br /> MongpDB ',
  },

  {
    id: 5,
    no: 'Mobile Application',
    title: 'Flutter  <br /> Dart <br/> Firebase',
  },

  {
    id: 6,
    no: 'Application and Others',
    title: 'Git   <br /> Machine Learning <br/> VS code <br/> Android Studio , MS Office <br/> IntelliJ IDEA ,MathLab <br/> Proteus8, Jupyter Notebook, Colabs <br/> Photoshop,Canva,Figma',
  },
];


export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'Full Stack Developer - <span> Syneptic Labs (Pvt) Ltd   </span>',
    desc: 'Work as The Full Stack Developer in Development team. Develop full-stack web applications',
  },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Themeforest </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Passed G. C. E (Ordinary Level) Examination  </span>',
    desc: 'Passed G. C. E (Ordinary Level) Examination in 2015 with 8A s and 1C at Anuradhapura Central College',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Passed G. C. E (Advanced Level) Examination  </span>',
    desc: 'Passed G. C. E (Advanced Level) Examination in 2019 with 1A and 2B s at Anuradhapura Central College',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-Present',
    title: 'BSc.Eng (Hons) in Computer Engineering <span> ',
    desc: ' Doing BSc.Eng (Hons) in Computer Engineering Degree with GPA :3.45 at University of Ruhuna Faculty of Engineering',
  },
];

export const skills = [
  {
    id: 1,
    title: 'C++',
     img: Cplusplus,
    percentage: '80',
  },

  {
    id: 2,
    title: 'Java',
    img: Java,
    percentage: '75',
  },

  {
    id: 3,
    title: 'JavaScript',
    img: JS,
    percentage: '90',
  },

  {
    id: 4,
    title: 'React js',
    img: React,
    percentage: '85',
  },

  {
    id: 5,
    title: 'Node js',
    img: Nodejs,
    percentage: '80',
  },

  {
    id: 6,
    title: 'Python',
    img: Python,
    percentage: '85',
  },

  {
    id: 7,
    title: 'MySQL',
   img: Mysql,
    percentage: '75',
  },

  {
    id: 8,
    title: 'MongoDB',
    img: Mongodb,
    percentage: '70',
  },

  {
    id: 9,
    title: 'Flutter',
    img: Flutter,
    percentage: '65',
  },

  {
    id: 10,
    title: 'Express',
    img: Express,
    percentage: '70',
  },

  {
    id: 11,
    title: 'GIT',
    img: GIT,
    percentage: '85',
  },

  {
    id: 12,
    title: 'ML',
    img: ML,
    percentage: '60',
  },

  {
    id: 13,
    title: 'HTML',
    img: HTML,
    percentage: '90',
  },

  {
    id: 14,
    title: 'CSS',
    img:CSS,
    percentage: '80',
  },

  {
    id: 15,
    title: 'Material UI',
    img: MUI,
    percentage: '75',
  },

  {
    id: 16,
    title: 'Photoshop',
    img:Photoshop,
    percentage: '70',
  },

  {
    id: 17,
    title: 'Figma',
   img: Figma,
    percentage: '65',
  },

  {
    id: 18,
    title: 'Canva',
    img: Canva,
    percentage: '60',
  },
  {
    id: 19,
    title: 'Firebase',
    img: Firebase,
    percentage: '60',
  },
  {
    id: 20,
    title: 'Tailwind',
    img: Tailwind,
    percentage: '60',
  },
  {
    id: 21,
    title: 'Dart',
    img: Dart,
    percentage: '60',
  },
  {
    id: 22,
    title: 'Postman',
    img: Postman,
    percentage: '60',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Machine Learning | Sentiment Analysis Project',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Mashine Leaning',
      },
      {
        icon: <FiUser />,
        title: 'Base : ',
        desc: 'Phython Numpy Flask',
      },
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: <a href="https://github.com/ThisaruDissanayake/Sentiment-Analysis-Project-ML" target="_blank" rel="noopener noreferrer">GitHub</a>,
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://drive.google.com/file/d/1N3SiIQZyuQw91GvECIn2lirVVena8Z4X/view" target="_blank" rel="noopener noreferrer">Vedio</a>,
      },
      {
        
        desc1: 'Sentiment Catcher applies logistic regression and decision trees to classify textual feedback, aiming for accurate sentiment categorization in machine learning.',
      },
     
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'User App - Online Cosmetics Shop ',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Mobile Application',
      },
      {
        icon: <FiUser />,
        title: 'Base : ',
        desc: 'FLutter Dart Firebase',
      },
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: <a href="https://github.com/ThisaruDissanayake/User_App_Ecommerce_MobileApplication" target="_blank" rel="noopener noreferrer">GitHub</a>,
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://drive.google.com/file/d/1W_C6tcR3GMrv5AFQ7VsLZ1ZKJFbhZfAc/view" target="_blank" rel="noopener noreferrer">Vedio</a>,
      },
      {
        
        desc1: '"Flutter-powered Online Cosmetics Shop innovates beauty shopping with Firebase integration, offering seamless exploration, ordering, and management for users."',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Online Cosmetics Shop- Admin App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Mobile Application',
      },
      {
        icon: <FiUser />,
        title: 'Base : ',
        desc: 'FLutter Dart Firebase',
      },
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: <a href="https://github.com/ThisaruDissanayake/Mobile_adminapp_ecommerce" target="_blank" rel="noopener noreferrer">GitHub</a>,
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://drive.google.com/file/d/1gT_-8nNSd5Md5H316efZpIAr4z1NDwh4/view" target="_blank" rel="noopener noreferrer">Vedio</a>,
      },
      {
        
        desc1: 'This project, "Online Cosmetics Shop," is a mobile application designed for a cosmetics store with a dedicated admin panel application.',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Find-Domestic-Servants-System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Base : ',
        desc: 'MERN-Stack',
      },
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: <a href="https://github.com/ThisaruDissanayake/WebDevelopment_Project-MERN-Stack-Find-Domestic-Servants-System" target="_blank" rel="noopener noreferrer">GitHub</a>,
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://drive.google.com/file/d/1R33yaYFBDViVFbCtpZDgAPb-R7XGaWht/view?usp=sharing" target="_blank" rel="noopener noreferrer">Vedio</a>,
      },
      {
        
        desc1: ' Find Domestic Servants System is a project designed for seamless servant management. Admins wield CRUD operations for technicians',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Database Management| MySQL',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Database',
      },
      {
        icon: <FiUser />,
        title: 'Beas : ',
        desc: 'MySQL · Databases',
      },
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: <a href="https://github.com/ThisaruDissanayake/MySQL-Database-Project-labtop-Order-and-Sell" target="_blank" rel="noopener noreferrer">GitHub</a>,
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: <a href="https://drive.google.com/file/d/1R33yaYFBDViVFbCtpZDgAPb-R7XGaWht/view?usp=sharing" target="_blank" rel="noopener noreferrer">Vedio</a>,
      // },
      {
        
        desc1: 'DBMS ensures systematic data management, while CRUD operations (Create, Read, Update, Delete) play a pivotal role in comprehensive MySQL database handling.',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Mock UI UX',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'UI UX',
      },
      {
        icon: <FiUser />,
        title: 'Beas : ',
        desc: 'Figma',
      },
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: <a href="https://www.figma.com/file/YSYkeeoLcX0eVixzgnFJmn/Servent-Booking-System" target="_blank" rel="noopener noreferrer">Figma</a>,
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://drive.google.com/file/d/1fjADOAu1YOmHapycJwDOKRPPipqDJkDw/view" target="_blank" rel="noopener noreferrer">PDF</a>,
        
      },
      {
        
        desc1: 'Leveraging Figma, I meticulously crafted a user-friendly and visually appealing UI/UX design for the Servant Booking System.Prioritizing seamless navigation, clean aesthetics, and an intuitive user experience to enhance overall usability..',
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'Patient Registration System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Desktop App',
      },
      {
        icon: <FiUser />,
        title: 'Beas : ',
        desc: ' WPF, C#, SQLite',
      },
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: <a href="https://github.com/ThisaruDissanayake/Group_Project_4112_3912-The-Patient-Registration-System-" target="_blank" rel="noopener noreferrer">GitHub</a>,
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://drive.google.com/file/d/1GOLqfLTlEHuWil1byiTCFUO7eBnZ_YHu/view?usp=sharing" target="_blank" rel="noopener noreferrer">Vedio</a>,
      },
      {
        
        desc1: 'Skilled WPF, C# developer with SQLite expertise, implementing MVVM. Collaborated on Patient Registration System, featuring advanced CRUD, automated billing, and robust testing.',
      },
    ],
  },

  
  {
    id: 8,
    img: Work8,
    title: 'Student Record Management System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Desktop App',
      },
      {
        icon: <FiUser />,
        title: 'Beas : ',
        desc: 'WPF, C#',
      },
      {
        icon: <FaCode />,
        title: 'Link : ',
        desc: <a href="https://github.com/ThisaruDissanayake/Individual_Project_GUI_3912-Student-Manegment-System-" target="_blank" rel="noopener noreferrer">GitHub</a>,
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://drive.google.com/file/d/1ncsTDEOzP2j7476SNmMftDs2zDTHpqHs/view?usp=sharing" target="_blank" rel="noopener noreferrer">Vedio</a>,
      },
      {
        
        desc1: 'Skilled Software Developer in WPF, C#, and OOP. Designed and implemented a streamlined Student Record Management System with MVVM architecture and robust CRUD operations.',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
