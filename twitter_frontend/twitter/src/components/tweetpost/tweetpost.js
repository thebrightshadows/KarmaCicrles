import { Avatar, Button } from "@mui/material";
import React from "react";

const TweetPost = ({ tweets, settweets }) => {
    const onSubmit = () => {

        const tweetobj = {
            "userid": 1,
            "username": "Jolie",
            "name": "Ferne",
            "email": "jferne0@wesbite.com",
            "gender": "Female",
            "country": "Sweden",
            "text": document.getElementById("textarea").value,
            "tweetid": "3"

        }
        if (tweetobj.text != "" && " ")
            settweets(x => [tweetobj, ...x])

        document.getElementById("textarea").value = ""






    }
    return (
        <div >
            <div style={{ color: "black", display: "grid", backgroundColor: "#bdbdbd6e" }}>
                <span style={{ fontSize: "30px", padding: ".6em", placeContent: "center", fontWeight: "700" }}>
                    Home
                </span>
            </div>
            <div style={{ display: "flex", height: "8.5em" }}>

                <div style={{ height: "8.5em", width: "4em", display: "grid", justifyItems: "center", paddingTop: "8px" }}>

                    <Avatar sx={{}} >JF</Avatar>

                </div>

                <textarea id="textarea" placeholder="What's Happening?" style={{ width: "723px", height: "130px", resize: "none", border: "none", outline: "none", fontSize: "25px" }}>

                </textarea>

                <Button style={{ height: "50%", backgroundColor: "#bdbdbd6e", marginTop: "20px" }} onClick={e => { onSubmit(e) }} >Submit</Button>




            </div>
            <div style={{ height: "10px", backgroundColor: "#bdbdbd6e", width: "100%" }}>

            </div>

        </div>
    )
}
export default TweetPost