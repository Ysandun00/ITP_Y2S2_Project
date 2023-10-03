import React from 'react'
import Navbar from '../../components/navbar';
import Home  from "../../components/home";
import Footer from "../../components/footer";

function Homepage() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
        

    ) 
}

export default Homepage;