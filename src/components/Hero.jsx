import { motion } from 'framer-motion';

import { styles } from '../styles';
import { profile } from '../assets';

// Keep these numbers honest — update them as they change.
const stats = [
  { value: '~2', label: 'Years Experience', href: '#work' },
  { value: '6+', label: 'Projects Built', href: '#projects' },
  { value: '5+', label: 'Certifications', href: '#certifications' },
  { value: '15+', label: 'Technologies', href: '#tech' },
];

// Each line of the code card: [key, value, kind]
const profileLines = [
  ['role', '"Software Engineer"', 'string'],
  ['company', '"nCircle Tech"', 'string'],
  ['location', '"Pune, India"', 'string'],
  ['stack', ['TypeScript', 'React', 'Node', 'MongoDB'], 'array'],
  ['openToWork', 'true', 'boolean'],
];

const Str = ({ children }) => <span className='text-[#c3e88d]'>{children}</span>;
const Punct = ({ children }) => <span className='text-white'>{children}</span>;

const CodeCard = () => (
  <div className='w-full max-w-md rounded-xl bg-tertiary/80 border border-[#915eff]/30 shadow-card backdrop-blur-sm overflow-hidden'>
    <div className='flex items-center gap-2 px-4 py-3 bg-black-200/80 border-b border-white/5'>
      <span className='w-3 h-3 rounded-full bg-[#ff5f56]' />
      <span className='w-3 h-3 rounded-full bg-[#ffbd2e]' />
      <span className='w-3 h-3 rounded-full bg-[#27c93f]' />
      <span className='ml-3 text-secondary text-xs font-mono'>pranav.ts</span>
    </div>
    <pre className='p-4 sm:p-5 text-[12px] sm:text-[14px] leading-6 font-mono [&_*]:font-mono overflow-x-auto'>
      <code>
        <span className='text-[#c792ea]'>const</span>{' '}
        <span className='text-[#82aaff]'>pranav</span>{' '}
        <Punct>= {'{'}</Punct>{'\n'}
        {profileLines.map(([key, value, kind], i) => (
          <span key={key}>
            {'  '}<span className='text-[#f07178]'>{key}</span>
            <Punct>: </Punct>
            {kind === 'array' ? (
              <>
                <Punct>[</Punct>
                {value.map((item, j) => (
                  <span key={item}>
                    <Str>&quot;{item}&quot;</Str>
                    {j < value.length - 1 && <Punct>, </Punct>}
                  </span>
                ))}
                <Punct>]</Punct>
              </>
            ) : kind === 'boolean' ? (
              <span className='text-[#f78c6c]'>{value}</span>
            ) : (
              <Str>{value}</Str>
            )}
            {i < profileLines.length - 1 && <Punct>,</Punct>}
            {'\n'}
          </span>
        ))}
        <Punct>{'}'};</Punct>
      </code>
    </pre>
  </div>
);

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen mx-auto flex flex-col'>
      <div className={`${styles.paddingX} max-w-7xl w-full mx-auto pt-[120px] flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-12`}>
        {/* Left: intro + code card */}
        <div className='flex flex-row items-start gap-5 w-full lg:w-3/5'>
          <div className='hidden sm:flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div className='flex flex-col gap-8 w-full'>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text-[#915eff]'>Pranav</span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>Software Engineer building scalable full-stack web apps</p>
            </div>
            <CodeCard />
          </div>
        </div>

        {/* Right: profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='relative flex-shrink-0 lg:mt-10'
        >
          <div className='absolute -inset-4 rounded-full bg-[#915eff] opacity-40 blur-2xl' />
          <div className='relative p-1 rounded-full bg-gradient-to-br from-[#915eff] to-[#4f2cc9]'>
            <img
              src={profile}
              alt='Pranav Pise'
              className='w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary'
            />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className={`${styles.paddingX} max-w-7xl w-full mx-auto mt-12 pb-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6`}>
        {stats.map((stat) => (
          <a
            key={stat.label}
            href={stat.href}
            className='group rounded-xl bg-tertiary/80 border border-[#915eff]/20 py-4 sm:py-6 px-2 text-center shadow-card transition duration-300 hover:border-[#915eff] hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_#915eff]'
          >
            <p className='text-[#915eff] font-black text-[24px] sm:text-[40px] leading-none'>{stat.value}</p>
            <p className='text-secondary group-hover:text-white transition-colors text-[11px] sm:text-[14px] mt-2 uppercase tracking-wider'>{stat.label}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Hero
