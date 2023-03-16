import "./AsideMenu.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";

const AsideMenu = ({ open, setOpen }) => {
  let menuRef = React.useRef();

  React.useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className={open ? "aside-menu__container open" : "aside-menu__container"}
      ref={menuRef}
    >
      <Link to="/clients">
        <li>
          <PersonIcon />
          Clients
        </li>
      </Link>
      <Link to="orders">
        <li>
          <ShoppingCartIcon />
          Orders
        </li>
      </Link>
      <Link to="invoices">
        <li>
          <ReceiptIcon />
          Invoices
        </li>
      </Link>
    </div>
  );
};

export default AsideMenu;
