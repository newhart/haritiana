import React, { useState} from 'react';
import Progressbar from './ProgressBar';

const Languages = () => {

   // language state
   const [languages, setLanguages] = useState(
      [
         { id: 1, value: "javaScript", xp: 1.8 },
         { id: 2, value: "Css", xp: 2 },
         { id: 3, value: "php", xp: 1.8 },
         { id: 4, value: "python", xp: 0.5},
      ]
   )
   
   // framewors state
   const [frameworks, setFrameworks] = useState(
      [
         
         { id: 1, value: "React js", xp: 1.4},
         { id: 2, value: "laravel", xp: 1.5 },
         { id: 3, value: "bootstrap", xp: 2 },
         { id: 4, value: "vue js", xp: 0.4},
      ]
   )
   return (
      <div className="languagesFrameworks">
         <Progressbar
            languages={languages}
            className="languagesDisplay"
            title="languages"
         />
         <Progressbar
            languages={frameworks}
            title="Languages & frameworks"
            className="frameworksDisplay"
         />
    </div>
   )
}

export default Languages;
