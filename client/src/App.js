import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { loadProductsList } from "./store/products";

import Header from "./components/layouts/header";
import Main from "./components/layouts/main";
import Delivery from "./components/pages/delivery";
import Footer from "./components/layouts/footer";
import NavBar from "./components/ui/navBar";
import ProductInfo from "./components/ui/productInfo";
import RegisterForm from "./components/ui/registerForm";
import Roll from "./components/pages/roll";
import Set from "./components/pages/set";
import Hot from "./components/pages/hot";
import Desert from "./components/pages/desert";
import Drink from "./components/pages/drink";
import DashBoard from "./components/pages/dashboard/dashboard";
import ProtecdedRoute from "./components/coomon/protecdedRoute";
import { loadComentsList } from "./store/coments";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsList());
    dispatch(loadComentsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AuthProvider>
        <Header />
        <NavBar />

        <Switch>
          <Route path="/signUp" component={RegisterForm} />
          {/* <Route path="/dashboard" component={DashBoard} /> */}
          <ProtecdedRoute path="/dashboard" component={DashBoard} />
          <Route path="/roll/productInfo/:id" exact component={ProductInfo} />
          <Route path="/set/productInfo/:id" exact component={ProductInfo} />
          <Route path="/hot/productInfo/:id" exact component={ProductInfo} />
          <Route path="/drink/productInfo/:id" exact component={ProductInfo} />
          <Route path="/desert/productInfo/:id" exact component={ProductInfo} />
          <Route path="/roll" component={Roll} />
          <Route path="/set" component={Set} />
          <Route path="/hot" component={Hot} />
          <Route path="/desert" component={Desert} />
          <Route path="/drink" component={Drink} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/" exact component={Main} />
        </Switch>

        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
