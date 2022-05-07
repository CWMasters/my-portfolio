import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  // setting main page to display 'About' component
  const [currentPage, setCurrentPage] = useState('About');


  return (
    <div className="App">
      <header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
        <main>
          <Header></Header>
         
          <About></About>
          <Contact></Contact>
          <Footer></Footer>
          
        </main>
        

        
        
      
    </div>
  );
}

export default App;
