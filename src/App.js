import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/user/SignIn";
import Login from "./components/user/Login";
import Category from "./pages/category/Category";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='signin'
          element={<SignIn />}
        ></Route>
        <Route
          path='login'
          element={<Login />}
        ></Route>
        <Route
          path='category'
          element={<Category />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
