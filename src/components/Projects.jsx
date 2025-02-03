
import { useState } from "react";
import { MdOutlineFormatListBulleted, MdGridView } from "react-icons/md";
import { PiHandSwipeRightBold } from "react-icons/pi";
import Swip from "./Swip";
import MoreLine from "./MoreLine";
import GridView from "./GridView"; // Import GridView

const Projects = () => {
  const [view, setView] = useState("grid"); // 'grid', 'swiper', 'line'

  const handleViewToggle = () => {
    setView((prevView) =>
      prevView === "grid" ? "swiper" : prevView === "swiper" ? "line" : "grid"
    );
  };

  // Define the next view based on the current view
  const nextView = view === "grid" ? "swiper" : view === "swiper" ? "line" : "grid";

  // Mapping next view states to icons
  const viewIcons = {
    grid: <MdGridView size={20} />,
    swiper: <PiHandSwipeRightBold size={20} />,
    line: <MdOutlineFormatListBulleted size={20} />,
  };

  // Mapping next view states to text
  const nextViewNames = {
    grid: "Grid View",
    swiper: "Swiper View",
    line: "Line View",
  };

  return (
    <div className="p-4 text-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <button
          onClick={handleViewToggle}
          className="p-2 rounded bg-gray-800 hover:bg-gray-700 flex items-center gap-2"
        >
          {viewIcons[nextView]} {/* Show icon for NEXT view */}
          {nextViewNames[nextView]} {/* Show text for NEXT view */}
        </button>
      </div>

      {view === "grid" ? (
        <GridView />
      ) : view === "swiper" ? (
        <Swip />
      ) : (
        <MoreLine />
      )}
    </div>
  );
};

export default Projects;


