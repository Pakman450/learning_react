import React from "react";

const Hello = () => {
    // return (
        // <div className="dummyClass">
        //     <h1> What up </h1>
        // </div>
    //     
    // )

    //This is the same as above shown. It is much simpler to code JSX
    return React.createElement('div', {id: 'hello', className: 'dummyclass'},
        React.createElement('h1',null,'What u')
    )
}

export default Hello