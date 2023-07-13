import { ToastContainer } from "react-toastify";
import "./App.css";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {
  return (
    <div className='App'>
      <DefaultLayout />
      <ToastContainer />
    </div>
  );
}

export default App;
