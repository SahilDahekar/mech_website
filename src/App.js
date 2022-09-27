import React, { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Activities from "./pages/Activities.jsx";
import Achieve from "./pages/Achieve.jsx";
import Mesa from "./pages/Mesa.jsx";
import Supra from "./pages/Supra.jsx";
import Baja from "./pages/Baja.jsx";
import Preloader from "./components/Preloader.jsx";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      { loading ?
        <Preloader />
        :
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/achieve" element={<Achieve/>}/>
          <Route path="/mesa" element={<Mesa/>}/>
          <Route path="/supra" element={<Supra/>}/>
          <Route path="/baja" element={<Baja/>}/>
        </Routes>
      }
    </>
  );
}

export default App;
