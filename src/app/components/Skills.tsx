"use client";

import { useState } from "react";
import { Code, Server, PenTool } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code,
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Supabase", level: 75 },
      { name: "REST API", level: 80 },
      { name: "MySQL", level: 60 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    icon: PenTool,
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Zed", level: 60 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
      { name: "Responsive Design", level: 90 },
      { name: "Performance Optimization", level: 75 },
      { name: "Accessibility", level: 80 },
      { name: "SEO", level: 75 },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeSkills =
    skillCategories.find((category) => category.id === activeCategory)
      ?.skills || [];
  const ActiveIcon =
    skillCategories.find((category) => category.id === activeCategory)?.icon ||
    Code;

  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">
            My technical skills and areas of expertise in web development and
            design.
          </p>
        </div>

        <div className="flex justify-center items-centergrid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-4 rounded-xl text-center transition-all animate-fade-in ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex justify-center mb-2">
                <category.icon
                  className={`h-6 w-6 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-blue-600 dark:text-blue-500"
                  }`}
                />
              </div>
              <div className="font-medium">{category.name}</div>
            </button>
          ))}
        </div>

        <div
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <ActiveIcon className="h-6 w-6 text-blue-600 dark:text-blue-500" />
            </div>
            <h3 className="text-xl font-bold">
              {skillCategories.find((c) => c.id === activeCategory)?.name}{" "}
              Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in"
                style={{ animationDelay: `${0.5 + 0.1 * index}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
