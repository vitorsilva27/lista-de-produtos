import React, { } from 'react';
import Card from './components/Card';

import db from './api/db.json'



const App = () => {

  const promotion = db;
  return (
    <div className="App" style={{
      maxWidth: 800,
      margin: '30px auto',
    }}>
      {promotion.map((item, key) => {
        return (<Card promotion={item} />)
      })}
    </div>
  );
}




export default App;
