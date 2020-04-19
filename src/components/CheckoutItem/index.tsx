import React from "react";
import styles from "./styles.module.styl";
import { CartItem } from "pages/cart/models";

const ItemView: React.FC<CartItem> = ({
  item: { id, img, name, price },
  count,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.media}>
        <img src={img} className={styles.img} alt={name} />
      </div>
      <div className={styles.content}>
        <div>
          <span className={styles.label}>{name}</span>
        </div>
        <div>
          <span className={styles.value}>{price}р.</span>
        </div>
        <div>
          <span className={styles.label}>{count}шт.</span>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
