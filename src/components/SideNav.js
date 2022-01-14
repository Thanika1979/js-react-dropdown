import React from 'react'
import ('./SideNav')



const SideNav = () => {
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("myDropdown");
    
  }
  return (
    <div className="dropdown">
      <div id="myDropdown" className="dropdown-content">
        <a href="javascript:void(0)" className="dropbtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">Feedback</a>
      </div>
    </div>
  );
};

export default SideNav;
