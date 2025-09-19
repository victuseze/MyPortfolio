import { meta, shopify, starbucks, tesla, imisilogo, freelancer, upwork, queens } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    csharp, 
    blendersvg,
    unitysvg,
    treejs,
    bar
} from "../assets/icons";

export const skills = [
    {
        imageUrl: unitysvg,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: blendersvg,
        name: "Blender",
        type: "Modeling",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "VR",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: treejs,
        name: "TreeJS",
        type: "Web XR",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "VR Developer",
        company_name: "Queen's Tech Hub",
        icon: queens,
        iconBg: "#fbc3bc",
        date: "March 2025 - Till Date",
        points: [
            "Developed real-time VR Interior design applications for real estate firm",
            "Designed and developed optimezed VR game applications",
            "Developed VR storytelling dialogue experience"
        ],
    },
    {
        title: "XR Developer",
        company_name: "Freelance",
        icon: freelancer,
        iconBg: "#fbc3bc",
        date: "Oct 2024 - Feb 2025",
        points: [
            "Scene and level design of a VR Automechanic workshop",
            "Modeling and retouching of some assets needed in the VR Auto Workshop using Blender",
            "Interactive Development of the VR Auto Workshop using Unity Game-Engine and C# for scripting.",
        ],
    },
    {
        title: "XR Developer (VR) - Intern",
        company_name: "Imisi3D",
        icon: imisilogo,
        iconBg: "#accbe1",
        date: "April 2024 - Oct  2024",
        points: [
            "Collaborated with the team to Integrate a Large Language Model (LLM) into a VR project",
            "Implementation of Speech-To-Text and Text-To-Speech API",
            "Scene and UI design review",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "XR Developer (AR) - Intern",
        company_name: "Imisi3D",
        icon: imisilogo,
        iconBg: "#accbe1",
        date: "April 2024 - Oct  2024",
        points: [
            "Design and modeling of a 3D low poly rural environment in Blender that is to be used for an AR project to help tell stories about the Kidnapped Chibok Girls",
            "Created a plane tracking AR project using Meta Spark Studio to tell the story of Chibok",
            "Design and modeling of a Guinness Bar using Blender", "Created an AR application using Meta Spark Studio",
            "Created a plane tracking AR application that displays the solar system using Unity AR Foundations_Core"
        ],
    },
    {
        title: "Web Developer",
        company_name: "Freelance",
        icon: upwork,
        iconBg: "#b7e4c7",
        date: "Sept 2022 - March 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design",
            "Participating in code reviews",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '+234-7038135121',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/victuseze',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/victus-eze-66b05b172/',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-red',
        name: 'Buried Under Silence',
        description: ' Hidden graves and unspoken trauma storytelling in VR using Unity, C# and Blender',
        link: 'https://youtube.com/shorts/SQYEyRJBuVM',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'InGarage VR',
        description: 'As an Automobile enthusiast, I designed and developed a VR an interactive automobile workshop using Blender and Unity',
        link: 'https://youtu.be/_YKxDpQLG2k',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-blue',
        name: 'Property Virtual Tour',
        description: 'Gousing property tour via virtual reality using Blender, C# and Unity',
        link: 'https://vm.tiktok.com/ZSHntwRWVJyje-aCSaa/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'AbductedChibok-Girls AR Experience',
        description: 'Developed an AR project with the intention of telling the Chibok story',
        link: 'https://vm.tiktok.com/ZSHnS5WQ7Sq6D-CaSg8/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-blue',
        name: 'VR Home Customization',
        description: 'A VR Interior Design application for real estate companies using Blender, C# and Unity',
        link: 'https://youtu.be/6VDr0DXxkcY',
    },
    {
        iconUrl: bar,
        theme: 'btn-back-green',
        name: 'Guinness Bar AR',
        description: 'Modeled and developed an interactive AR Guinness Bar',
        link: 'https://youtu.be/CUTUWzNOcU4',
    },
    {
        iconUrl: mui,
        theme: 'btn-back-blue',
        name: 'VR Entertainment Gallery',
        description: 'Created an entertainment gallery where player can watch music video and also play different songs while having fun in the VR space',
        link: 'https://youtu.be/_kb_RmGhHKI',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'XR BootCamp Project',
        description: 'Built a First Person Controller (FPC) game where the player is being chased by a Robot if it is able to cast it rays on the player. Player can hide by entering into a box and also get the Robots killed using an explosive mine',
        link: 'https://youtu.be/sZgjyKtx8TM',
        
    },
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'NPC VR',
        description: 'Joined a team of Developers to create a VR project. My major contribution to the project was in the integration of LLM, Speech-To-Text and Text-To-Speech APIs',
    },

];