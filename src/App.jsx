import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import TopHeader from "./Components/Header/TopHeader";
import SubHeader from "./Components/Header/SubHeader";
import MainHeader from "./Components/Header/MainHeader";

const App = () => {
  return (
    <div>
      <BrowserRouter> 
      
        <TopHeader />
        <SubHeader />

        <MainHeader />
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
