import "./App.css";
import Create from "./components/create";
import Read from "./components/Read";
import Update from "./components/Update";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="main">
        <h2 className="main-header">REACT CRUD</h2>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Create />} />

          <Route path="/read" element={<Read />} />

          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
