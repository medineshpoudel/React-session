import React, { useEffect, useState } from "react";

//React Hooks

//React memo

//useCallback

//Memoization

//React Router

//API Integration with Async + Project Management + Code quality

//Global state management - Redux and Context API + Memoization

//HOC - Higher Order Component

//HOF - Higher Order Function

export default function Functional({ content }) {
  const [state, setState] = useState({
    firstName: "Avinash",
    lastName: "Mishra",
  });

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  const cb = () => {
    console.log("hello");
  };

  useEffect(() => {
    console.log("state changed", state);
  }, [state, counter]);

  //componentDidMount
  //componentDidUpdate
  //componentWillUnmount

  //dependency array

  const changeName = () => {
    setState({
      firstName: "John",
      lastName: "Wick",
    });
  };

  return (
    <div>
      <button onClick={() => changeName()}>Change</button>
    </div>
  );
}
