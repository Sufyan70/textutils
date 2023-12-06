import './App.css';
// import About from './Components/About';
import Alerts from './Components/Alerts';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" AboutText="About Us" mode={mode} togglemode={togglemode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about"
              element={<About />}/>
            <Route exact path="/" */}
              {<TextForm showAlert={showAlert} heading="Enter Your Text below to Analyze" mode={mode} />}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;