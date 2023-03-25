import React from 'react'




//Use functional components as much as possible
//Simple function to return stuff
//Also it removes the need for 'this', which is common in class based components
//Also it is great when it doesn't use states
//Mainly responsible for the UIs
//That is why they are called STateless/Dumb/ Presentationsl components


// function Greet(){
//     return (
//         <h1> What {props.name}</h1>
//         {props.children}

//     )
// }



// props.children is what is shown that is within the Greet jsx back in app.jsx
const Greet = (props) => {
    //You cannot change the props attributes.
    //Shown below, the name attribute is going to give an error in the broswer
    // props.name = 'lol'

    
    return (
        <div>
            <h1> What {props.name}</h1>
            {props.children}
        </div>


    )
}

export default Greet