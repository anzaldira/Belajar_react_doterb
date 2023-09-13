import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Login from '../pages/auth/Login';
  import Contact from '../pages/Contact';
  import SignUp from '../pages/auth/SignUp';
  import Counter from '../pages/Counter';
  import Home from '../pages/Home';
  
  function Router() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/Home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
  
    );
  }

  export default Router;