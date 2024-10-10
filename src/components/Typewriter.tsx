"use client";

import { useState, useEffect } from 'react';

const typewriterTexts = [
  'Software Developer',
  'MERN Enthusiast',
  'Problem Solver',
  'Hardcore Gamer',
];

const Typewriter = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typewriterTexts[textIndex];

    if (isDeleting) {
      // Erase the text
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        }, 100); // Speed of erasing
        return () => clearTimeout(timeout);
      } else {
        // Switch to typing next word after a brief pause
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }, 250); // Pause after erasing before typing next word
        return () => clearTimeout(timeout);
      }
    } else {
      // Type the text
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + currentText[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 150); // Speed of typing
        return () => clearTimeout(timeout);
      } else {
        // Start deleting when the whole word is typed
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // Pause before starting to delete
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, textIndex, isDeleting]);

  return (
    <h2 className="text-xl font-base mb-2 min-h-8 inline-flex items-end justify-center lg:justify-start tracking-widest text-emerald-300/80">
      {displayedText}
      {/* <div className='bg-sky-400 size-1 mx-0.5 mb-2'></div> */}
      <span className="cursor block w-4 h-1 bg-sky-400/60 animate-blink mb-1.5"></span>
    </h2>
  );
};

export default Typewriter;
