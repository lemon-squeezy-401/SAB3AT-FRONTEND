import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';

function Footer() {
  return (
    <section id='footer' className='footer-body'>
      <div className='footer-container'>
        <div className='row text-center text-xs-center text-sm-left text-md-left'>

          <div className='col-xs-12 col-sm-4 col-md-4'>
            <h5>Quick links</h5>
            <ul className='list-unstyled quick-links'>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation'></i>Home</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation'></i>About</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation1'></i>FAQ</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation2'></i>Get Started</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right  identation'></i>Videos</a></li>
            </ul>
          </div>

          <div className='col-xs-12 col-sm-4 col-md-4 myColor'>
            <h5 className='footer-h5'>About Us</h5>
            <ul className='list-unstyled quick-links '>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation1 '></i>Vision</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation'></i>Misssion</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation1'></i>Goals</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation1'></i>Plans</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation-s'></i>strategies</a></li>
            </ul>
          </div>

          <div className='col-xs-12 col-sm-4 col-md-4'>
            <h5>Contact US</h5>
            <ul className='list-unstyled quick-links'>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation'></i>Phone</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation1'></i>Fax</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation'></i>Email</a></li>
              <li><a href='https://www.fiverr.com/share/qb8D02'><i className='fa fa-angle-double-right identation2'></i>Facebook</a></li>
              <li><a href='https://wwwe.sunlimetech.com' title='Design and developed by'><i className='fa fa-angle-double-right identation'></i>Help</a></li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12   '>
            <ul className='list-unstyled list-inline social text-center'>
              <li className='list-inline-item'><a href={'https://www.fiverr.com/share/qb8D02'}><i className='fa fa-facebook'></i></a></li>
              <li className='list-inline-item'><a href={'https://www.fiverr.com/share/qb8D02'}><i className='fa fa-twitter'></i></a></li>
              <li className='list-inline-item'><a href={'https://www.fiverr.com/share/qb8D02'}><i className='fa fa-instagram'></i></a></li>
              <li className='list-inline-item'><a href={'https://www.fiverr.com/share/qb8D02'}><i className='fa fa-google-plus'></i></a></li>
              <li className='list-inline-item'><a href={'https://www.fiverr.com/share/qb8D02'} target='_blank' rel="noreferrer"><i className='fa fa-envelope'></i></a></li>
            </ul>
          </div>
          <hr />
        </div>

        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12   mt-sm-1 text-center '>
            {/* <p><u><a href='https://www.nationaltransaction.com/'>National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p> */}
            <p className='h6'>© All right Reversed.<a className=' ml-2' href='https://www.sunlimetech.com' target='_blank' rel="noreferrer">Sab3aTeam</a></p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Footer;
