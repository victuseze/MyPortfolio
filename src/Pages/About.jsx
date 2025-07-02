import React from 'react'
import { skills, experiences  } from '../Constants/index'
import CTA from '../Components/CTA'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Victus</span>
      </h1> 

      <div className='mt-5 flex flex-col gap-3 text-white'>
        <p> I'm an Extended Reality (XR) developer passionate about leveraging immersive technologies to drive cultural change and enhance learning experiences. With a solid foundation in XR development, my work focuses on creating educational VR applications, storytelling, arts, training modules, immersive VR games, and AR applications, with a specific interest in accessibility and inclusion.</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-white'>
          My Skills
        </h3>
        <div className="mt-16 flex flex-wrap gap-10">
          {skills.map((skill, index) => (
          <div key={index} className="block-container w-20  h-20 bg-yellow-400 rounded-xl p-2">
          <div className="btn-back rounded-xl mt-5" />
          <div className="btn-front rounded-xl flex justify-center items-center">
            <img 
              src={skill.imageUrl}
              alt={skill.name}
              className="w-1/2 h-1/2 object-contain" 
            />
        </div>
          <div className="mt-20 text-center">
            <h1 className="text-white">{skill.name}</h1>
          </div>
      </div>
    ))}
  </div>
      </div>
       
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'> 
            <p>I have worked with individuals, teams and in a Company. Here is my story:</p>
          </div>

          <div className='mt-12 flex'> 
            <VerticalTimeline>
              {experiences.map((experience) => {
                return(
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={<div>
                    <img 
                      src= {experience.icon}
                      alt="Company's Logo" 
                      className='w-[5%] h-[5%] object-contain'
                    />
                  </div>}
                  iconStyle={{
                    background: experience.iconBg
                  }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}
                >
                  <div>
                    <h3 className='text-white text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-white font-medium font-base' style={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => {
                      return <li key={`experience-point-${index}`} className='text-white font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    })}
                  </ul>
                </VerticalTimelineElement>
              )})}
            </VerticalTimeline>
          </div>
      </div>

      <hr className='border-slate-200'/>

      <CTA />

    </section>
  )
}

export default About
