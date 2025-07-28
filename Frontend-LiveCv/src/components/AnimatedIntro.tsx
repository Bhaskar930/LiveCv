import React from "react";
import Lottie from "lottie-react";
import avatarAnimation from "../assets/developer skills.json";

const AnimatedIntro: React.FC = () => {
  const handleSpeak = () => {
  const msg = new SpeechSynthesisUtterance("Hi, I'm Bhaskar. Welcome to my interactive portfolio.");
  const voices = window.speechSynthesis.getVoices();

  // Try clean, soft voice
  const cleanVoice = voices.find(
    (voice) =>
      voice.name === "Google UK English Female" ||
      voice.name === "Google US English" ||
      voice.name.includes("Zira") || // Windows
      voice.name.includes("Samantha") // macOS
  );

  if (cleanVoice) {
    msg.voice = cleanVoice;
  }

  msg.lang = "en-US";
  msg.pitch = 3; // pitch affects tone
  msg.rate = 1;

  window.speechSynthesis.speak(msg);
};


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <Lottie animationData={avatarAnimation} style={{ height: 300 }} />
      <h1 className="text-4xl font-bold mt-4">Bhaskar Negi</h1>
      <p className="text-lg mt-2">Full Stack Developer | MERN Stack</p>

      <button
        onClick={handleSpeak}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        🔊 Click to Hear Voice Intro
      </button>
    </div>
  );
};

export default AnimatedIntro;
