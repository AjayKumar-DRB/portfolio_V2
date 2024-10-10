import grainImage from '@/assets/images/grain.jpg';
import ContactMe from '@/components/ContactMe';

export const ContactSection = () => {
  return (
    <section id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 rounded-3xl py-8 px-10 text-center md:text-left relative overflow-hidden z-0'>
          <div className='absolute inset-0 opacity-5 -z-10' style={{
            backgroundImage: `url(${grainImage.src})`,
          }}></div>
          <ContactMe/>
        </div>
      </div>
    </section>
  );
};
