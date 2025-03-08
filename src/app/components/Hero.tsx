"use client";
import { ArrowDown, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 h-screen"
    >
      <div className="flexjustify-center items-center absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#3b82f6_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,#8b5cf6_0%,transparent_50%)] opacity-10 dark:opacity-20" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Hello, I&apos;m Zack <span className="text-blue-600">Agba</span>
          </h1>

          <p
            className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            I build exceptional and accessible digital experiences for the web,
            focusing on responsive design and performance optimization.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              View My Work
            </a>
          </div>

          <div
            className="flex gap-6 justify-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com/king101-bit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:zackagba7@gmail.com"
              aria-label="Email"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
