import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NotedetailPage from './pages/NotedetailPage.jsx'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<CreatePage/>} />
      <Route path="/note/:id" element={<NotedetailPage/>} />
      </Routes>
    </div>
  );
};

export default App
