import { aihand } from "../assets";
import styles, { layout } from "../style";

const FirstCard = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Personalize your <br className="sm:block hidden" /> Legal Strategy
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Complete your legal profile to unlock a customized AI Attorney experience, tailored to your legal requirements.
      </p>

      <ul className='list-outside list-square ml-6'>
          <li className="text-green-500">
            <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1 mt-10">Chat with your Personal AI Attorney</h4>
          </li>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Chat with an AI that knows your legal history and provides advice and recommendations based on your personal legal data.</p>
          
          <li className="text-green-500">
            <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1 mt-10">Uncover Your Legal Position</h4>
          </li>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Assess your legal standing through an analysis of your legal profile. Obtain valuable insights with comprehensive explanations and guidance.</p>
          
          <li className="text-green-500">
            <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1 mt-10">Receive a Tailored Legal Action Plan</h4>
          </li>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Based on your legal data and identified needs, receive a customized action plan suggesting essential steps and legal measures for effective legal management.</p>
      </ul>

      <button type="button" className={`py-4 px-6 bg-green-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles} rounded-[10px] mt-10`}>
        Start Journey
      </button>
    </div>

    <div className={layout.sectionImg}>
      <img src={aihand} alt="secondCard" className="w-[80%] h-[50%]rounded"  />
    </div>
  </section>
);

export default FirstCard;