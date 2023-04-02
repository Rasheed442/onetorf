import React from "react";
import style from "../styles/footer.module.css";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
function Footer() {
  return (
    <div className={style.background}>
      <div className={style.navlinks}>
        <h1>Luxuria</h1>
        <p>
          With over 38 years of experience,
          <br /> we at LUXURIA are pioneers in the
          <br /> real estate business. we beloive there
          <br /> is perfect home for everybody no matter
          <br /> the budget. That why we always find the
          <br /> best home for your budget.
        </p>
        <div>
          <h2>Social media</h2>
          <div>
            <AiFillTwitterCircle style={{ color: "lightblue" }} size={30} />
            <AiFillInstagram style={{ color: "lightpink" }} size={30} />
            <AiOutlineWhatsApp style={{ color: "lightgreen" }} size={30} />
            <AiFillFacebook size={30} style={{ color: "lightblue" }} />
          </div>
        </div>
      </div>
      <div className={style.navlinks}>
        <h2>Useful Links</h2>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/">
          <p>Buy</p>
        </Link>
        <Link href="/">
          <p>Sell</p>
        </Link>
        <Link href="/">
          <p>Rent</p>
        </Link>
        <Link href="/">
          <p>Blog post</p>
        </Link>
        <Link href="/">
          <p>Sitemap</p>
        </Link>
      </div>
      <div className={style.navlinks}>
        <h2>Company</h2>
        <Link href="/">
          <p>Agent</p>
        </Link>
        <Link href="/">
          <p>Partners</p>
        </Link>
        <Link href="/">
          <p>About us</p>
        </Link>
        <Link href="/">
          <p>Properties</p>
        </Link>
      </div>
      <div className={style.navlinks}>
        <h2>Get in touch</h2>
        <Link href="/">
          <p>
            <AiOutlinePhone />
            Contact Us
          </p>
        </Link>
        <Link href="/">
          <p>
            <AiOutlineMail />
            email us
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
