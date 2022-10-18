import React, { useState } from "react";
import LeftNavigationBar from "../leftnavigationbar/leftnavigationbar";
import SearchBar from "../searchbar/searchbar";
import TweetPost from "../tweetpost/tweetpost";
import Tweets from "../tweets/tweets";
import "./homepage.css"

const HomePage = () => {


    const [tweets, settweets] = useState()
    const [constanttweets, setconstanttweets] = useState([])




    return (
        <div className="homepage-body">
            <div className="homepage-left">

                <LeftNavigationBar>

                </LeftNavigationBar>


            </div>
            <div className="homepage-center">
                <TweetPost tweets={tweets} settweets={settweets}>

                </TweetPost>
                <Tweets tweets={tweets} settweets={settweets} constanttweets={constanttweets} setconstanttweets={setconstanttweets}  >

                </Tweets>


            </div>
            <div className="homepage-right">


                <SearchBar tweets={tweets} settweets={settweets} constanttweets={constanttweets} setconstanttweets={setconstanttweets}></SearchBar>

            </div>

        </div>
    )
}
export default HomePage