import React from 'react'
import { Routes, Route } from "react-router-dom";
import TooltipText from './components/TooltipText';
import Favourites from './components/Favourites';
import App from './App';

function MainApp() {
    return (
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/MostPopular' element={<Favourites/>} />
        </Routes>
    )
}

export default MainApp