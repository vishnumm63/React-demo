import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Demo = (props) => {

    const submitHandler=()=>{
        console.log(" Button Clicked");
    }
console.log(props.name);
  return (
    <Fragment>
        {
            props.name.map((item,key)=>{
                return(
                <React.Fragment key={key} >
                    <h1>{item}</h1>
                </React.Fragment>
                )
            })
        }
    </Fragment>
  )
};

export default Demo;
