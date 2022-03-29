import React from "react";
import './User.scss';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";


const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button></Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/11202098/pexels-photo-11202098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user_img" className="userShowImg" />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                            <span style={{ fontWeight: "600" }}>Anna Becker</span>
                            <span style={{ fontWeight: "300" }}>Software Engineer</span>

                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "rgb(175,170,170)" }}>Account Details</span>
                        <div style={{ display: "flex", alignItems: "center", margin: "20px 0px", color: "#444" }}>
                            <PermIdentityTwoToneIcon style={{ fontSize: "16px" }} />
                            <span style={{ marginLeft: "10px", }}>annabeck99</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", margin: "20px 0px", color: "#444" }}>
                            <CalendarMonthOutlinedIcon style={{ fontSize: "16px" }} />
                            <span style={{ marginLeft: "10px", }}>10.12.1999</span>
                        </div >
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "rgb(175,170,170)" }}>Contact Details</span>
                        <div style={{ display: "flex", alignItems: "center", margin: "20px 0px", color: "#444" }}>
                            <PhoneAndroidOutlinedIcon style={{ fontSize: "16px" }} />
                            <span style={{ marginLeft: "10px", }}>+91 3478902323</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", margin: "20px 0px", color: "#444" }}>
                            <EmailOutlinedIcon style={{ fontSize: "16px" }} />
                            <span style={{ marginLeft: "10px", }}>annabeck99@gmail.com</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", margin: "20px 0px", color: "#444" }}>
                            <LocationOnOutlinedIcon style={{ fontSize: "16px" }} />
                            <span style={{ marginLeft: "10px", }}>Pune | India</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text"
                                    placeholder="annabeck99"
                                    className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text"
                                    placeholder="Anna Becker"
                                    className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email"
                                    placeholder="annabeck99@gmail.com"
                                    className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="number"
                                    placeholder="+91 3478902323"
                                    className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text"
                                    placeholder="Pune | India"
                                    className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/3535468/pexels-photo-3535468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover", marginRight: "20px" }} />
                                <label htmlFor="file"><PublishIcon style={{ fontSize: "28px", marginTop: "15px", cursor: "pointer" }} /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default User;