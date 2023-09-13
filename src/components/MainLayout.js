import { Navbar } from '@material-tailwind/react';
import React from 'react';
// import Header from '../pages/Header';
// import Footer from './Footer';

const MainLayout =({children}) =>{
    return(
        <>
        <div>
            {/* <Header/> */}
            <br></br><br></br><br></br>
            {/* <Footer/> */}
        </div>
        <main>{children}</main>
        </>
    )
}

export default MainLayout;





