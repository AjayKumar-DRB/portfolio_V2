"use client";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Image from "next/image";
import bookImage from '@/assets/images/book-cover.png';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import ApacheJmeter from '@/assets/icons/apachejmeter.svg';
import Bootstrap from '@/assets/icons/bootstrap.svg';
import TailwindCSS from '@/assets/icons/tailwind-css.svg'
import NodeJS from '@/assets/icons/node-js.svg';
import ExpressJS from'@/assets/icons/express-js.svg';
import MySQL from '@/assets/icons/mysql-logo.svg';
import SQLServer from '@/assets/icons/microsoft-sql-server.svg';
import Python from '@/assets/icons/python.svg';
import MongoDB from '@/assets/icons/mongodb.svg';
import PostmanAPI from '@/assets/icons/postman-api.svg';
import Jira from'@/assets/icons/jira.svg';
import smileMemoji from '@/assets/images/memoji-smile.png';
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";


const toolboxItems1 = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon
  },
  {
    title: 'CSS3',
    iconType: CSSIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  {
    title: 'Github',
    iconType: GithubIcon
  },
  {
    title: 'Node.js',
    iconType: NodeJS
  },
  {
    title: 'Express.js',
    iconType: ExpressJS
  },
  {
    title: 'Python',
    iconType: Python
  },
]  
  
const toolboxItems2 = [
  {
    title: 'MongoDB',
    iconType: MongoDB
  },
  {
    title: 'MySQL',
    iconType: MySQL
  },
  {
    title: 'Microsoft SQL Server',
    iconType: SQLServer
  },
  {
    title: 'Apache JMeter',
    iconType: ApacheJmeter
  },
  {
    title: 'Tailwind CSS',
    iconType: TailwindCSS
  },
  {
    title: 'Postman API',
    iconType: PostmanAPI
  },
  {
    title: 'Jira',
    iconType: Jira
  },
  {
    title: 'Bootstrap',
    iconType: Bootstrap
  },
];

const hobbies = [
  {
    title:'Painting',
    emoji:"🎨",
    left: '5%',
    top:'5%',
  },
  {
    title:'Gaming',
    emoji:"🎮",
    left: '50%',
    top:'5%',
  },
  {
    title:'Swimming',
    emoji:"🏊‍♂️",
    left: '10%',
    top:'35%',
  },
  {
    title:'Music',
    emoji:"🎶",
    left: '35%',
    top:'40%',
  },
  {
    title:'Reading',
    emoji:"📖",
    left: '60%',
    top:'65%',
  },
  {
    title:'Archery',
    emoji:"🏹",
    left: '80%',
    top:'75%',
  },
  {
    title:'Badminton',
    emoji:"🏸",
    left: '25%',
    top:'65%',
  },
  {
    title:'Board Games',
    emoji:"🎲",
    left: '75%',
    top:'12%',
  },
]

export const AboutSection = () => {

  const constraintRef = useRef(null);

  return (
    <motion.section 
    initial={{opacity:0}}
    whileInView={{opacity:1, transition:{delay:0.2, duration:0.5}}}
    viewport={{once:false, amount:0.1}}    
    id="about" className="py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <SectionHeader eyebrow={"About Me"} title={"A Glimpse into My World"} description={"Learn more about who I am, what I do, and what inspires me!"} />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* My Reads Section */}
            <motion.div
            initial={{opacity:0, y:-75}}
            whileInView={{opacity:1, y:0,transition:{delay:0.2, duration:0.5}}}
            viewport={{once:false, amount:0.3}} 
            className=" md:col-span-2 lg:col-span-1">
              <Card className="h-[320px]">
                <CardHeader title={"My Reads"} description={"Explore the books shaping my perspective."}/>
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={bookImage} alt="Book Cover"/>
                </div>
              </Card>
            </motion.div>
            {/* My Skills */}
            <motion.div
            initial={{opacity:0, x:75}}
            whileInView={{opacity:1, x:0,transition:{delay:0.2, duration:0.5}}}
            viewport={{once:false, amount:0.3}} 
            className="md:col-span-3 lg:col-span-2">
              <Card className="h-[320px]">
                <CardHeader title={"My Toolbox"} description={"Explore the technologies and tools I use to craft exceptional digital experiences."} className=""/>   
                <ToolboxItems item={toolboxItems1} className="" itemsWrapperClassName="animate-move-left [animation-duration:15s]" />
                <ToolboxItems item={toolboxItems2} className="mt-6" itemsWrapperClassName="animate-move-right  [animation-duration:15s]"/>
              </Card>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* My Hobbies and Interests */}
            <motion.div            
            initial={{opacity:0, x:-75}}
            whileInView={{opacity:1, x:0,transition:{delay:0.2, duration:0.5}}}
            viewport={{once:false, amount:0.1}} 
            className=" md:col-span-3 lg:col-span-2">
              <Card className="h-[320px] flex flex-col">
                <CardHeader className="" title={"Beyond The Code"} description={"Explore my interests and hobbies beyond the technical realm."}/>
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map(hobby => (
                    <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                      left: hobby.left,
                      top: hobby.top
                    }}
                    drag
                    dragConstraints={constraintRef}>
                      <span className="">{hobby.emoji}</span>
                      <span className="text-gray-950 font-medium">{hobby.title}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
            {/* My Location */}
            <motion.div
            initial={{opacity:0, y:75}}
            whileInView={{opacity:1, y:0,transition:{delay:0.2, duration:0.5}}}
            viewport={{once:false, amount:0.1}} 
            className="md:col-span-2 lg:col-span-1">
              <Card className="h-[320px] relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.155776271054!2d77.66397181113479!3d12.914503543301855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1312a63e382f%3A0x12c4f79f905ef9d2!2sKaikondrahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1728222368791!5m2!1sen!2sin" width="600" height="450" className="border-0" loading="lazy"></iframe>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 ">
                  <Image src={smileMemoji} alt="smile memoji" />
                </div>
                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};
