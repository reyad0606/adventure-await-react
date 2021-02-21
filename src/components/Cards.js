// import React from 'react';
// import CardItem from './CardItem';
// import './Cards.css';

// const Cards = () => {
//   return (
//     <div className='cards'>
//       <h1>Check out this EPIC destinations!</h1>
//       <div className='cards__container'>
//         <div className='cards__wrapper'>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/img-4.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-5.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//           </ul>
//           <ul className='card__items'>
//             <CardItem
//               src='images/img-6.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-7.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-8.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//           </ul>
//           <ul>
//             <CardItem
//               src='images/img-9.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-1.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-2.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-3.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text='
              Meilen Sammeln mit Hotels & Cars'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Umbrella Outpouring, Pedestrian crossing'
              label='Adrenaline'
              path='/services'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Mountain under cloudy blue sky during sunset'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
