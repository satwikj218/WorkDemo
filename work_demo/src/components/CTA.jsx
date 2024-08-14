import styles from "../style";
import Button from "./Button";
import { Link } from "react-router-dom";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-center text-white`}>You’re only one click away <br />from a life-changing journey</h2>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Link to='/login' type="submit" className={`py-4 px-6 bg-orange-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles} rounded-[10px] mt-10`}>
        Try Visa Vanguard for free
      </Link>
    </div>
    </div>

    
  </section>
);

export default CTA;