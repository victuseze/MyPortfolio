import React, { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox';
import Loader from '../Components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../Components/Alert'; 

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const [alert, setAlert] = useState({ show: false, text: '', type: '' });

  const showAlert = ({ show, text, type }) => {
    if (typeof text !== 'undefined') {
      setAlert({ show, text, type });
    } else {
      console.error('Alert text is not defined');
    }
  };

  const hideAlert = () => {
    setAlert({ show: false, text: '', type: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation('walk'); // Ensure 'walk' animation is defined in Fox component
  };

  const handleBlur = () => {
    setCurrentAnimation('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit'); // Ensure 'hit' animation is defined in Fox component

    emailjs
      .send(
        'service_lcsnwh9',
        'template_2717pf9',
        {
          from_name: form.name,
          to_name: 'Victus',
          from_email: form.email,
          to_email: 'ezevictus@gmail.com',
          message: form.message,
        },
        'z3BMrvyTRLC5PcaXN'
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: 'Sent Successfully',
          type: 'success',
        });

        // Reset form and animations
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation('idle');
          setForm({ name: '', email: '', message: '' });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        console.error('EmailJS error:', error);
        showAlert({
          show: true,
          text: 'Message was not sent. Please try again later.',
          type: 'danger',
        });
      });
  };

  const Alert = ({ show, text, type }) => {
    if (!show) return null; // Do not render if the alert is not shown

    return (
      <div className={`alert ${type}`}>
        {text}
      </div>
    );
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-full lg:py-12 px-6 lg:px-12">
      {/* Display the Alert component based on alert state */}
      {alert.show && <Alert {...alert} />}

      {/* Text and Form Section */}
      <div className="flex-1 min-w-[50%] flex flex-col lg:pr-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 lg:mb-12">Get In Touch</h1>

        <form className="w-full flex flex-col gap-7" onSubmit={handleSubmit}>
          <label className="text-gray-700 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input p-4 border border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-gray-700 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input p-4 border border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-gray-700 font-semibold">
            Your message
            <textarea
              name="message"
              rows={4}
              className="input p-4 border border-gray-300 rounded-lg focus:border-blue-500"
              placeholder="Let me know how I can be of help to you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className={`btn py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 ease-in-out ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* 3D Canvas Section */}
      <div className="lg:w-1/2 w-full lg:h-auto h-[350px] mt-12 lg:mt-0 lg:ml-12">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
          className="rounded-lg shadow-lg"
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[-12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
