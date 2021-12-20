import React from "react";
import styles from "./Listing.module.scss";

export default function Listing({ image, title, price }) {
  return (
    <div className={`border border-gray-300 mx-4 ${styles.listing}`}>
      <div
        className={`${styles.image}`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <p className="font-bold">{title}</p>
      <p className="text-primaryblue">${price}</p>
    </div>
  );
}
