import React, { Suspense, useState } from 'react';
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox'
import Loader from '../Components/Loader'
import useAlert from '../hooks/useAlert';

const Contact = () => {

  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const {alert, showAlert, hideAlert} = useAlert()


  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleFocus = () => {
    setCurrentAnimation(walk)
  }

  const handleBlur = () => {
    setCurrentAnimation('idle')
  }

  const handleSubmit = () => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Victus",
        from_email: form.email,
        to_email: "ezevictus@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({show: 'true', text: 'Message was successfully sent', type: 'success'})
      // TODO: show success message
      // TODO: Hide an alart

      setTimeout(() => {
        hideAlert()
        setCurrentAnimation('idle')
        // This clears the form
        setForm({name: '', email: '', message: ''})
      }, [3000])

    }).catch((error) => {
      setIsLoading(false)
      setCurrentAnimation('idle')
      console.log(error)
      showAlert({show: 'true', text: 'message was not sent', type: 'danger'})
    })
  } 

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-full'>
      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In Touch</h1>
      </div>

      <form
        className='w-full flex flex-col gap-7 mt-14' 
        onSubmit={handleSubmit}
      >
        <label className='text-black-500 font-semibold'>
          Name
          <input 
            type="text"
            name='name'
            className='input'
            placeholder='John'
            required
            value={form.name}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <label className='text-black-500 font-semibold'>
          Email
          <input 
            type="email"
            name='email'
            className='input'
            placeholder='John@gmail.com'
            required
            value={form.email}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <label className='text-black-500 font-semibold'>
          Your message
          <textarea 
            name='message'
            rows={4}
            className='input'
            placeholder='Let me know how I can be of help to you!'
            required
            value={form.message}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <button
          type='submit'
          className='btn'
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {isLoading ? 'sending...' : 'send message'}
        </button>
      </form>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
          <canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near:0.1,
              far: 1000

            }}
          >
            <directionalLight intensity={2.5}
            position={[0, 0, 1]}/>
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[-12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </canvas>
      </div>

    </section>
  )
}

export default Contact
