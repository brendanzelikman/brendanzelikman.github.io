import { Timeout } from "constants";
import React, { useState, useEffect } from "react";

interface TypewriterProps {
  /** Text to type out */
  text: string;
  /** Typing speed (ms per character) */
  speed?: number;
  /** Pause before starting (ms) */
  pause?: number;
  /** Whether to show the blinking cursor */
  showCursor?: boolean;
  /** Custom cursor character */
  cursorChar?: string;
  /** Whether to enable typing */
  enabled?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  pause = 500,
  showCursor = true,
  cursorChar = "|",
  enabled = true,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timeout: Timeout;
    const type = (index: number) => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        timeout = setTimeout(() => type(index + 1), speed);
      } else {
        setTyping(false); // Typing finished
      }
    };

    // Start typing after the pause duration
    timeout = setTimeout(() => {
      setTyping(true);
      type(1);
    }, pause);

    return () => clearTimeout(timeout);
  }, [text, speed, pause]);

  if (!enabled) return <span>{text}</span>;
  return (
    <span>
      {displayText}
      {showCursor && typing && <span>{cursorChar}</span>}
    </span>
  );
};
