import React from "react";
import styles from "../styles.module.styl";
import CategoryStyles from "./styles.module.styl";
import { Link } from "react-router-dom";

interface Props {
  img: string;
  name: string;
  id: string;
}

const CategoryItem: React.FC<Props> = ({ img, name, id }) => {
  return (
    <Link to={id}>
      <div className={styles.wrapper}>
        <div className={styles.media}>
          <img src={img} className={CategoryStyles.img} alt={name} />
        </div>
        <div className={styles.content}>
          <div className={CategoryStyles.name}>{name}</div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
