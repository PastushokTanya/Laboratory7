import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Image />
      <h2>Product Gallery</h2>
      <Gallery />
    </div>
  );
}

export default App;


