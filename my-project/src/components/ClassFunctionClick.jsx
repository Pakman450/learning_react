import React,{Component} from 'react'

class ClassFunctionClick extends Component {



    clickHandler(){
        console.log('you clicked me')
    }
    //props attributes here are immutable
    //
    //Class componets must return a render method
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>click me calss</button> 
            </div>
        )
    }

}

export default ClassFunctionClick