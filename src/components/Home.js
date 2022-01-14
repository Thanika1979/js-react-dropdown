import SideNav from "./SideNav";
import NavBtn from "./NavBtn";
import Info from "./Info";
import ModalBtn from "./ModalBtn";
import Modal from "./Modal";


const Home = () => {
  return (
    <div className="dropdown">
      <SideNav />
      <NavBtn />
      <Info />
      <ModalBtn />
      <Modal />
    </div>
  );
};

export default Home;