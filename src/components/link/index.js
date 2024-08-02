import Link from "next/link";
import styles from "./index.module.css";
import { joinIf } from "@/utils";

function NavLink(props) {
  return (
    <Link
      className={joinIf(props.light, styles.navlink, styles.light)}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
export default NavLink;
