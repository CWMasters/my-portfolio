import React from 'react';


function Footer() {
    return (
        <section className='footer'>
            {/* from professional portfolio */}
            <address>

            <div className='phone1'>
              <a href="tel:623.213.6435"><img src={require('../assets/images/phone1.png')} /></a>
            </div>

            <div className='mail1'>
              <a href="mailto:chrismasters_326@outlook.com"><img src={require('../assets/images/email.png')} /></a>
            </div>

            <div className='linkedin1'>
              <a href="https://www.linkedin.com/in/chris-masters-5006b366/"><img src={require('../assets/images/linkedin1.png')} /></a>
            </div>

            <div className='github1'>
              <a href="https://github.com/CWMasters"><img src={require('../assets/images/github2.png')} /></a>
            </div>

            </address>
        </section>
    )
};

export default Footer;