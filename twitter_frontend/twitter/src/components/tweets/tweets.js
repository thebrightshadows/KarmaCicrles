import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { data } from "../datautility/tweetdata";
import "./tweets.css";
import Edit from "@mui/icons-material/Edit";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';




const Tweets = ({ tweets, settweets, constanttweets, setconstanttweets }) => {





    const onDelete = (prop) => {

        settweets(current => current.filter(tweet => (tweet != prop)))

    }



    const edittweet = (prop) => {




    }




    var sorted_data = []

    const gettweets = (data) => {




        for (let x of data.data) {
            if (x.text) {
                for (let y of data.includes.users) {


                    if ((x.author_id == y.id)) {
                        var localobject = {}

                        localobject['username'] = y.username
                        localobject['name'] = y.name
                        localobject['location'] = y.location
                        localobject['text'] = x.text
                        localobject['userid'] = x.author_id
                        localobject['tweetid'] = x.id
                    }

                }
                sorted_data.push(localobject)
            }
        }
        return sorted_data
    }



    useEffect(() => {

        settweets(gettweets(data))
        setconstanttweets(gettweets(data))



    }, [])





    return (
        <div className="tweet-body" >
            {
                tweets?.map((tweet, index) => {
                    return (

                        <div className="tweet" key={index} style={{ display: "flex", paddingBottom: "30px" }}>
                            <div className="tweet-left">
                                <Avatar alt={tweet.name} src="/broken-image.jpg" ></Avatar>

                            </div>
                            <div className="tweet-tweet-body">
                                <div className="tweet-tweet-username" style={{ display: "flex" }}>
                                    <div>
                                        {tweet.username}
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <div style={{
                                            width: "fit-content",
                                            marginRight: " 0px",
                                            marginLeft: "auto"
                                        }} >
                                            <div style={{ display: "flex" }}>
                                                <div>
                                                    <Edit onClick={() => { edittweet() }} style={{ color: "#bdbdbd6e", paddingRight: "10px" }}></Edit>
                                                </div>
                                                <div onClick={() => {
                                                    onDelete(tweet)
                                                }}>
                                                    <DeleteForeverIcon style={{ color: "#bdbdbd6e", paddingRight: "6px" }}  ></DeleteForeverIcon>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="tweet-tweet-tweet">
                                    {tweet.text}
                                </div>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default Tweets
