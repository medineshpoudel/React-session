import React from 'react';

export default function Component3(props) {
  return (
          <>
        <div className='box1'>
            <div>Props in Component {props.id} is being passed by {props.name} !</div>
            <div> This is {props.type} based component.</div>
        </div>
        </>
  )
}
