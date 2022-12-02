import { useEffect } from "react";
import { HashRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import useApi from "./components/Hooks/useApi";
import Home from "./pages/home/home";
import Login from "./pages/login/login";



function App() {

const api=useApi()
//burada categories api den al 

useEffect(()=>{
  api.get('public/categories/listMainCategories')
})



  return (
    <div className="container py-3">
      <Header />

    <HashRouter>
      <Routes>

        <Route index element={<Home/>}/>
        <Route path="login"  element={<Login/>}/>

        
      </Routes>
    </HashRouter>

    <Footer/>

    </div>
  );
}

export default App;
