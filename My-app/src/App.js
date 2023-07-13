import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import About from './About';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
