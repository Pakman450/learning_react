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



// // props.children is what is shown that is within the Greet jsx back in app.jsx
// const Greet = (props) => {
//     //You cannot change the props attributes.
//     //Shown below, the name attribute is going to give an error in the broswer
//     // props.name = 'lol'

    
//     return (
//         <div>
//             <h1> What {props.name}</h1>
//             {props.children}
//         </div>


//     )
// }


// //This is Where we can deconstruct props into their individual attributes the same
// // props.children is what is shown that is within the Greet jsx back in app.jsx
// const Greet = ({name,children}) => {
//     //You cannot change the props attributes.
//     //Shown below, the name attribute is going to give an error in the broswer
//     // props.name = 'lol'

    
//     return (
//         <div>
//             <h1> What {name}</h1>
//             <h1>{children}</h1>
//         </div>


//     )
// }

//This is Where we can deconstruct props into their individual attributes the same
// props.children is what is shown that is within the Greet jsx back in app.jsx
const Greet = (props) => {
    const {name,children} = props
    //You cannot change the props attributes.
    //Shown below, the name attribute is going to give an error in the broswer
    // props.name = 'lol'

    
    return (
        <div>
            <h1> What {name}</h1>
            <h1>{children}</h1>
        </div>


    )
}
export default Greet
