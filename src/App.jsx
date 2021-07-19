import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Knowledgs from './pages/Knowledgs';
import NotFound from './pages/NotFound';

const App = () => {
    return <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/competences" exact component={Knowledgs} />
            <Route   component={NotFound} />
        </Switch>
    </Router>

}

export default App;
