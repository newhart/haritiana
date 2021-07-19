import React from 'react'
import Navigation from './../components/Navigation';

export default function Contact() {
   return (
      <div className="contact"> 
         <Navigation />
         <div className="contactContent">
            <div className="header">
               
            </div>

            <div className="contactBox">
                  <h1>Contactez-moi</h1>
                  <ul>
                     <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Antananarivo</span>
                     </li>
                     <li>
                        <i className="fas fa-mobile-alt"></i>
                        <span className="clickInput">033 19 058 63</span>
                     </li>
                     <li>
                        <i className="far fa-envelope"></i>
                        <span>dev.haritianakely@gmail.com</span>
                     </li>
                  </ul>
            </div>

            <div className="socialNetwork">
               <ul>
                  <a href="#" rel="noopener noreferrer" target="_blanck">
                     <h4>LinkedIn</h4>
                     <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/newhart" rel="noopener noreferrer" target="_blanck">
                     <h4>Github</h4>
                     <i className="fab fa-github"></i>
                  </a>
                  <a href="#" rel="noopener noreferrer" target="_blanck">
                     <h4>Twitter</h4>
                     <i className="fab fa-twitter"></i>
                  </a>
                  <a href="htts://facebook.com/" rel="noopener noreferrer" target="_blanck">
                     <h4>Facebook</h4>
                     <i className="fab fa-facebook"></i>
                  </a>
               </ul>
            </div>
         </div>
      </div>
   )
}
