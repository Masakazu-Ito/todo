import React from 'react';
import Register from './component/Register'
import Reducer from './Reducer'


const MyContext = React.createContext();

function App() {
  return (
    <MyContext.Provider value={Reducer}>
      <Register />
    </MyContext.Provider>
  );
}

export default App;
