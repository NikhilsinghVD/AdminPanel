import React from 'react';
import SideBar from './component/sidebar/SideBar';
import Topbar from './component/topbar/Topbar';
import './App.scss';
import Home from './component/pages/home/Home';
import UserList from './component/pages/usersList/UserList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import User from './component/pages/usersList/Users/User';
import NewUser from './component/pages/usersList/newuser/NewUser';
import ProductList from './component/pages/productList/ProductList';
import Product from './component/pages/productList/product/Product';
import NewProduct from './component/pages/productList/newproduct/NewProduct';


const App = () => {
    return (
        <Router>
            <Topbar />
            <div className='Container'>
                <SideBar />
                <Switch>
                    <Route path="/users">
                        <UserList />
                    </Route>
                    <Route path="/users:userId">
                        <User />
                    </Route>
                    <Route path="/newUser">
                        <NewUser />
                    </Route>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                    <Route path="/products:productsId">
                        <Product />
                    </Route>
                    <Route path="/newproducts">
                        <NewProduct />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;