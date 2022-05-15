import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {
  // setting main page to display 'About' component
  const [currentPage, setCurrentPage] = useState('About');


  return (
    <div className="App">
     
        <main>
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
          {currentPage === 'About' ? <About></About> : ''}
          {currentPage === 'Portfolio' ? <Portfolio></Portfolio> : ''}
          {currentPage === 'Contact' ? <Contact></Contact> : ''}
          {currentPage === 'Resume' ? <Resume></Resume> : ''}
          <Footer></Footer>
        </main>
      
    </div>
  );
}

export default App;
