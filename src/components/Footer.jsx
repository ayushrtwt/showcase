import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 flex justify-center items-center p-4">
      <div className="bg-black bg-opacity-50 backdrop-blur-lg rounded-xl flex items-center p-4">
        <div className="flex gap-6 text-white">
          <a href="https://github.com/ayushrtwt" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ayushrtwt/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://t.me/ayushrtwt" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaTelegram />
          </a>
          <a href="https://x.com/ayushrtwt" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <BsTwitterX />
          </a>
          <a href="mailto:ayushrawat3189@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FiMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
