// Import images dynamically (if using the `src` folder)#
import './index.css';
import Malik from './assets/images/Malik.jpg'; // Adjust the path as per your project structure
import car from './assets/images/car.jpg'; // Adjust the path as per your project structure
import Sunday from './assets/images/sundaymar.jpg'; // Adjust the path as per your project structure
import App from './assets/images/Apple1.jpg'; // Adjust the path as per your project structure
import chat from './assets/images/chat.jpg'; // Adjust the path as per your project structure
import news from './assets/images/news.jpg'; // Adjust the path as per your project structure



const logotext = "Malik-App";

const meta = {
    title: "Abdumalik Wassie",
    description: "I’m Abdumalik Wassie, a Full Stack Developer currently working in Kombolcha Ethiopia",
};

const introdata = {
    title: "I’m Abdumalik",
    animated: {
        first: "I develope websites",
        second: "I am a Computer Science student",
        third: "I create software solutions",
    },
    description: "Passionate about developing innovative and scalable web and software solutions.",
    your_img_url:Malik, // Replace with your own image URL
};

const dataabout = {
    title: "About Me",
    aboutme: "Hi, I'm Abdumalik Wasie, i 'm Computer Science student at   Wollo University.       I'm a Junior Full-Stack Developer with a focus on web development technologies like React, Node.js, HTML, CSS, and JavaScript. I love exploring new technologies and building sleek, responsive, and user-friendly applications.Currently, I am working on my portfolio project to showcase my skills in building functional and interactive websites. I have experience in developing various projects, including e-commerce   Website and ASK Ai like chat-gpt, and I am always eager to learn more to improve my abilities.I believe in the power of technology to solve real-world problems, and I’m excited to  continue growing  as a developer.  Feel free to browse my work and contact me if you’re interested in collaborating or discussing potential opportunities."  ,
};

const skills = [
    { name: "HTML and css", value: 90 },
    { name: "pyton", value: 40 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 65 },
    { name: "PHP", value: 75 },
    { name: "Aids", value: 50},
     
];

const services = [
    {
        title: "Full stack web Development",
        description: "Creating visually appealing and responsive user interfaces using the latest front-end technologies   and backend technologies ",
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
        link: "https://github.com/abdumalik06432530/CarrentalSystem", // Replace with your actual file path
    },
    {
        img:App, // Dynamically imported image from the `src` folder
        description: "Apple website Clone using Html and css",
        link: "https://github.com/abdumalik06432530/Apple-clone-website", // Replace with your actual project link
    },
    {
        img: chat, // External image source
        description: "Ask Ai using pyton",
        link: "https://github.com/abdumalik06432530/AskAi", // Replace with your actual project link
    },
    {
        img:news, // External image source
        description: "News website using react",
        link: "https://www.instagram.com/abdul_m_e_l_i_k/", // Replace with your actual project link
    },

    {
        img:Sunday, // External image source
        description: "E-Commerce Platform – A scalable online shopping solution using PHP, SQL, JavaScript, and Bootstrap.",
        link: "https://github.com/abdumalik06432530/Sunday-Markett", // Replace with your actual project link
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "abdumalik06432530@gmail.com",
    YOUR_FONE: "+251-928281641",
    description: "Feel free to reach out for collaborations, project inquiries, or any tech-related discussions.",
    YOUR_SERVICE_ID: "service_puqy12i", 
    YOUR_TEMPLATE_ID: "template_kx28j4r", 
    YOUR_USER_ID: "us107lFqWbjGhFIod",
};

const socialprofils = {
    github: "https://github.com/abdumalik06432530", // Replace with your GitHub profile
    linkedin: "https://www.linkedin.com/in/abdumalik-wassie-a8ba01307/", // Replace with your LinkedIn profile
    instagram: "https://www.instagram.com/abdul_m_e_l_i_k/", // Replace with your Twitter profile
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
