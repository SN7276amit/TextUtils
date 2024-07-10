import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setalert(null)
      },2000)
  }
  const toggleMode = ()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
   <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text Here " mode={mode}/>}>
          </Route>
        </Routes>
    </div>
   </Router>
    </>
  );
}

export default App;
