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

const GridView = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="rounded-lg overflow-hidden bg-gray-900 p-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-md hover:opacity-80 transition-opacity"
            />
          </a>
          <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GridView;
