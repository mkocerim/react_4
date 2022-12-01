import { HashRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
function App() {
  return (
    <div className="container py-3">
      <Header />

    <HashRouter>
      <Routes>

        <Route index element={<Home/>}/>
        
        
      </Routes>
    </HashRouter>


    </div>
  );
}

export default App;
