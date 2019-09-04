import React from "react";
/* Tweet component*/
/*In order to be able to pass in our own attributes we must define their
name and type inside of <{}> after React.FC. This then is an object called props!
then in our main file we do <Tweet name = "Isak"/> to pass in the value. */
const Tweet: React.FC<{name: string, message: string}> = (props) => {
    /*
    Creating a special variable-function from React. numberOfLikes is an variable
    and increment is the function that follows it. The special thing here is that this
    is an statefull variable and each time it is changed with the increment function, React
    will render the component again. So it always displays the current state. Inside useState
    you put the first-default value on numberOfLikes to be shown. This is called a Hook, more
    specifically this is the state hook.
    */
    const [numberOfLikes, increment] = React.useState(0);

    const tweetWasClicked = () => {
        increment(numberOfLikes + 1);
    }
    /*Here we use className instead of class, since this is JSX-TSX but not html really. So we cant use class */
    return (
        
        <div className = "tweet" onClick = {tweetWasClicked}>
            <h3>{props.name}</h3>
            {console.log(typeof(props))}
            <p>{props.message}</p>
            <p>Number of likes: {numberOfLikes}</p>
        </div>
    )

}

export default Tweet;