import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Bounce, ToastContainer } from "react-toastify";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import NewPost from "./Pages/NewPost/NewPost";

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </>
    );
}

export default App;
