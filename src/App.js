import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";


function App() {
  const [showNav, setShowNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button className="menu-btn btn" onClick={() => setShowNav(!showNav)}>
        <GiHamburgerMenu className="btn-icon" />
      </button>

      <Navbar show={showNav} />

      <div className="main">
      <h2 className="main__info-title">My Homepages</h2>
        <p className="main__info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <div>
          <button
            className="subsbtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            SUBSCRIBE 
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
      </div>
    </>
  );
}

export default App;