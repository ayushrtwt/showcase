import React from 'react';
import { BiLogoJavascript, BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { FaReact, FaNode, FaGitAlt, FaCss3, FaHtml5, FaLinux, FaDocker } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiPostman, SiPrisma, SiSocketdotio, SiVim } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

const iconSet1 = [
  { icon: <TbBrandCpp size={38} />, label: '' },
  { icon: <FaReact size={40} />, label: 'React' },
  { icon: <FaNode size={40} />, label: 'Node.js' },
  { icon: <FaGitAlt size={40} />, label: 'Git' },
  { icon: <FaCss3 size={35} />, label: 'CSS' },
  { icon: <FaHtml5 size={40} />, label: 'HTML5' },
  { icon: <BiLogoJavascript size={40} />, label: 'JavaScript' },
  { icon: <BiLogoTypescript size={40} />, label: 'TypeScript' },
  { icon: <SiMongodb size={40} />, label: 'Mongodb' },
  { icon: <SiPrisma size={35} />, label: 'Prisma' },
  { icon: <FaDocker size={40} />, label: 'Docker' }
];

const iconSet2 = [
  { icon: <SiVim size={35} />, label: 'Vim' },
  { icon: <FaLinux size={35} />, label: 'Linux' },
  { icon: <RiNextjsFill size={40} />, label: 'NextJS' },
  { icon: <RiTailwindCssFill size={40} />, label: 'Tailwind' },
  { icon: <BiLogoPostgresql size={40} />, label: 'Postgresql' },
  { icon: <SiExpress size={35} />, label: 'Express' },
  { icon: <SiPostman size={35} />, label: 'Postman' },
  { icon: <SiSocketdotio size={35} />, label: 'SocketIO' }
];

const ToolsComponent = () => {
  return (
    <div className="text-center">
      {/* First line: Left to right */}
      <div className="overflow-hidden whitespace-nowrap mb-2">
        <div className="flex w-max animate-marquee-left">
          {[...iconSet1, ...iconSet1].map((item, index) => (
            <div key={index} className="flex items-center mx-4">
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second line: Right to left */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex w-max animate-marquee-right">
          {[...iconSet2, ...iconSet2].map((item, index) => (
            <div key={index} className="flex items-center mx-4">
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Animations */}
      <style jsx= "true">{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 15s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ToolsComponent;

