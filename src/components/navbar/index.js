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
            <NavLink href="https://web.whatsapp.com/">Home</NavLink>
          </li>
          <li>
            <NavLink href="#">About</NavLink>
          </li>
          <li>
            <NavLink href="#">Menu</NavLink>
          </li>
          <li>
            <NavLink href="#">Location</NavLink>
          </li>
        </ul>
        <div
          className={styles.hamburger}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className={joinIf(open, styles.burg1, styles.active)}></div>
          <div className={joinIf(open, styles.burg2, styles.active)}></div>
          <div className={joinIf(open, styles.burg3, styles.active)}></div>
        </div>
      </div>

      <ul className={joinIf(open, styles.navlinksvert, styles.active)}>
        <li className={joinIf(open, styles.li, styles.active)}>
          <NavLink href="https://web.whatsapp.com/">Home</NavLink>
        </li>
        <li className={joinIf(open, styles.li, styles.active)}>
          <NavLink href="#">About</NavLink>
        </li>
        <li className={joinIf(open, styles.li, styles.active)}>
          <NavLink href="#">Menu</NavLink>
        </li>
        <li className={joinIf(open, styles.li, styles.active)}>
          <NavLink href="#">Location</NavLink>
        </li>
        <hr className={joinIf(open, styles.hr, styles.active)}></hr>
      </ul>
    </nav>
  );
}

export default NavBar;
