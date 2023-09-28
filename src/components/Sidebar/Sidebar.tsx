/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MenuOutlined, HomeOutlined, ProfileOutlined } from "@ant-design/icons";
import "./Sidebar.css";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
            <MenuOutlined />
          </a>
        </li>
        <li>
          <a href="#">
            <HomeOutlined />
          </a>
        </li>
        <li>
          <a href="#">
            <ProfileOutlined />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
