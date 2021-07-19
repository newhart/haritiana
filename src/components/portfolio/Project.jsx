import React, { useState } from 'react';

const Project = ({ item }) => {

   const [showInfos, setShowInfos] = useState(false)
   let { name, languagesIcons, source, info, picture } = item

   /**
    * show the modal 
    */
   const  handelInfo = () =>{
      setShowInfos(!showInfos)
   }

   return (
      <div className="project">
         <div className="icons">
            {languagesIcons.map(icon => {
               return <i key={icon} className={icon}></i>
            } )}
         </div>
         <h3>{name}</h3>
         <img src={picture} alt="" onClick={ handelInfo}/>
         <span className="infos" onClick={handelInfo}>
            <i className="fas fa-plus-circle"></i>
         </span>

         {
            showInfos && (
               <div className="showInfos">
                  <div className="infosContent">
                     <div className="head">
                        <h2>{name}</h2>
                        <div className="sourceCode">
                           <a href={ source} rel="noopener noreferrer" className="button" target="_blanck">code source</a>
                        </div>
                     </div>
                     <p className="text">{ info}</p>
                     <div className="button return" onClick={handelInfo}>Retourner sur la page </div>
                  </div>
               </div>
            )
         }
      </div>
   );
}

export default Project;
