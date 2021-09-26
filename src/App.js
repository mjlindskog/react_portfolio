import React, { useState } from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
// import Footer from './components/footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Home') {
      return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};

export default App;

