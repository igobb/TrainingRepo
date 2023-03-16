import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = ({openAsideMenu}) => {
  return (
    <div className="header">
      <div className="header-button"><MenuIcon onClick={openAsideMenu}/></div>
      <div className="header-text"><Link to='/'><p>Libraries</p></Link></div>
    </div>
  );
};

export default Header;
