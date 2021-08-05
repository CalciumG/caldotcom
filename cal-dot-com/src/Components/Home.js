import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";

const Home = () => {
  return (
    <div
      id="container"
      className="h-screen flex justify-start items-center bg-black max-h-full"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-white text-5xl mb-2 ml-10">
          Callum Gordon
        </div>
        <div className="flex ml-10">
          <a
            class="mr-4 icon"
            href="https://github.com/calciumg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="rgba(243,244,246)" size={40} />
          </a>
          <a
            class="mr-4 icon"
            href="https://www.linkedin.com/in/callum-j-gordon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin color="rgba(243,244,246)" size={40} />
          </a>
          <a
            class="text-sm border-2 p-2 hvr-sweep-to-right"
            download
            href="CallumGordon-CV.pdf"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
