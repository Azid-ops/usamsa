import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import MergeSort from './Website/Algorithms/Sorting/MergeSort/Components/sorting';
import Aux from './Website/Auxiliary/Auxiliary';
import Home from './Website/Home/Components/home';

const App = () => {
  return (
    <Aux>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/sorting" element={<MergeSort />}/>
        </Routes>
      </Router>
    </Aux>
  );
}

export default App;
