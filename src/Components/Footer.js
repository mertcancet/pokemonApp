import React from 'react';
import { Container } from 'react-bootstrap';
const Footer = () => {
  return (
    <div className='navbar-bg footer' style={{ height: '5vh' }}>
      <Container>
        <div className='d-flex justify-content-end'>
          <div className='pt-2'>
            <p className='text-white'>
              <i className='fab fa-github mr-1' />
              GitHub:
              <a
                className='nav-link active d-inline '
                href={'https://github.com/mertcancet/pokemonApp'}
              >
                mertcanCet
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
