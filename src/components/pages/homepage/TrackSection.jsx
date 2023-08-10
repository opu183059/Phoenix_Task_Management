import React from 'react';

const TrackSection = () => {
  const cardsData = [
    { image: 'image1.jpg', title: 'Card Title 1' },
    { image: 'image2.jpg', title: 'Card Title 2' },
    { image: 'image3.jpg', title: 'Card Title 3' },
    { image: 'image4.jpg', title: 'Card Title 4' },
  ];

  return (
    <div className="space-y-6">
      {cardsData.map((card, index) => (
        <div className="flex items-center p-4 border space-x-4" key={index}>
          <img src={card.image} alt={`Image ${index + 1}`} className="max-w-20" />
          <div className="font-bold">{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TrackSection;
