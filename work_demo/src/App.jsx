import styles from "./style";
import {SecondCard, FirstCard, Clients, CTA, Footer, Navbar, Testimonials, Hero, SignInForm} from "./components";
// import Login from "./components/login";
// import Logout from "./components/logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";
// import Form from "./components/SignInForm";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./components/Home";

const clientId = "342662024476-dd9s96aij7rj7f46sbd86jq5c2rpldag.apps.googleusercontent.com";

const App = () => {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <SignInForm />
    },
  ]);
  
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load("client:auth2", start);
  });

  return (
    // <div className="bg-primary w-full overflow-hidden">
    //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Navbar />
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Hero />
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <h2 className={`${styles.heading2} ${styles.flexCenter} pb-[20px] mt-[20px]`}>Transforming Legal Advices with AI Attorney</h2>
    //       <FirstCard />
    //       <hr className='border: bg-dimWhite ml-[100px] w-[90%]'/>
    //       <SecondCard />
    //       <hr className='border: bg-dimWhite ml-[100px] w-[90%]'/>
    //       <FirstCard />
    //       <Clients />
    //       <Testimonials />
    //       <CTA />
    //       <Footer />
    //       {/* <Login />
    //       <Logout /> */}
    //       <Form />
    //     </div>
    //   </div>
    // </div>
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}
export default App