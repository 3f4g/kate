import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { useState } from "react";
import InfoBlock from "../InfoBlock/InfoBlock";

export default function Navbar() {
  const [showInfoBlock, setShowInfoBlock] = useState<boolean>(false);
  return (
    <>
      <InfoBlock isVisible={showInfoBlock} setShow={() => setShowInfoBlock(false)}/>
      <div className={classes.navbar}>
        <Link to="/kate" className={classes.link}>
          Main Page
        </Link>
        <Link to="/kate/projects" className={classes.link}>
          Projects
        </Link>
        <span className={classes.link} onClick={() => setShowInfoBlock(true)}>
          Info
        </span>
      </div>
    </>
  );
}
