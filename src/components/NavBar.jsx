import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavBar()    {
    return(
        <div className="navbar"> 
        <ul>
            <h1>SHOP</h1>
            <a className="home" href="">Home</a>
            <a href="">Digitales</a>
            <a href="">Mandos</a>
            <a href="">Contacto</a>

            

        
         
        </ul>


        <i className="fa fa-cart-plus cart"></i> 



        <div className="card" style="width: 18rem;">

  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>






        
        </div>

        
    )
}