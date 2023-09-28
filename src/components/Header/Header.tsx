import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <li>
        <a href="#">Program Details</a>
      </li>
      <li className="active">
        <a href="#">Application Form</a>
      </li>
      <li>
        <a href="#">Workflow</a>
      </li>
      <li>
        <a href="#">Preview</a>
      </li>
    </nav>
  );
};

export default Header;
