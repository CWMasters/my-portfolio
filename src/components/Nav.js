import React from 'react';

function Nav(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav>
            <div className='pages-tab'>
               
            <div className='nav-tab1'>
                <div className='nav-tab'>
                  <a className={currentPage === 'about' ? 'navActive' : ''}>
                    <span onClick={() => setCurrentPage('About')}>About Me</span>
                  </a>
                </div>
            </div>

            <div className='nav-tab2'>
                <div className='nav-tab'>
                  <a className={currentPage === 'portfolio' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
                  </a>
                </div>
            </div>

            <div className='nav-tab3'>
                <div className='nav-tab'>
                  <a className={currentPage === 'contact' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Contact')}>Contact</span>
                  </a>
                </div>
            </div>

            <div className='nav-tab4'>
                <div className='nav-tab'>
                  <a className={currentPage === 'resume' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Resume')}>Resume</span>
                  </a>
                </div>
            </div>

                
            </div>
        </nav>
    )

}
    

export default Nav;