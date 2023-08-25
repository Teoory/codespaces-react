import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPages from './pages/LoginPage/LoginPage';
document.title = "Berkay Köksal | My Portfolio";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
            <div>
              <Routes>
                <Route path="/" element= {<HomePage/>} />
                <Route path="*" element= {<NotFoundPage/>} />
                <Route path="/LoginPages" element= {<LoginPages/>} />
              </Routes>
            </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
