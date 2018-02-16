import React from 'react';
import Header from './Header';
import Body from './Body';
function App() {
  return (
    <div>
      <style global jsx>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
      `}</style>
      <Header />
      <Body />
    </div>
  );
}

export default App;
