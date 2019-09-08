import React from "react";
import Tweet from "./Tweet";
import useNewTweet from "./CustomHooks";
import TweetList from "./TweetList";


/*
In typescript react we must declare that component is using 
the State interface in order to be able to access state variables.

Function components take props(interface) while class based take props and state interfaces.
*/
interface IState {

    author: string,
    textContent: string
}

interface IProps {

}

class NewTweet extends React.Component<IProps, IState> {
    nw: any;
    constructor(props: any) {
        super(props);

        this.state = {author: "", textContent: ""};

        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeTextContent = this.handleChangeTextContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    };


    handleChangeAuthor(event: any) {
        this.setState({author: event.target.value})
    };

    handleChangeTextContent(event: any) {
        this.setState({textContent: event.target.value})
    };

    handleSubmit(event: any) {

        event.preventDefault();
        //These 2 setState were the missing piece!
        this.setState({textContent: ""})
        this.setState({author: ""})
        this.nw = <TweetList name = {this.state.author} textContent = {this.state.textContent}/>
    };


    render() {
    return (
        <div>
        <form className = "tweet" onSubmit = {this.handleSubmit}>
            <label>Author of new Tweet:</label> 
            <input type="text" value = {this.state.author} onChange = {this.handleChangeAuthor} required/> 
            <br/>
            <label>Text of new Tweet: </label>
            <br/>
            <input type="text" value = {this.state.textContent} onChange = {this.handleChangeTextContent} required/>
            <br/>
            <button type = "submit">Create new Tweet</button>
        </form>
            {this.nw}
        </div>
        

        );
    };
};

export default NewTweet