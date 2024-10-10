"use client";
import { useState, useEffect, MouseEvent } from "react";

export const Header = () => {

  const [selected, setSelected] = useState<String>('Home');

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const tagName = e.currentTarget.textContent || '';
    setSelected(tagName);
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const headerItems = [
    'home', 'project', 'about', 'contact'
  ]

  return (
    <div className="flex justify-center items-center fixed top-3 w-full overflow-hidden z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {headerItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`capitalize nav-item ${selected === item ? 'nav-selected' : ''}`}
            onClick={handleClick}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};
