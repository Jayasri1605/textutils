import { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    console.log("Showing alert: ", message, type); // Debug log
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils now';
      }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <Router>
      <Nav title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
