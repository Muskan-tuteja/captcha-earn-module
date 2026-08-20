import { motion } from "framer-motion";
import { Gem, ShieldCheck } from "lucide-react";
import CaptchaOptions from "./CaptchaOptions";

function CaptchaPage({ challenge, gems, onSelectOption }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xl"
    >
      {/* Top bar: trust badge + gem balance */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium bg-emerald-400/10 px-3 py-1.5 rounded-full">
          <ShieldCheck size={14} />
          <span>Secure Verification</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-300 bg-amber-400/10 px-3 py-1.5 rounded-full">
          <Gem size={14} />
          <span className="text-sm font-semibold">{gems.toFixed(1)}</span>
        </div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mb-6"
      >
        <h1 className="text-white text-xl font-semibold mb-1">
          Verify to Earn Gems
        </h1>
        <p className="text-slate-400 text-sm">
          Select the option that exactly matches the code below
        </p>
      </motion.div>

      {/* CAPTCHA display */}
      <motion.div
        key={challenge.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="relative mb-8 rounded-2xl bg-slate-950 border border-slate-800 py-6 flex items-center justify-center overflow-hidden"
      >
        {/* subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,white,white_1px,transparent_1px,transparent_10px)]" />
        <span className="relative text-3xl font-mono font-bold tracking-[0.3em] text-white select-none">
          {challenge.correctAnswer}
        </span>
      </motion.div>

      {/* Options */}
      <CaptchaOptions
        key={challenge.id + "-options"}
        options={challenge.options}
        onSelectOption={onSelectOption}
      />

      {/* Reward info footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-center text-slate-500 text-xs mt-6"
      >
        Correct answers earn <span className="text-amber-300">+1 Gem</span> ·
        Incorrect answers still earn{" "}
        <span className="text-amber-300">+0.5 Gems</span>
      </motion.p>
    </motion.div>
  );
}

export default CaptchaPage;