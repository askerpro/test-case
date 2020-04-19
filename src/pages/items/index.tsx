import React from "react";
import ProductItem from "components/items/ProductItem";
import CategoryItem from "components/items/CategoryItem";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.styl";
import { fetch } from "./actions";
import * as selectors from "./selectors";
import * as cartSelectors from "../cart/selectors";
import Button from "layout/ui/button";

const Page: React.FC = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const data = useSelector(selectors.getItems);

  const cartItemIds = useSelector(cartSelectors.getItems).map(
    (cartItem) => cartItem.item.id
  );

  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  const isPending = useSelector(selectors.isPending);

  React.useEffect(() => {
    dispatch(fetch());
  }, [dispatch, location]);

  return (
    <>
      {isPending ? (
        <div>Товары загружаются...</div>
      ) : (
        <>
          <h2>Категории:</h2>
          <div className={styles.grid}>
            {data.categories?.map((category) => (
              <CategoryItem {...category} key={`${category.id}`} />
            ))}
          </div>
          <div className={styles.spacer} />
          <h2>Товары:</h2>
          <div className={styles.grid}>
            {data.items?.map((item) => {
              const isInCart = cartItemIds.includes(item.id);
              return (
                <ProductItem {...item} key={`${item.id}`} isInCart={isInCart} />
              );
            })}
          </div>
        </>
      )}
      {data.pagesCount > 1 && (
        <div className={styles.pagination}>
          <Link
            className={styles.arrow}
            to={`?page=${page - 1 > 1 ? 1 : page - 1}`}
          >
            {"<"}
          </Link>

          {Array(data.pagesCount)
            .fill(0)
            .map((_, i) => (
              <Link to={`?page=${i + 1}`} key={i}>
                <Button color={i + 1 === page ? "primary" : "inherit"}>
                  {i + 1}
                </Button>
              </Link>
            ))}
          <Link
            className={styles.arrow}
            to={`?page=${
              page + 1 < data.pagesCount ? page + 1 : data.pagesCount
            }`}
          >
            {">"}
          </Link>
        </div>
      )}
    </>
  );
};

export default Page;
