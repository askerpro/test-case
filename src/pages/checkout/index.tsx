import "date-fns";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear as clearCart } from "../cart/actions";
import { getItems, getTotalCost } from "../cart/selectors";
import CheckoutItem from "components/CheckoutItem";
import styles from "./styles.module.styl";
import Button from "layout/ui/button";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Input from "layout/ui/input";
import { Link } from "react-router-dom";

const Page: React.FC = () => {
  const dispatch = useDispatch();
  const [stage, setStage] = React.useState(0);
  const [userName, setUserName] = React.useState("");
  const [userPhone, setUserPhone] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userAddress, setUserAddress] = React.useState("");
  const [deliveryDate, setDeliveryDate] = React.useState<Date | null>(null);
  const [deliveryTime, setDeliveryTime] = React.useState<Date | null>(null);
  const isInputsValid = () => {
    return (
      userName !== "" &&
      userPhone !== "" &&
      userEmail !== "" &&
      userAddress !== "" &&
      deliveryDate !== null &&
      deliveryTime !== null
    );
  };

  const items = useSelector(getItems);
  const totalCost = useSelector(getTotalCost);
  return (
    <>
      {stage === 0 && (
        <>
          <h1>Оформление заказа</h1>

          <div className={styles.wrapper}>
            <div className={styles.items}>
              {items.map((item) => (
                <CheckoutItem {...item} key={item.item.id} />
              ))}
              <div>
                <span className={styles.label}>Товары: </span>{" "}
                <span className={styles.value}>{items.length}</span>{" "}
              </div>
              <div>
                <span className={styles.label}>Общая стоимость: </span>
                <span className={styles.value}>{totalCost}р</span>{" "}
              </div>
            </div>
            <div className={styles["input-fields"]}>
              <h2>Заполните поля</h2>
              <Input
                label="ФИО"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                autoComplete="name"
              />
              <Input
                label="Телефон"
                value={userPhone}
                onChange={(event) => {
                  setUserPhone(event.target.value);
                }}
                autoComplete="tel"
              />
              <Input
                label="Email"
                value={userEmail}
                onChange={(event) => {
                  setUserEmail(event.target.value);
                }}
                autoComplete="email"
              />
              <Input
                label="Адрес"
                value={userAddress}
                onChange={(event) => {
                  setUserAddress(event.target.value);
                }}
                autoComplete="locality"
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  label="Дата доставки"
                  value={deliveryDate}
                  onChange={(date) => {
                    setDeliveryDate(date as Date);
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  label="Время доставки"
                  value={deliveryTime}
                  onChange={(date) => {
                    setDeliveryTime(date as Date);
                  }}
                />
              </MuiPickersUtilsProvider>
              <Button
                color="secondary"
                onClick={() => {
                  if (isInputsValid()) {
                    setStage(1);
                    dispatch(clearCart());
                  } else {
                    alert("Заполните поля правильно");
                  }
                }}
              >
                Оформить
              </Button>
            </div>
          </div>
        </>
      )}
      {stage === 1 && (
        <div className={styles.success}>
          <div className={styles.successMessage}>Ваш заказ оформлен</div>
          <div className={styles.successMessage}>
            <Link to="/">
              <Button>Вернуться к каталогу</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
