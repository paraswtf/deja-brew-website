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

const JourneyCard = ({ image, title, description, reverse, imagemob }) => {
  return (
    <>
      <div
        className={joinIf(reverse, styles.section, styles.reverse)}
        style={{
          backgroundImage:
            " linear-gradient(0deg,rgba(255, 255, 255, 1) 60%,rgba(255, 255, 255, 0.75) 65%,rgba(0, 0, 0, 0)),url(" +
            imagemob +
            ")",
        }}
      >
        <Image src={image} alt={title} height={311} width={420} />
        <div className={styles.textcontent}>
          <h2>{title}</h2>
          <p className={david.className}>{description}</p>
        </div>
      </div>
      <Image
        className={styles.arrow}
        src="/journeyarrow.svg"
        alt="arrow"
        height={75}
        width={30}
      ></Image>
    </>
  );
};

export default JourneyCard;
