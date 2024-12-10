import React from 'react';

function GoodsCard({ image, name, price }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', textAlign: 'center' }}>
      <img src={image} alt={name} width="150" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

export default GoodsCard;
