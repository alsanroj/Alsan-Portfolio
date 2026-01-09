import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import {
  Code,
  Palette,
  Atom,
  Server,
  Database,
  GitBranch,
  FileJson,
  Globe,
  Coffee,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Globe },
  { name: "React.js", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: FileJson },
  { name: "MongoDB", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Java", icon: Coffee },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-4">
      <div className="max-w-6xl mx-auto px-0 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-800"
        >
          SKILLS
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {skills.map((skill, index) => (
            <div key={skill.name} className="flex-shrink-0">
              <SkillCard name={skill.name} Icon={skill.icon} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
