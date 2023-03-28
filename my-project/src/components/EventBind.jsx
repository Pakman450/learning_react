import React, {Component} from "react";

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: 'Hellow'
        }
        //this is pertaining to the best way to bind events to a class
        //This is best because this binds the evetns ONCe //
        //rather than doing it multiple times.
        // this.clickHandler = this.clickHandler.bind(this)


    }

    // clickHandler(){

    //     // //This give does not change to good bye 
    //     // //because 'this' is not defined. 
    //     // //This will show in the console as "undefined when you try"
    //     // //to print out 'this'
    //     // // this is why you need to bind your events to make
    //     // // this work. for class components.
    //     // this.setState({
    //     //     message:  'good bye'
    //     // })
    //     // console.log(this)

    //     this.setState({
    //         message:  'good bye'
    //     })
    // }


    //This is the fourth approach where you use a arrow functions to change
    //the state of the message.
    //Class property as arrowfunctions.
    clickHandler = () => {
        this.setState({
            message: 'goodbye'
        })
    }

    render(){
        return(
 
            <div>
                <h1>{this.state.message}</h1>
                {/* the word bind has to placed in to bind the events */}

                {/* This is the first method of event binding */}
                {/* <button onClick= {this.clickHandler.bind(this)} >Click ME</button> */}

                {/* This is another way of event bidnign */}
                {/* <button onClick= {() => this.clickHandler()} >Click ME</button> */}

                {/* This is the best way to do event bidning this is assocaited 
                up at top. look at constructor.  */}
                <button onClick= {this.clickHandler} >Click ME</button>



                {/* <button onClick= {this.clickHandler} >Click ME</button> */}
            </div>
        )
    }

}

export default EventBind