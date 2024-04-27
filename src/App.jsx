/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./modules/home/pages/Home";
import { Login } from "./modules/home/components/Authentication/Login";
import Kuesioner from "./modules/home/components/kuesioner/kuesioner";
import Layout from "./modules/home/components/Layout";
import RequireAuth from "./modules/home/components/Authentication/RequireAuth";
import Welcome from "./modules/home/components/Authentication/Welcome";
import Login2 from "./modules/home/components/Authentication/Login2";

// const App = () => {
//   return (
//     <Routes>
//       {/* Rute publik */}
//       <Route path="/" element={<Layout />}>
//         <Route path="login" element={<Login />} />

//         {/* <Route path="/admin/index" element={<Index />} /> */}

//         {/* protected routes */}
//         <Route element={<RequireAuth />}>
//           <Route path="welcome" element={<Welcome />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="kuesioner" element={<Kuesioner />} />
//         </Route>

//         {/* Rute pribadi
//         <Route
//           path="/"
//           element={
//             <PrivateRoute isLogged={isLoggedIn}>
//               <Route path="/home" element={<Home />} />
//               <Route path="/kuesioner" element={<Kuesioner />} />
//             </PrivateRoute>
//           }
//         /> */}
//       </Route>
//     </Routes>
//   );
// };

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route index element={<Public />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="login2" element={<Login2 />} />
        <Route path="kuesioner" element={<Kuesioner />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="userslist" element={<UsersList />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
