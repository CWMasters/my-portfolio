import React, { useState } from 'react';
import About from './components/About';

function App() {
  // setting main page to display 'About info'
  const [currentPage, setCurrentPage] = useState('About');


  return (
    <div className="App">
      <header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      
    </div>
  );
}

export default App;
