import React from 'react';
import Navigation from './../components/Navigation';
import Languages from './../components/knowledgs/Languages';
import Experience from './../components/knowledgs/Experience';
import OhterSkills from './../components/knowledgs/OhterSkills';
import Hobbies from './../components/knowledgs/Hobbies';

const Knowledgs = () => {
   return (
      <div className="knowledges">
         <Navigation />
         <div className="knowledgesContent">
            <Languages />
            <Experience />
            <OhterSkills />
            <Hobbies />
         </div>
      </div>
   );
}

export default Knowledgs;
