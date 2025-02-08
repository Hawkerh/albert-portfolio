import { useTypewriter } from "../hooks/useTypewriter";

interface TypewriterProps {
  words: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ words }) => {
  const text = useTypewriter(words, 100);

  return (
    <span>{text}</span>
  );
};

export default Typewriter;
