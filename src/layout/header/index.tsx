import React from "react";
import styles from "./styles.module.styl";
import { ReactComponent as HomeIcon } from "assets/home-black-18dp.svg";
import { ReactComponent as CartIcon } from "assets/shopping_cart-black-18dp.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getItems, getTotalCost } from "pages/cart/selectors";

const Header: React.FC = () => {
  const items = useSelector(getItems);
  const totalCost = useSelector(getTotalCost);
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/">
          <HomeIcon /> Главная
        </Link>
        <div className={styles["cart-section"]}>
          <Link to="/cart">
            <span className={styles["cart-icon"]}>
              <CartIcon />
              {items.length > 0 && (
                <span className={styles.badge}>{items.length}</span>
              )}
            </span>
            {(items.length > 0 &&
              ` ${totalCost}р`) ||
              " Корзина пуста"}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
