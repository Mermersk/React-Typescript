import React from "react";
import Tweet from "./Tweet";

interface Props {
    name: string,
    textContent: string
}

let listOfTweets: any[] = [];

const TweetList: React.FC<Props> = ({name, textContent}) => {
    //Create new Tweet
    let nw = <Tweet name = {name} msg = {textContent}/>
    listOfTweets.push(nw);

    return (

        <div>
            {listOfTweets}
        </div>

    )
}

export default TweetList;