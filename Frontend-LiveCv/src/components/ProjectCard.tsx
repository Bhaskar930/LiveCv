import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tech, liveLink, githubLink }) => {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-6 shadow-lg hover:shadow-blue-500 transition duration-300">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="mb-4">
        <span className="text-sm text-gray-400 font-semibold">Tech:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {tech.map((t) => (
            <span key={t} className="bg-blue-700 px-2 py-1 rounded text-sm">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-2">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          🔗 Live Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          💻 GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
