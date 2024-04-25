import { animals } from './animals';

import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {

const container = document.getElementById('root');
const root = createRoot(container);

const title = '';
const background = <img 
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'
/>;
const animalFacts = (
  title === '' 
  ? 'Click an animal for a fun fact' 
  : (
    <div> 
       {background}
      <h1>{animals.facts}</h1>
    </div>
    )
);

root.render(animalFacts);

  }

  export default App;

