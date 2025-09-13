import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NotedetailPage from './pages/NotedetailPage.jsx'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button onClick={()=>toast.error("billa nki beh  ")} >Click me </button>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<CreatePage/>} />
      <Route path="/note/:id" element={<NotedetailPage/>} />
      </Routes>
    </div>
  );
};

export default App
