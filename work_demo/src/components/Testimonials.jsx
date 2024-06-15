import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section id='client' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-2 relative z-[1] text-center">
      <h1 className={styles.heading2}>Hear From Our Users</h1>
    </div>
    <div className="w-full ml-[70%]">
        <p className={`${styles.paragraph} text-center max-w-[450px]`}>Discover how our AI Attorney has positively impacted lives.</p>
      </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials