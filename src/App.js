import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Signin from './Signin';
import ForgotP from './Forgotp';
import Add from './Add';



function App() {
  return (
    <Router>
      <Routes>
        <Route index path=""  element={<Login/>} />
        <Route  path="Signin" element={<Signin />} />
        <Route  path="ForgotP" element={<ForgotP />} />
        <Route  path="Add" element={<Add />} />

      </Routes>

    </Router>

  );
}

export default App;
