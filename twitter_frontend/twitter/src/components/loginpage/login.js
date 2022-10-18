import { Grid } from "@mui/material";
import React, { useState } from "react";
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handlechange = e => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value

        })


    }



    const login = () => {


        axios.post("http://localhost:9000/login", user).then(res => {
            if (res.data.user != null) {
                navigate("/homepage")


            } else {
                // alert(res.data.message)
                navigate("/homepage")
            }
        })

    }

    return (
        <div className="popup-body">

            <form>
                <h1>
                    Sign in to Twitter
                </h1>
                <Grid container>
                    <div>

                        <h3 >
                            Email ID
                        </h3>
                        <Grid item>
                            <input type="text" className="input-style" value={user.email} name="email" onChange={handlechange}>
                            </input>

                        </Grid>


                        <h3 >
                            Password
                        </h3>

                        <Grid item>
                            <input type="password" className="input-style" value={user.password} name="password" onChange={handlechange}>
                            </input>

                        </Grid>

                        <div>

                            <div className="landing-page-signup-button" onClick={login} style={{ marginTop: "3em" }}>
                                <span className="landing-page-signup-button-text">
                                    Sign In.</span>
                            </div>

                        </div>
                    </div>

                </Grid>
            </form>
        </div>
    )
}
export default Login;