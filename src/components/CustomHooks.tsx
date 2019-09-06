//Import useState hook aswell from react.
import React from "react";
/*
OBS: Its very important that the name of this function component
starts with "use". In order for React to recognize any custom hooks,
their name should start with "use".
*/

//Into this custom hook component we pass in an callback function
const useNewTweet: any = (callback: () => void) => {
    //Using the useState hook to handle our state.
    //Inputs is a variable and we put its initial value to empty object in useState({})
    //setInput is the function we use to change the state.
    const [author, setAuthor] = React.useState({});
    const [textContent, setTextContent] = React.useState(["Hello this is first tweet"])

    //Handles when form is submited. preventDefault is to stop browser from refreshing which is default behaviour.
    const handleSubmit = (event: any) => {
        event.preventDefault();
        
        callback();
    };
    /*
    Handles when text is entered into input field. This event will be triggered
    everytime the user enters some input.
    */
    const handleInputChange = (event: any) => {
        event.persist()
        setAuthor(author => ({...author, [event.target.name]: event.target.value}));
    };

    return {
        handleSubmit,
        handleInputChange,
        author
    };
}

export default useNewTweet;