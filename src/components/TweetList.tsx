import React from "react";
import Tweet from "./Tweet";

interface Iprops {
    author: string,
    msg: string,
    isSubmited: boolean
}


let submitedTweets: JSX.Element[] = [];

const TweetList: React.FC<Iprops> = (props) => {
    

    const createNewTweet = () => {
        return <Tweet author = {props.author} msg = {props.msg}/>
    };

    if (props.isSubmited) {
        submitedTweets.push(createNewTweet())
    };
    
    return (
        <div>
            {submitedTweets}
        </div>
        ) 
};


/*
const TweetList: React.FC<Props> = ({name, textContent}) => {
    //Create new Tweet
    let nw = <Tweet name = {name} msg = {textContent}/>
    //listOfTweets.push(nw);

    return (

        <div>
        </div>

    )
}

*/

export default TweetList;