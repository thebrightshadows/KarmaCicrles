import React from "react";
import "./leftnavigationbar.css"
import { SideBarData } from "../datautility/SideBarData";
import { useNavigate } from "react-router-dom";

const LeftNavigationBar = () => {
    const navigate = useNavigate()
    const navbarclicked = (link) => {
        navigate(link)

    }
    return (
        <div className="navbar-left-body">
            <div className="navbar-left-body-profile">
                <img src={process.env.PUBLIC_URL + "twitterpng.png"} style={{ height: "100px", paddingTop: "50px", paddingBottom: "20px", marginLeft: "60px" }} alt=""></img>
            </div>
            <ul className="navbar-left-list">
                {SideBarData.map((value, key) => {
                    return (
                        <li key={key} className="navbar-left-row" onClick={() => {
                            navbarclicked(value.link)
                        }}>
                            {" "}
                            <div className="navbar-left-row-icon">
                                {value.icon}
                            </div>
                            {" "}
                            <div className="navbar-left-row-title">
                                {value.title}
                            </div>
                        </li>
                    )
                })}
            </ul>


        </div>
    )
}
export default LeftNavigationBar