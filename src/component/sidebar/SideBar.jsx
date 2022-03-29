import React from "react";
import './SideBar.scss';
import LineStyleTwoToneIcon from '@mui/icons-material/LineStyleTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import TimelineTwoToneIcon from '@mui/icons-material/TimelineTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import GradingIcon from '@mui/icons-material/Grading';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import ReportSharpIcon from '@mui/icons-material/ReportSharp';
import { Link } from "react-router-dom";



const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link to="/" className="link"><LineStyleTwoToneIcon className="sidebarIcons" />Home</Link>
                        </li>
                        <li className="sidebarListItem">
                            <TimelineTwoToneIcon className="sidebarIcons" />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpTwoToneIcon className="sidebarIcons" />Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/users" className="link"><PersonOutlineTwoToneIcon className="sidebarIcons" />Users</Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/products" className="link"><LocalGroceryStoreTwoToneIcon className="sidebarIcons" />Products</Link>
                        </li>
                        <li className="sidebarListItem">
                            <CurrencyRupeeTwoToneIcon className="sidebarIcons" />Transaction
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentOutlinedIcon className="sidebarIcons" />Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlinedIcon className="sidebarIcons" />Mail
                        </li>
                        <li className="sidebarListItem">
                            <GradingIcon className="sidebarIcons" />Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlinedIcon className="sidebarIcons" />Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <BusinessCenterTwoToneIcon className="sidebarIcons" />Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineTwoToneIcon className="sidebarIcons" />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportSharpIcon className="sidebarIcons" />Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;