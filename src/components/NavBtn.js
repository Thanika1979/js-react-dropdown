import ('./SideNav')


const NavBtn = () => {
    function openNav() {
      document.getElementById("myDropdown");
  
    }
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={openNav}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    );
  };
  
  export default NavBtn;