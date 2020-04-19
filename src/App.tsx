import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./layout";
import ItemsPage from "./pages/items";
import CheckoutPage from "./pages/checkout";
import CartPage from "./pages/cart";
import store from "./store";
import { Provider } from "react-redux";
import "./app.styl";

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Layout>
          <Switch>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/checkout">
              <CheckoutPage />
            </Route>
            <Route path="/">
              <ItemsPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
