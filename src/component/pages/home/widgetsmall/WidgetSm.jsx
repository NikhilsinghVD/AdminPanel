import React from "react";
import './WidgetSm.scss';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

const WidgetSm = () => {
    return (
        <div className="widgetsm">
            <span className="widgetsmTitle">New Join Members</span>
            <ul className="widgetsmList">
                <li className="widgetsmListItems">
                    <img src={"https://images.pexels.com/photos/4972941/pexels-photo-4972941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="1stUserimg" className="widgetSmImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUserName">Anna Keller</span>
                        <span className="widgetsmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetsmButton"><VisibilityRoundedIcon style={{ fontSize: "19px", color: "violet" }} />Display</button>
                </li>
                <li className="widgetsmListItems">
                    <img src={"https://images.pexels.com/photos/2189746/pexels-photo-2189746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="1stUserimg" className="widgetSmImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUserName">Anna Keller</span>
                        <span className="widgetsmUserTitle">Software Developer</span>

                    </div>
                    <button className="widgetsmButton"><VisibilityRoundedIcon style={{ fontSize: "19px", color: "violet" }} />Display</button>
                </li>
                <li className="widgetsmListItems">
                    <img src={"https://images.pexels.com/photos/10832112/pexels-photo-10832112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="1stUserimg" className="widgetSmImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUserName">Anna Keller</span>
                        <span className="widgetsmUserTitle">Software Developer</span>

                    </div>
                    <button className="widgetsmButton"><VisibilityRoundedIcon style={{ fontSize: "19px", color: "violet" }} />Display</button>
                </li>
                <li className="widgetsmListItems">
                    <img src={"https://images.pexels.com/photos/10154769/pexels-photo-10154769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="1stUserimg" className="widgetSmImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUserName">Anna Keller</span>
                        <span className="widgetsmUserTitle">Software Developer</span>

                    </div>
                    <button className="widgetsmButton"><VisibilityRoundedIcon style={{ fontSize: "19px", color: "violet" }} />Display</button>
                </li>
                <li className="widgetsmListItems">
                    <img src={"https://images.pexels.com/photos/11212218/pexels-photo-11212218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="1stUserimg" className="widgetSmImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUserName">Anna Keller</span>
                        <span className="widgetsmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetsmButton"><VisibilityRoundedIcon style={{ fontSize: "19px", color: "violet" }} />Display</button>
                </li>
            </ul>
        </div>
    );
}

export default WidgetSm;