import NotFound from "pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy } from "react";
import { PrivateRoute } from "./PrivatRouter";

const Home = lazy(() => import("../pages/Home"));
const Teachers = lazy(() => import("../pages/Teachers"));
const Favorites = lazy(() => import("../pages/Favorites"));

export const App = () => {
  return (     
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/favorites" element={<PrivateRoute redirectTo="/" component={<Favorites />} />} />
          <Route path="*" element={<NotFound />} />   
        </Route>   
      </Routes>        
    </div>      
  );
};

