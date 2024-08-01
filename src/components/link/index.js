import Link from "next/link";
import styles from "./index.module.css";

function NavLink(props) {
  return (
    <Link className={styles.navlink} href={props.href}>
      {props.children}
    </Link>
  );
}
export default NavLink;
