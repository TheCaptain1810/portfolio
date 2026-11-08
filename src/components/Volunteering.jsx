import { motion } from 'framer-motion';

import { styles } from '../styles';
import { volunteering } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const VolunteeringCard = ({ index, title, organization, icon, date, points }) => (
  <motion.div
    variants={fadeIn('up', 'spring', 0.3 * index, 0.75)}
    className='w-full max-w-3xl bg-tertiary rounded-[20px] p-6 sm:p-8 flex flex-col sm:flex-row gap-6'
  >
    <div className='w-16 h-16 flex-shrink-0 rounded-full bg-white flex items-center justify-center'>
      <img src={icon} alt={organization} className='w-[60%] h-[60%] object-contain' />
    </div>

    <div className='flex-1'>
      <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
        <h3 className='text-white text-[22px] font-bold'>{title}</h3>
        <p className='text-secondary text-[14px]'>{date}</p>
      </div>
      <p className='text-secondary text-[16px] font-semibold'>{organization}</p>

      <ul className='mt-4 list-disc ml-5 space-y-2'>
        {points.map((point, i) => (
          <li key={`volunteering-point-${i}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Volunteering = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Beyond work</p>
      <h2 className={styles.sectionHeadText}>Volunteering.</h2>
    </motion.div>

    <div className='mt-12 flex flex-col gap-8'>
      {volunteering.map((item, index) => (
        <VolunteeringCard key={item.title} index={index} {...item} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Volunteering, 'volunteering');
