import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const SkillCard = ({ name, Icon, index }) => {
  return (
    <TiltCard className="w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.46, delay: index * 0.04 }}
        whileHover={{
          y: -8,
          scale: 1.06,
          boxShadow: "0 26px 60px rgba(220,38,38,0.22)",
          borderColor: "rgba(220,38,38,0.98)",
        }}
        className="w-28 h-28 md:w-32 md:h-32 rounded-xl bg-white/5 border border-red-900/50 backdrop-blur-sm p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all shadow-sm"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-2 bg-black/25">
          <Icon className="w-7 h-7 md:w-8 md:h-8 text-red-400" />
        </div>
        <h3 className="skill-name font-mono text-red-400 text-[11px] mt-1">
          {name}
        </h3>
      </motion.div>
    </TiltCard>
  );
};

export default SkillCard;
