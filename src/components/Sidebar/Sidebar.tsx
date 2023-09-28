/* eslint-disable @typescript-eslint/ban-types */
import menu from "../../assets/menu.png";
import home from "../../assets/home.png";
import file from "../../assets/file.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
            <img src={menu} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={home} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={file} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
