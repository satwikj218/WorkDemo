import styles from "./style";
import {SecondCard, FirstCard, Clients, CTA, Footer, Navbar, Testimonials, Hero} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <h2 className={`${styles.heading2} ${styles.flexCenter} pb-[20px] mt-[20px]`}>Transforming Legal Advices with AI Attorney</h2>
        <FirstCard />
        <hr className='border: bg-dimWhite ml-[100px] w-[90%]'/>
        <SecondCard />
        <hr className='border: bg-dimWhite ml-[100px] w-[90%]'/>
        <FirstCard />
        <Clients />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App