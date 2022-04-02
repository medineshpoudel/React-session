import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../redux/actions/authActions";

//Since Redux and Context API both manage state in a global level, what's special about Redux?

//Complex state management, Context API

//Scalable

//Should Redux be your default choice for implementing global state management in every app?

export default function NotFound() {
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("logged", loggedIn);
  }, [loggedIn]);

  const logMeIN = () => {
    dispatch(setLoggedIn(true));
    // dispatch({ type: SET_LOGGED_IN, payload: true });
  };

  return (
    <div>
      404 Page not Found <button onClick={() => logMeIN()}>Click</button>
    </div>
  );
}
