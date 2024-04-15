import React from 'react';
import './App.css';

import PATH from './path';
import HomePage from './pages/HomePage/HomePage';
import SummarizePage from './pages/SummarizePage/SummarizePage';
import HelpPage from './pages/HelpPage/HelpPage';
import { Route, Routes } from "react-router-dom"
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <>
      <Routes>
        <Route path={PATH.HOME_PAGE} element={<HomePage />} />
        <Route path={`${PATH.SUMMARIZE_PAGE}/:id`} element={<SummarizePage />} />
        <Route path={PATH.HELP_PAGE} element={<HelpPage />} />
        <Route path={PATH.SIGN_IN_PAGE} element={<SignInPage />} />
        <Route path={PATH.SIGN_UP_PAGE} element={< SignUpPage />} />
      </Routes>
    </>
  )
}

export default App;
