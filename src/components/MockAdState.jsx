import { useEffect } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

function MockAdState({ onComplete }) {
  useEffect(() => {
    // simulate a short rewarded-ad preparation delay
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-3xl p-10 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 rounded-full bg-emerald-400/10 flex items-center justify-center mb-6"
      >
        <PlayCircle size={28} className="text-emerald-400" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="text-white text-base font-semibold mb-1"
      >
        Preparing your reward
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.3 }}
        className="text-slate-500 text-sm mb-6"
      >
        Just a moment while we get things ready
      </motion.p>

      {/* progress bar */}
      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="h-full bg-emerald-400 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default MockAdState;