import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

export default function Review() {
  return (
    <>
      <p className={styles.title}>What people say about us </p>
      <div className={styles.tweetscontainer}>
        <Image
          src="/frame1.svg"
          alt="Tweet 1"
          className={styles.tweetimage + " " + styles.tweet1}
          width={716}
          height={262}
        />
        <div className={styles.dashedline + " " + styles.dashedline1}></div>

        <Image
          src="/frame2.svg"
          alt="Tweet 2"
          className={styles.tweetimage + " " + styles.tweet2}
          width={716}
          height={262}
        />
        <div className={styles.dashedline + " " + styles.dashedline2}></div>

        <Image
          src="/frame3.svg"
          alt="Tweet 3"
          className={styles.tweetimage + " " + styles.tweet3}
          width={716}
          height={262}
        />
        <div className={styles.dashedline + " " + styles.dashedline3}></div>

        <Image
          src="/frame4.svg"
          alt="Tweet 4"
          className={styles.tweetimage + " " + styles.tweet4}
          width={716}
          height={262}
        />
        <div className={styles.dashedline + " " + styles.dashedline4}></div>
      </div>
    </>
  );
}
