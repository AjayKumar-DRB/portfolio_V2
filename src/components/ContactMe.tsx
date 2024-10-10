"use client";
import ContactMeButton from '@/components/ContactMeButton';
import ContactMeForm from '@/components/ContactMeForm';
import { useState } from 'react';

export default function ContactMe() {

  const [formOpen, setFormOpen] = useState(false);

  return (
  <div className={`flex flex-col justify-center items-center w-full`}>
    <div className='flex sm:flex-col md:flex-row gap-8 md:gap-16'>
      <div>
        <h2 className='font-serif text-2xl md:text-3xl'>Contact Me</h2>
        <p className='text-sm md:text-base mt-2'>Want me to be a part of your next project? Let's discuss how we can make it happen.</p>
      </div>
      <div className='my-auto'>
        <ContactMeButton formOpen={formOpen} setFormOpen={setFormOpen}/>
      </div>
    </div>
    <div className='sm:max-w-3/6 md:w-3/6'>
      <ContactMeForm formOpen={formOpen}/>
    </div>
  </div>
        
  )
}
