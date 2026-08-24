import { motion } from "framer-motion";
import { ShieldCheck, Gem } from "lucide-react";
import CaptchaOptions from "./CaptchaOptions";

function CaptchaPage({ challenge, gems, onSelectOption }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-md mx-auto"
    >
      {/* Top bar: trust badge + gem balance */}
      <div className="flex items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex items-center gap-2 text-emerald-300 text-sm font-semibold bg-emerald-400/10 border border-emerald-400/30 px-4 py-2 rounded-full"
        >
          <ShieldCheck size={16} />
          <span>Secure Verification</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex items-center gap-2 text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/40 px-4 py-2 rounded-full shadow-[0_0_16px_rgba(168,85,247,0.25)]"
        >
          <Gem size={16} className="text-purple-300" />
          <span className="text-sm font-bold">{gems.toLocaleString()}</span>
        </motion.div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-center mb-2"
      >
        <h1 className="text-4xl font-extrabold leading-tight bg-gradient-to-r from-sky-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          Verify You're Human
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.26, duration: 0.4 }}
        className="text-center text-slate-400 text-sm mb-8"
      >
        Please read the CAPTCHA code and select the correct option.
      </motion.p>

      {/* CAPTCHA white card */}
      <motion.div
        key={challenge.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.32, duration: 0.4 }}
        className="bg-gradient-to-b from-white to-slate-100 rounded-3xl p-6 shadow-2xl mb-6"
      >
        <p className="text-center text-slate-700 font-semibold text-sm mb-4">
          Enter the following code
        </p>

        <div className="relative rounded-2xl bg-white border border-slate-200 py-8 flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 300 60" className="w-full h-14">
            <line x1="10" y1="15" x2="290" y2="45" stroke="#94a3b8" strokeWidth="1.2" opacity="0.7" />
            <line x1="10" y1="45" x2="290" y2="15" stroke="#94a3b8" strokeWidth="1.2" opacity="0.7" />
            <line x1="30" y1="50" x2="270" y2="10" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
            <text
              x="150"
              y="40"
              fontFamily="'Courier New', monospace"
              fontSize="34"
              fontWeight="800"
              fill="#1e293b"
              textAnchor="middle"
              letterSpacing="6"
            >
              {challenge.correctAnswer}
            </text>
          </svg>
        </div>

        <p className="text-center text-slate-400 text-xs mt-4 flex items-center justify-center gap-1.5">
          <ShieldCheck size={13} />
          This helps us keep your account secure
        </p>
      </motion.div>

      {/* Options */}
      <p className="text-slate-300 text-sm font-medium mb-3">
        Select the matching code
      </p>
      <CaptchaOptions
        key={challenge.id + "-options"}
        options={challenge.options}
        onSelectOption={onSelectOption}
      />

      {/* Bottom trust text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex items-start gap-3 justify-center mt-8 text-slate-400"
      >
        <div className="w-9 h-9 rounded-full border border-blue-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
        </div>
        <div className="text-xs text-left">
          <p className="text-slate-300 font-semibold">Your security is our priority.</p>
          <p className="text-slate-500">We never share your information.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default CaptchaPage;
