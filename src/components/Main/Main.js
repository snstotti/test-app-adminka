import React from 'react';

const Main =({login})=> {
  return (
  <div className='card'>
      <h2 className='card-body'>Привет {login || 'Гость'}</h2>
  </div>
  );
}


export default Main;
