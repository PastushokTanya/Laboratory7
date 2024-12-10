import React from 'react';
import GoodsCard from './GoodsCard';

function Gallery() {
  const products = [
    { image: 'https://i.pinimg.com/736x/35/2e/dc/352edc664a54717f5c3bd3dfdb0c20d5.jpg', name: 'Mushrooms', price: 10 },
    { image: 'https://i.pinimg.com/736x/08/11/54/081154068deb3b64b4ea5cdd272e2212.jpg', name: 'Spaghetti', price: 15 },
    { image: 'https://i.pinimg.com/736x/70/a4/85/70a485cf52348700ee4a56d176a71b91.jpg', name: 'Strawberry', price: 20 },
    { image: 'https://i.pinimg.com/736x/ed/12/55/ed1255df8654fe8da016fff4eb0b9ba9.jpg', name: 'Peaches', price: 25 },
    { image: 'https://i.pinimg.com/474x/39/ff/29/39ff290df9d7a42cda501e213cd5bd03.jpg', name: 'Bread', price: 30 },
    { image: 'https://i.pinimg.com/736x/1a/60/33/1a603346f88f850d52999dbcd78e8f73.jpg', name: 'Cheese', price: 35 },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      {products.map((product, index) => (
        <GoodsCard key={index} {...product} />
      ))}
    </div>
  );
}

export default Gallery;
