import React from 'react';
import {NavLink} from  'react-router-dom'

const Navigation = () => {
   return (
      <div className="sidebar">
         <div className="id">
            <div className="idContent">
               <img src="./media/haritiana.jpg" alt="haritina" />
               <h3>Haritiana Randria</h3>
            </div>
         </div>

         <div className="navigation">
            <ul>
               <li>
                  <NavLink exact to="/" activeClassName="navActive">
                     <i className="fas fa-home"></i>
                     <span>Acceuil</span>
                  </NavLink>
               </li>
                <li>
                  <NavLink exact to="/competences" activeClassName="navActive">
                     <i className="fas fa-images"></i>
                     <span>Compétences</span>
                  </NavLink>
               </li>
                <li>
                  <NavLink exact to="/portfolio" activeClassName="navActive">
                     <i className="fas fa-images"></i>
                     <span>Portfolio</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink exact to="/contact" activeClassName="navActive">
                     <i className="fas fa-address-book"></i>
                     <span>Contact</span>
                  </NavLink>
               </li>
             </ul>
         </div>

         <div className="socialNetwork">
            <ul>
               <li>
                  <a href="#" target="_blank" rel="noopen norefrrer">
                     <i className="fab fa-linkedin"></i>
                  </a>
               </li>
               <li>
                  <a href="#" target="_blank" rel="noopen norefrrer">
                     <i className="fab fa-github"></i>
                  </a>
               </li>
               <li>
                  <a href="#" target="_blank" rel="noopen norefrrer">
                     <i className="fab fa-twitter"></i>
                  </a>
               </li>
               <li>
                  <a href="#" target="_blank" rel="noopen norefrrer">
                     <i className="fab fa-codepen"></i>
                  </a>
               </li>
            </ul>
            <div className="singature">
               <p>new hart 2021</p>
            </div>
         </div>
      </div>
   );
}

export default Navigation;
