"use client";
import { motion } from "framer-motion";
import { useState } from "react";


export default function ContactMeForm({formOpen}:{formOpen:boolean}) {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({ name, email, subject, body }),
        });

        if (response.ok) {
          setSuccessMessage('Email sent successfully!');
          setName('');
          setEmail('');
          setSubject('');
          setBody('');
        } else {
          throw new Error('Failed to send email');
        }
    } catch (error: any) {
        setErrorMessage(error.message);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <motion.div
      initial={{height:0}}
      animate={{height:formOpen?'auto':0}}
      transition={{duration:0.5}}
      >
      <form onSubmit={handleSubmit} className='pt-8 flex flex-col items-center'>
        <input
          type='text'
          placeholder='Enter Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='contact-input'
        />
        <input
          type='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='contact-input'
        />
        <input
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className='contact-input'
        />
        <textarea
          placeholder='Your Message'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className='contact-input min-h-40 rounded-br-none resize-y'
        />
        <button
          type='submit'
          disabled={isSubmitting}
          className='text-white font-semibold shadow-xl shadow-gray-800 hover:shadow-2xl hover:shadow-black transition-all duration-500 bg-gray-900 inline-flex items-center px-6 h-12 mt-2 rounded-xl'
        >
          {isSubmitting ? 'Sending...' : 'Send 📤'}
        </button>
        {successMessage && <p className='text-green-500'>{successMessage}</p>}
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      </form>
      </motion.div>
    </div>    
  )
}
