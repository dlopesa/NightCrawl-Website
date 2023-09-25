import React from 'react';

const ColorPalette = () => {
  const colors = [
    { name: 'Gold', color: 'bg-gold' },
    { name: 'Dark Blue', color: 'bg-dark-blue' },
    { name: 'Orange', color: 'bg-orange' },
    { name: 'Soft Green', color: 'bg-soft-green' },
    { name: 'Lilac', color: 'bg-lilac' },
    { name: 'Electric Blue', color: 'bg-electric-blue' },
    { name: 'Saffron Yellow', color: 'bg-saffron-yellow' },
    { name: 'Forest Green', color: 'bg-forest-green' },
    { name: 'Hot Pink', color: 'bg-hot-pink' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {colors.map((color) => (
        <div key={color.name} className={`w-16 h-16 ${color.color} rounded-md`}>
          <p className="text-center text-white mt-2">{color.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
