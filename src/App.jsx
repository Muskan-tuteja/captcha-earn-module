import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { generateCaptchaChallenge } from "./data/captchaData";
import CaptchaPage from "./components/CaptchaPage";
import CheckingPage from "./components/CheckingPage";
import ResultPage from "./components/ResultPage";
import MockAdState from "./components/MockAdState";

// App states
const STATES = {
  CAPTCHA: "CAPTCHA",
  CHECKING: "CHECKING",
  RESULT: "RESULT",
  MOCK_AD: "MOCK_AD",
};

function App() {
  const [appState, setAppState] = useState(STATES.CAPTCHA);
  const [challenge, setChallenge] = useState(() => generateCaptchaChallenge([]));
  const [previousCaptchas, setPreviousCaptchas] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [gems, setGems] = useState(0);

  // called when user selects an option in CaptchaPage
  const handleSelectOption = (option) => {
    setSelectedOption(option);

    // after 0.5s "verifying" animation (handled inside CaptchaOptions/CaptchaPage),
    // move to CHECKING state
    setTimeout(() => {
      setAppState(STATES.CHECKING);
    }, 500);
  };

  // once on CHECKING state, simulate a short check delay then show result
  useEffect(() => {
    if (appState === STATES.CHECKING) {
      const correct = selectedOption === challenge.correctAnswer;
      const timer = setTimeout(() => {
        setIsCorrect(correct);
        setGems((prev) => prev + (correct ? 1 : 0.5));
        setAppState(STATES.RESULT);
      }, 1200); // short natural checking delay
      return () => clearTimeout(timer);
    }
  }, [appState, selectedOption, challenge]);

  const startNewChallenge = () => {
    const updatedPrevious = [...previousCaptchas, challenge.correctAnswer];
    setPreviousCaptchas(updatedPrevious);
    const newChallenge = generateCaptchaChallenge(updatedPrevious);
    setChallenge(newChallenge);
    setSelectedOption(null);
    setIsCorrect(null);
    setAppState(STATES.CAPTCHA);
  };

  const handleClaim = () => {
    setAppState(STATES.MOCK_AD);
  };

  const handleNoThanks = () => {
    startNewChallenge();
  };

  const handleMockAdComplete = () => {
    startNewChallenge();
  };

  return (
   <div
  className="min-h-screen flex items-center justify-center p-4 overflow-hidden"
  style={{
    background:
      "radial-gradient(circle at 15% 10%, rgba(90,60,220,0.28), transparent 42%), radial-gradient(circle at 85% 90%, rgba(190,60,220,0.18), transparent 42%), #05050f",
  }}
>
      <AnimatePresence mode="wait">
        {appState === STATES.CAPTCHA && (
          <CaptchaPage
            key="captcha"
            challenge={challenge}
            gems={gems}
            onSelectOption={handleSelectOption}
          />
        )}

        {appState === STATES.CHECKING && <CheckingPage key="checking" />}

        {appState === STATES.RESULT && (
          <ResultPage
            key="result"
            isCorrect={isCorrect}
            gemsEarned={isCorrect ? 1 : 0.5}
            totalGems={gems}
            onClaim={handleClaim}
            onNoThanks={handleNoThanks}
          />
        )}

        {appState === STATES.MOCK_AD && (
          <MockAdState key="mockad" onComplete={handleMockAdComplete} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;