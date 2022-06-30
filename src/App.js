// import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes ,Route  } from "react-router-dom";
import Header from './Header';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
    {/* <h1> hello</h1> */}
    <Routes>
    <Route path='/' element={ <><Header/> <Home/></>} /> </Routes>
    
    <div className="App">
      
      {/* <h1>this is asome this</h1> */}
      <Routes>
         <Route exact path='/login'  element={<> <Header/> <h1> this is login page </h1> </>} >  </Route>
         <Route exact path='checkout' element={<h1>other t</h1>}> </Route>


      </Routes>

      
    </div>
    </BrowserRouter>
  );
}

export default App;
