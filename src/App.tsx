import React from 'react';
//Import our stylesheet to the entrypoint of our application/website.
import "./App.css";
//Importing my own custom made Components
import SayHello from "./sayHello";
import Tweet from "./Tweet"

const App: React.FC = () => {

  //Can either just return the h1 directly or wrap it in an variable and then
  //put it into our TSX-html with curly braces and variable name.
  const ss: any = <h1>I am an h1 inside of App component</h1>;

  return(
    <div>
      {ss}
      {/*Component is called as its own new HTML-JSX Element
       It MUST be named with an capitol letter in the beginning. Those are custom component
       while lowercase is for the regular HTML components.
      */}
      <SayHello/>
      {/* We can define and add our own attributes to our components!*/}
      <Tweet name = "Isak" message = "I am learning React"/>
      <Tweet name = "Jon" message = "I am Johhnyboi"/>
      <Tweet name = "Magnus" message = "The hammer of Thor"/>
    </div>
  );
}

export default App;

 
