// Character sets used to build CAPTCHA strings
const LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // (I, O skipped to avoid confusion)
const DIGITS = "23456789"; // (0, 1 skipped to avoid confusion with O, I)

// Generates a random 6-character CAPTCHA like "A7K2P9"
function generateRandomCaptcha() {
  let result = "";
  for (let i = 0; i < 6; i++) {
    const useLetter = Math.random() > 0.4;
    const pool = useLetter ? LETTERS : DIGITS;
    result += pool[Math.floor(Math.random() * pool.length)];
  }
  return result;
}

// Creates a "similar but wrong" version by swapping/replacing characters
function createSimilarOption(correct) {
  const chars = correct.split("");
  const numChanges = Math.random() > 0.5 ? 1 : 2;

  for (let i = 0; i < numChanges; i++) {
    const index = Math.floor(Math.random() * chars.length);
    const isDigit = /[0-9]/.test(chars[index]);
    const pool = isDigit ? DIGITS : LETTERS;
    let newChar;
    do {
      newChar = pool[Math.floor(Math.random() * pool.length)];
    } while (newChar === chars[index]);
    chars[index] = newChar;
  }

  if (Math.random() > 0.5) {
    const i = Math.floor(Math.random() * (chars.length - 1));
    [chars[i], chars[i + 1]] = [chars[i + 1], chars[i]];
  }

  return chars.join("");
}

// Creates a completely different option
function createDifferentOption(correct) {
  let result;
  do {
    result = generateRandomCaptcha();
  } while (
    result === correct ||
    result.split("").filter((c, i) => c === correct[i]).length > 1
  );
  return result;
}

// Shuffles an array (Fisher-Yates)
function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Main export: generates a fresh CAPTCHA challenge with 4 options
export function generateCaptchaChallenge(previousCaptchas = []) {
  let correctAnswer;

  do {
    correctAnswer = generateRandomCaptcha();
  } while (previousCaptchas.includes(correctAnswer));

  const similarOptions = new Set();
  while (similarOptions.size < 2) {
    const option = createSimilarOption(correctAnswer);
    if (option !== correctAnswer) {
      similarOptions.add(option);
    }
  }

  const similarOptionsArr = Array.from(similarOptions);
  const differentOption = createDifferentOption(correctAnswer);

  const allOptions = shuffleArray([
    correctAnswer,
    ...similarOptionsArr,
    differentOption,
  ]);

  return {
    id: Date.now() + Math.random(),
    correctAnswer,
    options: allOptions,
  };
}