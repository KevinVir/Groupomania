
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthGuard from './components/AuthGuard';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import PostDetails from './pages/PostDetails';
import Posts from './pages/Posts';
import Error from './pages/Error';

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/post" element={
          <AuthGuard>
            <Posts />
          </AuthGuard>
        } />
        <Route path="/post/:id" element={
          <AuthGuard>
            <PostDetails />
          </AuthGuard>
        } />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;