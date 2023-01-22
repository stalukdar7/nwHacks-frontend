import React from 'react';
import { Routes, Route } from 'react-router-dom';

import JobPage from './JobPage';
import SignUp from './SignUp';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<JobPage />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
  );
}

export default Main;