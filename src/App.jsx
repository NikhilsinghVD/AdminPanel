import React from 'react';
import SideBar from './component/sidebar/SideBar';
import Header from './component/Header/Header';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Footer from './component/Footer/Footer';
import Add from './component/pages/Add/Add';
import View2 from './component/pages/View/View2';




const App = () => {
    return (
        <Router>
            <Header />
            <div className='Container'>
                <SideBar />
                <Switch>
                    <Route path="/add">
                       <Add/>
                    </Route>
                    <Route path="/view">
                        <View2/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;