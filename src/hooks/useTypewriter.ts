import { useState, useEffect } from "react";

export function useTypewriter(words: string[], speed: number = 100) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    if (isDeleting) {
      setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, speed / 2);
    } else {
      setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, speed);
    }

    if (!isDeleting && subIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    setText(currentWord.substring(0, subIndex));
  }, [subIndex, isDeleting, index, words, speed]

);

  return text;
}
