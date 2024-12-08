import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./App.css";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import OrderCompletePage from "./pages/OrderCompletePage";
import EventPage from "./pages/EventPage";

const staticServerUri = process.env.REACT_APP_PATH || ""; // CHECK

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route
            path={staticServerUri + "/login"}
            element={<LoginPage />}></Route>
          <Route
            path={staticServerUri + "/signup"}
            element={<RegisterPage />}></Route>
          {/* 공통 레이아웃 */}
          <Route element={<MainLayout />}>
            <Route
              exact
              path={staticServerUri + "/"}
              element={<HomePage />}></Route>
            <Route
              exact
              path={staticServerUri + "/product/:id"}
              element={<ProductDetailPage />}></Route>
            <Route
              exact
              path={staticServerUri + "/event"}
              element={<EventPage />}></Route>
          </Route>
          {/* 사용자가 로그인 되었을 때만 접근 가능한 레이아웃 */}
          <Route element={<RequiredAuthLayout />}>
            <Route
              exact
              path={staticServerUri + "/cart"}
              element={<CartPage />}></Route>
            <Route
              exact
              path={staticServerUri + "/order"}
              element={<OrderPage />}></Route>
            <Route
              exact
              path={staticServerUri + "/order"}
              element={<OrderPage />}></Route>
            <Route
              exact
              path={staticServerUri + "/order/complete/:id"}
              element={<OrderCompletePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
