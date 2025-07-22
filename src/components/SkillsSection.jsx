import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const skills = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 size={40} />, category: "frontend" },
  { name: "CSS", icon: <FaCss3Alt size={40} />, category: "frontend" },
  { name: "JavaScript", icon: <FaJsSquare size={40} />, category: "frontend" },
  { name: "React", icon: <FaReact size={40} />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, category: "frontend" },
  { name: "Redux", icon: <TbBrandRedux size={40} />, category: "frontend" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs size={40} />, category: "backend" },
  { name: "Express", icon: <SiExpress size={40} />, category: "backend" },
  { name: "MongoDB", icon: <FaDatabase size={40} />, category: "backend" },

  // Tools
  { name: "Git", icon: <FaGitAlt size={40} />, category: "tools" },
  { name: "GitHub", icon: <FaGithub size={40} />, category: "tools" },
  { name: "Figma", icon: <FaFigma size={40} />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          The <span className="text-primary"> Skills</span> I put on the Table
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
            >
              <div className="text-primary">{skill.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
