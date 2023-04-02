import React, { useState } from "react";
import style from "../styles/navbar.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      {" "}
      <div className={style.top}>
        <div className={style.container}>
          <h1>Onetorf</h1>
          <div className={open ? style.navlink : style.navmenu}>
            <Link href="/">
              <p>How It Works</p>
            </Link>
            <Link href="/">
              <p style={{ color: "#868585" }}>Features</p>
            </Link>
            <Link href="/">
              <p style={{ color: "#868585" }}>About</p>
            </Link>
          </div>
        </div>

        <div className={open ? style.navbutton : style.menubutton}>
          <button>Contact Us</button>
        </div>
        <div
          className={style.navicon}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <AiOutlineMenu size={35} /> : <AiOutlineClose size={35} />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
