import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import useApi from "./components/Hooks/useApi";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import { setCategory } from "./redux/categorySlice";
import { setAppData } from "./redux/appDataSlice";

function App() {
  const dispatch = useDispatch();
  const api = useApi();
  const authState = useSelector((state) => state.auth);
  const appDataState = useSelector((state) => state.appData);

  //burada categories api den al

  useEffect(() => {
    api
      .get("public/categories/listMainCategories")
      .then((response) => {
        dispatch(setCategory(response.data.data));
      })
      .catch((err) => {});
  }, []);

  // AppData bilgisini al

  if (authState.token && !appDataState) {
    api
      .get("user/appData")
      .then((response) => {
        console.log(">>APP DATA RES", response);

        dispatch(setAppData(response.data.data.user));
      })
      .catch((err) => {});
  }

  // AppData bilgisini al

  return (
    <div className="container py-3">
      <Header />

      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="category/:slug" element={<Login />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
