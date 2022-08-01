
import './App.css';
import Login from"./views/authentication/Login";
import Register from './views/authentication/register';
import {Routes,Route} from "react-router-dom";



const App =() =>{
  return(
    <div className='app'>
  
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
  
      <Register/>
    </div>
    
  );
}

export default App;
