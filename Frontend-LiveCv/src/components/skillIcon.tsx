import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "GitHub", icon: <VscGithubInverted className="text-white" /> },
];

const SkillsIcons = () => {
  return (
    <div className="py-10 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 ml-16" >Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-lg text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsIcons;
