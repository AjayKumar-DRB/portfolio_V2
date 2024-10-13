"use client";
import grainImage from '@/assets/images/grain.jpg';
import StarImage from '@/assets/icons/star.svg';
import Sparkle from '@/assets/icons/sparkle.svg';
import GithubIcon from '@/assets/icons/github-social.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import LeetCodeIcon from '@/assets/icons/leetcode.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import HeroIcon from '@/components/HeroIcon';
import Typewriter from '@/components/Typewriter';
import SplitButton from '@/components/SplitButton';
import { motion } from 'framer-motion';

export const HeroSection = () => {

  const socialIcons = [
    {
      iconName: GithubIcon,
      url:"https://github.com/AjayKumar-DRB",   
    },
    {
      iconName: LinkedInIcon,
      url:"https://www.linkedin.com/in/ajaykumardrb/",   
    },
    {
      iconName: LeetCodeIcon,
      url:"https://leetcode.com/u/AjayDRBKumar/",   
    },

  ];

  return (
    <section id="home" className='py-36 md:py-48 lg:py-48 relative'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] overflow-hidden -z-10'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`,
        }
        }></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>


        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
          <Sparkle className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
          <Sparkle className="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
          <div className="size-2 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
          <Sparkle className="size-10 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s'  shouldSpin spinDuration='6s'>
          <StarImage className="size-12 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
          <StarImage className="size-8 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
          <div className="size-2 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
          <Sparkle className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={90} shouldOrbit orbitDuration='46s'>
          <div className="size-3 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
          <StarImage className="size-28 text-emerald-300"/>
        </HeroOrbit>
      </div>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1, transition:{delay:0.2, duration:0.5}}}
      viewport={{once: false, amount:0.25}}      
      className='grid grid-col-1 lg:grid-cols-10 z-1 overflow-hidden'>
        <motion.div
        initial={{x:-70}}
        whileInView={{ x:0, transition:{delay:0.2, duration:0.5}}}
        viewport={{once: false, amount:0.25}} 
        className='order-2 lg:order-1 col-span-1 lg:col-span-7 my-auto'>
          <div className="mb-8 md:mb-0 sm:mx-8 md:mx-16 lg:mx-32 sm:text-center lg:text-start flex flex-col justify-center">
            <Typewriter/>
            <h3 className="text-3xl md:text-5xl font-medium font-serif">Hello! I’m Ajay Kumar</h3>
            <p className="mt-4 text-white/60 md:text-lg lg:text-xl">
            As a full-stack developer, I specialize in crafting impressive web applications that seamlessly combine front-end design and back-end functionality. 🌐 My passion for collaboration drives me to work with teams to build scalable solutions that truly stand out. 🤝
            </p>
            <p className='mt-4 text-white/60 md:text-lg lg:text-xl'>
            With a focus on modern technologies like the MERN stack, I aim to create impactful digital experiences that blend creativity with code. 🚀 Let’s code, create, and conquer together! 💻✨
            </p>
          </div>
          <div className='flex flex-col lg:flex-row justify-between items-center md:mb-0 sm:mx-6 md:mx-16 lg:mx-32 mt-8 gap-4'>
            <div className='flex-grow flex justify-center'>
              <SplitButton/>
            </div>
            <div className='mx-10 mt-4 lg:mt-0 flex gap-10'>
              {socialIcons.map((icon) => (
                <a key={icon.iconName} href={icon.url} target='_blank'>
                  <button className='inline-flex items-center justify-center bg-white text-gray-900 border border-white rounded-full w-12 h-12 hover:fill-[url(#tech-icon-gradient)]'>
                    <icon.iconName className="w-7 h-7" />
                    <icon.iconName className="w-7 h-7 absolute hover:animate-ping" />
                  </button>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{x:70}}
        whileInView={{ x:0, transition:{delay:0.2, duration:0.5}}}
        viewport={{once: false, amount:0.25}}         
        className='order-1 lg:order-2 col-span-1 lg:col-span-3 pb-12 lg:my-auto'>
          <div className='flex flex-col items-center sm:gap-4 lg:gap-8 justify-center'>
            <HeroIcon />
            <a href="#contact">
              <button className='relative flex h-12 w-fit items-center justify-center circle-hover button-border'>
                <span className='relative text-xl font-bold'>Hire Me</span>
              </button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
);
};
