import React, { useState } from 'react';
import { portfolioData } from './../../data/portfolioData';
import Project from './Project';


const ProjectList = () => {

   // the into the  database
   const [projects, setProjects] = useState(portfolioData)
   // the state for the radio checked
   const [radios, setRadios] = useState(
      [
         {id:1, value:"javascript"},
         {id:2, value:"css"},
         { id: 3, value: "react" },
         { id: 4, value: "node" },
         {id:5, value:"php"},
         {id:6, value:"laravel"},
      ]
   )
   // the state for the radioSelected
   let [selectedRadio, setSelectedRadio] = useState("javascript")

   const handelRadio = (e) => {
      setSelectedRadio(e.target.value)
   }

   return (
      <div className="portfolioContent">

         <ul className="radioDisplay">
            {
               radios.map(radio => {
                  return (
                        <li key={radio.id}>
                           <input
                              type="radio"
                              name="radio"
                              checked={radio.value === selectedRadio}
                              value={radio.value}
                              id={radio.value}
                              onChange={handelRadio}
                        />
                        <label htmlFor={radio.value}>{radio.value}</label>
                     </li>
                  )
               })
            }
         </ul>
         <div className="projects">
            {
               projects
                  .filter(item => item.languages.includes(selectedRadio))
                  .map(item => {
                  return (
                     <Project
                        key={item.id}
                        item={item}
                     />
                  )
               })
            }
         </div>
         
      </div>
   )
}

export default ProjectList;
