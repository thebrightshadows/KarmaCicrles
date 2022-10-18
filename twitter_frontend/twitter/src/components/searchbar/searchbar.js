import React, { useEffect, useState } from "react";

const SearchBar = ({ tweets, settweets, constanttweets, setconstanttweets }) => {



    useEffect(() => {
        if (tweets != undefined) {
            setconstanttweets(tweets)

        }
    }, [])

    const checkText = (prop) => {
        let newtweets = []
        if (constanttweets != undefined) {
            for (let x of constanttweets) {
                if ((x.text).includes(prop)) {
                    newtweets.push(x)
                    console.log("if")
                }
            }
        } else {

            for (let x of constanttweets) {
                if ((x.text).includes(prop)) {
                    newtweets.push(x)
                    console.log("else")
                }
            }

        }

        console.log(newtweets.length)

        settweets(newtweets)

    }

    const onChange = (prop) => {



        if (tweets != undefined) {

            checkText(prop.target.value)
        }

    }




    return (
        <div style={{
            marginLeft: "25px",
            marginTop: "9em"
        }}>
            <div>
                <h2 >
                    Search
                </h2>
                <form>

                    <input style={{
                        width: "20em",
                        height: "2em"
                    }} placeholder=" Search keywords here." onChange={(e) => onChange(e)}>

                    </input>
                </form>
            </div>
        </div>
    )
}
export default SearchBar