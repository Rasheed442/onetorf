import React from "react";
import style from "../styles/Why.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
function Why() {
  return (
    <div className={style.container}>
      <div className={style.slide1}>
        <h1>Why Choose Us?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br /> Lorem Ipsum has been the industry&apos; standard dummy text
          ever since the
          <br /> 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text ever
          <br />
          since the 1500s, when an{" "}
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing
          <br /> and typesetting industry. Lorem Ipsum has been the <br />
          industry's standard dummy text ever since the{" "}
        </p>
        <button>Buy Now</button>
      </div>

      <div className={style.grid}>
        <div className={style.background} style={{ backgroundColor: "white" }}>
          <div className={style.support}>
            <Image src="/nothing.png" width={50} height={50} priority />
            <h2>01. &nbsp;&nbsp;Landlord Support</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
              <br /> book.{" "}
            </p>
          </div>
          <Link href="/">
            <span>
              Read More <AiOutlineArrowRight size={15} />
            </span>
          </Link>
        </div>
        <div
          className={style.background}
          style={{ backgroundColor: "#245BE8" }}
        >
          <div className={style.support}>
            <Image src="/nothing.png" width={50} height={50} priority />
            <h2 style={{ color: "white" }}>02. &nbsp;&nbsp;Tenant Support</h2>
            <p style={{ color: "white" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
              <br /> book.{" "}
            </p>
          </div>
          <Link href="/">
            <span style={{ color: "white" }}>Read More</span>
          </Link>
        </div>
        <div className={style.background}>
          <div className={style.support}>
            <Image src="/nothing.png" width={50} height={50} priority />
            <h2>03. &nbsp;&nbsp;Payment Structure</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <Link href="/">
            <span>Read More</span>
          </Link>
        </div>
        <div className={style.background}>
          <div className={style.support}>
            <Image src="/nothing.png" width={50} height={50} priority />
            <h2>04. &nbsp;&nbsp;Low Commission</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <Link href="/">
            <span>Read More</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Why;
