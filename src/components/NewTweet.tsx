import React from "react";
import Tweet from "./Tweet";
import useNewTweet from "./CustomHooks";
import TweetList from "./TweetList";


/*
In typescript react we must declare that component is using 
the State interface in order to be able to access state variables.

Function components take props(interface) while class based take props and state interfaces.
*/

interface IProps {
    author: string,
    textContent: string,
    handleChangeAuthor: (event: any) => void;
    handleChangeTextContent: (event: any) => void;
    handleSubmit: (event: any) => void;
};

const NewTweet: React.FC<IProps> = ({
    author, textContent, handleChangeAuthor, handleChangeTextContent, handleSubmit}) => {


    return (
        <div>
        <form className = "tweet" onSubmit = {handleSubmit}>
            <label>Author of new Tweet:</label> 
            <input type="text" value = {author} onChange = {handleChangeAuthor} required/> 
            <br/>
            <label>Text of new Tweet: </label>
            <br/>
            <input type="text" value = {textContent} onChange = {handleChangeTextContent} required/>
            <br/>
            <button type = "submit">Create new Tweet</button>
        </form>
        </div>
        

        );
    
};

export default NewTweet