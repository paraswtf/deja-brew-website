import React from "react";
import styles from "./index.module.css";

export default function Review() {
  return (
    <>
      <p className={styles.title}>What people say about us </p>
      <div className={styles.tweetscontainer}>
        <img
          src="/frame1.svg"
          alt="Tweet 1"
          className={styles.tweetimage + " " + styles.tweet1}
        />
        <div className={styles.dashedline + " " + styles.dashedline1}></div>

        <img
          src="/frame2.svg"
          alt="Tweet 2"
          className={styles.tweetimage + " " + styles.tweet2}
        />
        <div className={styles.dashedline + " " + styles.dashedline2}></div>

        <img
          src="/frame3.svg"
          alt="Tweet 3"
          className={styles.tweetimage + " " + styles.tweet3}
        />
        <div className={styles.dashedline + " " + styles.dashedline3}></div>

        <img
          src="/frame4.svg"
          alt="Tweet 4"
          className={styles.tweetimage + " " + styles.tweet4}
        />
        <div className={styles.dashedline + " " + styles.dashedline4}></div>
      </div>
    </>
  );
}
