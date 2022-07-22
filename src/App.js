
import './App.css';
import Login from"./views/authentication/Login"
import Register from './views/authentication/register';


const App =() =>{
  return(
    <div className='app'>
      {/* <Login/> */}
      <Register/>
    </div>
    
  );
}

export default App;
