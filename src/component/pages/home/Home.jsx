import React from "react";
import Charts from "./charts/Charts";
import FeatureInfo from "./featuredInfo/FeatureInfo";
import './Home.scss';
import { userData } from "../../../dummyData";
import WidgetSm from "./widgetsmall/WidgetSm";
import WidgetLg from "./widgetlarge/WidgetLg";


const Home = () => {
    return (
        <div className="home">
            <FeatureInfo />
            <Charts data={userData} title="User Analytics" grid xdatakey="name" ydatakey="ActiveUser" />
            <div className="homewidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}

export default Home;