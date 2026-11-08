import { motion } from 'framer-motion';

import { styles } from '../styles';
import { certifications } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const CertificationCard = ({ index, name, issuer, icon, color, link }) => {
  const Wrapper = link ? 'a' : 'div';
  const linkProps = link ? { href: link, target: '_blank', rel: 'noreferrer' } : {};

  return (
    <motion.div variants={fadeIn('up', 'spring', 0.15 * index, 0.75)}>
      <Wrapper
        {...linkProps}
        className='h-full flex items-center gap-5 bg-tertiary rounded-2xl p-5 border border-transparent hover:border-[#915eff]/50 transition-colors'
      >
        <div className='w-14 h-14 flex-shrink-0 rounded-xl bg-black-200 flex items-center justify-center'>
          <i className={`${icon} text-[26px]`} style={{ color }} />
        </div>
        <div>
          <h3 className='text-white text-[17px] font-bold leading-snug'>{name}</h3>
          <p className='text-secondary text-[14px] mt-1'>{issuer}</p>
        </div>
      </Wrapper>
    </motion.div>
  );
};

const Certifications = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Continuous learning</p>
      <h2 className={styles.sectionHeadText}>Certifications.</h2>
    </motion.div>

    <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {certifications.map((cert, index) => (
        <CertificationCard key={cert.name} index={index} {...cert} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Certifications, 'certifications');
