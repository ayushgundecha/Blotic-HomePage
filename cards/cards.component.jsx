import { useState } from 'react';
import logo1 from '../../Assets/card1.svg';

const Cards = () => {
  const [cards] = useState([
    {
      id: 1,
      title: 'Education-1',
      text: 'Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. We empower students to host workshops at their universities, and build their network while cultivating communities and creating career opportunities',
    },
    {
      id: 2,
      title: 'Education-2',
      text: 'Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. We empower students to host workshops at their universities, and build their network while cultivating communities and creating career opportunities',
    },
    {
      id: 3,
      title: 'Education-3',
      text: 'Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. We empower students to host workshops at their universities, and build their network while cultivating communities and creating career opportunities',
    },
    {
      id: 4,
      title: 'Education-4',
      text: 'Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. We empower students to host workshops at their universities, and build their network while cultivating communities and creating career opportunities',
    },
  ]);

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="flex flex-wrap justify-center mt-12 lg:mt-0 lg:w-1/2">
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            className="max-w-xs w-full overflow-hidden shadow-md m-1 mb-6 rounded-3xl bg-gray-50"
          >
            <img src={logo1} className="w-1/2 mx-auto mt-6 mb-4" alt="logo" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 h-20 overflow-hidden">
                {showFullText ? card.text : `${card.text.slice(0, 100)}...`}
              </p>
              {card.text.length > 100 && (
                <button
                  className="text-blue-300 hover:text-blue-500"
                  onClick={toggleShowFullText}
                >
                  {showFullText ? 'Read less' : 'Read more'}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
