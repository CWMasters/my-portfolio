import React from 'react';

function Nav(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav>
            <ul className='flex-row pages-tab'>
                <li className={currentPage === 'about' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('About')}>About Me</span>
                </li>

                <li className={currentPage === 'portfolio' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
                </li>

                <li className={currentPage === 'contact' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Contact')}>Contact Me</span>
                </li>

                <li className={currentPage === 'resume' ? 'navActive' : ''}>
                   <span onClick={() => setCurrentPage('Resume')}>Resume</span>
                </li>

                
            </ul>
        </nav>
    )

}
    

export default Nav;