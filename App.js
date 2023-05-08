import './App.css';
import { Routes,Route, } from 'react-router-dom';
import Navigation from './Routes/navigation/navigation.component';
import Home from './Routes/home/home.components';



function App() {
  return (
  <Routes>
  
  <Route path='/' element={<Navigation/>}>
  <Route index element={<Home/>}/>
  <Route path='AboutUs'/>
  <Route path='Event'/>
  <Route path='Learning'/>
  <Route path='ContactUs'/>

  </Route>
  
  </Routes>
   
  );
}

export default App;
