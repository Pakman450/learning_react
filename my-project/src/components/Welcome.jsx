import React,{Component} from "react";




//CLASS COMPONETS
//Feature rich
//maint their owne provate data - tate
//Complex UI logic
//STateful/smart/Container components


class Welcome extends Component {



    //props attributes here are immutable
    //
    //Class componets must return a render method
    render(){
        return <h1>Welcome, {this.props.name} !</h1>

    }

}

export default Welcome