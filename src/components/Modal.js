import React from "react";

function Modal({ closeModal }) {
  return (
    
    <div className="modal-bg">
      <div className="modal">
        <div className="modalTitle">
          <h2>Sign In</h2>
        </div>
      <form >
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="subject">Message</label>
        <textarea className="textarea" id="subject" name="subject" placeholder="Write something..."/>
      </form>
      <input className="submitbtn" onClick={() => closeModal(false)}type="submit" value="Submit" />
      </div>
      </div>
    
    
  );
}
export default Modal;

  
