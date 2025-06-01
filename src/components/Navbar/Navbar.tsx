import { Link, useNavigate } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { useState } from "react";
import InfoBlock from "../InfoBlock/InfoBlock";

import logo from "../../../public/logo48.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [showInfoBlock, setShowInfoBlock] = useState<boolean>(false);

  return (
    <>
      <InfoBlock
        isVisible={showInfoBlock}
        setShow={() => setShowInfoBlock(false)}
      />
      <div className={classes.navbar}>

        <div className={classes.logoBlock} onClick={() => navigate('/kate')}>
          <img src={logo} alt="Logo" />
          <span className={classes.name}>Ekaterina Azovskaya</span>
        </div>

        <div className={classes.links}>
          <Link to="/kate" className={classes.link}>
            Projects
          </Link>
          <Link to="/kate/exibitions" className={classes.link}>
            Exibitions
          </Link>
          <span className={classes.link} onClick={() => setShowInfoBlock(true)}>
            Info
          </span>
        </div>

      </div>
    </>
  );
}
