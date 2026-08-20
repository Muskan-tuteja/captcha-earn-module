import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Gem } from "lucide-react";

function ResultPage({ isCorrect, gemsEarned, totalGems, onClaim, onNoThanks }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl flex flex-col items-center"
    >
      {/* icon */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
          isCorrect ? "bg-emerald-400/15" : "bg-slate-700/40"
        }`}
      >
        {isCorrect ? (
          <CheckCircle2 size={32} className="text-emerald-400" />
        ) : (
          <XCircle size={32} className="text-slate-400" />
        )}
      </motion.div>

      {/* title + subtext */}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="text-white text-xl font-semibold mb-1"
      >
        {isCorrect ? "Correct" : "Incorrect"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.3 }}
        className="text-slate-400 text-sm mb-6 text-center"
      >
        {isCorrect
          ? "CAPTCHA verified successfully"
          : "That answer wasn't correct — you can try another one"}
      </motion.p>

      {/* gem reward reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.45, ease: "easeOut" }}
        className="flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-2xl px-6 py-3 mb-8"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Gem size={22} className="text-amber-300" />
        </motion.div>
        <span className="text-amber-300 text-lg font-bold">
          +{gemsEarned} Gem{gemsEarned !== 1 ? "s" : ""}
        </span>
      </motion.div>

      {/* buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.3 }}
        className="w-full flex flex-col gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClaim}
          className="w-full py-3.5 rounded-xl bg-emerald-400 text-slate-950 font-semibold text-sm shadow-lg shadow-emerald-400/20"
        >
          Claim
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNoThanks}
          className="w-full py-3 rounded-xl bg-transparent border border-slate-700 text-slate-400 font-medium text-sm"
        >
          No Thanks
        </motion.button>
      </motion.div>

      {/* running total */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="text-slate-600 text-xs mt-5"
      >
        Total balance: {totalGems.toFixed(1)} Gems
      </motion.p>
    </motion.div>
  );
}

export default ResultPage;