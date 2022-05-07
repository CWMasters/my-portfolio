import React, { useState } from 'react';
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
          <About></About>
          <Contact></Contact>
          <Footer></Footer>
          
        </main>
        

        
        
      
    </div>
  );
}

export default App;
