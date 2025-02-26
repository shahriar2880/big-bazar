import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import toast, { Toaster } from "react-hot-toast";
import fetchUserDetails from "./utils/fetchUserDetails";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice.jsx";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()
  
  const fetchUser = async () => {
    const userData = await fetchUserDetails();
    dispatch(setUserDetails(userData.data));
  };

  useEffect(() => {
    fetchUser();
    // fetchCategory()
    // fetchSubCategory()
    // fetchCartItem()
  }, []);

  return (
    <>
      <Header />
      <main className="h-[100%]">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
