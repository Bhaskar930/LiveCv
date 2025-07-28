import AnimatedIntro from "../components/AnimatedIntro";
import SkillsIcons from "../components/skillIcon";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* 🔹 Animated Intro Section */}
      <AnimatedIntro />

      {/* 🔹 About Me Section */}
      <div className="px-6 py-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Hi, I’m Bhaskar Negi — a Full Stack Web Developer passionate about
          building responsive and scalable applications. I specialize in the
          MERN stack and love solving real-world problems with clean code and
          great UI/UX.
        </p>
      </div>

      {/* 🔹 Skills Icons Section */}
      <SkillsIcons />

      {/* 🔹 Explore Projects Button */}
      <div className="text-center mt-10">
        <a
          href="/projects"
          className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 text-white font-semibold text-lg transition"
        >
          🚀 Explore My Projects
        </a>
      </div>

      {/* 🔹 Contact Me Section */}
      <div className="px-6 py-14 max-w-3xl mx-auto text-center mt-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">
          Contact Me
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          I’m open to internship or full-time roles. Let’s connect!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6 text-lg sm:text-xl text-blue-400 text-center px-4 break-words">
          <div className="hover:underline select-all">
            📧 negibhaskar19@gmail.com
          </div>

          <a
            href="https://www.linkedin.com/in/bhaskar-negi-7578b2229/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/Bhaskar930"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            💻 GitHub
          </a>
        </div>

        {/* 🔹 Resume Download Button */}
        <a
          href="/Bhaskar;s-resume-updated14.pdf"
          download
          className="inline-block mt-8 bg-green-600 px-6 py-2 rounded text-white font-semibold hover:bg-green-700 transition"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
