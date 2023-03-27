import React,{Component} from "react";




//CLASS COMPONETS
//Feature rich
//maint their owne provate data - tate
//Complex UI logic
//STateful/smart/Container components


// class Welcome extends Component {



//     //props attributes here are immutable
//     //
//     //Class componets must return a render method
//     render(){
//         return <h1>Welcome, {this.props.name} !</h1>

//     }

// }

//you have to deconstructure props in class based components
//you have to deconstructure in the render function.
class Welcome extends Component {



    //props attributes here are immutable
    //
    //Class componets must return a render method
    render(){
        const {name} = this.props

        //this is where you can deconstructure the state method
        const {state1, state2} = this.props
        return <h1>Welcome, {  name} !</h1>

    }

}

export default Welcome