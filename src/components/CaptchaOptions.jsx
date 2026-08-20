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
    <div className="grid grid-cols-2 gap-3">
      {options.map((option, index) => {
        const isSelected = selected === option;

        return (
          <motion.button
            key={option}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.06, duration: 0.35 }}
            whileHover={!locked ? { scale: 1.03, y: -2 } : {}}
            whileTap={!locked ? { scale: 0.97 } : {}}
            onClick={() => handleClick(option)}
            disabled={locked}
            className={`
              relative font-mono text-base font-semibold tracking-wider py-4 rounded-xl
              border transition-colors duration-200
              ${
                isSelected
                  ? "border-emerald-400 bg-emerald-400/10 text-emerald-300"
                  : "border-slate-800 bg-slate-950 text-slate-200 hover:border-slate-600 hover:bg-slate-900"
              }
              ${locked && !isSelected ? "opacity-40" : ""}
              disabled:cursor-not-allowed
            `}
          >
            {option}

            {/* selection pulse + checkmark */}
            {isSelected && (
              <>
                <motion.span
                  initial={{ opacity: 0.6, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 rounded-xl border-2 border-emerald-400"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.25 }}
                  className="absolute -top-2 -right-2 bg-emerald-400 rounded-full p-1"
                >
                  <Check size={12} className="text-slate-950" strokeWidth={3} />
                </motion.div>
              </>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

export default CaptchaOptions;