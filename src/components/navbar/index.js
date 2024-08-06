"use client";
import Link from "next/link";
import NavLink from "../link";
import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";
import { joinIf } from "@/utils";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav tabIndex={0} className={styles.cont} onBlur={() => setOpen(false)}>
      <div className={styles.navbar}>
        <Link href="/">
          <Image
            src="/logo.png"
            width={90}
            height={90}
            className={styles.logo}
            alt="Deja Brew Logo"
          />
        </Link>
        <ul className={styles.navlinks}>
          <li>
            <NavLink href="https://www.youtube.com/">Home</NavLink>
          </li>
          <li>
            <NavLink href="https://www.youtube.com/">About</NavLink>
          </li>
          <li>
            <NavLink href="https://www.youtube.com/">Menu</NavLink>
          </li>
          <li>
            <NavLink href="https://www.youtube.com/">Location</NavLink>
          </li>
        </ul>
        <div
          className={styles.hamburger}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div
            className={open ? styles.burg1 + " " + styles.active : styles.burg1}
          ></div>
          <div
            className={open ? styles.burg2 + " " + styles.active : styles.burg2}
          ></div>
          <div className={joinIf(open, styles.burg3, styles.active)}></div>
        </div>
      </div>

      <ul
        className={
          open ? styles.navlinksvert + " " + styles.active : styles.navlinksvert
        }
      >
        <li className={open ? styles.li + " " + styles.active : styles.li}>
          <NavLink href="https://www.youtube.com/">Home</NavLink>
        </li>
        <li className={open ? styles.li + " " + styles.active : styles.li}>
          <NavLink href="https://www.youtube.com/">About</NavLink>
        </li>
        <li className={open ? styles.li + " " + styles.active : styles.li}>
          <NavLink href="https://www.youtube.com/">Menu</NavLink>
        </li>
        <li className={open ? styles.li + " " + styles.active : styles.li}>
          <NavLink href="https://www.youtube.com/">Location</NavLink>
        </li>
        <hr className={open ? styles.hr + " " + styles.active : styles.hr}></hr>
      </ul>
    </nav>
  );
}

export default NavBar;
