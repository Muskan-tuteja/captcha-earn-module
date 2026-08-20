import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

function CheckingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-3xl p-10 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center"
    >
      {/* rotating scan ring */}
      <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-slate-700 border-t-emerald-400"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center"
        >
          <Loader2 size={18} className="text-emerald-300" />
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="text-white text-base font-semibold mb-1"
      >
        Checking your answer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.3 }}
        className="text-slate-500 text-sm"
      >
        This will only take a moment
      </motion.p>
    </motion.div>
  );
}

export default CheckingPage;