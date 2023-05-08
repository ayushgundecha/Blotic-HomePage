import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Pagination]);

const feedbacks = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Bob Smith",
    feedback:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const FeedbackSlider = () => {
  return (
    <Swiper
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      className="my-16"
    >
      {feedbacks.map((feedback) => (
        <SwiperSlide key={feedback.id}>
       
        <div className="max-w-lg mx-auto pb-20">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 transform hover:scale-105 transition duration-500">
          <div className="px-6 py-8 sm:p-10">
            <div className="flex items-center">
              <img
                src={feedback.avatar}
                alt="Avatar"
                className="h-16 w-16 rounded-full mr-4 border-4 border-white shadow-md"
              />
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                  {feedback.name}
                </h4>
                <p className="text-gray-600 text-lg">{feedback.feedback}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      

      
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedbackSlider;
