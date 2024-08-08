import styles from "./index.module.css";
import Image from "next/image";
import { David_Libre } from "next/font/google";
import { Montserrat } from "next/font/google";
import NavLink from "../link";
const Montser = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});
const david = David_Libre({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.infocont}>
        <div className={styles.logoinfocont}>
          <Image
            src="/logo.png"
            width={150}
            height={150}
            className={styles.logo}
            alt="logo.png"
          ></Image>
          <div className={styles.txtinf}>
            <span className={styles.txttitle}>Deja Brew</span>
            <span className={styles.txtdesc + " " + david.className}>
              Step into a world where coffee isn&#39;t just a beverage,but a
              journey that speaks of home.
            </span>
            <span className={styles.icon}>
              <a>
                <Image
                  src="/icons/insta-icon.svg"
                  height={15}
                  width={15}
                  alt="insta-icon.svg"
                />
              </a>
              <a>
                <Image
                  src="/icons/linkdin-icon.svg"
                  height={15}
                  width={15}
                  alt="linkdin-icon.svg"
                />
              </a>
              <a>
                <Image
                  src="/icons/x-icon.svg"
                  height={15}
                  width={15}
                  alt="x-icon.svg"
                />
              </a>
            </span>
          </div>
        </div>
        <span className={styles.dashedline}></span>
        <div className={styles.linkinf}>
          <div className={styles.linkcont1}>
            <span className={styles.linktitle}>Website</span>
            <ul className={styles.footlinks}>
              <li className={styles.li}>
                <NavLink href="/" light>
                  Home
                </NavLink>
              </li>
              <li className={styles.li}>
                <NavLink href="/" light>
                  About
                </NavLink>
              </li>
              <li className={styles.li}>
                <NavLink href="/" light>
                  Menu
                </NavLink>
              </li>
              <li className={styles.li}>
                <NavLink href="/" light>
                  Locations
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.linkcont1}>
            <span className={styles.linktitle}>Company</span>
            <ul className={styles.footlinks}>
              <li className={styles.li}>
                <NavLink href="/" light>
                  Home
                </NavLink>
              </li>
              <li className={styles.li}>
                <NavLink href="/" light>
                  About
                </NavLink>
              </li>
              <li className={styles.li}>
                <NavLink href="/" light>
                  Menu
                </NavLink>
              </li>
              <li className={styles.li}>
                <NavLink href="/" light>
                  Locations
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.madeby + " " + david.className}>
        Desinged With &lt;3 By <span className={Montser.className}>Rivant</span>
      </div>
    </footer>
  );
}

export default Footer;
