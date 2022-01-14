const Modal = () => {
    function closeModal() {
      document.getElementById("myForm").style.display = "none";
    }
  
    return (
      <div id="myForm" className="form-content">
        <div className="signbtn">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="container">
            <form action="action_page.php">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
  
              <label for="subject">Message</label>
              <textarea className="textarea" id="subject" name="subject" placeholder="Write something..."/>
  
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;