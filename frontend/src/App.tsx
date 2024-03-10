import React from 'react';
import './App.css';

import PATH from './path';
import HomePage from './pages/HomePage/HomePage';
import SummarizePage from './pages/SummarizePage/SummarizePage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path={PATH.HOME_PAGE} element={<HomePage />} />
        <Route path={PATH.SUMMARIZE_PAGE} element={<SummarizePage />} />
      </Routes>
    </>
  )
}

export default App;
