const Navbar = ({ show }) => {
  return (
    <div className={show ? "nav-active" : "nav"}>
      <ul className="ul">
        <li className="li">
          <a href="#">Home</a>
        </li>
        <li className="li">
          <a href="#">About us</a>
        </li>
        <li className="li">
          <a href="#">Services</a>
        </li>
        <li className="li">
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;