import { useState } from 'react';
import logo1 from '../../Assets/card1.svg';
import  Icon  from '../../Assets/arrow-right (1).png';

const Cards = () => {
  const [cards] = useState([
    {
      id: 1,
      title: 'Education-1',
      text: 'Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. ',
      link: '',
    },
    {
      id: 2,
      title: 'Education-2',
      text: 'Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. ',
      link: '',
    },
    {
      id: 3,
      title: 'Education-3',
      text: 'Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. ',
      link: '',
    },
    {
      id: 4,
      title: 'Education-4',
      text: 'Our vision is that anyone, everywhere in the world, will be able to use blockchain as a vehicle to create wealth for themselves andWe serve our students by providing an abundance of resources such as Crypto Taxes, Intro to Virtual Land, DeFi and many more. ',
      link: '',
    },
  ]);

  

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
            <a href={card.link} className="flex items-center text-lg font-bold mb-2">
            <p>{card.title}</p>
            <img src={Icon} className="ml-2 w-6 h-6 " alt="logo" />
          </a>
              <p className="text-gray-600  overflow-hidden">
                {card.text }
              </p>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
