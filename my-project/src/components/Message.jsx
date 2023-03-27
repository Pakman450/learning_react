import React, { Component } from "react";



// 'state is a reserver keyword for react'
class Message extends Component{
    constructor(props){
        super()
        this.state ={
            message: "Welcome Visitor",
            message2: 'WELCOME HEHE',
            counter: 0
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }


    //this works because you aren't mutating the counter. you are just getting the previous value and reassigning the counter 
    // value. 
    changeCounter(){
        // //this would change the counter value after it 
        // //console logs the counter value
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // console.log(this.state.counter)


        //Here if you want to console log AFTER the counter value 
        //changes... You must add a call back function as a function parameter in the 
        //this set state method.
        this.setState({
            counter: this.state.counter + 1
        },
        //Whenever you want to execute code that shows the value AFTER the changed states
        //of the counter.. do this..   
            () => {
                console.log("callback func"+this.state.counter)
            }
        )

        //this is asynchronous 
        console.log(this.state.counter)
    }


    //This is where you ACUTALLY increment fvie
    //you have to pass in a function and not an object like shown above. 
    //If you want to edit th previous state and you want to
    //call this function multiple times. 
    //Do it this way.  
    actuallyIncrementFive(){
        this.setState((prevState)=>({
            counter: prevState.counter +1
        }))
    }

    
    incrementFive(){

        //This doesn't actuallty increment five times
        //because it combines these method calls into one
        //for better perforamnce. React actually does this. 
        //not the javascript program.
        //this.changeCounter()
        //this.changeCounter()
        //this.changeCounter()
        //this.changeCounter()
        //this.changeCounter()

        this.actuallyIncrementFive()
        this.actuallyIncrementFive()
        this.actuallyIncrementFive()
        this.actuallyIncrementFive()
        this.actuallyIncrementFive()




  
    }
    render(){
        return( 
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={() => {this.changeMessage()}}>Please subscribe</button>
                <h1> this is {this.state.counter}</h1>
                <button onClick={() => {this.changeCounter()}}>Please counter</button>
                <button onClick={() => {this.incrementFive()}}>Increment five</button>

            </div>

        )
    }

}
export default Message