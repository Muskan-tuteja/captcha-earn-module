import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

function CaptchaOptions({ options, onSelectOption }) {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const handleClick = (option) => {
    if (locked) return; // prevent re-selection during verification
    setSelected(option);
    setLocked(true);
    onSelectOption(option);
  };

  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      {options.map((option, index) => {
        const isSelected = selected === option;

        return (
          <motion.button
            key={option}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.3 }}
            whileHover={!locked ? { scale: 1.03, y: -2 } : {}}
            whileTap={!locked ? { scale: 0.97 } : {}}
            onClick={() => handleClick(option)}
            disabled={locked}
            className={`
              relative font-mono text-lg font-bold tracking-wider py-5 rounded-2xl
              border-2 transition-colors duration-200 bg-slate-900/60
              ${
                isSelected
                  ? "border-purple-400 text-white shadow-[0_0_24px_rgba(192,132,252,0.5)]"
                  : "border-slate-700/60 text-slate-100 hover:border-slate-500"
              }
              ${locked && !isSelected ? "opacity-40" : ""}
              disabled:cursor-not-allowed
            `}
          >
            {option}

            {isSelected && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.25 }}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-purple-400 rounded-full p-1.5"
              >
                <Check size={14} className="text-slate-950" strokeWidth={3} />
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

export default CaptchaOptions;
