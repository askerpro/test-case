import React from "react";
import { useSelector } from "react-redux";
import { getItems, getTotalCost } from "./selectors";
import CartItem from "components/CartItem";
import styles from "./styles.module.styl";
import Button from "layout/ui/button";
import { Link } from "react-router-dom";

const Page: React.FC = () => {
  const items = useSelector(getItems);
  const totalCost = useSelector(getTotalCost);
  return (
    <>
      <h1>Корзина</h1>
      {items.length > 0 ? (
        <div className={styles.wrapper}>
          <div className={styles.items}>
            {items.map((item) => (
              <CartItem {...item} key={item.item.id} />
            ))}
          </div>
          <div className={styles["checkout-section"]}>
            <div>
              <h1>Ваша корзина</h1>
              <div>
                <span className={styles.label}>Товары: </span>{" "}
                <span className={styles.value}>{items.length}</span>{" "}
              </div>
              <div>
                <span className={styles.label}>Общая стоимость: </span>
                <span className={styles.value}>{totalCost}р</span>{" "}
              </div>
            </div>
            <div className={styles.spacer} />
            <hr />
            <div className={styles.spacer} />
            <div>
              <Link to="/checkout">
                <Button color="secondary">Оформить заказ</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>Ваша корзина пуста</div>
      )}
    </>
  );
};

export default Page;
