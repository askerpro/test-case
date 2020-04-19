import React from "react";
import styles from "../styles.module.styl";
import Button from "layout/ui/button";
import { Item } from "api/items/data";
import { useDispatch } from "react-redux";
import { addToCart } from "pages/cart/actions";

interface Props extends Item {
  isInCart: boolean;
}

const ItemView: React.FC<Props> = ({ id, img, name, price, isInCart }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart({ id, img, name, price } as Item));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.media}>
        <img src={img} className={styles.img} alt={name} />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.spacer} />
        <div className={styles.price}>{price}р.</div>
      </div>
      <div className={styles.actions}>
        <Button
          disabled={isInCart}
          color={isInCart ? "inherit" : "primary"}
          onClick={handleClick}
        >
          {isInCart ? "В корзине" : "В корзину"}
        </Button>
      </div>
    </div>
  );
};

export default ItemView;
