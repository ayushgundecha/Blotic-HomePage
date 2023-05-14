import Cards from "../cards/cards.component";

const Home2=() => {



  
    return(


      <div className="bg-gradient-to-r from-white to-blue-100 pb-24 lg:flex lg:flex-col lg:items-center lg:justify-center ml-10 mr-10 justify-around ">
      <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl leading-16 text-center py-7 pb-14 mb-8 md:mb-20 md:pb-10 ">
        WHO WE ARE
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:justify-start pt-8 lg:pt-24 px-6 lg:px-0">
          <p className="font-normal leading-8 md:leading-10 lg:text-2xl text-center lg:text-left mb-8 lg:mb-12">
            "BLOTIC" is an early-stage Web3 startup that serves as a gateway for all newbies to explore Web3 and build their future there. At BLOTIC, we are creating a pan-Indian community of blockchain enthusiasts.
          </p>
          <div class="text-center lg:text-left">
            <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 uppercase tracking-widest font-semibold text-lg rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              EXPLORE HERE
            </button>
          </div>
        </div>
        
        <Cards/>
        
      
        
        </div>
        </div>
    );
}

export default Home2;