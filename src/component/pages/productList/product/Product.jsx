import React from "react";
import './Product.scss';
import Charts from '../../home/charts/Charts'
import { productData } from '../../../../dummyData'
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";
const Product = () => {
    return (
        <div className="product">
            <div className="productTiltContainer">
                <h1>Product</h1>
                <Link to="/newproducts"><button className="productUpdateButton">Create</button></Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Charts title="Sales Performance" data={productData} ydatakey="sales" xdatakey="name" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://www.howtogeek.com/wp-content/uploads/2021/07/apple-airpods-on-black-surface.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1"
                            alt="appleEarPods"
                            style={{ height: "40px", width: "40px", borderRadius: "50%", marginRight: "20px" }}
                        />
                        <span style={{ fontWeight: "600" }}>Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productform">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Air Pods" />
                        <lable>In Stock</lable>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <lable>Active</lable>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUload">
                            <img
                                src="https://pyxis.nymag.com/v1/imgs/2e3/89a/b7bb2f48e199a2e1fedd529030675f97c5-dotd-air-pods.rsquare.w700.jpg"
                                alt="Apple Air Pods"
                                style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover", marginRight: "20px" }}
                            />
                            <label for="file">
                                <PublishIcon />
                            </label>
                            <input type='file' id='file' style={{ display: "none" }} />
                        </div>
                        <div className="productButton">Update</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Product;