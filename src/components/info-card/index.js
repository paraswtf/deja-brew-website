import styles from "./index.module.css";
import { David_Libre } from "next/font/google";

const david = David_Libre({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
function InfoCard({ children, title }) {
  return (
    <div className={styles.card}>
      <span>{title}</span>
      <p className={david.className}>{children}</p>
    </div>
  );
}

export default InfoCard;
