const ModalBtn = () => {
    
    function openModal() {
      document.getElementById("myForm");
    }
  
    
    window.onclick = function (event) {
      if (event.target === document.getElementById("myForm")) {
        document.getElementById("myForm");
      }
    };
  
    return (
      <div className="singup">
        <button className="signbtn" onClick={openModal}>
          Sign In
        </button>
      </div>
    );
  };
  
  export default ModalBtn;






