import styles from "../style";
import {SecondCard, FirstCard, Clients, CTA, Footer, Navbar, Testimonials, Hero, Chat} from "../components";

const Home = () => {
  return (
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

      <h2 className={`${styles.heading2} ${styles.flexCenter} pb-[20px] mt-[20px]`}>Experience AI Attorney in action</h2>
      <p className="text-center text-[20px]">Chat directly. Ask any legal-related question and see real-time AI-driven responses.</p>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Chat />
          <p className="text-center text-gray-400 mb-10"><b>Please Note!</b> This tool is not intended to be a substitute for professional medical advice,<br /> diagnosis, or treatment. Always consult a professional before taking any action.</p>
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
          {/* <Login />
          <Logout /> */}
          {/* <SignInForm /> */}
        </div>
      </div>
    </div>
  );
}

export default Home