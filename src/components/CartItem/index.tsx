import React from "react";
import styles from "./styles.module.styl";
import Button from "layout/ui/button";
import { CartItem } from "pages/cart/models";
import { useDispatch } from "react-redux";
import { ReactComponent as DeleteIcon } from "assets/delete-black-18dp.svg";
import {
  decrementCount,
  deleteFromCart,
  incrementCount,
} from "pages/cart/actions";

const ItemView: React.FC<CartItem> = ({
  item: { id, img, name, price },
  count,
}) => {
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(incrementCount(id));
  };

  const onDecrement = () => {
    dispatch(decrementCount(id));
  };

  const onDelete = () => {
    dispatch(deleteFromCart(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.media}>
        <img src={img} className={styles.img} alt={name} />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>
          {name}, <span className={styles.price}>{price}р.</span>
        </div>
        <div className={styles.countWrapper}>
          <button type="button" onClick={onDecrement} >
            -
          </button>
          <div className={styles.count}>{count}шт.</div>
          <button type="button" onClick={onIncrement} >
            +
          </button>
        </div>
        <Button onClick={onDelete} size="small">
          <DeleteIcon />
          удалить
        </Button>
      </div>
    </div>
  );
};

export default ItemView;
