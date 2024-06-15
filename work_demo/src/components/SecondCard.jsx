import { aihand } from '../assets'
import styles, { layout } from '../style'

const SecondCard = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={aihand} alt="secondCard" className='w-[50]% h-[50%] relative z-[5]' />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Consult your <br className='sm:block hidden'/> AI Attorney</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Discuss your legal queries, case specifics, and any law-related questions while engaging with your AI Attorney.
      </p>

      <ul className='list-outside list-square ml-6'>
          <li className="text-green-500">
            <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1 mt-10">Assess Legal Scenarios</h4>
          </li>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Obtain estimated probabilities of legal outcomes that assist you in comprehending potential case directions.</p>
          
          <li className="text-green-500">
            <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1 mt-10">Review Legal Strategies</h4>
          </li>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Gain insights into potential legal strategies and other judicial recommendations to deliberate with your legal counsel..</p>
          
          <li className="text-green-500">
            <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1 mt-10">Create Legal Briefs</h4>
          </li>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Produce comprehensive briefs from AI consultations to bolster discussions with your legal team..</p>
      </ul>

      <button type="button" className={`py-4 px-6 bg-green-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles} rounded-[10px] mt-10`}>
        Start Chat
      </button>
    </div>
  </section>
)

export default SecondCard