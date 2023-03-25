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
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render(){
        return( 
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={() => {this.changeMessage()}}>Please subscribe</button>
                <h1> this is {this.state.counter}</h1>
                <button onClick={() => {this.changeCounter()}}>Please counter</button>

            </div>

        )
    }

}
export default Message