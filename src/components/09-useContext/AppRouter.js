import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { NotFound } from './NotFound';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div >
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/about" element={<AboutScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />  
          <Route path="*" element={<NotFound/>} />                  
        </Routes>
        </div>
    </BrowserRouter>
  );
};

