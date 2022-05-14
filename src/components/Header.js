import React, { useState } from 'react';
import Nav from './Nav';

function Header(props) {
    const { currentPage, setCurrentPage } = props;
        
    
return (
    <header className='container'>
                {/* className='flex-row justify-space-between' */}
       <div className='name-header'>
           <h1>Chris <span className='masters-header'>Masters</span></h1>
           {/* <span className='header-sub'>Web Developer</span> */}
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