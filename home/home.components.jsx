
import { Outlet } from "react-router-dom";
import logo from '../../Assets/Astronaut.svg';
import Button from "../../components/button/button.component";
import Home2 from "../../components/home2/home2.component";
import StatsPage from "../../components/stats/stats.component";
import FeedbackSlider from "../../components/feedbackSlider/feedbackslider.component";

const Home=() => {
    return(
        <div className="bg-gradient-to-r from-white to-blue-100 ">
        <div class="flex flex-col md:flex-row items-center justify-around bg-gradient-to-r from-white to-blue-100 min-h-screen mt-11 mr-4 ml-4 md:m-0 md:ml-9">
  <div class="w-full md:w-3/4 md:pl-12">
    <h1 class="h-52 md:h-auto font-bold mb-6 text-4xl md:text-6xl leading-12 md:leading-20 text-center md:text-left">
      ENTRY GATEWAY FOR ANY <span class="text-blue-500">WEB3 ENTHUSIAST</span>
    </h1>
    <p class="font-normal text-2xl md:text-3xl leading-8 md:leading-12 pb-6 md:pb-12 text-center md:text-left">
      An ecosystem to acquire Web3 knowledge with practical expertise. A way to unlock your quest for blockchain.
    </p>
    <div class="text-center md:text-left">
      <button class="bg-indigo-500 hover:bg-indigo-600  text-white px-8 py-4 uppercase tracking-widest font-semibold text-lg rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        EXPLORE HERE
      </button>
    </div>
  </div>
  <div class="w-full md:w-auto md:ml-6 mt-8 md:mt-0">
    <img src={logo} class="mx-auto md:mx-0" alt="logo" />
  </div>
</div>

      
      
      
      
      
      
      
      

       <Home2/>
       <StatsPage/>
       
       <FeedbackSlider/>
       <div className=" h-48 text-white bg-black"> Footer</div>
      
       
       

      


        <Outlet/>
        </div>
       
        
        );
};

export default Home;

