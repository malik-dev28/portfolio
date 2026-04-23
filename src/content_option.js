// Import images dynamically (if using the `src` folder)#
import './index.css';
import Malik from './assets/images/Malik.jpg'; // Adjust the path as per your project structure
import car from './assets/images/car.jpg'; // Adjust the path as per your project structure
import Sunday from './assets/images/sundaymar.jpg'; // Adjust the path as per your project structure
import App from './assets/images/Apple1.jpg'; // Adjust the path as per your project structure
import chat from './assets/images/chat.jpg'; // Adjust the path as per your project structure
import news from './assets/images/news.jpg'; // Adjust the path as per your project structure



const logotext = "hawlet-dev";

const meta = {
    title: "Hawlet Siad",
    description: "I’m Hawlet Siad, a 2nd year Computer Science student and Junior Web Developer building practical software projects.",
};

const introdata = {
    title: "I’m Hawlet Siad",
    animated: {
        first: "I develop websites",
        second: "I am a 2nd year Computer Science student",
        third: "I am a Junior Web Developer",
    },
    description: "Computer Science student focused on building practical, reliable, and user-friendly software projects.",
    your_img_url:Malik, // Replace with your own image URL
};

const dataabout = {
    title: "About Me",
    aboutme: "Hi, I'm Hawlet Siad, a 2nd year Computer Science student and Junior Web Developer. I build practical web and software projects using React, HTML, CSS, JavaScript, and PHP. I am passionate about learning new technologies, especially Artificial Intelligence, Microsoft Azure, and Microsoft tools. I enjoy solving real-world problems and creating clean, responsive, and user-friendly applications. Feel free to explore my projects and contact me for collaboration opportunities.",
};

const skills = [
    { name: "HTML & CSS", value: 65 },
    { name: "JavaScript", value: 55 },
    { name: "React (Beginner)", value: 50 },
    { name: "Graphic Design", value: 70 },
    { name: "Video Editing", value: 65 },
     
];

const services = [
    {
        title: "Junior Front-End Developer",
        description: "Building clean, responsive, and user-friendly interfaces using modern front-end technologies.",
    },
    {
        title: "Software Development",
        description: "Developing scalable software solutions tailored to client requirements.",
    },
    {
        title: "Social Media Marketing",
        description: "Helping businesses grow their online presence and engage with their audience effectively.",
    },
];

const dataportfolio = [
    
    {
        img:car, // Internal image in the `public/images/` folder
        description: "Car Rental System in java ",
        link: "https://github.com/iiihibu26-dev/CarrentalSystem", // Replace with your actual file path
    },
    {
        img:App, // Dynamically imported image from the `src` folder
        description: "Apple website Clone using Html and css",
        link: "https://github.com/iiihibu26-dev/Apple-clone-website", // Replace with your actual project link
    },
    {
        img: chat, // External image source
        description: "Ask Ai using pyton",
        link: "https://github.com/iiihibu26-dev/AskAi", // Replace with your actual project link
    },
    {
        img:news, // External image source
        description: "News website using react",
        link: "https://github.com/iiihibu26-dev", // Replace with your actual project link
    },

    {
        img:Sunday, // External image source
        description: "E-Commerce Platform – A scalable online shopping solution using PHP, SQL, JavaScript, and Bootstrap.",
        link: "https://github.com/iiihibu26-dev/Sunday-Markett", // Replace with your actual project link
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "Hawletseid1919@gmail.com",
    YOUR_FONE: "+25192 953 5961",
    description: "Feel free to reach out for collaborations, project inquiries, or any tech-related discussions.",
    YOUR_SERVICE_ID: "service_puqy12i", 
    YOUR_TEMPLATE_ID: "template_kx28j4r", 
    YOUR_USER_ID: "us107lFqWbjGhFIod",
};

const socialprofils = {
    github: "https://github.com/iiihibu26-dev", // Replace with your GitHub profile
    linkedin: "https://www.linkedin.com/in/hawlet-seid-75a593405?utm_source=share_via&utm_content=profile&utm_medium=member_android", // Replace with your LinkedIn profile
};

export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
