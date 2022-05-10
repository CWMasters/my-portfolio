import React, { useState } from 'react';
import Nav from './Nav';

function Header(props) {
    const { currentPage, setCurrentPage } = props;
        
    
return (
    <header>
       <div className='flex-row name-header'>
           <h1>Chris Masters</h1>
       </div> 
       <div className='navigation'>
           <Nav
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
           ></Nav>
       </div>
    </header>
  );
}


export default Header;