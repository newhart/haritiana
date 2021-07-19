import React from 'react';

const Hobbies = () => {
   return (
      <div className="hobbies">
         <h3>Intérêts</h3>
         <ul>
            <li className="hobby">
               <i className="fas fa-book"></i>
               <span>Lécture</span>
            </li>
            <li className="hobby">
               <i className="fas fa-laptop"></i>
               <span>Randonnées</span>
            </li>
            <li className="hobby">
               <i className="fas fa-football-ball"></i>
               <span>Footbal club</span>
            </li>
         </ul>
      </div>
   );
}

export default Hobbies;
