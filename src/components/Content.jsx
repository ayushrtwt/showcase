import Project from "./Projects";
import ToolsComponent from "./ToolsComponent";

const Content = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 py-1">
      
      {/* Introduction Section */}
      <section className="mb-6">
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed px-1">
          I am a 4th-year student at GGSIPU (DTC) and a passionate full-stack developer dedicated to creating seamless, user-centric applications.
          With a strong drive to learn and grow, I focus on transforming ideas into innovative solutions.
        </p>
      </section>

      {/* Tools Section */}
      <h1 className="text-xl sm:text-2xl font-semibold mb-4">Tools that I have used</h1>
      <ToolsComponent />

      <section>
        <Project />
      </section>
    </div>
  );
};

export default Content;
