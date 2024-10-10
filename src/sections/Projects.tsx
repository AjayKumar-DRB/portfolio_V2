"use client";
import ZapCart from "@/assets/images/ZapCart.png";
import GoldenGauge from "@/assets/images/GoldenGauge.png";
import Simplidone from "@/assets/images/TodoList.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpright from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    company: "ZapCart",
    year: "2024",
    title: "E-Commerce App",
    results: [
      { title: "Increased conversion rates by 25%" },
      { title: "Enhanced UX through personalized recommendations" },
      { title: "Reduced cart abandonment rate by 15%" },
    ],
    link: "https://zapcart.netlify.app/",
    image: ZapCart,
  },
  {
    company: "GoldenGauge",
    year: "2024",
    title: "Gold Rate Calculator",
    results: [
      { title: "Provided real-time gold pricing updates" },
      { title: "Enhanced user engagement with interactive charts" },
      { title: "Simplified investment tracking for users" },
    ],
    link: "https://goldengauge.netlify.app/",
    image: GoldenGauge,
  },
  {
    company: "Simplidone",
    year: "2023",
    title: "Todo List App",
    results: [
      { title: "Increased productivity for users by 30%" },
      { title: "Improved task organization with customizable categories" },
      { title: "Enabled collaboration through shared task lists" },
    ],
    link: "https://simplidone.netlify.app/",
    image: Simplidone,
  },
];

export const ProjectsSection = () => {
  return(
    <motion.section
    initial={{opacity: 0}}
    whileInView={{opacity: 1, transition:{delay:0.2, duration:0.5}}}
    viewport={{once: false, amount:0.1}}
    id="project" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader title={"Featured Project"} eyebrow={"Real-World Results"} description={"See how I transform concepts into engaging digital experiences"}/>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" 
          style={{
            top: `calc(64px + ${projectIndex*40}px)`,
          }}
          >
            <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: `url${grainImage.src}`}}></div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase text-sm tracking-widest bg-clip-text text-transparent">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map(result => (
                    <li key={result.title} className="flex items-center gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank">
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit Live Site</span>
                    <ArrowUpright className="size-4" />
                  </button>
                </a>
              </div>
              <div className="lg:relative pt-4">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-tl-3xl" /> 
              </div> 
            </div>
          </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
