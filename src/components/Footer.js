import React from 'react';


function Footer() {
    return (
        <section className='footer'>
            {/* from professional portfolio */}
            <address>
              <a href="tel:623.213.6435"><img src={require('../assets/images/phone.png')} /></a>
              <a href="mailto:chrismasters_326@outlook.com"><img src={require('../assets/images/email.png')} /></a>
              <a href="https://www.linkedin.com/in/chris-masters-5006b366/"><img src={require('../assets/images/linkedin.png')} /></a>
              <a href="https://github.com/CWMasters"><img src={require('../assets/images/github.png')} /></a>
            </address>
        </section>
    )
};

export default Footer;