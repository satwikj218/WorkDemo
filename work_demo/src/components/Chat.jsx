import { chatbot, rightarrow } from "../assets";
import { Link } from 'react-router-dom';

const clientId = "342662024476-dd9s96aij7rj7f46sbd86jq5c2rpldag.apps.googleusercontent.com";

function SignInForm(){
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    }

    return (
        <div className='bg-gray-100 w-[75%] items-center px-10 py-5 ml-[13%] mt-10 my-10 border-2 rounded-3xl border-gray-200'>
            <img src={chatbot} alt="logo" className="mb-5 w-[25%] h-[20%] ml-[35%]"/>
            <p className='font-medium txt-lg text-gray-500 mt-4 text-center'>
                I'm here to support with any legal-related questions you may have.
            </p>
            <h3 className='text-xl mt-2 font-medium text-center'>How can I help you?</h3>
            <div className='flex justify-center item-center mt-[20%]'>
                <Link to='/login' className='text-green text-base font font-medium ml-2'>Sign-up</Link>
                <p className='ml-2 font-medium text-base'>to continue with AI Attorney</p>
            </div>
            <div className='flex flex-row mt-5'>
                <Link to='/login' className="flex flex-row font-semibold border-2 border-green text-green pl-4 py-3 rounded w-[42%] ml-[8%]"><p className="mr-[50%]">I have more questions</p> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane-top" class="svg-inline--fa fa-paper-plane-top pt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="green" width="14px" height="20px"><path fill="currentColor" d="M49.9 27.8C15.1 12.7-19.2 50.1-1.2 83.5L68.1 212.2c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L-1.2 428.5c-18 33.4 16.3 70.8 51.1 55.7L491.8 292.7c32.1-13.9 32.1-59.5 0-73.4L49.9 27.8z"></path></svg></Link>
                <Link to='/login' className="flex flex-row font-semibold border-2 border-green text-green pr-1 pl-4 py-3 rounded w-[42%] ml-[1%]"><p className="mr-[50%]">What should I do next?</p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane-top" class="svg-inline--fa fa-paper-plane-top pt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="green" width="14px" height="20px"><path fill="currentColor" d="M49.9 27.8C15.1 12.7-19.2 50.1-1.2 83.5L68.1 212.2c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L-1.2 428.5c-18 33.4 16.3 70.8 51.1 55.7L491.8 292.7c32.1-13.9 32.1-59.5 0-73.4L49.9 27.8z"></path></svg></Link>
            </div>
            <div className='flex flex-row mt-5'>
                <Link to='/login' className="flex flex-row font-semibold border-2 border-green text-green pl-4 py-3 rounded w-[42%] ml-[8%]"><p className="mr-[43.5%]">Can you analyze my case?</p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane-top" class="svg-inline--fa fa-paper-plane-top pt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="green" width="14px" height="20px"><path fill="currentColor" d="M49.9 27.8C15.1 12.7-19.2 50.1-1.2 83.5L68.1 212.2c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L-1.2 428.5c-18 33.4 16.3 70.8 51.1 55.7L491.8 292.7c32.1-13.9 32.1-59.5 0-73.4L49.9 27.8z"></path></svg></Link>
                <Link to='/login' className="flex flex-row font-semibold border-2 border-green text-green pr-1 pl-4 py-3 rounded w-[42%] ml-[1%]"><p className="mr-[32.5%]">I need advice from a top attorney</p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane-top" class="svg-inline--fa fa-paper-plane-top pt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="green" width="14px" height="20px"><path fill="currentColor" d="M49.9 27.8C15.1 12.7-19.2 50.1-1.2 83.5L68.1 212.2c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L-1.2 428.5c-18 33.4 16.3 70.8 51.1 55.7L491.8 292.7c32.1-13.9 32.1-59.5 0-73.4L49.9 27.8z"></path></svg></Link>
            </div>
        </div>
    )
}

export default SignInForm;