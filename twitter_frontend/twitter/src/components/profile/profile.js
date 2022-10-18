import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import LeftNavigationBar from "../leftnavigationbar/leftnavigationbar";

const Profile = () => {

    const [data, setdata] = useState()




    const fetchData = () => {
        const x = {
            "id": 1,
            "first_name": "Jolie",
            "last_name": "Ferne",
            "email": "jferne0@wesbite.com",
            "gender": "Female",
            "country": "Sweden"
        }
        setdata(x)
        return (x)

    }




    useEffect(() => {



        fetchData();


    }, [])



    return (
        <div style={{ display: "flex" }}>
            <div>
                <LeftNavigationBar>

                </LeftNavigationBar>
            </div>
            <div style={{ marginTop: "6em", marginLeft: "15em" }}  >
                <div style={{ display: "flex", padding: "2em" }} >
                    <div style={{ display: "flex" }}>

                        <div style={{ padding: "10px" }}>
                            <h2>
                                First Name:
                            </h2>
                        </div>

                        <div style={{ padding: "10px" }}>
                            <h4>
                                {data?.first_name}
                            </h4>
                        </div>



                    </div>

                    <div style={{ display: "flex" }}>

                        <div style={{ padding: "10px" }}>
                            <h2>
                                Last Name:
                            </h2>
                        </div>

                        <div style={{ padding: "10px" }}>
                            <h4>
                                {data?.last_name}
                            </h4>
                        </div>

                    </div>
                </div>




                <div>
                    <div style={{ display: "flex" }} >
                        <div style={{ display: "flex" }}>

                            <div style={{ padding: "10px" }}>
                                <h2>
                                    Email ID:
                                </h2>
                            </div>

                            <div style={{ padding: "10px" }}>
                                <h4>
                                    {data?.email}
                                </h4>
                            </div>



                        </div>

                        <div style={{ display: "flex" }}>

                            <div style={{ padding: "10px" }}>
                                <h2>
                                    Country:
                                </h2>
                            </div>

                            <div style={{ padding: "10px" }}>
                                <h4>
                                    {data?.country}
                                </h4>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default Profile