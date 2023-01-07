import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import { Route, Routes, Navigate } from "react-router-dom";
const App = () => {
  // fetch("https://e8db-196-221-94-249.eu.ngrok.io/api/getlabels/")
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   });

  return (
    <div>
      <SideBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
