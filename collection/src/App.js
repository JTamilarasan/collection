import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Amountlist from './components/Amountlist';

import Edit from './components/Edit';


function App() {
  return (
    <>
      <Routes>
        <Route path='/collection' exact element={<Home />} />
        <Route path='/create' exact element={<Add />} />
        <Route path='/amountlist' exact element={<Amountlist />} />

        <Route path='/edit' exact element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
