import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import useApi from "./components/Hooks/useApi";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import {setCategory} from './redux/categorySlice'



function App() {
const dispatch = useDispatch()
const api=useApi()
//burada categories api den al 

useEffect(()=>{
  api.get('public/categories/listMainCategories')
  .then(response =>{

    dispatch(setCategory(response.data.data))

  })
  .catch(err=>{

  })
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
