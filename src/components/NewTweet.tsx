import React from "react";
import Tweet from "./Tweet";
import useNewTweet from "./CustomHooks"


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


    constructor(props: any) {
        super(props);

        this.state = {author: "", textContent: ""};

        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeTextContent = this.handleChangeTextContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeAuthor(event: any) {
        this.setState({author: event.target.value})
    }

    handleChangeTextContent(event: any) {
        this.setState({textContent: event.target.value})
    }

    handleSubmit(event: any) {
        alert("A author name was submitted " + this.state.author + "  TextContent: " + this.state.textContent);

        let nw: any = <Tweet name = {this.state.author} msg = {this.state.textContent}/>
        event.preventDefault();
    }


    render() {
    return (
        
        <form className = "tweet" onSubmit = {this.handleSubmit}>
            <label>Author of new Tweet:</label> 
            <input type="text" value = {this.state.author} onChange = {this.handleChangeAuthor}/> 
            <br/>
            <label>Text of new Tweet: </label>
            <br/>
            <input type="text" name = {this.state.textContent} onChange = {this.handleChangeTextContent}/>
            <br/>
            <button type = "submit">Create new Tweet</button>
        </form>

        )
    };
};

export default NewTweet