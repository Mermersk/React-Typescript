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
    //Key is for React to identify which items have changed. They should be unique for each element.
    //Here I use the length of the array as key, so 1 element is 0, 2 is 1....
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