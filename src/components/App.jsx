import Favorites from "pages/Favorites";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Teachers from "pages/Teachers";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

export const App = () => {
  return (     
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />   
        </Route>   
      </Routes>        
    </div>      
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
