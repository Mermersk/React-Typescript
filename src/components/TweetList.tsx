import React from "react";
import Tweet from "./Tweet";

interface Props {
    name: string,
    textContent: string
}

//Have to intialize array outside of component so that its only run 1 time. Else it would always reset each time a new Tweet is submitted.
let listOfTweets: JSX.Element[] = [];

const TweetList: React.FC<Props> = ({name, textContent}) => {
    //Key is for React to identify which items have changed. They should be unique for each element.
    //Here I use the length of the array as key, so 1 element is 0, 2 is 1....
    //Create new Tweet
    
    let nw = <Tweet name = {name} msg = {textContent} key = {listOfTweets.length}/>
    listOfTweets.push(nw);

    return (

        <div>
            {listOfTweets}
        </div>

    )
}

export default TweetList;