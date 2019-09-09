import React from 'react';
//Import our stylesheet to the entrypoint of our application/website.
import "./App.css";
//Importing my own custom made Components
import SayHello from "./components/sayHello";
import Tweet from "./components/Tweet";
import NewTweet from "./components/NewTweet"
import ClassComponent from "./components/ClassComponent"
import TweetList from './components/TweetList';

interface IState {
  author: string,
  textContent: string,
  isSubmited: Boolean
}

class App extends React.Component<{}, IState> {

  state = {author: "", textContent: "", isSubmited: false};

  private handleChangeAuthor(event: any) {
    this.setState({author: event.target.value})
    this.setState({isSubmited: false})
  }

  private handleChangeTextContent(event: any) {
    this.setState({textContent: event.target.value})
    this.setState({isSubmited: false})
  }

  private handleSubmit(event: any) {
    event.preventDefault();
    this.setState({isSubmited: true})
  }
  
  render() {
  return(
    <div>

      <SayHello/>
      <NewTweet author = {this.state.author} textContent = {this.state.textContent} handleChangeAuthor = {this.handleChangeAuthor.bind(this)} handleSubmit = {this.handleSubmit.bind(this)} handleChangeTextContent = {this.handleChangeTextContent.bind(this)}/>
      <TweetList author = {this.state.author} msg = {this.state.textContent} isSubmited = {this.state.isSubmited}/>
      <ClassComponent/>
      
    </div>
  );
}
}

export default App;

 
