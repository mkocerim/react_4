import { HashRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
function App() {
  return (
    <div className="container py-3">
      <Header />

    <HashRouter>
      <Routes>

        <Route index element={<Home/>}/>
        <Route path="login"  element={<Login/>}/>

        
      </Routes>
    </HashRouter>


    </div>
  );
}

export default App;
