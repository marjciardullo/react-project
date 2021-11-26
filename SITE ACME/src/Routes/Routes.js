import React from 'react';

// Importing Pages
import Home from '../Pages/Home.js';
import Contact from '../Pages/Contact.js';
import Sale from '../Pages/Sale.js';
import Locales from '../Pages/Locales.js';

// Importing Router library
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Routes() {
	return(
	    <Router>
	        <Switch>
	            <Route path="/" exact component={Home} />
	            <Route path="/contato" component={Contact} />
	            <Route path="/ofertas" component={Sale} />
	            <Route path="/locais" component={Locales} />
	        </Switch>        
    	</Router>
	);
}

export default Routes;