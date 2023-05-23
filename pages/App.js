import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import Index from '@/pages/index';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
            </Switch>
        </Router>
    );
};

export default App;
