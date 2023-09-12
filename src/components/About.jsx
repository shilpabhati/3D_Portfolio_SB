import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({title, index, icon}) => (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5* index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div option={{
          max:45,
          scale:1,
          speed:450,
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
         <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
         <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    I'm Shilpa Bhati, a passionate software developer, graduated from IIT Guwahati (Class of 2022) and 7 months of professional experience as a Software Development Engineer. My expertise spans a range of technologies, including JavaScript, TypeScript, C/C++, Shell scripting, Docker and Jenkins.<br/>
    I thrive on both backend and frontend development, with React JS, Node JS, Express JS, RESTful APIs being my forte. I also have a strong grasp of MongoDB and MySQL.<br/>
    Currently, I'm actively seeking opportunities in software development engineering roles. I'm eager to expand my knowledge and skills. I'm looking for a supportive team and environment where I can contribute, learn, and explore new technologies.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>{services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service}/>))}</div>
    </>
  )
}

export default SectionWrapper(About, "about");