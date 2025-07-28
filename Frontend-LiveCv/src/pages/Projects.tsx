import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "LiveCV - Talking Portfolio",
      description:
        "An interactive voice-based portfolio with Web Speech API and Lottie animations.",
      tech: ["React", "Tailwind", "TypeScript", "Web Speech API"],
      liveLink: "https://your-livecv-link.vercel.app",
      githubLink: "https://github.com/Bhaskar930/LiveCv",
    },
    
    {
    title: "Second Brain – Note-taking App",
    description:
      "A productivity app inspired by the Second Brain concept. Users can create, categorize, and search personal knowledge notes.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    liveLink: "https://your-second-brain.vercel.app", // replace
    githubLink: "https://github.com/Bhaskar930/Secound-Brain-App", // replace
  },
  {
    title: "Real-Time Chat App",
    description:
      "A real-time chat application with socket.io, supporting multiple users, live messaging, and typing indicators.",
    tech: ["React", "Socket.io", "Node.js", "Express"],
    liveLink: "https://your-chat-app.vercel.app", // replace
    githubLink: "https://github.com/Bhaskar930/RoomChat", // replace
  },
    // add more projects here
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center border-b border-gray-700 pb-2">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
