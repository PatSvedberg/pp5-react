import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Hello, {props.name}. It says here you're {props.age} years old.
    {props.greetings} old fart!</h1>

}

export default FunctionalGreetingWithProps;