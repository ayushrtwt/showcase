import React from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";

const projects = [
  { 
    title: "CanvasConnect", 
    description: "Real-time collaborative drawing app", 
    image: project1, 
    github: "https://github.com/ayushrtwt/CanvasConnect" 
  },
  { 
    title: "Carpool System", 
    description: "Find, share, and manage rides", 
    image: project2, 
    github: "https://github.com/ayushrtwt/carpool_system" 
  },
  { 
    title: "Blogchan", 
    description: "Create and publish blogs with ease", 
    image: project3, 
    github: "https://github.com/ayushrtwt/blogchan" 
  },
  { 
    title: "Project Map", 
    description: "Get directions between two coordinates", 
    image: project4, 
    github: "https://github.com/ayushrtwt/projectmap" 
  },
  { 
    title: "PixelPenDigits", 
    description: "Drawing interface that recognize digits", 
    image: project5, 
    github: "https://github.com/ayushrtwt/PixelPenDigits" 
  },
];

const MoreLine = () => (
  <div className="space-y-4">
    {projects.map((project, index) => (
      <a 
        key={index} 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
      >
        <img src={project.image} alt={project.title} className="w-16 h-16 object-cover rounded-md" />
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      </a>
    ))}
  </div>
);

export default MoreLine;