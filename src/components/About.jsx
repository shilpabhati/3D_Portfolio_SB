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
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flexx justify-evenly items-center flex-col'>
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
    This is Shilpa Bhati and I am graduated from IIT Guwahati in year 2022. 
    I have 7 months experience as software development engineer. 
    I have professional experience with Javascript, Typescript, Shell script, Docker, Jenkins and AWS.
    I have created some personal projects using backend and frontend technologies. I am more comfortable with React.Js and other Javascript frameworks. I have started learning about Java and related frameworks to upskilling myself. I have good knowledge of RESTful APIs too. I am looking for job opportunities in SDE profiles. I have knowledge of JavaScript and it's framework. I want to learn and explore more with these technologies. I am looking for better guidance and supportive team where I can contribute and learn new technologies
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>{services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service}/>))}</div>
    </>
  )
}

export default SectionWrapper(About, "about");