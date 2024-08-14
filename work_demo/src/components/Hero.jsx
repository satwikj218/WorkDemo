import styles from '../style';
import { aihand } from '../assets';
import { heroText } from '../constants';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {heroText.map((card) => (
          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>
              <span className='text-gradient1'>{card.mainTitle}</span> {" "} {card.title} <br className='sm:block hidden'/> {" "} 
            </h1>
          </div>  
        ))}
        {/* <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>
            <span className='text-gradient1'>AI Attorney</span> {" "} for all your legal questions <br className='sm:block hidden'/> {" "} 
          </h1>
        </div> */}

        {heroText.map((text) => (
          <p className={`${styles.paragraph} max-w-[470px] text-black`}>{text.titleText}</p>  
        ))}

        {/* <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
          Lexis AI Attorney streamlines legal consultation with AI-powered insights and expert validation for assured compliance and informed decision-making.
        </p> */}
        <Link to='/login' type="submit" className={`mt-10 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none ${styles}`}>
          Try Visa Vanguard for Free
        </Link>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={aihand} alt="secondCard" className='w-[80%] h-[75%] relative z-[5] rounded' />
      </div>
    </section>
  )
}

export default Hero