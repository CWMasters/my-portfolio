import React from 'react';

function Nav(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav>
            <div className='pages-tab'>
               
            <div className='nav-btn1'>
                <button className='nav-btn'>
                  <a className={currentPage === 'about' ? 'navActive' : ''}>
                    <span onClick={() => setCurrentPage('About')}>About Me</span>
                  </a>
                </button>
            </div>

            <div className='nav-btn2'>
                <button className='nav-btn'>
                  <a className={currentPage === 'portfolio' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
                  </a>
                </button>
            </div>

            <div className='nav-btn3'>
                <button className='nav-btn'>
                  <a className={currentPage === 'contact' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Contact')}>Contact</span>
                  </a>
                </button>
            </div>

            <div className='nav-btn4'>
                <button className='nav-btn'>
                  <a className={currentPage === 'resume' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Resume')}>Resume</span>
                  </a>
                </button>
            </div>

                
            </div>
        </nav>
    )

}
    

export default Nav;