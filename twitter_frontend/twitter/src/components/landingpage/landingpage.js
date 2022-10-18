import React, { useState } from "react";
import "./landingpage.css";
import { useNavigate } from "react-router-dom";
import SignInPopUp from "../signinpopup/signinpopup";
import Login from "../loginpage/login";


const LandingPage = () => {
    const navigate = useNavigate()


    const [openpopup, setopenpopup] = useState(false)

    const signin = () => {
        setopenpopup(true)
    }

    const signup = () => {
        navigate("/signup")
    }

    return (
        <div>

            <div className="landing-page-body">

                <div className="landing-page-left-half">
                    <img className="landing-page-left-half-image" src={process.env.PUBLIC_URL + "twitter.png"} alt="">
                    </img>
                </div>
                <div className="landing-page-right-half">

                    <div className="landing-page-right-half-heading-div">
                        <span className="landing-page-right-half-heading" >Happening Now</span>
                    </div>

                    <div className="landing-page-right-half-heading-div1">
                        <span className="landing-page-right-half-heading1">
                            Join Twitter Today.
                        </span>
                    </div>
                    <div className="landing-page-signup-div">

                        <div className="landing-page-signup-button" onClick={signup} >
                            <span className="landing-page-signup-button-text">
                                Sign up with email ID.</span>
                        </div>
                        <div className="landing-page-signup-privacy-div">
                            <span className="landing-page-signup-privacy-text">
                                By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                            </span>
                        </div>
                        <div className="landing-page-signin-heading" >
                            Already have an account?
                        </div>

                        <div className="landing-page-signin-button" onClick={signin}>
                            <span className="landing-page-signin-button-text">
                                Sign in.</span>
                        </div>



                    </div>




                </div>

            </div>
            <SignInPopUp openpopup={openpopup} setopenpopup={setopenpopup} >
                <Login></Login>
            </SignInPopUp>

        </div >

    )
}
export default LandingPage