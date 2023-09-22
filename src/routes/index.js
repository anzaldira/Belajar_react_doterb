import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Login from '../pages/auth/Login';
  import Contact from '../pages/LandingPage/component/contact/index';
  import SignUp from '../pages/auth/SignUp';
  import Counter from '../pages/Counter';
  import Home from '../pages/LandingPage/index';
  import Products from '../api/Products';
  
  function Router() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
          </Routes>
        </BrowserRouter>
  
    );
  }

  export default Router;