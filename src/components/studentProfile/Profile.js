import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="text-white py-4 mb-4" >
      <div className="container">
        {/* Top Section with "Profile", Line, and Date */}
        <div className="text-left mb-4">
          <h2>Profile</h2>
          <div className="border-bottom" style={{ borderColor: '#ffc107', width: '100px'}}></div>
          <p className="mt-2">6th June 2023</p>
        </div>

        {/* Profile Picture, Name, and Save Button */}
        <div className="car d-flex align-items-center justify-content-between py-2">
          <div className="d-flex align-items-center">
            <div
              className="profile-pic bg-secondary rounded-circle mx-3"
              style={{ width: '100px', height: '100px' }}
            ></div>
            <div className="ms-1">
              <h3>Balqees Hamdi Sabir</h3>
              <p>Computer Science, International Islamic University</p>
              <div className="mt-2">
                <Link href="#"><i className="fa-regular fa-pen-to-square icon" style={{cursor: 'pointer'}}></i></Link>
              </div>
            </div>
          </div>
          <button className="btn me-3" style={{ color: 'white', backgroundColor: '#ffc107' }}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
