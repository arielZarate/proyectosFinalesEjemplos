
import axios from 'axios'
import './App.css'
import AllRoutes from './AllRoutes'
const {VITE_URL_BACK}=import.meta.env;

//axios.defaults.baseURL="http://localhost:3000/api";  //por el servidor local

axios.defaults.baseURL = VITE_URL_BACK;   //por el hosting render     
function App() {
 return(
   <>
  <AllRoutes/>
  </>
 )
 
}

export default App
