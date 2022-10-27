import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Manage from './components/Manage/Manage';
import Notfound from './components/Notfound/Notfound';
import ProductDetails from './components/Productdetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route exact path='/' element={<Shop></Shop>}></Route>
          <Route path='/Shop' element={<Shop></Shop>}></Route>
          <Route path='/Review' element={<Review></Review>}></Route>
          <Route path='/Manage' element={<Manage></Manage>}></Route>
          <Route path='/product/:productkey' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
