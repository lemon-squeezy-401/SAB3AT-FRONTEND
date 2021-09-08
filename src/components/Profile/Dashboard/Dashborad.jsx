import React from 'react';
import './dashboard.css';

import locationIcon from '../../../assets/location.svg';

function Dashborad() {
  return (
    <div>
      <div className="profile-info">
        <h1 className = 'profile-info-h1'>username</h1>
        <div className="profile-ul">
          <ul className = 'profile-info-ul'>
            <h5><img src={locationIcon} alt="location" /> Conutry</h5>
            <li className = 'profile-info-li'>Jordan</li>
          </ul>
          <ul className = 'profile-info-ul'>
            <h5>No.products</h5>
            <li className = 'profile-info-li'>3 products</li>
          </ul>
          <ul className = 'profile-info-ul'>
            <h5>No.services</h5>
            <li className = 'profile-info-li'>3 services</li>
          </ul>
          <ul className = 'profile-info-ul'>
            <h5>No.customers</h5>
            <li className = 'profile-info-li'>50 customer</li>
          </ul>
          <ul className = 'profile-info-ul'>
            <h5>Pending orders</h5>
            <li className = 'profile-info-li'>2 pending</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashborad;
