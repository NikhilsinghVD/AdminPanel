import React from "react";
import './SideBar.scss';
import { Link } from "react-router-dom";



const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link to="/add" className="link">Add</Link>
                        </li>
                        <li className="sidebarListItem">
                        <Link to="/view" className="link">View</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;