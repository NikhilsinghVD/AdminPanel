import React from "react";
import './FeatureInfo.scss';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

const FeatureInfo = () => {
    return (
        <div className="feature">
            <div className="featuredItem">
                <span className="featureTitle">Revenue</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">&#8377;2,415</span>
                    <span className="featureMoneyRate">-11.45<ArrowDownwardRoundedIcon className="arrowDown" /></span>
                </div>
                <span className="featureSub">Compared to Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">Sales</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">&#8377;2,565</span>
                    <span className="featureMoneyRate">-1.45<ArrowDownwardRoundedIcon className="arrowDown" /></span>
                </div>
                <span className="featureSub">Compared to Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">&#8377;2,785</span>
                    <span className="featureMoneyRate">+1.45<ArrowUpwardRoundedIcon className="arrowUp" /></span>
                </div>
                <span className="featureSub">Compared to Last Month</span>
            </div>
        </div>
    );
}

export default FeatureInfo;