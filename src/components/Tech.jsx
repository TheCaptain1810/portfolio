// import { BallCanvas } from './canvas';
// The loading time for the Balls is very high and it is causing problems on mobile devices so I scratched the idea of using them
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} alt={technology.name} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech");