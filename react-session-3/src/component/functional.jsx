import React, { useEffect } from 'react';

//React Hooks

//React Memo

//Use callback

//HOC - High order Component

//HOF = High order Functional

//ref

//---> to Learn 

//React Router

//API integration with async + Proeect Management + Code Quality

//Global state management = redux and context API

//Memoization



export default function Functional({content}) {
    const [state, setState] = useState ({
        firstName: "ashish",
        lastName: "pokhrel"
    })

    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log("mounted")
        return () => {
            console.log("unmounted")
        }
    }, [])

    useEffect(()=>{
        console.log("state changed", state)
    }, [state, counter])

    const changeName = () => {
        setState
    }
  return (

  )
}
