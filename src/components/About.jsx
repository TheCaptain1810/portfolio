import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { resume } from '../assets';

const ServiceCard = ({ index, title, skills }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full'
      >
        <div className='bg-tertiary rounded-[20px] py-8 px-6 min-h-[180px] h-full flex flex-col justify-between gap-6'>
          <span className='text-[#915eff] font-mono text-[14px]'>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3 className="text-white text-[20px] font-bold">{title}</h3>
            <p className='text-secondary text-[13px] mt-2 leading-5'>{skills}</p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I&apos;m a skilled software developer with experience in JavaScript and expertise in framerworks like Node.js and React.js. I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable , and user-friendly solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.2, 1)} className='mt-8'>
        <a
          href={resume}
          download='Pranav_Pise_Resume.pdf'
          className='inline-flex items-center gap-3 rounded-xl bg-[#915eff] hover:bg-[#7b45f0] text-white font-semibold text-[16px] py-3 px-6 shadow-[0_0_30px_-8px_#915eff] transition-colors'
        >
          <i className='fa-solid fa-file-arrow-down' />
          Download Resume
        </a>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 items-stretch'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");