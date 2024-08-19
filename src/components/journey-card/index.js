import React from "react";
import styles from "./index.module.css";
import { joinIf } from "@/utils";
import Image from "next/image";
import { David_Libre } from "next/font/google";

const david = David_Libre({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const JourneyCard = ({ image, title, description, reverse }) => {
  return (
    <div className={joinIf(reverse, styles.section, styles.reverse)}>
      <Image src={image} alt={title} height={311} width={420} />
      <div className={styles.textcontent}>
        <h2>{title}</h2>
        <p className={david.className}>{description}</p>
      </div>
    </div>
  );
};

export default JourneyCard;
